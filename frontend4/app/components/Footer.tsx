import Image from "next/image";

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
          <p className="mt-4 text-[12px] leading-6 text-muted">
            NZ Laser Cleaning Solutions — New Zealand&apos;s eco-friendly
            laser cleaning specialists.
          </p>
        </div>
        <div>
          <h5 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]">
            Services
          </h5>
          <ul className="space-y-2 text-[13px] text-muted">
            <li>Rust Removal</li>
            <li>Graffiti Removal</li>
            <li>Industrial Prep</li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]">
            Company
          </h5>
          <ul className="space-y-2 text-[13px] text-muted">
            <li>About Us</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]">
            Contact
          </h5>
          <ul className="space-y-2 text-[13px] text-muted">
            <li>Auckland, New Zealand</li>
            <li>info@nzlcs.co.nz</li>
            <li>021 419 933</li>
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
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] md:flex-row">
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
