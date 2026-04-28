import type { Metadata } from "next";
import { Crosshair, Layout, Leaf, Search, type LucideIcon } from "lucide-react";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About — NZLCS | NZ Laser Cleaning Solutions",
  description:
    "Learn about NZ Laser Cleaning Solutions — New Zealand's specialist in chemical-free, precision laser cleaning for industrial, structural, and vehicle applications.",
};

// ─── Values cards data ────────────────────────────────────────────────────────

interface ValueData {
  number: string;
  category: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  accentColor: string;
}

const valueCards: ValueData[] = [
  {
    number: "01",
    category: "Environment",
    title: "Environmentally responsible",
    desc: "Zero chemicals. No abrasive waste. No hazardous disposal. Laser cleaning is the responsible choice for the environment — and for the people working on-site.",
    icon: Leaf,
    accentColor: "#B25D1F",
  },
  {
    number: "02",
    category: "Precision",
    title: "Precision without compromise",
    desc: "We use high-powered laser technology calibrated for each job. The contaminant is removed. The substrate is left exactly as it should be — nothing more, nothing less.",
    icon: Crosshair,
    accentColor: "#C47A3A",
  },
  {
    number: "03",
    category: "Integrity",
    title: "Honest and straightforward",
    desc: "We assess each job fairly, quote clearly, and deliver what we promise. No upselling, no guesswork — just reliable work and clear communication, every time.",
    icon: Search,
    accentColor: "#8B4A18",
  },
  {
    number: "04",
    category: "Partnership",
    title: "End-to-end service",
    desc: "Through our partnership with NZCPM, we coordinate the full cycle — laser cleaning through to primer, topcoats, and intumescent paint. One team, from bare metal to finished surface.",
    icon: Layout,
    accentColor: "#D4934F",
  },
];



function ValueCard({ card }: { card: ValueData }) {
  const { number, category, title, desc, icon: Icon, accentColor } = card;
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-surface p-8">
      {/* Coloured top border */}
      <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: accentColor }} />

      {/* Icon in rounded square */}
      <div
        className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg"
        style={{ backgroundColor: `${accentColor}1a` }}
      >
        <Icon size={20} strokeWidth={1.5} style={{ color: accentColor }} />
      </div>

      {/* Number — category */}
      <p
        className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]"
        style={{ color: accentColor }}
      >
        {number} — {category}
      </p>

      <h3 className="font-sans text-xl font-bold leading-snug">{title}</h3>
      <p className="mt-3 text-[13px] leading-6 text-muted">{desc}</p>
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
          <h1 className="max-w-5xl font-sans text-5xl font-bold leading-[1.05] md:text-[64px]">
            Built by Industry Veterans.
            <br />
            Powered by Laser Technology.
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-7 text-muted">
            NZLCS was founded by industry professionals with deep backgrounds
            in construction, coatings, and infrastructure — people who
            understood the limitations of traditional cleaning methods and
            wanted to offer something better.
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
              Built on 50+ years of industry experience in NZ
            </h2>
            <div className="mt-8 space-y-5 text-[14px] leading-7 text-muted">
              <p>
                NZLCS was established by three Auckland-based partners — BK,
                Bob, and Dan — each with a strong construction background and
                hands-on careers spanning decorative painting, protective
                coatings, anti-graffiti systems, and intumescent fire
                protection. Between them, they bring over 50 years of combined
                trade experience to every project.
              </p>
              <p>
                That experience shaped how we see the problem. Sandblasting
                and chemical cleaning have long been the industry default —
                but they leave behind residue, waste, and substrate damage
                that clients are left to manage. Laser cleaning offered a
                cleaner answer: no abrasive media, no chemical waste, no
                damage to the surface beneath. We built NZLCS to bring that
                technology to New Zealand in a way that is practical,
                commercially sound, and genuinely useful for the industries
                that need it most.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative min-h-[420px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Service_and_About_sample_image/8 - about us.JPG"
              alt="Our Story"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ────────────────────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1280px] px-8 pt-24 pb-12">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            What We Stand For
          </p>
          <h2 className="font-sans text-4xl font-bold leading-tight md:text-5xl">
            Our values.
          </h2>
        </div>

        <div className="mx-auto max-w-[1280px] px-8 pb-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {valueCards.map((v) => (
              <ValueCard key={v.number} card={v} />
            ))}
          </div>
          <p className="mt-8 text-center text-[13px] italic text-muted/60">
            These four principles guide every project we take on — from first
            assessment through to final QA.
          </p>
        </div>
        <div className="h-16" aria-hidden />
      </section>

      {/* ── TEAM / EXPERTISE ──────────────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1280px] px-8 pt-24 pb-24 text-center">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Our Expertise
          </p>
          <h2 className="mx-auto max-w-2xl font-sans text-5xl font-bold leading-tight md:text-6xl">
            Industry knowledge you can rely on.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[18px] leading-8 text-muted">
            Our team&apos;s background spans construction estimating, quantity
            surveying, protective coatings, and project delivery. We
            don&apos;t just operate the equipment — we understand the broader
            project context: the coating systems involved, the surface
            preparation standards required, the inspection and QA
            expectations, and the commercial pressures our clients are
            working with. That depth of knowledge is what sets us apart from
            equipment-only operators.
          </p>
        </div>
      </section>


      <Footer />
    </div>
  );
}
