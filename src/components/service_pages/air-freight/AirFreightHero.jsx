import { useEffect, useState } from "react";
import heroImage from "../../../assets/images/hero-banner.png";

export default function OceanFreightHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay, extraStyles = {}) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0px)" : "translateY(24px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    ...extraStyles,
  });

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">

      {/* Background Image with zoom-in on load */}
      <img
        src={heroImage}
        alt="Ocean Freight"
        style={{
          transform: mounted ? "scale(1)" : "scale(1.06)",
          transition: "transform 1.4s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.8s ease 0.1s",
        }}
        className="absolute inset-0 bg-gradient-to-r from-[#081229]/95 via-[#081229]/85 to-[#081229]/60"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 py-20">
        <div className="max-w-2xl">

          {/* Breadcrumb */}
          <div
            style={anim(0.15)}
            className="flex items-center gap-3 text-[13px] uppercase tracking-[0.18em] mb-8"
          >
            <span className="text-white/70">Home</span>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Services</span>
            <span className="text-white/40">/</span>
            <span className="text-[#C8960A]">Air Freight</span>
          </div>

          {/* Label */}
          <div style={anim(0.28)} className="flex items-center gap-4 mb-5">
            
          </div>

          {/* Heading */}
          <h1
            style={anim(0.38)}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-none"
          >
            Air Freight
          </h1>

          {/* Subtitle */}
          <p
            style={anim(0.52)}
            className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-xl"
          >
            Time-critical, perishable and high value air-cargo
          </p>

        </div>
      </div>
    </section>
  );
}