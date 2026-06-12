import { useEffect, useRef, useState } from "react";

const cards = [
  {
    label: "Mission",
    icon: "🧭",
    text: "Move our customers' cargo with the same care, urgency, and accountability we'd give our own family business.",
    accent: "#C8960A",
  },
  {
    label: "Vision",
    icon: "🌐",
    text: "Be the most trusted FMC-licensed NVOCC connecting U.S. shippers with global trade partners — especially across the India-USA corridor.",
    accent: "#1A73C8",
  },
  {
    label: "Promise",
    icon: "🤝",
    text: "Senior-level expertise on every shipment. Transparent communication. End-to-end accountability.",
    accent: "#1E3A7B",
  },
];

export default function MissionVisionPromise() {
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
    <section ref={ref} className="pb-12 md:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.65s ease ${i * 0.13}s, transform 0.65s ease ${i * 0.13}s`,
              }}
            >
              <div
                style={{
                  borderLeftColor: card.accent,
                  transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: hovered === i ? `0 12px 32px -8px ${card.accent}22` : "none",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                className="bg-[#FAFBFC] border-l-[3px] p-6 flex flex-col gap-4 h-full"
              >
                {/* Label row */}
                <div className="flex items-center gap-2">
                  <span className="text-base">{card.icon}</span>
                  <span
                    style={{ color: card.accent }}
                    className="uppercase tracking-[0.22em] text-[10px] font-bold"
                  >
                    {card.label}
                  </span>
                </div>

                {/* Thin divider that animates width on hover */}
                <div
                  style={{
                    backgroundColor: card.accent,
                    width: hovered === i ? "2.5rem" : "1.5rem",
                    transition: "width 0.3s ease",
                  }}
                  className="h-[2px]"
                />

                {/* Text */}
                <p className="text-[#2D3A56] text-sm leading-[1.75] font-medium">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}