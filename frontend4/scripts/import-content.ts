/**
 * One-time content import.
 *
 * Run once after creating the Sanity project:
 *   npm run import-content
 *
 * Required env (in frontend4/.env.local):
 *   NEXT_PUBLIC_SANITY_PROJECT_ID=53ioacj3
 *   NEXT_PUBLIC_SANITY_DATASET=production
 *   SANITY_API_WRITE_TOKEN=<token with Editor permissions>
 *
 * Idempotent: uses createOrReplace, so re-running overwrites by _id.
 * Re-running will overwrite editor changes for matching _ids — only run once.
 */

import { createClient } from "@sanity/client";
import { randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Inline copy of the legacy data (the source files were deleted in this same change).
// Single source of truth for the import; not loaded at runtime.

type LegacyPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  author: string;
  readTime: string;
  body: string[];
};

type LegacyProject = {
  slug: string;
  title: string;
  category: string;
  year: number;
  location: string;
  summary: string;
  body?: string[];
  specs?: { label: string; value: string }[];
  morePhotos?: { label: string }[];
};

const legacyPosts: LegacyPost[] = [
  {
    slug: "rust-removal-heritage-bridge-wellington",
    title: "Rust removal on a heritage bridge in Wellington",
    excerpt:
      "How we stripped decades of corrosion off a protected steel-truss bridge without abrasives, chemicals, or a single nick to the original substrate.",
    category: "Rust Removal",
    tags: ["Heritage", "Steel", "Case Study"],
    date: "2026-04-12",
    author: "NZLCS Team",
    readTime: "5 min read",
    body: [
      "Heritage steelwork is unforgiving. The wrong tool can pit, score, or thin a member that has stood for a century, and a single careless pass can mean a costly remediation under the watch of the council heritage office.",
      "When we were called in to a Wellington truss bridge late last summer, the brief was tight: remove the loose oxide and flaking primer, leave the original mill scale intact where it was still bonded, and produce a uniform substrate ready for the engineer's chosen coating.",
      "We selected a 200W pulsed-fibre laser tuned to ablate iron oxide preferentially over base steel. The pulse energy and scan speed were dialled in on a hidden gusset plate before we touched anything visible. The result was a crisp transition between cleaned and uncleaned zones, with no measurable loss of parent material.",
      "Compared to grit blasting, there was no containment to set up, no spent media to dispose of, and no fugitive dust drifting onto the harbour below. Compared to chemical strippers, there was nothing to neutralise and nothing to wash off. Just steel, light, and a vacuum extraction unit.",
      "The job was finished two days ahead of schedule. The coating contractor took receipt of a substrate that needed only a wipe-down before primer. The bridge reopened to foot traffic the same week.",
    ],
  },
  {
    slug: "laser-vs-chemical-cleaning",
    title: "How laser cleaning compares to chemical alternatives",
    excerpt:
      "Solvents, acids, and abrasives have been the default for decades. Here is how laser cleaning stacks up on cost, safety, and substrate impact across four common scenarios.",
    category: "Technology",
    tags: ["Comparison", "Safety", "Methods"],
    date: "2026-03-28",
    author: "NZLCS Team",
    readTime: "7 min read",
    body: [
      "Every site we walk onto has a default cleaning method, and that default is almost always either a chemical bath, a solvent wipe, or a media blast. Each was developed for a reason and each still has its place — but a lot has changed since they became the standard.",
      "Chemicals are fast and cheap on paper. The hidden costs are PPE, ventilation, neutralisation, waste-handling fees, and the ever-creeping list of restricted substances. A solvent that was routine ten years ago may now require a permit, a respirator program, and a documented disposal trail.",
      "Abrasive blasting is effective on heavy contamination but indiscriminate. It removes contaminant and substrate together, which is exactly what you do not want on thin sheet, soft alloys, or anything with a service-critical surface profile. Containment and clean-up dominate the schedule.",
      "Laser cleaning sits between the two. The wavelength and pulse profile are tuned to the contaminant, so the substrate stays effectively untouched. There is no consumable media, no chemical waste stream, and the only byproduct is fine particulate captured at source by the extraction unit.",
      "Where laser does not yet make sense: very large flat surfaces where blast economics still win, or contamination thicker than a few hundred microns where the cycle time gets uncomfortable. We will tell you when one of those situations applies, because we would rather lose a job than under-deliver on one.",
      "For the middle ground — heritage, restoration, mould tooling, food-grade equipment, electrical assemblies, anything where substrate integrity matters — laser is no longer the experimental option. It is the conservative one.",
    ],
  },
  {
    slug: "restoring-1973-holden-chassis",
    title: "Restoring a 1973 Holden chassis: a vehicle rust deep-dive",
    excerpt:
      "Fifty years of Kiwi winters, three resprays, and one previous owner who loved underseal. We took the chassis back to bare steel without warping a single panel.",
    category: "Vehicle Rust",
    tags: ["Restoration", "Underseal", "Case Study"],
    date: "2026-03-15",
    author: "NZLCS Team",
    readTime: "6 min read",
    body: [
      "The owner had spent two years sourcing parts and was not about to entrust the chassis to a process he could not see in real time. Fair enough. We set up in his shed for three days and let him watch every pass.",
      "Underseal is the boss-fight of vehicle restoration. It is thick, it is bituminous, and on a vehicle that has been re-undersealed twice it can be a centimetre deep in the box sections. Heat guns and scrapers will get you most of the way at the cost of your back and your weekend.",
      "We ran a higher-energy continuous-wave pass to soften and ablate the underseal layer first, switched to a pulsed program to lift the rust scale beneath, and finished with a low-energy detail pass on the seams. Each transition was done on a sample area before committing to the structure.",
      "What you do not get with a laser on a vehicle: warping, panel distortion, media trapped inside box sections, or solvent vapour in an enclosed shed. What you do get: the original factory weld marks, the stamping numbers, and any previous repair history made completely visible.",
      "The owner found two patches that had been hidden under filler since the late nineties. He was thrilled. The body shop he was about to send the chassis to was less thrilled, but that is a different problem.",
      "Three days in, the chassis was bare, dry, and ready for epoxy primer. He drove it onto the trailer the same afternoon.",
    ],
  },
];

