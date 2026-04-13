import Image from "next/image";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

const LOGO_SRC = "/logo-symbol-inverted.png";
const HERO_SRC = "/hero image .png";

const services = [
  {
    title: "Rust & Oxide Removal",
    body: "Precision laser removal of rust and oxidation from steel structures, pipelines, bridges, and machinery — without damaging the substrate.",
  },
  {
    title: "Graffiti Removal",
    body: "Fast, chemical-free graffiti removal from public infrastructure, building facades, and commercial properties. Safe for repeated use.",
  },
  {
    title: "Industrial Surface Prep",
    body: "Pre-paint surface preparation, coating removal, and weld cleanup for manufacturing and industrial sites across New Zealand.",
  },
];

const reasons = [
  {
    title: "Chemical-Free Process",
    body: "Laser only — zero chemicals, zero waste. The responsible choice for your team and the environment.",
  },
  {
    title: "Pinpoint Precision",
    body: "Only the contaminant is removed — the substrate stays completely intact and undamaged.",
  },
  {
    title: "Mobile On-Site",
    body: "We come to you. Portable equipment means minimal disruption to your day-to-day operations.",
  },
  {
    title: "Broad Compatibility",
    body: "Steel, concrete, aluminium, brick — we handle a wide range of surfaces and substrates.",
  },
];

