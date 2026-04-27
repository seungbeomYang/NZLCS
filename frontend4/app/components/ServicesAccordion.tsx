"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

// Content to be filled in later
const faqs: FaqItem[] = [];

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  if (faqs.length === 0) {
    return (
      <div className="border border-border px-8 py-14 text-center">
        <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-muted/60">
          FAQ content coming soon
        </p>
      </div>
    );
  }

  return (
    <div className="border-t border-border">
      {faqs.map((item, i) => (
        <div key={i} className="border-b border-border">
          <button
            type="button"
            onClick={() => toggle(i)}
            className="flex w-full items-center justify-between gap-8 px-8 py-7 text-left"
            aria-expanded={openIndex === i}
          >
            <span className="font-sans text-[15px] font-bold leading-snug">
              {item.q}
            </span>
            <span
              aria-hidden
              className={`flex-shrink-0 font-sans text-2xl font-bold text-brand transition-transform duration-200 ${
                openIndex === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-8 pb-7 text-[13px] leading-6 text-muted">
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