const legacyProjects: LegacyProject[] = [
  {
    slug: "bridge-structural-steel",
    title: "Bridge structural steel — full restoration",
    category: "Rust Removal",
    year: 2026,
    location: "Auckland Harbour",
    summary:
      "Full corrosion treatment of weather-exposed structural steelwork on a council-managed bridge — from heavy oxide removal through to Sa 2.5 surface finish, ready for the protective coating system to follow.",
    body: [
      "Coastal exposure had advanced beyond surface staining into deep, flaking oxide on the lower flanges and connection plates. We removed the corrosion using mobile pulse laser cleaning — no abrasive media, no chemical waste, and no need to close the bridge to traffic. The substrate was prepared to specification, ready for the protective coating system to follow.",
      "Two operators worked in rotating shifts under optical isolation tents, with a quantity surveyor on-site for daily QA inspection against ISO 8501-1 cleanliness standards. The job finished two days ahead of schedule and produced approximately zero kilograms of disposable waste, with the bridge remaining open to single-lane traffic throughout.",
    ],
    specs: [
      { label: "Service", value: "Rust & oxide removal" },
      { label: "Surface", value: "Structural steel" },
      { label: "Location", value: "Auckland, NZ" },
      { label: "Duration", value: "~ 2 weeks" },
      { label: "Year", value: "2026" },
    ],
    morePhotos: [
      { label: "Pre-treatment" },
      { label: "In progress" },
      { label: "Finished surface" },
    ],
  },
  {
    slug: "toyota-underbody-residue-free-clean",
    title: "Toyota underbody — residue-free clean",
    category: "Vehicle Rust",
    year: 2026,
    location: "Hokkaido import",
    summary:
      "Residue-free underbody rust removal on a Japanese import. No sandblast trace, WOF-ready, presented to the dealer at full asking price.",
    body: [
      "Calcium-chloride road salt does its worst work on the underside of vehicles that spend their first life in cold-climate cities. By the time the car lands in Auckland, the chassis, subframe, and floor pans are already deep into structural corrosion that traditional sandblasting can address but never disguise — the residue gives it away to anyone who knows what to look for.",
      "We laser-ablated the corrosion from the underside in a single shop visit, with no abrasive media to recover and no chemical wash to dispose of. The dealer presented the car to the buyer the next morning at full asking price, with no questions about prior treatment.",
    ],
    specs: [
      { label: "Service", value: "Vehicle body rust removal" },
      { label: "Surface", value: "Steel underbody" },
      { label: "Location", value: "Auckland" },
      { label: "Duration", value: "1 day" },
      { label: "Year", value: "2026" },
    ],
    morePhotos: [
      { label: "Pre-treatment" },
      { label: "In progress" },
      { label: "Finished surface" },
    ],
  },
  {
    slug: "pressure-vessel-pre-paint-preparation",
    title: "Pressure vessel — pre-paint preparation",
    category: "Industrial Prep",
    year: 2026,
    location: "Manukau",
    summary:
      "Pre-coating surface preparation on a fabricated pressure vessel. Mill scale and weld spatter removed without abrasive media, ready for the specified coating system.",
    body: [
      "Pressure vessels live or die on the integrity of their coating system, and that integrity is set on the day the substrate is prepared. Abrasive blasting works but generates contained waste at a scale that complicates an in-shop programme; chemical etching introduces handling and rinse-water management. Laser preparation removes mill scale, weld spatter, and surface contamination in a single controllable pass.",
      "We worked from the manufacturer's coating spec backwards, dialling pulse energy until the substrate matched the required surface profile. The vessel went straight from our work cell to the coating booth without an intermediate clean.",
    ],
    specs: [
      { label: "Service", value: "Industrial surface prep" },
      { label: "Surface", value: "Carbon steel vessel" },
      { label: "Location", value: "Manukau" },
      { label: "Duration", value: "~ 3 days" },
      { label: "Year", value: "2026" },
    ],
    morePhotos: [
      { label: "Pre-treatment" },
      { label: "In progress" },
      { label: "Finished surface" },
    ],
  },
  {
    slug: "pipeline-coating-restoration",
    title: "Pipeline coating restoration",
    category: "Rust Removal",
    year: 2025,
    location: "Wellington",
    summary:
      "Coastal pipeline section taken back to bare steel and handed over to the coating contractor. No abrasive, no chemical, no disruption to adjacent operations.",
    body: [
      "Coastal pipework that sits inside a working facility has two problems: the corrosion itself, and the constraints around removing it. Containment for an abrasive blast in a live operating environment is expensive and disruptive; chemical strippers introduce material-handling and rinse risks of their own.",
      "We worked the pipeline section in-place with a mobile pulse laser unit, with no containment shroud and no interruption to adjacent operations. The substrate was handed over to the coating contractor at the agreed cleanliness level on the day the schedule called for it.",
    ],
    specs: [
      { label: "Service", value: "Rust & oxide removal" },
      { label: "Surface", value: "Coastal pipeline" },
      { label: "Location", value: "Wellington" },
      { label: "Duration", value: "~ 1 week" },
      { label: "Year", value: "2025" },
    ],
    morePhotos: [
      { label: "Pre-treatment" },
      { label: "In progress" },
      { label: "Finished surface" },
    ],
  },
  {
    slug: "intumescent-recoat-partner-project",
    title: "Intumescent recoat — partner project",
    category: "Finishes",
    year: 2026,
    location: "Auckland CBD",
    summary:
      "Joint project with NZCPM. We stripped failed intumescent and brought the structural steel back to specification; partner applied the new system within the week.",
    body: [
      "Failed intumescent coatings are a difficult substrate to recover. The film has to come off completely, the underlying steel has to be returned to specification, and the new system has to bond to a substrate that meets the manufacturer's profile requirements — all without damaging the structural element underneath.",
      "We stripped the failed system with laser ablation on a section-by-section basis, working ahead of the coating crew so that no exposed steel sat overnight. The new intumescent system was applied within the week and signed off first inspection.",
    ],
    specs: [
      { label: "Service", value: "Intumescent stripping & prep" },
      { label: "Surface", value: "Structural steel" },
      { label: "Location", value: "Auckland CBD" },
      { label: "Duration", value: "~ 5 days" },
      { label: "Year", value: "2026" },
    ],
    morePhotos: [
      { label: "Pre-treatment" },
      { label: "In progress" },
      { label: "Finished surface" },
    ],
  },
  {
    slug: "fleet-underbody-12-vehicles",
    title: "Fleet underbody — 12 vehicles",
    category: "Vehicle Rust",
    year: 2026,
    location: "Christchurch",
    summary:
      "Used-car dealer fleet pre-sale presentation. Twelve vehicles processed in a week, each underbody clean and residue-free, all WOF-ready.",
    body: [
      "A used-car dealer who imports in volume runs the same problem twelve times over: every chassis comes off the boat with cold-climate corrosion that has to be addressed before sale. Sandblasting gets through the rust but stamps every vehicle with a tell that experienced buyers recognise immediately.",
      "We set up a portable cell in the dealer's yard and processed the full batch over five working days. Each underbody came out clean, residue-free, and WOF-ready, with no on-site waste stream and no down-time on the dealer's existing operations.",
    ],
    specs: [
      { label: "Service", value: "Vehicle body rust removal" },
      { label: "Surface", value: "Steel underbodies × 12" },
      { label: "Location", value: "Christchurch" },
      { label: "Duration", value: "~ 1 week" },
      { label: "Year", value: "2026" },
    ],
    morePhotos: [
      { label: "Pre-treatment" },
      { label: "In progress" },
      { label: "Finished surface" },
    ],
  },
  {
    slug: "fabrication-weld-cleanup",
    title: "Fabrication weld cleanup",
    category: "Industrial Prep",
    year: 2025,
    location: "Tauranga",
    summary:
      "Weld spatter and oxide removed from fabricated components on a manufacturer's shop floor. No dust, no media, no interruption to the production line.",
    body: [
      "Weld spatter and heat-affected oxide on fabricated components are a routine post-process step that most fabricators handle with grinding wheels or chemical pickle. Both work; both are noisy, slow, and produce material-handling demands that interrupt the flow of the rest of the shop.",
      "We took on the cleanup pass for a Tauranga manufacturer's high-volume product line, working from a portable cell on the shop floor. The line ran without interruption for the duration of the engagement, and the finished components went straight to packing without an intermediate clean.",
    ],
    specs: [
      { label: "Service", value: "Weld & oxide cleanup" },
      { label: "Surface", value: "Fabricated mild steel" },
      { label: "Location", value: "Tauranga" },
      { label: "Duration", value: "~ 2 days" },
      { label: "Year", value: "2025" },
    ],
    morePhotos: [
      { label: "Pre-treatment" },
      { label: "In progress" },
      { label: "Finished surface" },
    ],
  },
  {
    slug: "marine-structure-corrosion-treatment",
    title: "Marine structure — corrosion treatment",
    category: "Rust Removal",
    year: 2025,
    location: "Coastal Otago",
    summary:
      "Heavy marine corrosion removed from a coastal steel structure. Substrate preserved, ready for protective coating, no waste stream into the surrounding environment.",
    body: [
      "Coastal steel exposed to a constant marine atmosphere accumulates corrosion at a rate that overwhelms any maintenance schedule built around standard intervals. By the time the structure is referred for treatment, the loose oxide is several millimetres deep and the coating system underneath has long since failed.",
      "We worked the structure from a mobile platform with no containment requirement, removing the corrosion to the substrate without introducing abrasive media or chemical waste into the surrounding environment. The structure was handed over to the coating contractor at specification and ahead of the projected schedule.",
    ],
    specs: [
      { label: "Service", value: "Marine rust removal" },
      { label: "Surface", value: "Coastal steel structure" },
      { label: "Location", value: "Coastal Otago" },
      { label: "Duration", value: "~ 10 days" },
      { label: "Year", value: "2025" },
    ],
    morePhotos: [
      { label: "Pre-treatment" },
      { label: "In progress" },
      { label: "Finished surface" },
    ],
  },
  {
    slug: "heritage-steelwork-restoration",
    title: "Heritage steelwork restoration",
    category: "Finishes",
    year: 2026,
    location: "Auckland",
    summary:
      "Heritage steelwork handled with a low-energy detail pass. Original mill scale preserved where bonded, only the failed coating and corrosion lifted.",
    body: [
      "Heritage steelwork is unforgiving. The wrong tool can pit, score, or thin a member that has stood for a century, and the heritage office has every right to question any process that risks the original substrate. The brief on this engagement was tight: lift the failed coating and the loose oxide, and leave everything else untouched.",
      "We dialled in a low-energy detail pass on a hidden section of the structure, then worked outwards through the visible elements with continuous QA checks. The original mill scale was preserved where it remained bonded; only the coating and the corrosion came off.",
    ],
    specs: [
      { label: "Service", value: "Detail-pass restoration" },
      { label: "Surface", value: "Heritage steelwork" },
      { label: "Location", value: "Auckland" },
      { label: "Duration", value: "~ 1 week" },
      { label: "Year", value: "2026" },
    ],
    morePhotos: [
      { label: "Pre-treatment" },
      { label: "In progress" },
      { label: "Finished surface" },
    ],
  },
];

