"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LOGO_SRC = "/logo-symbol-inverted.png";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > lastY && y > 120) {
        setHidden(true);
      } else if (y < lastY) {
        setHidden(false);
      }
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 font-sans border-b border-white/20 transition-all duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-8 py-2">
        <a href="/" className="flex items-center gap-3">
          <Image
            src={LOGO_SRC}
            alt="NZLCS"
            width={100}
            height={100}
            priority
            className="h-20 w-auto"
          />
          <span className="text-[18px] font-bold uppercase tracking-[0.15em] text-foreground/70 leading-none">
            NZLCS
          </span>
        </a>
        <nav className="hidden items-center gap-9 text-[13px] font-bold uppercase tracking-[0.18em] text-foreground md:flex">
          <a href="/" className="hover:text-brand-light">Home</a>
          <a href="/services" className="hover:text-brand-light">Services</a>
          <a href="/about" className="hover:text-brand-light">About</a>
          <a href="/gallery" className="hover:text-brand-light">Gallery</a>
          <a href="/blog" className="hover:text-brand-light">Blog</a>
          <a href="/contact" className="hover:text-brand-light">Contact</a>
        </nav>
        <div className="hidden items-center gap-5 text-foreground md:flex">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors hover:text-brand-light"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition-colors hover:text-brand-light"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
