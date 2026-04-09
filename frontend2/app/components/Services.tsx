const SERVICES = [
  {
    n: "01",
    title: "Rust & Oxide Removal",
    body: "Remove rust and oxidation from steel structures, pipelines, bridges, and machinery without surface damage.",
    tags: ["Steel structures", "Pipelines", "Bridges"],
  },
  {
    n: "02",
    title: "Graffiti Removal",
    body: "Eliminate graffiti from public infrastructure, building facades, and commercial properties — chemical-free.",
    tags: ["Facades", "Concrete", "Brick"],
  },
  {
    n: "03",
    title: "Industrial Surface Prep",
    body: "Pre-paint surface preparation, coating removal, and weld cleanup for manufacturing and industrial sites.",
    tags: ["Coating removal", "Weld cleaning", "Manufacturing"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background border-b-[3px] border-border-hard">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="brut-eyebrow">What We Do</span>
            <h2 className="mt-5 font-bold text-4xl md:text-5xl tracking-tight leading-none">
              Laser cleaning, <span className="text-primary">done right.</span>
            </h2>
          </div>
          <p className="text-muted max-w-md text-base leading-relaxed">
            Precise, eco-friendly laser technology for a wide range of surfaces and
            industries — no chemicals, no damage, no trace.
          </p>
        </div>

        {/* 3-column brutalist grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.n}
              className="brut-card p-7 flex flex-col hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-baseline justify-between border-b-[3px] border-border-hard pb-4">
                <span className="font-bold text-5xl text-primary leading-none">{s.n}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted">
                  Service
                </span>
              </div>
              <h3 className="mt-6 font-bold text-2xl tracking-tight">{s.title}</h3>
              <p className="mt-3 text-muted leading-relaxed flex-1">{s.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 border-[2px] border-border-hard text-xs font-semibold uppercase tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