// --- helpers --------------------------------------------------------------

const key = () => randomUUID().replace(/-/g, "").slice(0, 12);

function paragraphsToPortableText(paragraphs: string[]) {
  return paragraphs.map((text) => ({
    _type: "block",
    _key: key(),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: key(), text, marks: [] }],
  }));
}

function loadEnv() {
  // Read .env.local manually so we don't have to add a dotenv dep.
  const here = dirname(fileURLToPath(import.meta.url));
  const envPath = join(here, "..", ".env.local");
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
    // No .env.local — fall through; assume env was set externally.
  }
}

// --- main -----------------------------------------------------------------

async function main() {
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

  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2026-01-01",
    token,
    useCdn: false,
  });

  console.log(`Importing into ${projectId}/${dataset}…`);

  // Seed category documents from the unique values used by legacy posts/projects.
  // Each gets a deterministic _id derived from a slugified title so re-running
  // upserts cleanly and references stay valid.
  const slugify = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const categoryAppliesTo = new Map<string, Set<"post" | "project">>();
  for (const p of legacyPosts) {
    if (!categoryAppliesTo.has(p.category)) categoryAppliesTo.set(p.category, new Set());
    categoryAppliesTo.get(p.category)!.add("post");
  }
  for (const proj of legacyProjects) {
    if (!categoryAppliesTo.has(proj.category)) categoryAppliesTo.set(proj.category, new Set());
    categoryAppliesTo.get(proj.category)!.add("project");
  }

  const categoryIdFor = (title: string) => `category-${slugify(title)}`;

  const tx = client.transaction();

  for (const [title, appliesToSet] of categoryAppliesTo) {
    tx.createOrReplace({
      _id: categoryIdFor(title),
      _type: "category",
      title,
      slug: { _type: "slug", current: slugify(title) },
      appliesTo: Array.from(appliesToSet),
    });
  }

  for (const p of legacyPosts) {
    tx.createOrReplace({
      _id: `post-${p.slug}`,
      _type: "post",
      title: p.title,
      slug: { _type: "slug", current: p.slug },
      excerpt: p.excerpt,
      category: { _type: "reference", _ref: categoryIdFor(p.category) },
      tags: p.tags,
      date: p.date,
      author: p.author,
      readTime: p.readTime,
      body: paragraphsToPortableText(p.body),
    });
  }

  for (const proj of legacyProjects) {
    tx.createOrReplace({
      _id: `project-${proj.slug}`,
      _type: "project",
      title: proj.title,
      slug: { _type: "slug", current: proj.slug },
      category: { _type: "reference", _ref: categoryIdFor(proj.category) },
      year: proj.year,
      location: proj.location,
      summary: proj.summary,
      body: proj.body ? paragraphsToPortableText(proj.body) : undefined,
      specs: proj.specs?.map((s) => ({
        _type: "spec",
        _key: key(),
        label: s.label,
        value: s.value,
      })),
      morePhotos: proj.morePhotos?.map((m) => ({
        _type: "morePhoto",
        _key: key(),
        label: m.label,
      })),
    });
  }

  const result = await tx.commit();
  console.log(`Imported ${result.results.length} documents.`);
  console.log(
    `Categories: ${categoryAppliesTo.size}  Posts: ${legacyPosts.length}  Projects: ${legacyProjects.length}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
