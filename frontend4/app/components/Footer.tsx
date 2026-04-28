import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/logo-symbol-inverted.png";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-10 px-8 py-20 md:grid-cols-4">
        <div>
          <Image
            src={LOGO_SRC}
            alt="NZLCS"
            width={96}
            height={96}
            className="h-24 w-auto"
          />
          <p className="mt-4 type-caption">
            NZ Laser Cleaning Solutions — New Zealand&apos;s eco-friendly
            laser cleaning specialists.
          </p>
        </div>
        <div>
          <h5 className="mb-4 type-label">
            Services
          </h5>
          <ul className="space-y-2 type-caption">
            <li><Link href="/services" className="hover:text-brand-light transition-colors">Rust Removal</Link></li>
            <li><Link href="/services" className="hover:text-brand-light transition-colors">Graffiti Removal</Link></li>
            <li><Link href="/services" className="hover:text-brand-light transition-colors">Industrial Prep</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 type-label">
            Company
          </h5>
          <ul className="space-y-2 type-caption">
            <li><Link href="/about" className="hover:text-brand-light transition-colors">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-brand-light transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-brand-light transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 type-label">
            Contact
          </h5>
          <ul className="space-y-2 type-caption">
            <li>
              <a
                href="https://www.google.com/maps?q=Auckland,New+Zealand"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-light transition-colors"
              >
                Auckland, New Zealand
              </a>
            </li>
            <li>
              <a href="mailto:info@nzlcs.co.nz" className="hover:text-brand-light transition-colors">
                info@nzlcs.co.nz
              </a>
            </li>
            <li>
              <a href="tel:+64214199933" className="hover:text-brand-light transition-colors">
                021 419 933
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center border border-border text-foreground hover:bg-brand hover:text-on-brand hover:border-brand"
            >
              <span className="text-xs font-bold">f</span>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center border border-border text-foreground hover:bg-brand hover:text-on-brand hover:border-brand"
            >
              <span className="text-xs font-bold">IG</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-brand text-on-brand">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-8 py-4 type-label md:flex-row">
          <span>© {new Date().getFullYear()} NZLCS. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
