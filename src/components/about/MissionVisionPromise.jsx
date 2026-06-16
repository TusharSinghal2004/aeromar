import { useEffect, useRef, useState } from "react";

const cards = [
  {
    label: "Mission",
    text: "Move our customers' cargo with the same care, urgency, and accountability we'd give our own family business.",
  },
  {
    label: "Vision",
    text: "Be the most trusted FMC-licensed NVOCC connecting U.S. shippers with global trade partners — especially across the India-USA corridor.",
  },
  {
    label: "Promise",
    text: "Senior-level expertise on every shipment. Transparent communication. End-to-end accountability.",
  },
];

export default function MissionVisionPromise() {
  const [visible, setVisible] = useState(false);
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
    <section ref={ref} className="py-10 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.65s ease ${i * 0.13}s, transform 0.65s ease ${i * 0.13}s`,
              }}
              className={`bg-[#F2F4F7] px-6 py-8 md:px-10 md:py-10 flex flex-col gap-4
                ${i < cards.length - 1
                  ? "border-b border-[#C8960A] md:border-b-0 md:border-r"
                  : ""
                }`}
            >
              <span className="uppercase tracking-[0.22em] text-[11px] font-bold text-[#1E3A7B]">
                {card.label}
              </span>
              <p className="text-[#1E3A7B] text-base md:text-lg leading-[1.75] font-bold">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}