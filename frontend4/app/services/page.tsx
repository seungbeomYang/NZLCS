import type { Metadata } from "next";
import Image from "next/image";
import {
  Anchor,
  Building2,
  Car,
  CheckCircle2,
  ClipboardCheck,
  Cog,
  Database,
  Eraser,
  FileSearch,
  Gauge,
  Landmark,
  Layers,
  type LucideIcon,
  Palette,
  Paintbrush,
  RotateCcw,
  Settings,
  TrendingUp,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import ServicesAccordion from "../components/ServicesAccordion";

export const metadata: Metadata = {
  title: "Services — NZLCS | NZ Laser Cleaning Solutions",
  description:
    "Rust removal, vehicle underbody treatment, and industrial surface preparation using advanced laser technology — chemical-free and residue-free across New Zealand.",
};

const LOGO_SRC = "/logo-symbol-inverted.png";

// ─── Data types ───────────────────────────────────────────────────────────────

interface Application {
  label: string;
  icon: LucideIcon;
}

interface Benefit {
  title: string;
  desc: React.ReactNode;
}

interface ServiceData {
  id: string;
  eyebrow: string;
  title: string;
  imageSrc: string;
  imageLeft: boolean;
  intro: string;
  howItWorks: string;
  applications: Application[];
  benefits: Benefit[];
}

// ─── Content ─────────────────────────────────────────────────────────────────

const services: ServiceData[] = [
  {
    id: "rust-oxide-removal",
    eyebrow: "SERVICE 01",
    title: "Rust & Oxide Removal",
    imageSrc: "/Service_and_About_sample_image/1 - Rust & Oxide removal.JPG",
    imageLeft: true,
    intro:
      "Rust left untreated leads to structural failure, costly rework, and coating system breakdown. Traditional abrasive blasting removes rust — but it also damages the substrate, creates significant waste, and leaves behind blast media residue that experienced buyers and inspectors notice immediately.",
    howItWorks:
      "Our PULSE laser system delivers concentrated light energy directly to the corroded layer. The rust and oxidation absorb the energy and are ablated away, leaving the steel clean and structurally intact. Cleanliness levels from St 3 to Sa 2.5 (near-white) are achievable to specification, with the surface profile required for coating adhesion — full QA documentation provided.",
    applications: [
      { label: "Structural steel beams, columns, and connections", icon: Building2 },
      { label: "Bridges, walkways, and overhead structures", icon: Landmark },
      { label: "Industrial pipelines and pressure vessels", icon: Gauge },
      { label: "Vehicle underbodies and frames", icon: Car },
      { label: "Machinery and equipment", icon: Cog },
      { label: "Storage tanks and infrastructure assets", icon: Database },
      { label: "Marine and coastal steel structures", icon: Anchor },
    ],
    benefits: [
      {
        title: "No substrate damage",
        desc: "Laser targets only the contaminant — steel integrity preserved throughout.",
      },
      {
        title: "Chemical-free",
        desc: "Safe for confined spaces and near waterways. Zero solvent runoff.",
      },
      {
        title: "No abrasive media",
        desc: "No containment, collection, or disposal cost. Cleaner worksite.",
      },
      {
        title: "Sa 2–2.5 cleanliness",
        desc: "Achieves near-white metal standard suitable for protective coating systems.",
      },
      {
        title: "Mobile and on-site",
        desc: "Portable equipment — we come to your project location across New Zealand.",
      },
      {
        title: "Residue-free output",
        desc: "No blast media trace visible post-treatment. Passes buyer and inspector scrutiny.",
      },
    ],
  },
  {
    id: "vehicle-rust-removal",
    eyebrow: "SERVICE 02",
    title: "Vehicle Body Rust Removal",
    imageSrc: "/Service_and_About_sample_image/2 - Vehicle.png",
    imageLeft: false,
    intro:
      "Rusty vehicles — particularly those imported from overseas — are frequently affected by severe underbody corrosion caused by calcium chloride road salt. Traditional sandblasting removes the rust but leaves behind residue that experienced buyers recognise immediately, depressing resale value and raising questions about vehicle history.",
    howItWorks:
      "NZLCS laser cleaning removes underbody rust completely and residue-free. The laser ablates corrosion from the chassis, subframe, and floor panels without damaging the steel beneath. The result is a clean underbody with no sandblast trace — giving dealers the ability to present vehicles at full value.",
    applications: [
      { label: "Japanese import vehicles — Hokkaido origin stock", icon: Car },
      { label: "Used car dealer preparation for WOF inspection", icon: ClipboardCheck },
      { label: "Pre-sale vehicle presentation and valuation improvement", icon: TrendingUp },
      { label: "Fleet vehicles with underbody corrosion", icon: Truck },
      { label: "Classic and restoration vehicles", icon: RotateCcw },
      { label: "Insurance or structural assessment preparation", icon: FileSearch },
    ],
    benefits: [
      {
        title: "No sandblast residue",
        desc: "Zero trace for buyers or inspectors — cleaner than any abrasive method.",
      },
      {
        title: "No substrate damage",
        desc: "Steel integrity preserved throughout — chassis and subframe stay structurally sound.",
      },
      {
        title: "Chemical-free",
        desc: "No solvent runoff or environmental risk. Safe for indoor use in workshops.",
      },
      {
        title: "WOF-ready",
        desc: "Cleaner underbody presentation for inspection — less likely to fail on visual rust.",
      },
      {
        title: "Higher resale value",
        desc: "Residue-free finish supports full asking price for dealer stock.",
      },
      {
        title: "Mobile",
        desc: <>We come to your yard or workshop, or vehicles can be dropped off at our Auckland facility.<br />Whichever works best for your operation.</>,
      },
    ],
  },
  {
    id: "industrial-surface-prep",
    eyebrow: "SERVICE 03",
    title: "Industrial Surface Preparation",
    imageSrc: "/Service_and_About_sample_image/3 - Industrial.png",
    imageLeft: true,
    intro:
      "Surface preparation is the most critical factor in any protective coating system. Poor prep leads to premature coating failure, expensive rework, and potential safety risks. NZLCS provides laser-based surface preparation that delivers a clean, oxide-free surface — without abrasive blast media, dust, or chemical treatment.",
    howItWorks:
      "Our laser removes existing coatings, oxides, contamination, and weld spatter from steel and other substrates with high precision. The process is adjustable — enabling selective removal of specific layers without affecting underlying material. This gives fabricators and maintenance teams unmatched control over the preparation process.",
    applications: [
      { label: "Pre-paint preparation for structural steel", icon: Paintbrush },
      { label: "Coating and paint removal prior to recoating", icon: Eraser },
      { label: "Weld spatter and oxide removal from fabricated components", icon: Zap },
      { label: "Industrial moulds, tooling, and press dies", icon: Wrench },
      { label: "Mill scale removal from new steel prior to priming", icon: Layers },
      { label: "Maintenance preparation of plant and infrastructure assets", icon: Settings },
      { label: "Shop-applied and site-applied coating preparation", icon: Palette },
    ],
    benefits: [
      {
        title: "No blast media",
        desc: "Eliminates containment, recovery, and disposal cost entirely.",
      },
      {
        title: "Selective layer removal",
        desc: "Remove only what needs to be removed — leave underlying material intact.",
      },
      {
        title: "No substrate damage",
        desc: "Safe for precision components and thin-section steel — no heat stress.",
      },
      {
        title: "Cleaner work environment",
        desc: "Significantly less dust than abrasive blasting. Safer for workers on-site.",
      },
      {
        title: "Confined space suitable",
        desc: "Manageable fume extraction requirements — deployable in enclosed areas.",
      },
      {
        title: "Improved coating adhesion",
        desc: "Clean, oxide-free surface delivers better bond strength for any coating system.",
      },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ServiceImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative min-h-[380px] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
    </div>
  );
}

/** Application card — icon centred at top, label below */
function ApplicationCard({ label, icon: Icon }: Application) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg bg-surface px-5 py-7 text-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand/10">
        <Icon size={22} strokeWidth={1.5} className="text-brand" aria-hidden />
      </div>
      <p className="text-[12px] font-bold leading-5 text-foreground/85">{label}</p>
    </div>
  );
}

