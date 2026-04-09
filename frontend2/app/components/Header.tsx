import Image from "next/image";
import Link from "next/link";

const NAV = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b-[3px] border-border-hard">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo — far left */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/Fiverr Premium Kit/PNG Logo Files/Original Logo Symbol.png"
            alt="NZLCS logo"
            width={52}
            height={52}
            priority
            className="h-10 w-auto"
          />
          <span className="hidden sm:block font-bold tracking-tight text-lg leading-none">
            NZ<span className="text-primary">LCS</span>
          </span>
        </Link>

        {/* Nav — centered */}
        <nav className="hidden md:flex items-center gap-8 font-semibold uppercase text-sm tracking-wider">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA — far right */}
        <Link href="#contact" className="brut-btn brut-btn-primary text-xs sm:text-sm">
          Get a Free Quote
        </Link>
      </div>
    </header>
  );
}
