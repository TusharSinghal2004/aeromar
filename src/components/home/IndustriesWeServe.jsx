import { useEffect, useRef, useState } from "react";
import {
  ShoppingCart, UtensilsCrossed, ShoppingBag, Car,
  Pill, Flame, FlaskConical, HardHat,
} from "lucide-react";

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

const industries = [
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Fast, flexible fulfillment and last-mile built for the speed of online retail.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    description: "Ambient, chilled, and frozen logistics with full cold chain traceability.",
  },
  {
    icon: ShoppingBag,
    title: "FMCG",
    description: "High-volume, demand-driven distribution with route efficiency optimization.",
  },
  {
    icon: Car,
    title: "Automotive",
    description: "Just-in-time parts delivery, bonded warehousing, and OEM supply chain management.",
  },
  {
    icon: Pill,
    title: "Pharmaceuticals",
    description: "GDP-compliant logistics, temperature-controlled transport, strict documentation.",
  },
  {
    icon: Flame,
    title: "Oil & Gas",
    description: "Heavy cargo, dangerous goods compliance, and specialized equipment handling.",
  },
  {
    icon: FlaskConical,
    title: "Chemicals",
    description: "Hazmat-certified handling, DG classification, and dedicated chemical storage.",
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Oversized and project freight with on-site delivery coordination.",
  },
];

export default function IndustriesSection() {
  const [headerRef, headerInView] = useInView(0.2);
  const [gridRef, gridInView] = useInView(0.1);

  return (
    <section className="bg-[#FFFFFF] py-14 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-12"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0px)" : "translateY(32px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="uppercase tracking-[6px] text-[#C8960A] font-semibold text-xs mb-4">
            Industries We Serve
          </p>
          <h2 className="text-[#081229] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
            Tailored Solutions for<br />Your Industry
          </h2>
          <p className="max-w-xl mx-auto text-gray-500 text-sm leading-relaxed">
            A pharmaceutical shipment is nothing like an automotive parts order. We
            build solutions specific to your world — not a one-size-fits-all template.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {industries.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="group bg-white rounded-2xl border border-[#E2E8F0] p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#1E3A7B]/20"
              style={{
                opacity: gridInView ? 1 : 0,
                transform: gridInView ? "translateY(0px)" : "translateY(40px)",
                transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
              }}
            >
              <div className="w-12 h-12 bg-[#F0F4FA] rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#1E3A7B]">
                <Icon size={20} className="text-[#1E3A7B] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#081229] font-bold text-sm mb-2">{title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}