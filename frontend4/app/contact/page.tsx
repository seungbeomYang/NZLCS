import type { Metadata } from "next";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import QuoteForm from "../components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact — NZLCS",
  description:
    "Get in touch with NZ Laser Cleaning Solutions. Request a free quote, call us, or visit our Auckland office.",
};

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
        <a href="mailto:info@nzlcs.com" className="block hover:text-brand-light">info@nzlcs.com</a>
        <a href="mailto:dan@nzlcs.com" className="block hover:text-brand-light">dan@nzlcs.com</a>
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
      <section className="relative overflow-hidden border-b border-border pt-[180px] pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#D4834A 1px,transparent 1px),linear-gradient(to bottom,#D4834A 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 80% 50%,rgba(212,131,74,0.06) 0%,transparent 65%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-8">
          <p className="mb-6 type-eyebrow">
            Contact
          </p>
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
            <h1 className="type-h1">
              Get in touch.
            </h1>
            <p className="max-w-md type-body md:mt-2">
              Tell us about your site, your surfaces, and your timeline. We&apos;ll
              come back with a clear scope, a fixed price, and a date — usually
              within two business days.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE REQUEST + DIRECT CONTACT */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 lg:grid-cols-[1fr_1px_1fr]">
          {/* LEFT — heading, description, direct contact */}
          <div className="px-8 py-24 lg:pr-20">
            <p className="mb-3 type-eyebrow">
              Free Quote Inquiry
            </p>
            <h2 className="type-h2">
              Request a Quote
            </h2>
            <p className="mt-5 max-w-md type-body-sm">
              Drop us a line below and we&apos;ll get back to you fast. Send a
              photo of the site and we&apos;ll quote it within two business
              days.
            </p>

            <aside className="mt-12 border border-border bg-surface p-8">
              <p className="mb-8 type-eyebrow">
                Direct Contact
              </p>
              <dl className="divide-y divide-border">
                {directContacts.map((c) => (
                  <div
                    key={c.label}
                    className="grid grid-cols-[28px_120px_1fr] items-start gap-4 py-5 first:pt-0 last:pb-0"
                  >
                    <span className="mt-0.5 text-muted" aria-hidden>{c.icon}</span>
                    <dt className="mt-0.5 type-eyebrow text-muted">
                      {c.label}
                    </dt>
                    <dd className="type-body text-foreground">
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

          {/* DIVIDER */}
          <div className="hidden lg:block my-24 border-l border-border" aria-hidden />

          {/* RIGHT — form */}
          <div className="px-8 py-24 lg:pl-20">
            <QuoteForm formId="quote-upload-contact" formClassName="" />
          </div>
        </div>
      </section>

      {/* MAP — office location */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1280px] px-8 pt-24 pb-12">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
            <div>
              <p className="mb-6 type-eyebrow">
                Visit Us
              </p>
              <h2 className="type-h2">
                Our Office
              </h2>
            </div>
            <p className="max-w-md type-body md:mt-2">
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
