import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { client } from "../../../sanity/lib/client";
import { readToken } from "../../../sanity/env";

/**
 * Draft mode entry point.
 *
 * Configure in Sanity Studio (Production → Schedule/Preview, or "Presentation" tool):
 *   https://<your-host>/api/draft?secret=<SANITY_PREVIEW_SECRET>&slug=/blog/<slug>
 *
 * The slug must be a relative path on this site. We verify the doc exists in Sanity
 * before flipping the cookie to avoid open redirects.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  const expected = process.env.SANITY_PREVIEW_SECRET;
  if (!expected) {
    return new Response("SANITY_PREVIEW_SECRET not configured", { status: 500 });
  }
  if (secret !== expected || !slug) {
    return new Response("Invalid token", { status: 401 });
  }
  if (!slug.startsWith("/")) {
    return new Response("Slug must be a relative path", { status: 400 });
  }

  // Verify the doc exists. Use an authenticated client so drafts also count.
  if (!readToken) {
    return new Response("SANITY_API_READ_TOKEN not configured", { status: 500 });
  }

  const segments = slug.split("/").filter(Boolean);
  const [type, docSlug] = segments;
  const docType = type === "blog" ? "post" : type === "gallery" ? "project" : null;

  if (!docType || !docSlug) {
    return new Response("Slug must be /blog/<slug> or /gallery/<slug>", {
      status: 400,
    });
  }

  const exists = await client
    .withConfig({ token: readToken, useCdn: false, perspective: "previewDrafts" })
    .fetch<string | null>(
      `*[_type == $type && slug.current == $slug][0]._id`,
      { type: docType, slug: docSlug },
    );

  if (!exists) {
    return new Response("Document not found", { status: 404 });
  }

  const draft = await draftMode();
  draft.enable();

  redirect(slug);
}
