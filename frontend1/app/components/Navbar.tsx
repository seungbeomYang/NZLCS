"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

// 나중에 실제 링크로 교체
const INSTAGRAM_URL = "https://www.instagram.com";
const FACEBOOK_URL = "https://www.facebook.com";

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral/95 backdrop-blur-sm border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center h-18 gap-8">

        {/* Logo */}
        <a href="/" className="shrink-0">
          <Image
            src="/Fiverr Premium Kit/PNG Logo Files/Transparent Logo.png"
            alt="NZLCS"
            width={165}
            height={54}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8 flex-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-xs tracking-widest uppercase text-secondary/60 hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social icons — desktop */}
        <div className="hidden lg:flex items-center gap-4 ml-auto">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-secondary/50 hover:text-primary transition-colors"
          >
            <IconInstagram />
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-secondary/50 hover:text-primary transition-colors"
          >
            <IconFacebook />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2 ml-auto"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-secondary transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-secondary transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-secondary transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-neutral border-t border-black/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xs tracking-widest uppercase text-secondary/60 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          {/* Social icons — mobile */}
          <div className="flex items-center gap-5 pt-2 border-t border-black/5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-secondary/50 hover:text-primary transition-colors"
            >
              <IconInstagram />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-secondary/50 hover:text-primary transition-colors"
            >
              <IconFacebook />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
