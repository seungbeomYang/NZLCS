/**
 * Upload local images into Sanity and attach them to existing post/project docs.
 *
 *   npm run upload-images
 *
 * Required env (in frontend4/.env.local):
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET
 *   SANITY_API_WRITE_TOKEN  (Editor permissions)
 *
 * Source layout (../scripts/images/ relative to repo root, i.e. NZLCS/scripts/images/):
 *   blog/<slug>.jpg                       -> patches post-<slug>.coverImage
 *   gallery/<slug>/before.jpg             -> patches project-<slug>.beforeImage
 *   gallery/<slug>/after.jpg              -> patches project-<slug>.afterImage
 *   gallery/<slug>/more-1.jpg             -> patches morePhotos[0].image (by _key)
 *   gallery/<slug>/more-2.jpg             -> patches morePhotos[1].image
 *   gallery/<slug>/more-3.jpg             -> patches morePhotos[2].image
 *
 * Idempotent: Sanity dedupes assets by content hash, so re-running with the
 * same files reuses the same asset id. Missing files are skipped.
 */

import { createClient } from "@sanity/client";
import { createReadStream, existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { basename, dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, "..");
const imagesRoot = join(repoRoot, "..", "scripts", "images");

function loadEnv() {
  const envPath = join(repoRoot, ".env.local");
  try {
    const raw = readFileSync(envPath, "utf8");
    for (const line of raw.split("\n")) {
      const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/i);
      if (!m) continue;
      const k = m[1];
      let v = m[2];
      if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
      if (process.env[k] === undefined) process.env[k] = v;
    }
  } catch {
    // No .env.local — assume env was set externally.
  }
}

loadEnv();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  console.error(
    "Missing env. Need NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_WRITE_TOKEN.",
  );
  process.exit(1);
}

if (!existsSync(imagesRoot)) {
  console.error(`Images directory not found: ${imagesRoot}`);
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-01-01",
  token,
  useCdn: false,
});

type ImageRef = { _type: "image"; asset: { _type: "reference"; _ref: string } };

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function withRetry<T>(label: string, fn: () => Promise<T>, attempts = 4): Promise<T> {
  let lastErr: unknown;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      const status = (err as { statusCode?: number })?.statusCode;
      const retryable = !status || status >= 500 || status === 429;
      if (!retryable || i === attempts - 1) throw err;
      const wait = 1000 * 2 ** i;
      process.stdout.write(`(retry ${i + 1}/${attempts - 1} in ${wait}ms) `);
      await sleep(wait);
    }
  }
  throw lastErr;
}

async function uploadAsset(filePath: string): Promise<ImageRef> {
  const filename = basename(filePath);
  const asset = await withRetry(filename, () =>
    client.assets.upload("image", createReadStream(filePath), { filename }),
  );
  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
  };
}

function isImageFile(name: string) {
  const ext = extname(name).toLowerCase();
  return ext === ".jpg" || ext === ".jpeg" || ext === ".png" || ext === ".webp";
}

function findImage(dir: string, base: string): string | null {
  for (const ext of [".jpg", ".jpeg", ".png", ".webp"]) {
    const p = join(dir, base + ext);
    if (existsSync(p)) return p;
  }
  return null;
}

async function processBlog() {
  const blogDir = join(imagesRoot, "blog");
  if (!existsSync(blogDir)) {
    console.log("No blog/ folder, skipping blog covers.");
    return;
  }
  const files = readdirSync(blogDir).filter(isImageFile);
  for (const file of files) {
    const slug = basename(file, extname(file));
    const docId = `post-${slug}`;
    const filePath = join(blogDir, file);

    const existing = await client.getDocument(docId);
    if (!existing) {
      console.warn(`  ! No doc ${docId} — skipping ${file}`);
      continue;
    }

    process.stdout.write(`  uploading ${file}… `);
    const ref = await uploadAsset(filePath);
    await client.patch(docId).set({ coverImage: ref }).commit();
    console.log("done");
  }
}

async function processGallery() {
  const galleryDir = join(imagesRoot, "gallery");
  if (!existsSync(galleryDir)) {
    console.log("No gallery/ folder, skipping gallery images.");
    return;
  }
  const slugs = readdirSync(galleryDir).filter((name) => {
    return statSync(join(galleryDir, name)).isDirectory();
  });

  for (const slug of slugs) {
    const dir = join(galleryDir, slug);
    const docId = `project-${slug}`;
    console.log(`\n${docId}`);

    const doc = await client.getDocument(docId);
    if (!doc) {
      console.warn(`  ! No doc ${docId} — skipping`);
      continue;
    }

    const before = findImage(dir, "before");
    if (before) {
      process.stdout.write(`  uploading before… `);
      const ref = await uploadAsset(before);
      await client.patch(docId).set({ beforeImage: ref }).commit();
      console.log("done");
    }

    const after = findImage(dir, "after");
    if (after) {
      process.stdout.write(`  uploading after… `);
      const ref = await uploadAsset(after);
      await client.patch(docId).set({ afterImage: ref }).commit();
      console.log("done");
    }

    const morePhotos = (doc.morePhotos as Array<{ _key: string; label?: string }> | undefined) ?? [];
    for (let i = 0; i < 3; i++) {
      const filePath = findImage(dir, `more-${i + 1}`);
      if (!filePath) continue;
      const item = morePhotos[i];
      if (!item?._key) {
        console.warn(`  ! morePhotos[${i}] missing on ${docId} — skipping more-${i + 1}`);
        continue;
      }
      process.stdout.write(`  uploading more-${i + 1} (${item.label ?? "?"})… `);
      const ref = await uploadAsset(filePath);
      await client
        .patch(docId)
        .set({ [`morePhotos[_key=="${item._key}"].image`]: ref })
        .commit();
      console.log("done");
    }
  }
}

async function main() {
  console.log(`Uploading into ${projectId}/${dataset}`);
  console.log(`Source: ${imagesRoot}\n`);
  console.log("Blog covers:");
  await processBlog();
  console.log("\nGallery:");
  await processGallery();
  console.log("\nAll done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
