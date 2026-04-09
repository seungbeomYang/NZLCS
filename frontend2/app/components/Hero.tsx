import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative border-b-[3px] border-border-hard">
      {/* Background: will become a 5s looping video later. For now, hero.png. */}
      <div className="relative h-[calc(100vh-5rem)] min-h-[560px] max-h-[820px] w-full overflow-hidden">
        <Image
          src="/hero.png"
          alt="Laser cleaning in action"
          fill
          priority
          className="object-cover"
        />
        {/* Dark wash so overlay text stays legible */}
        <div className="absolute inset-0 bg-[#0b0703]/55" />

        {/* Brutalist overlay text box — bottom-left */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-5 lg:px-8 pb-10 md:pb-16">
            <div className="brut-card bg-background max-w-2xl p-6 md:p-10">
              <span className="brut-eyebrow">NZ Laser Cleaning Service</span>
              <h1 className="mt-5 font-bold text-4xl md:text-6xl leading-[0.95] tracking-tight text-foreground">
                Clean with laser precision.
                <br />
                <span className="text-primary">Leave no trace</span> on the environment.
              </h1>
              <p className="mt-5 text-base md:text-lg text-muted max-w-xl leading-relaxed">
                We remove rust, graffiti and surface contaminants using advanced laser
                technology — no chemicals, no damage. New Zealand&apos;s trusted eco-friendly
                cleaning solution for industrial, commercial and public facilities.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="brut-btn brut-btn-primary">
                  Get a Free Quote
                </Link>
                <Link href="#services" className="brut-btn">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
