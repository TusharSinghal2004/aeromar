import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const heroImage = "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80";

export default function EudoraHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">

      <img
        src={heroImage}
        alt="Global Sourcing Warehouse"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: visible ? "scale(1)" : "scale(1.06)",
          transition: "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#081229]/90 via-[#081229]/70 to-[#081229]/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full py-16 md:py-20">
        <div className="max-w-2xl">

          <div
            className="flex items-center gap-4 mb-5"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <span className="uppercase tracking-[0.3em] text-[#C8960A] text-xs font-bold">
              Gateway to Asia
            </span>
          </div>

          <h1
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease 0.38s, transform 0.8s ease 0.38s",
              lineHeight: 1.08,
            }}
          >
            <span style={{ display: "block", fontSize: "clamp(2.8rem, 7vw, 5rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.05, fontFamily: "serif" }}>
              Global
            </span>
            <span style={{ display: "block", fontSize: "clamp(2.8rem, 7vw, 5rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.05, fontFamily: "serif" }}>
              Sourcing.
            </span>
            <span style={{ display: "block", fontSize: "clamp(2.8rem, 7vw, 5rem)", fontWeight: 300, fontStyle: "italic", color: "#C8960A", lineHeight: 1.1, fontFamily: "serif" }}>
              Delivered.
            </span>
          </h1>

          <p
            className="mt-6 max-w-md text-sm md:text-base text-white/70 leading-7"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.54s, transform 0.8s ease 0.54s",
            }}
          >
            Bridging Asia's chemical manufacturing base with the world — through
            integrated sourcing, procurement, and logistics under one accountable roof.
          </p>

          <div
            className="mt-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.8s ease 0.68s, transform 0.8s ease 0.68s",
            }}
          >
            {/* <Link
              to="/services"
              className="inline-flex items-center gap-3 uppercase text-[#C8960A] hover:bg-[#C8960A] hover:text-[#081229]"
              style={{
                border: "1px solid #C8960A",
                padding: "0.75rem 1.75rem",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textDecoration: "none",
                background: "transparent",
                transition: "background 0.3s ease, color 0.3s ease",
              }}
            >
              Explore Our Services →
            </Link> */}
          </div>

        </div>
      </div>

      <div
        className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease 1.2s",
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{ width: "1px", height: "3rem", background: "rgba(255,255,255,0.3)" }} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}