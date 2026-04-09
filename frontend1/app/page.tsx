import Image from "next/image";
import { Wrench, Palette, Factory } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "./components/Navbar";

/* ─── Data ─────────────────────────────────────────────────── */

const services: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Wrench,
    title: "Rust & Oxide Removal",
    desc: "Remove rust and oxidation from steel structures, pipelines, bridges, and machinery without surface damage.",
  },
  {
    icon: Palette,
    title: "Graffiti Removal",
    desc: "Eliminate graffiti from public infrastructure, building facades, and commercial properties chemical-free.",
  },
  {
    icon: Factory,
    title: "Industrial Surface Prep",
    desc: "Pre-paint surface preparation, coating removal, and weld cleanup for manufacturing and industrial sites.",
  },
];

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "50+", label: "Corporate Clients" },
  { value: "5+", label: "Years in Operation" },
  { value: "NZ-Wide", label: "Service Coverage" },
];


/* ─── Page ──────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="bg-neutral text-secondary font-josefin">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="h-screen flex flex-col pt-18 bg-neutral">
        {/* Text block — compact */}
        <div className="max-w-4xl mx-auto w-full px-6 lg:px-12 py-8 flex flex-col items-center text-center gap-5">
          <p className="text-xs tracking-[0.3em] uppercase text-primary">
            New Zealand Laser Cleaning Services
          </p>

          <h1 className="text-3xl lg:text-[3rem] xl:text-[3.5rem] font-bold leading-[1.15] tracking-tight text-secondary">
            <span className="block lg:whitespace-nowrap">Clean with laser precision.</span>
            <span className="block lg:whitespace-nowrap text-primary">Leave no trace on the environment.</span>
          </h1>

          <p className="text-base text-secondary/65 max-w-2xl leading-relaxed">
            We remove rust, graffiti, and surface contaminants using advanced laser technology
            — no chemicals, no damage. New Zealand&apos;s trusted eco-friendly cleaning solution
            for industrial, commercial, and public facilities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center px-7 py-3 bg-secondary text-neutral text-sm tracking-widest uppercase hover:bg-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3 bg-primary text-white text-sm tracking-widest uppercase hover:bg-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Hero media — flex-1 fills remaining viewport height */}
        {/* TODO: <video> 태그로 교체 예정 (autoPlay muted loop playsInline) */}
        <div className="relative flex-1 overflow-hidden">
          <Image
            src="/example.jpg"
            alt="Laser cleaning machine in action"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 flex items-end justify-start p-6 bg-gradient-to-t from-secondary/40 to-transparent pointer-events-none">
            <span className="text-xs tracking-widest uppercase text-white/60 border border-white/20 px-3 py-1.5">
              Video placeholder — replace with 5s loop
            </span>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="bg-secondary text-neutral py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="text-4xl lg:text-5xl font-bold text-primary leading-none">{s.value}</span>
              <span className="text-xs tracking-widest uppercase text-neutral/50 mt-2 leading-relaxed">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section id="services" className="py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-secondary mb-2">
              Services
            </h2>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">What We Do</p>
            <p className="text-lg text-secondary/65 max-w-2xl leading-relaxed">
              Precise, eco-friendly laser technology for a wide range of surfaces and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-secondary/10">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-neutral p-10 flex flex-col gap-6 group hover:bg-primary/5 transition-colors"
                >
                  <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                  <Icon size={36} strokeWidth={1.25} className="text-primary" />
                  <p className="text-sm text-secondary/60 leading-relaxed">{s.desc}</p>
                  <a
                    href="#contact"
                    className="mt-auto inline-flex items-center gap-1.5 text-sm text-primary hover:text-accent transition-colors"
                  >
                    Learn more →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── Why Choose Us ────────────────────────────────────── */}
      <section id="why" className="py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-secondary mb-2">
              Why Choose Us?
            </h2>
            <p className="text-xs tracking-[0.3em] uppercase text-primary">Why NZLCS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-secondary/10">
            {[
              {
                num: "01",
                title: "Chemical-free process",
                desc: "Laser only — zero chemicals, zero waste. Safe for the environment and your team.",
              },
              {
                num: "02",
                title: "Pinpoint precision",
                desc: "Only the contaminant is removed — the substrate stays intact and undamaged.",
              },
              {
                num: "03",
                title: "Mobile on-site service",
                desc: "We come to you. Portable equipment means minimal disruption to your operations.",
              },
              {
                num: "04",
                title: "Broad material compatibility",
                desc: "Steel, concrete, aluminium, brick — we handle a wide range of surfaces and substrates.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-neutral p-10 lg:p-14 flex flex-col gap-5 group hover:bg-primary/5 transition-colors"
              >
                <span className="text-xs tracking-widest text-primary">{item.num}</span>
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="text-sm text-secondary/60 leading-relaxed max-w-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section
        id="contact"
        className="py-28 px-6 lg:px-12 bg-primary text-white"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="flex flex-col gap-4 max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              Ready to get started?
            </h2>
            <p className="text-white/70 leading-relaxed">
              Contact us today for a free, no-obligation quote.
              <br />
              We&apos;ll assess your project and recommend the right laser cleaning solution.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            {/* TODO: href를 실제 Contact 페이지 경로로 교체 (예: href="/contact") */}
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary text-sm tracking-widest uppercase hover:bg-neutral transition-colors"
            >
              Request a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="bg-secondary text-neutral px-6 lg:px-12 pt-16 pb-10">
        <div className="max-w-7xl mx-auto">
          {/* Top row: logo + columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-neutral/10">
            {/* Logo */}
            <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
              <Image
                src="/Fiverr Premium Kit/PNG Logo Files/Transparent Logo.png"
                alt="NZLCS"
                width={150}
                height={50}
                className="object-contain brightness-0 invert opacity-70"
              />
              <p className="text-xs text-neutral/40 leading-relaxed">
                New Zealand<br />Laser Cleaning Services
              </p>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold tracking-widest uppercase text-neutral/80">
                Services
              </span>
              {/* TODO: 각 href를 실제 서비스 페이지 경로로 교체 */}
              <a href="/services/rust-removal"     className="text-xs tracking-wide text-neutral/40 hover:text-primary transition-colors">Rust Removal</a>
              <a href="/services/graffiti-removal" className="text-xs tracking-wide text-neutral/40 hover:text-primary transition-colors">Graffiti Removal</a>
              <a href="/services/industrial-prep"  className="text-xs tracking-wide text-neutral/40 hover:text-primary transition-colors">Industrial Prep</a>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold tracking-widest uppercase text-neutral/80">
                Company
              </span>
              {/* TODO: 각 href를 실제 페이지 경로로 교체 */}
              <a href="/about"   className="text-xs tracking-wide text-neutral/40 hover:text-primary transition-colors">About Us</a>
              <a href="/gallery" className="text-xs tracking-wide text-neutral/40 hover:text-primary transition-colors">Gallery</a>
              <a href="/blog"    className="text-xs tracking-wide text-neutral/40 hover:text-primary transition-colors">Blog</a>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold tracking-widest uppercase text-neutral/80">
                Contact
              </span>
              <span className="text-xs tracking-wide text-neutral/40">Auckland, NZ</span>
              <a href="mailto:info@nzlcs.com" className="text-xs tracking-wide text-neutral/40 hover:text-primary transition-colors">info@nzlcs.com</a>
              <a href="tel:021419933"         className="text-xs tracking-wide text-neutral/40 hover:text-primary transition-colors">021 419 933</a>
            </div>
          </div>

          {/* Bottom row: copyright */}
          <div className="pt-6 text-xs text-neutral/30 tracking-wide">
            © {new Date().getFullYear()} NZLCS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
