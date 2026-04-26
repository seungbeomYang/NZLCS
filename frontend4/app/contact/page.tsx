import type { Metadata } from "next";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact — NZLCS",
  description:
    "Get in touch with NZ Laser Cleaning Solutions. Request a free quote, call us, or visit our Auckland office.",
};

const formFields = [
  { label: "Name", type: "text", required: true },
  { label: "Email", type: "email", required: true },
  { label: "Phone", type: "tel", required: false },
  { label: "Location", type: "text", required: false },
];

type DirectContact = {
  label: string;
  value: React.ReactNode;
  href?: string;
  icon: React.ReactNode;
};

const directContacts: DirectContact[] = [
  {
    label: "Location",
    value: "Auckland, New Zealand",
    href: "https://www.google.com/maps?q=Auckland,New+Zealand",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: (
      <div className="space-y-1">
        <a href="mailto:info@nzlcs.co.nz" className="block hover:text-brand-light">info@nzlcs.co.nz</a>
        <a href="mailto:dan@nzlcs.co.nz" className="block hover:text-brand-light">dan@nzlcs.co.nz</a>
      </div>
    ),
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "021 419 933",
    href: "tel:+64214199933",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Response",
    value: "Within 2 business days",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Header />
      <ScrollToTop />

      {/* HERO */}
      <section>
        <div className="mx-auto max-w-[1280px] px-8 pt-40 pb-16">
          <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <span aria-hidden className="inline-block h-px w-8 bg-brand" />
            Contact
          </p>
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
            <h1 className="font-sans text-5xl font-bold leading-[1.05] md:text-6xl">
              Get in touch.
            </h1>
            <p className="max-w-md text-[15px] leading-7 text-muted md:mt-2">
              Tell us about your site, your surfaces, and your timeline. We&apos;ll
              come back with a clear scope, a fixed price, and a date — usually
              within two business days.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE REQUEST + DIRECT CONTACT */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 lg:grid-cols-[1.4fr_1fr]">
          {/* LEFT — Free Quote Inquiry (matches homepage) */}
          <div className="px-8 py-24 lg:pr-14">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              Free Quote Inquiry
            </p>
            <h2 className="font-sans text-4xl font-bold leading-tight md:text-5xl">
              Request a Quote
            </h2>
            <p className="mt-5 max-w-md text-[14px] leading-7 text-muted">
              Drop us a line below and we&apos;ll get back to you fast. Send a
              photo of the site and we&apos;ll quote it within two business
              days.
            </p>

            <form className="mt-10 space-y-5">
              {formFields.map((f) => (
                <div key={f.label}>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/70">
                    {f.label} {f.required && <span className="text-brand">*</span>}
                  </label>
                  <input
                    type={f.type}
                    required={f.required}
                    className="w-full border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand focus:outline-none"
                  />
                </div>
              ))}
              <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/70">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/70">
                  Upload
                </label>
                <label
                  htmlFor="quote-upload"
                  className="flex w-full cursor-pointer items-center justify-center gap-3 border border-accent bg-accent/10 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  Upload File
                </label>
                <input
                  id="quote-upload"
                  type="file"
                  accept="image/*,.pdf,.doc,.docx"
                  className="sr-only"
                />
              </div>
              <button
                type="button"
                className="mt-3 inline-block bg-brand px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-on-brand hover:bg-brand-light"
              >
                Send Inquiry →
              </button>
            </form>
          </div>

          {/* RIGHT — Direct Contact box */}
          <div className="px-8 py-24 lg:pl-0">
            <aside className="border border-border bg-surface p-8 lg:p-10">
              <p className="mb-8 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
                <span aria-hidden className="inline-block h-px w-8 bg-brand" />
                // Direct Contact
              </p>

              <dl className="divide-y divide-border">
                {directContacts.map((c) => (
                  <div
                    key={c.label}
                    className="grid grid-cols-[28px_120px_1fr] items-start gap-4 py-5 first:pt-0 last:pb-0"
                  >
                    <span className="mt-0.5 text-muted" aria-hidden>{c.icon}</span>
                    <dt className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.22em] text-muted">
                      {c.label}
                    </dt>
                    <dd className="text-[15px] leading-7 text-foreground">
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="hover:text-brand-light"
                        >
                          {c.value}
                        </a>
                      ) : (
                        c.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* MAP — office location */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1280px] px-8 pt-24 pb-12">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
                <span aria-hidden className="inline-block h-px w-8 bg-brand" />
                Visit Us
              </p>
              <h2 className="font-sans text-5xl font-bold leading-[1.05] md:text-6xl">
                Our Office
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-7 text-muted md:mt-2">
              Based in Auckland, serving industrial and commercial sites
              across New Zealand.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[1280px] px-8 pb-24">
          <div className="overflow-hidden border border-border">
            <iframe
              title="NZLCS office location"
              src="https://www.google.com/maps?q=Auckland,New+Zealand&output=embed"
              width="100%"
              height="450"
              style={{ border: 0, filter: "grayscale(0.6) contrast(1.1)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
