import { useEffect, useState } from "react";

const heroImage = "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&q=80";

export default function LeadershipHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
  });

  return (
    <section className="relative min-h-[82vh] flex items-center overflow-hidden">

      {/* Background */}
      <img
        src={heroImage}
        alt="Aeromar Leadership"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          transform: visible ? "scale(1)" : "scale(1.06)",
          transition: "transform 1.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      />

      {/* Layered overlays — dark on left, lighter on right to let building breathe */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081229]/97 via-[#081229]/80 to-[#081229]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#081229]/70 via-transparent to-transparent" />

      {/* Vertical gold accent */}
      <div
        className="absolute left-0 top-0 w-[3px] bg-[#C8960A]"
        style={{
          height: visible ? "100%" : "0%",
          transition: "height 1s cubic-bezier(0.16,1,0.3,1) 0.2s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full py-20 md:py-28">
        <div className="max-w-2xl">

          {/* Label */}
          <div style={fade(0.15)} className="flex items-center gap-3 mb-6">
            <span className="uppercase tracking-[0.3em] text-[#C8960A] text-s font-bold">
              Our Leadership
            </span>
          </div>

          {/* Heading */}
          <h1
            style={fade(0.26)}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-6"
          >
            Six decades of
            <br />
            combined{" "}
            <span className="relative inline-block">
              logistics
              <span
                className="absolute bottom-0 left-0 h-[3px] bg-[#C8960A]"
                style={{
                  width: visible ? "100%" : "0%",
                  transition: "width 0.8s cubic-bezier(0.16,1,0.3,1) 0.9s",
                }}
              />
            </span>
            <br />
            expertise.
          </h1>

          {/* Description */}
          <p style={fade(0.38)} className="text-sm md:text-base text-white/70 leading-7 max-w-lg mb-8">
            Meet the founding team behind Aeromar — senior operators with the
            relationships, scar tissue, and judgment for global shipping demands.
          </p>

          {/* Stats */}
          <div
            style={fade(0.5)}
            className="flex gap-10 pt-7 border-t border-white/10"
          >
            {[
              { value: "60+", label: "Combined Years" },
              { value: "2", label: "Founding Partners" },
              { value: "3+", label: "Decades Each" },
            ].map(({ value, label }, i) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-[#C8960A] text-2xl font-extrabold leading-none">
                  {value}
                </span>
                <span className="text-white/45 text-[10px] uppercase tracking-[0.2em] font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#F8F9FB] to-transparent" />

    </section>
  );
}