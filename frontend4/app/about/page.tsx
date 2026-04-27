import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About — NZLCS | NZ Laser Cleaning Solutions",
  description:
    "Learn about NZ Laser Cleaning Solutions — New Zealand's specialist in chemical-free, precision laser cleaning for industrial, structural, and vehicle applications.",
};

const LOGO_SRC = "/logo-symbol-inverted.png";

const values = [
  {
    number: "01",
    title: "Environmental Responsibility",
    desc: "No chemicals. No abrasive media. No runoff. Our process is clean by design — safer for your team, your site, and New Zealand's waterways and land.",
  },
  {
    number: "02",
    title: "Precision Over Force",
    desc: "We target only the contaminant. The substrate stays intact. That's the advantage of laser over grinding, blasting, or chemical treatment.",
  },
  {
    number: "03",
    title: "On-Site Mobility",
    desc: "We bring the equipment to you. No need to dismantle or transport assets — we work around your operations with minimal disruption.",
  },
  {
    number: "04",
    title: "Honest Assessment",
    desc: "We tell you what the job needs, not what sounds impressive. If laser isn't the right tool for your situation, we'll say so.",
  },
];

const stats: [string, string][] = [
  ["200+", "Projects Completed"],
  ["50+", "Corporate Clients"],
  ["5+", "Years in Operation"],
  ["NZ-wide", "Service Coverage"],
];