const formFields = [
  { label: "Name", type: "text", required: true },
  { label: "Phone", type: "tel", required: false },
  { label: "Email", type: "email", required: true },
  { label: "Location", type: "text", required: false },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Header />
      <ScrollToTop />

      {/* HERO — full bleed video */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <video
          src="/home_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover scale-x-[-1]"
        />
        {/* dark gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/85" />

        {/* Hero copy — bottom left */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto max-w-[1280px] px-8 pb-20">
            <div className="max-w-xl text-white">
              <h1 className="font-sans text-5xl font-bold leading-[1.05] md:text-6xl">
                Clean with laser precision.
                <br />
                Leave no trace on the environment.
              </h1>
              <p className="mt-6 max-w-md text-[15px] leading-7 text-white/85">
                We remove rust, graffiti, and surface contaminants using
                advanced laser technology — no chemicals, no damage. New
                Zealand&apos;s trusted eco-friendly cleaning solution for
                industrial, commercial, and public facilities.
              </p>
              <div className="mt-8 flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em]">
                <a
                  href="#contact"
                  className="border-b border-white pb-1 text-white hover:text-brand-light hover:border-[#f5c79a]"
                >
                  Get a Free Quote →
                </a>
                <a
                  href="#services"
                  className="border-b border-white/40 pb-1 text-white/80 hover:text-white hover:border-white"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — heading row + 3-column grid with bordered cells */}
      <section id="services" className="border-t border-border">
        <div className="mx-auto max-w-[1280px] px-8 pt-24 pb-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
            <div className="max-w-xl">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
                Services
              </p>
              <h2 className="font-sans text-4xl font-bold leading-tight md:text-5xl">
                What We Do
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-7 text-muted">
                Precise, eco-friendly laser technology for a wide range of
                surfaces and industries. From rust removal to graffiti and
                industrial prep — one tool, no chemicals.
              </p>
            </div>
          </div>
        </div>

        {/* Card grid with vertical dividers like the reference */}
        <div className="border-y border-border">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 md:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`px-8 py-12 ${
                  i !== services.length - 1 ? "md:border-r border-border" : ""
                } ${i !== 0 ? "border-t md:border-t-0" : ""}`}
              >
                <div className="mb-6 aspect-[4/3] w-full overflow-hidden rounded-sm border border-border bg-surface">
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-brand/15 ring-1 ring-brand/30" />
                  </div>
                </div>
                <h3 className="font-sans text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-[14px] leading-7 text-muted">
                  {s.body}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-brand hover:text-brand-dark"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — 4-column grid same card style */}
      <section id="about">
        <div className="mx-auto max-w-[1280px] px-8 pt-24 pb-12">
          <div className="max-w-2xl">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              Why NZLCS
            </p>
            <h2 className="font-sans text-4xl font-bold leading-tight md:text-5xl">
              Why choose us?
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted">
              With years of hands-on experience across industrial and
              commercial sites, we bring precision, safety, and environmental
              responsibility to every job — no shortcuts.
            </p>
          </div>
        </div>

        <div className="border-y border-border">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className={`px-8 py-12 ${
                  i !== reasons.length - 1
                    ? "md:border-r border-border"
                    : ""
                } ${i !== 0 ? "border-t md:border-t-0 sm:[&:nth-child(2)]:border-t-0" : ""}`}
              >
                <div className="mb-6 aspect-[4/3] w-full overflow-hidden rounded-sm border border-border bg-surface">
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-sans text-5xl font-bold text-brand/30">
                      0{i + 1}
                    </span>
                  </div>
                </div>
                <h3 className="font-sans text-2xl font-bold">{r.title}</h3>
                <p className="mt-3 text-[14px] leading-7 text-muted">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-24" aria-hidden />    
      </section>

      {/* FREE QUOTE INQUIRY — form left, image right */}
      <section id="contact" className="border-t border-border">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 md:grid-cols-2">
          <div className="px-8 py-24 md:pr-14">
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
                  Upload <span className="text-brand">*</span>
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
                  required
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

          <div className="relative min-h-[600px] w-full border-t border-border md:border-t-0 md:border-l">
            <Image
              src={HERO_SRC}
              alt="NZLCS team at work"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* MAP — office location */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1280px] px-8 pt-24 pb-12 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Visit Us
          </p>
          <h2 className="font-sans text-4xl font-bold leading-tight md:text-5xl">
            Our Office
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-muted">
            Based in Auckland, serving industrial and commercial sites
            across New Zealand.
          </p>
        </div>
        <div className="mx-auto max-w-[1280px] px-8 pb-0">
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

      {/* STATISTICS */}
      <section>
        <div className="pt-16 pb-24">
        <div className="border-y border-border">
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-y-8 px-8 py-14 text-center md:grid-cols-4">
            {[
              ["200+", "Projects Completed"],
              ["50+", "Corporate Clients"],
              ["5+", "Years in Operation"],
              ["NZ-wide", "Service Coverage"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-sans text-4xl font-bold text-brand md:text-5xl">
                  {num}
                </div>
                <div className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

        {/* BRANDS — heading above, logos center, subtitle below */}
        <div className="mx-auto max-w-[1280px] px-8 pb-24 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Trusted Partners
          </p>
          <h2 className="font-sans text-4xl font-bold leading-tight md:text-5xl">
            We work with the best brands
          </h2>

          <div className="mx-auto mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {[
              { name: "Clarinspect", src: "/partner_logos_officially_provided/Clarinspect.png" },
              { name: "Resene", src: "/partner_logos_officially_provided/Resene.png" },
              { name: "Dulux", src: "/partner_logos_officially_provided/Dulux.png" },
              { name: "Zone", src: "/partner_logos_officially_provided/Zone.png" },
              { name: "AkzoNobel", src: "/partner_logos_officially_provided/AkzoNobel.jpg" },
            ].map((brand) => (
              <div
                key={brand.name}
                className="flex h-24 items-center justify-center rounded-sm bg-background px-5 py-4"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={160}
                  height={64}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-[15px] leading-7 text-muted">
            Working alongside trusted partners to provide exceptional painting
            and fire protection solutions.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-10 px-8 py-20 md:grid-cols-4">
          <div>
            <Image
              src={LOGO_SRC}
              alt="NZLCS"
              width={96}
              height={96}
              className="h-24 w-auto"
            />
            <p className="mt-4 text-[12px] leading-6 text-muted">
              NZ Laser Cleaning Solutions — New Zealand&apos;s eco-friendly
              laser cleaning specialists.
            </p>
          </div>
          <div>
            <h5 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]">
              Services
            </h5>
            <ul className="space-y-2 text-[13px] text-muted">
              <li>Rust Removal</li>
              <li>Graffiti Removal</li>
              <li>Industrial Prep</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]">
              Company
            </h5>
            <ul className="space-y-2 text-[13px] text-muted">
              <li>About Us</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]">
              Contact
            </h5>
            <ul className="space-y-2 text-[13px] text-muted">
              <li>Auckland, New Zealand</li>
              <li>info@nzlcs.co.nz</li>
              <li>021 419 933</li>
            </ul>
            <div className="mt-4 flex gap-3">
              {/* TODO: replace # with real social URLs once accounts created */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center border border-border text-foreground hover:bg-brand hover:text-on-brand hover:border-brand"
              >
                <span className="text-xs font-bold">f</span>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center border border-border text-foreground hover:bg-brand hover:text-on-brand hover:border-brand"
              >
                <span className="text-xs font-bold">IG</span>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-brand text-on-brand">
          <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] md:flex-row">
            <span>© {new Date().getFullYear()} NZLCS. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
