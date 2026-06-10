import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/images/hero-banner.png";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[65vh] flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Aeromar Services"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081229]/95 via-[#081229]/85 to-[#081229]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full py-16 md:py-20">

        <div className="max-w-4xl">

          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] mb-6">
            <span className="text-white/70">Home</span>

            <span className="text-white/40">/</span>

            <span className="text-[#C8960A]">
              Services
            </span>
          </div>

          {/* Section Label */}
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-[2px] bg-[#C8960A]" />

            <span className="uppercase tracking-[0.22em] text-[#C8960A] text-xs font-semibold">
              Services
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.08] max-w-4xl">
            Six tightly integrated
            <br />
            services. One accountable
            <br />
            team.
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-3xl text-base md:text-lg text-white/80 leading-7">
            From ocean and air freight to customs brokerage,
            warehousing, drayage, and door-to-door programs —
            Aeromar engineers the full move.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">

            <button className="bg-[#C8960A] text-[#081229] font-semibold px-6 py-3 flex items-center justify-center gap-2 hover:opacity-90 transition">
              Request A Quote
              <ArrowRight size={16} />
            </button>

            <button className="border border-white/30 text-white font-semibold px-6 py-3 hover:bg-white/10 transition">
              Contact Team
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}