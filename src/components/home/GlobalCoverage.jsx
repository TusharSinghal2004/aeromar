import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

const regions = [
  {
    label: "North America",
    ports: "USA HQ · Major ports & inland hubs",
    stat: "12K+",
    statLabel: "Shipments/yr",
    color: "#C8960A",
  },
  {
    label: "India",
    ports: "Mundra · Nhava Sheva · Chennai · Tuticorin",
    stat: "30+",
    statLabel: "Yrs Experience",
    color: "#1A73C8",
  },
  {
    label: "Middle East",
    ports: "Jebel Ali · Dammam · Sohar",
    stat: "50+",
    statLabel: "Countries",
    color: "#C8960A",
  },
  {
    label: "Europe",
    ports: "Rotterdam · Antwerp · Hamburg",
    stat: "500+",
    statLabel: "Carriers",
    color: "#1A73C8",
  },
  {
    label: "Southeast Asia",
    ports: "Singapore · Port Klang · Ho Chi Minh",
    stat: "99%",
    statLabel: "On-Time Rate",
    color: "#C8960A",
  },
];

export default function GlobalCoverageSection() {
  const [leftRef, leftInView] = useInView(0.1);
  const [rightRef, rightInView] = useInView(0.1);
  const [hovered, setHovered] = useState(null);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    if (!leftInView) return;
    let p = 0;
    const interval = setInterval(() => {
      p += 2;
      setLineProgress(p);
      if (p >= 100) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, [leftInView]);

  return (
    <section className="bg-[#081229] py-14 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div
            ref={leftRef}
            style={{
              opacity: leftInView ? 1 : 0,
              transform: leftInView ? "translateY(0px)" : "translateY(48px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="h-0.5 bg-[#C8960A]"
                style={{
                  width: `${lineProgress * 0.4}px`,
                  maxWidth: "40px",
                  transition: "width 0.05s linear",
                }}
              />
              <p className="uppercase tracking-[4px] text-[#C8960A] font-semibold text-xs">
                Global Coverage
              </p>
            </div>

            {/* Headline */}
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6">
              Five trade<br />lanes.{" "}
              <span className="text-[#C8960A]">One<br />operations<br />team.</span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-sm">
              Wherever your suppliers and customers are, we already have boots on the ground
              — and contracted carrier capacity to move your cargo on schedule.
            </p>

            {/* Animated route line */}
            <div className="relative h-px bg-white/10 w-full mb-2 overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#C8960A] to-[#1A73C8]"
                style={{ width: `${lineProgress}%`, transition: "width 0.05s linear" }}
              />
              {/* Moving dot */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-md"
                style={{ left: `calc(${lineProgress}% - 4px)`, transition: "left 0.05s linear" }}
              />
            </div>
            <p className="text-white/20 text-[10px] tracking-widest uppercase">
              USA → India → Middle East → Europe → SE Asia
            </p>
          </div>

          {/* RIGHT — Region Cards */}
          <div
            ref={rightRef}
            className="grid grid-cols-2 gap-3"
            style={{
              opacity: rightInView ? 1 : 0,
              transform: rightInView ? "translateY(0px)" : "translateY(48px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            {regions.map(({ label, ports, stat, statLabel, color }, i) => (
              <div
                key={label}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative rounded-2xl border p-5 cursor-pointer overflow-hidden ${
                  i === 4 ? "col-span-2" : ""
                }`}
                style={{
                  background: hovered === i ? "#0E1E3D" : "#0a1628",
                  borderColor: hovered === i ? color : "rgba(30,58,123,0.3)",
                  opacity: rightInView ? 1 : 0,
                  transform: rightInView
                    ? hovered === i ? "translateY(-4px)" : "translateY(0px)"
                    : "translateY(32px)",
                  transition: `opacity 0.5s ease ${0.2 + i * 0.08}s, transform 0.35s ease, background 0.3s ease, border-color 0.3s ease`,
                  boxShadow: hovered === i ? `0 12px 32px -8px ${color}30` : "none",
                }}
              >
                {/* Animated top border */}
                <div
                  className="absolute top-0 left-0 h-[2px] rounded-t-2xl"
                  style={{
                    background: color,
                    width: hovered === i ? "100%" : "0%",
                    transition: "width 0.4s ease",
                  }}
                />

                {/* Glowing circle bg on hover */}
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl pointer-events-none"
                  style={{
                    background: color,
                    opacity: hovered === i ? 0.12 : 0,
                    transition: "opacity 0.4s ease",
                  }}
                />

                <p
                  className="uppercase tracking-[3px] text-[10px] font-bold mb-2"
                  style={{ color }}
                >
                  Region
                </p>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-white font-extrabold text-lg leading-tight mb-1">
                      {label}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{ports}</p>
                  </div>

                  {/* Stat — slides in on hover */}
                  <div
                    className="flex-shrink-0 text-right"
                    style={{
                      opacity: hovered === i ? 1 : 0,
                      transform: hovered === i ? "translateX(0px)" : "translateX(12px)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                    }}
                  >
                    <p className="font-extrabold text-xl" style={{ color }}>{stat}</p>
                    <p className="text-gray-500 text-[10px]">{statLabel}</p>
                  </div>
                </div>

                {/* Arrow */}
                <div
                  className="absolute bottom-4 right-4"
                  style={{
                    opacity: hovered === i ? 1 : 0,
                    transform: hovered === i ? "translate(0,0)" : "translate(4px,-4px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                >
                  <ArrowUpRight size={14} style={{ color }} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}