/** Benefit card — checkmark icon top-left, bold title, description below */
function BenefitCard({ title, desc }: Benefit) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface px-5 py-6">
      <CheckCircle2
        size={20}
        strokeWidth={1.75}
        className="flex-shrink-0 text-brand"
        aria-hidden
      />
      <div>
        <h4 className="font-sans text-[13px] font-bold leading-snug">{title}</h4>
        <p className="mt-1.5 text-[12px] leading-5 text-muted">{desc}</p>
      </div>
    </div>
  );
}

function ServiceSection({ service }: { service: ServiceData }) {
  const { eyebrow, title, imageSrc, imageLeft, intro, howItWorks, applications, benefits } = service;

  return (
    <section id={service.id} className="border-t border-border" style={{ scrollMarginTop: "24px" }}>

      {/* ── Header row ─────────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1280px] px-8 pt-20 pb-14">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
          {eyebrow}
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <h2 className="font-sans text-4xl font-bold leading-tight md:text-5xl">
            {title}
          </h2>
          <p className="self-end text-[14px] leading-7 text-muted md:pt-3">
            {intro}
          </p>
        </div>
      </div>

      {/* ── Image  +  How It Works ──────────────────────────────────── */}
      <div className="border-t border-border">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 md:grid-cols-2">

          {/* Image placeholder — alternates sides */}
          <div
            className={[
              "border-b border-border md:border-b-0",
              imageLeft
                ? "md:order-first md:border-r"
                : "md:order-last md:border-l",
              "border-border",
            ].join(" ")}
          >
            <ServiceImage src={imageSrc} alt={title} />
          </div>

          {/* How It Works */}
          <div
            className={`px-8 py-14 ${imageLeft ? "md:order-last" : "md:order-first"}`}
          >
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              How It Works
            </p>
            <p className="text-[14px] leading-7 text-muted">{howItWorks}</p>
          </div>
        </div>
      </div>

      {/* ── Ideal Applications ─────────────────────────────────────── */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1280px] px-8 pt-12 pb-2">
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Ideal Applications
          </p>
        </div>
        <div className="mx-auto max-w-[1280px] px-8 pb-14">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {applications.map((app) => (
              <ApplicationCard key={app.label} {...app} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Key Benefits ───────────────────────────────────────────── */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1280px] px-8 pt-12 pb-2">
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Key Benefits
          </p>
        </div>
        <div className="mx-auto max-w-[1280px] px-8 pb-16">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {benefits.map((b) => (
              <BenefitCard key={b.title} {...b} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Header />
      <ScrollToTop />

      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
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
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Our Services
          </p>
          <h1 className="max-w-3xl font-sans text-5xl font-bold leading-[1.05] md:text-[64px]">
            Setting a new standard for laser cleaning in New Zealand.
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-7 text-muted">
            From structural steel rust removal to vehicle underbody treatment and
            industrial surface prep — NZLCS delivers chemical-free, residue-free
            cleaning for projects across New Zealand.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-10">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/60 hover:text-brand transition-colors"
              >
                <span className="text-brand">{s.eyebrow.replace("SERVICE ", "0")}</span>
                <span className="h-px w-6 bg-border transition-colors group-hover:bg-brand" />
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ──────────────────────────────────────────────── */}
      {services.map((s) => (
        <ServiceSection key={s.id} service={s} />
      ))}

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-border">
        {/* Header */}
        <div className="mx-auto max-w-[1280px] px-8 pt-20 pb-14">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            FAQ
          </p>
          <h2 className="font-sans text-4xl font-bold leading-tight md:text-5xl">
            Frequently asked questions.
          </h2>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-[1280px] px-8">
          <ServicesAccordion />
        </div>

        <div className="h-20" aria-hidden />
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-[1280px] px-8 py-24 text-center">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Get in Touch
          </p>
          <h2 className="mx-auto max-w-2xl font-sans text-4xl font-bold leading-tight md:text-5xl whitespace-nowrap">
            Not sure which service you need?
          </h2>
          <p className="mt-6 text-[15px] leading-7 text-muted">
            Send us a photo of the job and we&apos;ll assess it and respond within two business days.<br />
            No obligation — just a straight answer.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <a
              href="/contact"
              className="inline-block bg-brand px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-on-brand transition-colors hover:bg-brand-light"
            >
              Get a Free Quote →
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-10 px-8 py-20 md:grid-cols-4">
          <div>
            <Image src={LOGO_SRC} alt="NZLCS" width={96} height={96} className="h-24 w-auto" />
            <p className="mt-4 text-[12px] leading-6 text-muted">
              NZ Laser Cleaning Solutions — New Zealand&apos;s eco-friendly laser
              cleaning specialists.
            </p>
          </div>
          <div>
            <h5 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]">Services</h5>
            <ul className="space-y-2 text-[13px] text-muted">
              {services.map((s) => (
                <li key={s.id}>
                  <a href={`/services#${s.id}`} className="transition-colors hover:text-brand">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]">Company</h5>
            <ul className="space-y-2 text-[13px] text-muted">
              {(
                [
                  ["About Us", "/about"],
                  ["Gallery", "/gallery"],
                  ["Blog", "/blog"],
                  ["Contact", "/contact"],
                ] as [string, string][]
              ).map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]">Contact</h5>
            <ul className="space-y-2 text-[13px] text-muted">
              <li>Auckland, New Zealand</li>
              <li>
                <a href="mailto:info@nzlcs.co.nz" className="transition-colors hover:text-brand">
                  info@nzlcs.co.nz
                </a>
              </li>
              <li>
                <a href="tel:021419933" className="transition-colors hover:text-brand">
                  021 419 933
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center border border-border text-foreground transition-colors hover:border-brand hover:bg-brand hover:text-on-brand"
              >
                <span className="text-xs font-bold">f</span>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center border border-border text-foreground transition-colors hover:border-brand hover:bg-brand hover:text-on-brand"
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
