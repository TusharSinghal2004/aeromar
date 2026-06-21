import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function QuoteCTASection() {
  const [visible, setVisible] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fade = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(18px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  return (
    <section ref={ref} className="relative bg-white py-10 md:py-14 overflow-hidden">

      {/* Decorative left bar */}
      <div
        style={{
          height: visible ? "100%" : "0%",
          transition: "height 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s",
        }}
        className="absolute left-0 top-0 w-[3px] bg-[#C8960A]"
      />

      {/* Faint grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1E3A7B08 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-16 items-center">

          {/* Left Content */}
          <div>
            <div style={fade(0.08)} className="flex items-center gap-3 mb-4">
              <span className="uppercase tracking-[0.2em] text-[#C8960A] text-[10px] font-bold">
                Need A Reliable Logistics Partner?
              </span>
            </div>

            <h2 className="font-extrabold leading-[1.1]">
              <span
                style={fade(0.16)}
                className="block text-[#081229] text-xl sm:text-2xl lg:text-[2.1rem]"
              >
                Request a freight quote today 
              </span>
            </h2>

            {/* Trust strip */}
            <div
              style={fade(0.34)}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5"
            >
              {["FMC Licensed", "Senior-Level Team", "No Surprise Fees"].map((badge, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C8960A]" />
                  <span className="text-[#1E3A7B] text-xs font-semibold uppercase tracking-wide">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons — row on mobile, column on lg */}
          <div
            style={fade(0.3)}
            className="flex flex-row lg:flex-col gap-3 w-full lg:w-auto lg:min-w-[260px]"
          >
            <Link
              to="/quote"
              onMouseEnter={() => setHoveredBtn(0)}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                background: hoveredBtn === 0 ? "#b07d08" : "#C8960A",
                transform: hoveredBtn === 0 ? "translateY(-2px)" : "translateY(0)",
                boxShadow: hoveredBtn === 0 ? "0 8px 24px -6px #C8960A55" : "none",
                transition: "background 0.2s, transform 0.25s ease, box-shadow 0.25s ease",
              }}
              className="group flex-1 lg:flex-none text-white font-bold text-xs tracking-widest h-12 flex items-center justify-center gap-2 rounded-full"
            >
              GET QUOTE
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              onMouseEnter={() => setHoveredBtn(1)}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                borderColor: hoveredBtn === 1 ? "#1E3A7B" : "#1E3A7B55",
                color: hoveredBtn === 1 ? "#fff" : "#1E3A7B",
                background: hoveredBtn === 1 ? "#1E3A7B" : "transparent",
                transform: hoveredBtn === 1 ? "translateY(-2px)" : "translateY(0)",
                boxShadow: hoveredBtn === 1 ? "0 8px 24px -6px #1E3A7B44" : "none",
                transition: "all 0.25s ease",
              }}
              className="group flex-1 lg:flex-none font-bold text-xs tracking-widest h-12 flex items-center justify-center gap-2 rounded-full border"
            >
              CONTACT TEAM
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

        {/* Bottom divider */}
        <div
          style={{
            width: visible ? "100%" : "0%",
            transition: "width 1s cubic-bezier(0.16,1,0.3,1) 0.4s",
          }}
          className="mt-8 lg:mt-10 h-[1px] bg-gradient-to-r from-[#C8960A] via-[#1E3A7B22] to-transparent"
        />
      </div>
    </section>
  );
}