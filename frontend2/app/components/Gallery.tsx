"use client";

import { useState } from "react";

type Item = {
  title: string;
  category: string;
};

const ITEMS: Item[] = [
  { title: "Auckland Bridge", category: "Rust Removal" },
  { title: "CBD Building", category: "Graffiti Removal" },
  { title: "Factory Pipelines", category: "Surface Prep" },
  { title: "Industrial Equipment", category: "Coating Removal" },
  { title: "Steel Structure", category: "Surface Treatment" },
  { title: "Weld Seam", category: "Weld Cleaning" },
];

function GalleryCard({ item }: { item: Item }) {
  const [mode, setMode] = useState<"BEFORE" | "AFTER">("BEFORE");
  return (
    <div className="brut-card bg-surface flex flex-col">
      {/* Hard-bordered image frame — instant toggle, no slider */}
      <div className="relative aspect-[4/3] border-b-[3px] border-border-hard bg-background overflow-hidden">
        <div
          className={`absolute inset-0 flex items-center justify-center font-bold text-2xl uppercase tracking-widest transition-colors ${
            mode === "BEFORE" ? "bg-[#2a1f14] text-accent" : "bg-primary text-white"
          }`}
        >
          {mode}
        </div>
        {/* Corner badge */}
        <div className="absolute top-3 left-3 brut-eyebrow !bg-background !text-foreground !py-1 !px-2 text-[10px]">
          {item.category}
        </div>
      </div>

      <div className="p-5 flex items-center justify-between gap-3">
        <div>
          <h3 className="font-bold text-lg tracking-tight leading-tight">
            {item.title}
          </h3>
          <p className="text-xs text-muted uppercase tracking-widest font-semibold mt-1">
            {item.category}
          </p>
        </div>
        {/* Instant-toggle buttons */}
        <div className="flex border-[3px] border-border-hard shrink-0">
          {(["BEFORE", "AFTER"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                mode === m
                  ? "bg-primary text-white"
                  : "bg-surface text-foreground hover:bg-accent"
              } ${m === "BEFORE" ? "border-r-[3px] border-border-hard" : ""}`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-background border-b-[3px] border-border-hard">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="brut-eyebrow">Project Gallery</span>
            <h2 className="mt-5 font-bold text-4xl md:text-5xl tracking-tight leading-none">
              Before &amp; <span className="text-primary">After.</span>
            </h2>
          </div>
          <p className="text-muted max-w-md text-base leading-relaxed">
            Tap the BEFORE / AFTER buttons to swap the image inside each frame. No
            sliding, no fuss — just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ITEMS.map((item) => (
            <GalleryCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
