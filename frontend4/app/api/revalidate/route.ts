import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";

/**
 * Sanity webhook → revalidateTag.
 *
 * Wire this up AFTER deploying:
 *   1. Sanity Manage → API → Webhooks → Create.
 *   2. URL: https://<your-host>/api/revalidate
 *   3. Trigger: Create / Update / Delete on documents matching `_type in ["post", "project"]`.
 *   4. Projection:
 *        {
 *          "_type": _type,
 *          "slug": slug.current
 *        }
 *   5. Secret: any random string. Set the same value as SANITY_REVALIDATE_SECRET in env.
 *
 * On each publish/unpublish, Sanity POSTs the projection signed with the secret. We verify
 * the signature, then revalidate the broad-type tag (e.g. 'post') so list pages refresh,
 * and the specific tag (e.g. 'post:<slug>') so the detail page refreshes.
 */
type Payload = {
  _type?: "post" | "project";
  slug?: string;
};

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return new Response("SANITY_REVALIDATE_SECRET not configured", {
      status: 500,
    });
  }

  const { isValidSignature, body } = await parseBody<Payload>(req, secret);

  if (!isValidSignature) {
    return new Response("Invalid signature", { status: 401 });
  }
  if (!body?._type) {
    return new Response("Missing _type in body", { status: 400 });
  }

  // Second arg is the stale-while-revalidate window. 'max' = serve stale for the
  // longest allowed window while the new content regenerates in the background.
  revalidateTag(body._type, "max");
  if (body.slug) {
    revalidateTag(`${body._type}:${body.slug}`, "max");
  }

  return Response.json({ revalidated: true, type: body._type, slug: body.slug });
}