const partners = [
  { name: "Clarinspect", src: "/partner_logos_officially_provided/Clarinspect.png" },
  { name: "Resene", src: "/partner_logos_officially_provided/Resene.png" },
  { name: "Dulux", src: "/partner_logos_officially_provided/Dulux.png" },
  { name: "Zone", src: "/partner_logos_officially_provided/Zone.png" },
  { name: "AkzoNobel", src: "/partner_logos_officially_provided/AkzoNobel.jpg" },
];

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="relative h-full min-h-[420px] overflow-hidden bg-surface">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#D4834A 1px,transparent 1px),linear-gradient(to bottom,#D4834A 1px,transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%,rgba(212,131,74,0.07) 0%,transparent 70%)",
        }}
      />
      <div className="absolute bottom-6 left-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted/35">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Header />
      <ScrollToTop />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
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
              "radial-gradient(ellipse 55% 70% at 20% 50%,rgba(212,131,74,0.06) 0%,transparent 65%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-8">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            About NZLCS
          </p>
          <h1 className="max-w-3xl font-sans text-5xl font-bold leading-[1.05] md:text-[64px]">
            New Zealand&apos;s precision laser cleaning specialists.
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-7 text-muted">
            Founded to bring advanced, chemical-free laser cleaning to New
            Zealand&apos;s industrial and commercial sectors — without the
            mess, waste, or substrate damage of traditional methods.
          </p>
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 md:grid-cols-2">
          {/* Text */}
          <div className="px-8 py-20 md:border-r border-border md:pr-14">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              Our Story
            </p>
            <h2 className="font-sans text-4xl font-bold leading-tight md:text-5xl">
              Built for a gap in the market.
            </h2>
            <div className="mt-8 space-y-5 text-[14px] leading-7 text-muted">
              <p>
                NZLCS was established after identifying a clear problem in the
                New Zealand market: sites across the country were relying on
                abrasive blasting and chemical treatments that left behind
                residue, damaged substrates, and created significant
                environmental risk — particularly near waterways and in
                confined work areas.
              </p>
              <p>
                We brought in high-powered PULSE laser technology and built a
                mobile operation around it — designed to serve structural
                fabricators, vehicle dealers, infrastructure asset owners, and
                industrial maintenance teams where the work actually happens.
              </p>
              <p>
                Today NZLCS operates across New Zealand, delivering
                measurable results on rust removal, coating prep, and
                underbody treatment — documented to specification, without
                the downside of legacy methods.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="min-h-[420px]">
            <ImagePlaceholder label="Photo coming soon" />
          </div>
        </div>
      </section>

      {/* ── MISSION STATEMENT ─────────────────────────────────────────────────── */}
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-[1280px] px-8 py-24 text-center">
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Our Mission
          </p>
          <blockquote className="mx-auto max-w-3xl font-sans text-3xl font-bold leading-[1.2] md:text-4xl">
            &ldquo;To give New Zealand businesses a cleaner, safer, and more
            precise alternative to abrasive and chemical surface
            treatment — with zero compromise on results.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1280px] px-8 pt-24 pb-12">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            What We Stand For
          </p>
          <h2 className="font-sans text-4xl font-bold leading-tight md:text-5xl">
            Our values.
          </h2>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`px-8 py-12 ${
                  i !== values.length - 1 ? "md:border-r border-border" : ""
                } ${i !== 0 ? "border-t md:border-t-0 sm:[&:nth-child(2)]:border-t-0" : ""}`}
              >
                <span className="block font-sans text-5xl font-bold text-brand/20 leading-none mb-6">
                  {v.number}
                </span>
                <h3 className="font-sans text-xl font-bold leading-snug">
                  {v.title}
                </h3>
                <p className="mt-3 text-[13px] leading-6 text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE TECHNOLOGY ────────────────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="min-h-[420px] border-b border-border md:border-b-0 md:border-r">
            <ImagePlaceholder label="Equipment photo coming soon" />
          </div>

          {/* Text */}
          <div className="px-8 py-20 md:pl-14">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              The Technology
            </p>
            <h2 className="font-sans text-4xl font-bold leading-tight md:text-5xl">
              High-powered PULSE laser cleaning.
            </h2>
            <div className="mt-8 space-y-5 text-[14px] leading-7 text-muted">
              <p>
                Our equipment uses high-frequency pulsed laser energy to
                ablate rust, coatings, and surface contaminants at the
                molecular level. The contaminant absorbs the energy and is
                vaporised — the steel beneath reflects it and stays
                structurally intact.
              </p>
              <p>
                The system is fully portable, designed for on-site
                deployment at construction sites, fabrication yards, vehicle
                workshops, and industrial plants. Output intensity and beam
                focus are adjustable to match the substrate and the
                contaminant type.
              </p>
              <p>
                No blast media. No chemical runoff. No heat stress on the
                substrate. The result is a clean surface that meets
                industry cleanliness standards — documented on completion.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                ["Sa 2–2.5", "Cleanliness standard achievable"],
                ["Zero media", "No abrasive residue left behind"],
                ["Mobile", "Deployable anywhere in New Zealand"],
                ["Chemical-free", "Safe for confined spaces & waterways"],
              ].map(([stat, label]) => (
                <div
                  key={label}
                  className="border border-border bg-surface px-5 py-5"
                >
                  <div className="font-sans text-xl font-bold text-brand">
                    {stat}
                  </div>
                  <div className="mt-1.5 text-[11px] leading-5 text-muted">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-y-8 px-8 py-16 text-center md:grid-cols-4">
          {stats.map(([num, label]) => (
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
      </section>

      {/* ── PARTNERS ──────────────────────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1280px] px-8 pt-24 pb-12 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Trusted Partners
          </p>
          <h2 className="font-sans text-4xl font-bold leading-tight md:text-5xl">
            Who we work with.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-muted">
            We collaborate with industry-leading coating and inspection
            specialists to deliver complete, documented surface preparation
            outcomes.
          </p>

          <div className="mx-auto mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex h-24 items-center justify-center rounded-sm bg-surface px-5 py-4"
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={160}
                  height={64}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="h-16" aria-hidden />
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-[1280px] px-8 py-24 text-center">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Get in Touch
          </p>
          <h2 className="mx-auto max-w-2xl font-sans text-4xl font-bold leading-tight md:text-5xl">
            Ready to see what laser cleaning can do for your project?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-7 text-muted">
            Send us a photo and a brief description of the job. We&apos;ll
            assess it and come back to you within two business days — no
            obligation.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a
              href="/contact"
              className="inline-block bg-brand px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-on-brand transition-colors hover:bg-brand-light"
            >
              Get a Free Quote →
            </a>
            <a
              href="/services"
              className="inline-block border border-border px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:border-brand hover:text-brand"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
