import { Resend } from "resend";

const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024; // 10 MB
const ALLOWED_MIME = /^(image\/|application\/pdf|application\/msword|application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document)/;

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "info@nzlcs.co.nz";
  const from = process.env.CONTACT_FROM_EMAIL ?? "NZLCS Website <onboarding@resend.dev>";

  if (!apiKey) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ error: "Invalid form payload." }, { status: 400 });
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const location = String(form.get("location") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (!name || !email) {
    return Response.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const file = form.get("file");
  const attachments: { filename: string; content: Buffer }[] = [];

  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_ATTACHMENT_BYTES) {
      return Response.json(
        { error: "Attachment is larger than 10 MB." },
        { status: 413 },
      );
    }
    if (file.type && !ALLOWED_MIME.test(file.type)) {
      return Response.json(
        { error: "Attachment must be an image, PDF, or Word document." },
        { status: 415 },
      );
    }
    const buf = Buffer.from(await file.arrayBuffer());
    attachments.push({ filename: file.name || "attachment", content: buf });
  }

  const lines = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Location", location],
  ].filter(([, v]) => v);

  const html = `
    <h2 style="font-family:system-ui,sans-serif;margin:0 0 16px;">New quote inquiry</h2>
    <table style="font-family:system-ui,sans-serif;border-collapse:collapse;">
      ${lines
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#555;">${k}</td><td style="padding:4px 0;"><strong>${escapeHtml(v)}</strong></td></tr>`,
        )
        .join("")}
    </table>
    ${message ? `<p style="font-family:system-ui,sans-serif;margin-top:16px;white-space:pre-wrap;">${escapeHtml(message)}</p>` : ""}
  `;

  const text = [
    ...lines.map(([k, v]) => `${k}: ${v}`),
    message ? `\nMessage:\n${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Quote inquiry — ${name}`,
    html,
    text,
    attachments,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json(
      { error: "Couldn't send the message. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
