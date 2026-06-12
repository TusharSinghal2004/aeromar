import { useEffect, useRef, useState } from "react";
import { ShieldCheck, HandHeart, Compass, Eye } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We honor every commitment we make to our customers and carrier partners.",
  },
  {
    icon: HandHeart,
    title: "Relationships",
    description: "Trust is built over decades, not transactions. Every shipment compounds it.",
  },
  {
    icon: Compass,
    title: "Expertise",
    description: "Senior operators on every account — not a queue of junior coordinators.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Honest rates, clear status updates, and no surprises at invoicing.",
  },
];

export default function CoreValues() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-10 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Header */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
          }}
          className="mb-7"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-[2px] bg-[#C8960A]" />
            <span className="uppercase tracking-[0.22em] text-[#1A73C8] text-[10px] font-semibold">
              Core Values
            </span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#1E3A7B]">
            What we stand on.
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-200">
          {values.map((value, i) => {
            const Icon = value.icon;
            const isHovered = hovered === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 0.6s ease ${0.15 + i * 0.1}s, transform 0.6s ease ${0.15 + i * 0.1}s`,
                }}
                className="relative p-5 border-r border-b border-gray-200 flex flex-col overflow-hidden"
              >
                {/* Hover fill background */}
                <div
                  style={{
                    transform: isHovered ? "translateY(0%)" : "translateY(100%)",
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="absolute inset-0 bg-[#081229] pointer-events-none"
                />

                {/* Icon */}
                <div className="relative mb-4">
                  <Icon
                    size={24}
                    strokeWidth={1.8}
                    style={{
                      color: isHovered ? "#C8960A" : "#C8960A",
                      transform: isHovered ? "scale(1.15) rotate(-6deg)" : "scale(1) rotate(0deg)",
                      transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    color: isHovered ? "#ffffff" : "#1E3A7B",
                    transition: "color 0.3s ease",
                  }}
                  className="relative text-base font-bold mb-2"
                >
                  {value.title}
                </h3>

                {/* Animated underline */}
                <div
                  style={{
                    width: isHovered ? "2rem" : "0rem",
                    transition: "width 0.35s ease 0.05s",
                    backgroundColor: "#C8960A",
                  }}
                  className="relative h-[2px] mb-3"
                />

                {/* Description */}
                <p
                  style={{
                    color: isHovered ? "rgba(255,255,255,0.75)" : "",
                    transition: "color 0.3s ease",
                  }}
                  className="relative text-gray-500 text-xs md:text-sm leading-[1.75]"
                >
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}