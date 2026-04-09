const REASONS = [
  {
    n: "01",
    title: "Chemical-free process",
    body: "Laser only — zero chemicals, zero waste. Safe for the environment and your team.",
  },
  {
    n: "02",
    title: "Pinpoint precision",
    body: "Only the contaminant is removed — the substrate stays intact and undamaged.",
  },
  {
    n: "03",
    title: "Mobile on-site service",
    body: "We come to you. Portable equipment means minimal disruption to your operations.",
  },
  {
    n: "04",
    title: "Broad material compatibility",
    body: "Steel, concrete, aluminium, brick — we handle a wide range of surfaces and substrates.",
  },
];

const STATS = [
  { v: "200+", l: "Projects Completed" },
  { v: "50+", l: "Corporate Clients" },
  { v: "5+", l: "Years in Operation" },
  { v: "NZ-wide", l: "Service Coverage" },
];

export default function WhyChoose() {
  return (
    <section id="about" className="bg-accent border-b-[3px] border-border-hard">
      {/* Stats strip — blocky row */}
      <div className="border-b-[3px] border-border-hard">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-x-[3px] divide-border-hard">
          {STATS.map((s) => (
            <div key={s.l} className="p-6 md:p-10 text-center">
              <div className="font-bold text-3xl md:text-5xl tracking-tight text-foreground">
                {s.v}
              </div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-widest text-muted font-semibold">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <span className="brut-eyebrow">Why NZLCS</span>
          <h2 className="mt-5 font-bold text-4xl md:text-5xl tracking-tight leading-none">
            Why choose <span className="text-primary">us?</span>
          </h2>
          <p className="mt-5 text-muted text-base md:text-lg leading-relaxed">
            We&apos;re setting a new standard for industrial cleaning in New Zealand —
            precise, safe, and kinder to the planet. Here&apos;s what you get when you work
            with us.
          </p>
        </div>

        {/* 4-cell brutalist grid, modeled after the Little Amps layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((r) => (
            <div key={r.n} className="brut-card bg-surface p-6 flex flex-col">
              <div className="aspect-[4/3] border-[3px] border-border-hard bg-background flex items-center justify-center">
                <span className="font-bold text-7xl text-primary leading-none">
                  {r.n}
                </span>
              </div>
              <h3 className="mt-5 font-bold text-xl tracking-tight">{r.title}</h3>
              <p className="mt-2 text-muted leading-relaxed text-sm">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
