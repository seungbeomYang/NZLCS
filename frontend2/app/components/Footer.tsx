import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="bg-background p-4 inline-block brut-border brut-shadow-sm">
            <Image
              src="/Fiverr Premium Kit/PNG Logo Files/Original Logo Symbol.png"
              alt="NZLCS"
              width={60}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-accent/80 max-w-xs">
            NZ Laser Cleaning Solutions — New Zealand&apos;s eco-friendly laser cleaning
            specialists. New trend, no hassle.
          </p>
        </div>

        {/* Services */}
        <FooterCol title="Services">
          <li>Rust & Oxide Removal</li>
          <li>Graffiti Removal</li>
          <li>Industrial Surface Prep</li>
        </FooterCol>

        {/* Company */}
        <FooterCol title="Company">
          <li>
            <Link href="#about" className="hover:text-primary">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#gallery" className="hover:text-primary">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-primary">
              Contact
            </Link>
          </li>
        </FooterCol>

        {/* Contact */}
        <FooterCol title="Contact">
          <li>Auckland, New Zealand</li>
          <li>
            <a href="mailto:info@nzlcs.co.nz" className="hover:text-primary">
              info@nzlcs.co.nz
            </a>
          </li>
          <li>
            <a href="tel:+64214119933" className="hover:text-primary">
              021 419 933
            </a>
          </li>
          <li className="pt-3 flex gap-3">
            <SocialBtn label="FB" href="#" />
            <SocialBtn label="IG" href="#" />
          </li>
        </FooterCol>
      </div>

      <div className="border-t-[3px] border-background/20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs uppercase tracking-widest text-accent/70">
          <div>© 2026 NZLCS — All rights reserved.</div>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="font-bold uppercase tracking-widest text-sm text-primary mb-4">
        {title}
      </h4>
      <ul className="space-y-2 text-sm text-accent/90">{children}</ul>
    </div>
  );
}

function SocialBtn({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="w-10 h-10 flex items-center justify-center border-[3px] border-background bg-primary text-white font-bold text-xs hover:bg-primary-dark transition-colors"
      aria-label={label}
    >
      {label}
    </a>
  );
}
