import Image from "next/image";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";

const HERO_SRC = "/Service_and_About_sample_image/Home_Quote.png";

const services = [
  {
    title: "Rust & Oxide Removal",
    body: "Precision laser removal of rust and oxidation from steel structures, pipelines, bridges, and machinery — without damaging the substrate.",
    href: "/services#rust-oxide-removal",
    img: "/Service_and_About_sample_image/1 - Rust & Oxide removal.JPG",
  },
  {
    title: "Vehicle Body Rust Removal",
    body: "Residue-free underbody rust removal for Japanese import vehicles — no sandblast trace, higher resale value for dealers, WOF-ready.",
    href: "/services#vehicle-rust-removal",
    img: "/Service_and_About_sample_image/2 - Vehicle.png",
  },
  {
    title: "Industrial Surface Preparation",
    body: "Pre-paint surface preparation, coating removal, and weld cleanup for manufacturing and industrial sites across New Zealand.",
    href: "/services#industrial-surface-prep",
    img: "/Service_and_About_sample_image/3 - Industrial.png",
  },
];

const reasons = [
  {
    title: "Chemical-Free Process",
    body: "Laser only — zero chemicals, zero waste. The responsible choice for your team and the environment.",
    img: "/Service_and_About_sample_image/4 - Chemical.png",
  },
  {
    title: "Pinpoint Precision",
    body: "Only the contaminant is removed — the substrate stays completely intact and undamaged. No grinding, no abrasion, no surface loss.",
    img: "/Service_and_About_sample_image/5 - Pinpoint.png",
  },
  {
    title: "Mobile On-Site",
    body: "We come to you. Portable equipment means minimal disruption and no need to transport assets off-site.",
    img: "/Service_and_About_sample_image/6 - Mobile.png",
  },
  {
    title: "End-to-End Service",
    body: "From rust removal and surface preparation through to primer, topcoats, and even intumescent coatings — we manage the full cycle. In partnership with NZCPM, a specialist protective coatings contractor, we deliver a single, coordinated service from bare steel to finished system.",
    img: "/Service_and_About_sample_image/7 - End to End.png",
  },
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
              <p className="mb-4 text-brand-light tracking-widest font-bold" style={{ fontFamily: "var(--font-josefin), sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.15 }}>
                New Zealand<br />Laser Cleaning Solutions
              </p>
              <h1 className="type-h1">
                Clean with laser precision.
                <br />
                Leave no trace on the environment.
              </h1>
              <p className="mt-6 max-w-md type-body text-white/85">
                We remove rust, corrosion, and surface contaminants using
                advanced laser technology — no chemicals, no damage.
                Auckland-based, servicing industrial, commercial, and infrastructure projects across New Zealand.
              </p>
              <div className="mt-8 flex items-center gap-6 type-label">
                <a
                  href="#contact"
                  className="border-b border-white pb-1 text-white hover:text-brand-light hover:border-[#f5c79a]"
                >
                  Get a Free Quote →
                </a>
                <a
                  href="#services"
                  className="border-b border-white pb-1 text-white hover:text-brand-light hover:border-[#f5c79a]"
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
            <div className="max-w-3xl">
              <p className="mb-3 type-eyebrow">
                Services
              </p>
              <h2 className="type-h2">
                What We Do
              </h2>
              <p className="mt-5 type-body">
                Precise, eco-friendly laser technology for a wide range of surfaces and industries.<br />
                From rust removal to vehicle underbody treatment and industrial prep — one tool, no chemicals.
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
                <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-sm border border-border bg-surface">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="type-h3">{s.title}</h3>
                <p className="mt-3 type-body-sm">
                  {s.body}
                </p>
                <a
                  href={s.href}
                  className="mt-5 inline-block type-label text-brand hover:text-brand-dark"
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
            <p className="mb-3 type-eyebrow">
              Why NZLCS
            </p>
            <h2 className="type-h2">
              Why choose us?
            </h2>
            <p className="mt-5 max-w-xl type-body">
              Laser Cleaning isn't just a newer tool — it's a fundamentally better approach.
              <br />
              Here's what sets us apart from traditional methods.
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
                <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-sm border border-border bg-surface">
                  <Image
                    src={r.img}
                    alt={r.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3 className="type-h3">{r.title}</h3>
                <p className="mt-3 type-body-sm">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-[1280px] px-8 py-24 text-center">
            <p className="type-eyebrow mb-4">Testimonials</p>
            <h2 className="type-h2">Testimonial</h2>
          </div>
        </div>
      </section>

      {/* FREE QUOTE INQUIRY — form left, image right */}
      <section id="contact" className="border-t border-border">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 md:grid-cols-2">
          <div className="px-8 pt-24 pb-0 md:pr-14">
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

            <QuoteForm formId="quote-upload-home" />
          </div>

          <div className="w-full border-t border-border md:border-t-0 md:border-l">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_SRC}
              alt="NZLCS team at work"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </section>

      {/* MAP — office location */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1280px] px-8 pt-24 pb-12 text-center">
          <p className="mb-3 type-eyebrow">
            Visit Us
          </p>
          <h2 className="type-h2">
            Our Office
          </h2>
          <p className="mx-auto mt-5 max-w-xl type-body">
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
          <div className="mx-auto grid max-w-[1280px] grid-cols-3 px-8 py-14 text-center">
            {[
              ["100+", "Projects Completed"],
              ["50+", "Corporate Clients"],
              ["NZ-wide", "Service Coverage"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="type-stat">
                  {num}
                </div>
                <div className="mt-2 type-form-label text-muted">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

        {/* BRANDS — heading above, logos center, subtitle below */}
        <div className="mx-auto max-w-[1280px] px-8 pb-24 text-center">
          <p className="mb-3 type-eyebrow">
            Trusted Partners
          </p>
          <h2 className="type-h2">
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

        </div>
      </section>

      <Footer />
    </div>
  );
}
