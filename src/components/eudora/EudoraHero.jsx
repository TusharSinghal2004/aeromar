import { useEffect, useState } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=80";

export default function ServicesHero() {
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
    <section className="relative min-h-[65vh] flex items-center overflow-hidden">
      {/* Background */}
      <img
        src={heroImage}
        alt="Aeromar Services"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: visible ? "scale(1)" : "scale(1.06)",
          transition: "transform 1.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081229]/96 via-[#081229]/82 to-[#081229]/50" />

      {/* Vertical gold accent */}
      <div
        className="absolute left-0 top-0 w-[3px] bg-[#C8960A]"
        style={{
          height: visible ? "100%" : "0%",
          transition: "height 1s cubic-bezier(0.16,1,0.3,1) 0.2s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full py-16 md:py-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div style={fade(0.15)} className="flex items-center gap-3 mb-5">
            <span
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                color: "#C8960A",
                fontSize: "0.75rem",
                fontWeight: 700,
              }}
            >
              Gateway to Asia
            </span>
          </div>

          {/* Heading */}
          <h1
            style={fade(0.26)}
            className="text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold text-white leading-[1.1]"
          >
            Global
            <br />
            Sourcing {"   "}
            <span className="relative inline-block">
              Delivered
              <span
                className="absolute bottom-0 left-0 h-[3px] bg-[#C8960A]"
                style={{
                  width: visible ? "100%" : "0%",
                  transition: "width 0.8s cubic-bezier(0.16,1,0.3,1) 0.9s",
                }}
              />
            </span>
            
            Worldwide
          </h1>

          {/* Description */}
          <p
            className="mt-5 leading-7"
            style={{
              ...fade(0.38),
              color: "rgba(255,255,255,0.7)",
              fontSize: "clamp(14px, 1.1vw, 18px)",
              maxWidth: "480px",
            }}
          >
            Bridging Asia's chemical manufacturing base with the world — through integrated sourcing, procurement, and logistics under one accountable roof.
          </p>


          {/* CTA Buttons */}
          <div
            style={fade(0.56)}
            className="mt-7 flex flex-col sm:flex-row gap-3"
          ></div>
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#F8F9FB] to-transparent" />
    </section>
  );
}