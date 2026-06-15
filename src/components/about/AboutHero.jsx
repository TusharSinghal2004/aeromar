import { useEffect, useState } from "react";

// Using a placeholder since we can't import local assets in preview
const heroImage = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80";

export default function AboutHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="About Aeromar"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: visible ? "scale(1)" : "scale(1.06)",
          transition: "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081229]/95 via-[#081229]/85 to-[#081229]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full py-16 md:py-20">
        <div className="max-w-3xl">

          {/* Section Label */}
          <div
            className="flex items-center gap-4 mb-5"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <span className="uppercase tracking-[0.3em] text-[#C8960A] text-s font-bold">
              About Aeromar
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.08]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease 0.38s, transform 0.8s ease 0.38s",
            }}
          >
            A senior-level logistics team
            <br />
            built for shippers who refuse
            <br />
            to gamble on their
            <br />
            supply chain.
          </h1>

          {/* Description */}
          <p
            className="mt-5 max-w-2xl text-base md:text-lg text-white/80 leading-7"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.54s, transform 0.8s ease 0.54s",
            }}
          >
            Aeromar Global Logistics Solutions LLC was founded to deliver
            enterprise-grade freight forwarding and NVOCC services with
            the personal accountability of a boutique partner.
          </p>

          {/* CTA Buttons */}
          <div
            className="mt-6 flex flex-col sm:flex-row gap-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.8s ease 0.68s, transform 0.8s ease 0.68s",
            }}
          >
           

            
          </div>

        </div>
      </div>
      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#F8F9FB] to-transparent" />
    </section>
  );
}