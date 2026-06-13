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
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    description: "Ambient, chilled, and frozen logistics with full cold chain traceability.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  },
  {
    icon: ShoppingBag,
    title: "FMCG",
    description: "High-volume, demand-driven distribution with route efficiency optimization.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
  },
  {
    icon: Car,
    title: "Automotive",
    description: "Just-in-time parts delivery, bonded warehousing, and OEM supply chain management.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
  },
  {
    icon: Pill,
    title: "Pharmaceuticals",
    description: "GDP-compliant logistics, temperature-controlled transport, strict documentation.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",
  },
  {
    icon: Flame,
    title: "Oil & Gas",
    description: "Heavy cargo, dangerous goods compliance, and specialized equipment handling.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80",
  },
  {
    icon: FlaskConical,
    title: "Chemicals",
    description: "Hazmat-certified handling, DG classification, and dedicated chemical storage.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Oversized and project freight with on-site delivery coordination.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
];

export default function IndustriesSection() {
  const [headerRef, headerInView] = useInView(0.2);
  const [gridRef, gridInView] = useInView(0.1);
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-[#FFFFFF] py-14 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

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

        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map(({ icon: Icon, title, description, image }, i) => (
            <div
              key={title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                opacity: gridInView ? 1 : 0,
                transform: gridInView ? "translateY(0px)" : "translateY(40px)",
                transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
                aspectRatio: "3/4",
              }}
            >
              {/* Background image — always visible, zooms on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  transform: hovered === i ? "scale(1.12)" : "scale(1)",
                  transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              />

              {/* Dark overlay — lighter normally, darker on hover */}
              <div
                className="absolute inset-0"
                style={{
                  background: hovered === i
                    ? "linear-gradient(to top, rgba(8,18,41,0.95) 0%, rgba(8,18,41,0.5) 50%, rgba(8,18,41,0.1) 100%)"
                    : "linear-gradient(to top, rgba(8,18,41,0.75) 0%, rgba(8,18,41,0.3) 60%, rgba(8,18,41,0.05) 100%)",
                  transition: "background 0.4s ease",
                }}
              />

              {/* Gold top bar that slides in on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-[#C8960A]"
                style={{
                  transform: hovered === i ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.4s ease",
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end">

                {/* Icon — always visible */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{
                    background: hovered === i ? "#C8960A" : "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(4px)",
                    transition: "background 0.3s ease",
                  }}
                >
                  <Icon size={18} className="text-white" />
                </div>

                {/* Title — always visible */}
                <h3 className="text-white font-bold text-sm mb-1">{title}</h3>

                {/* Description — slides up on hover */}
                <div
                  style={{
                    maxHeight: hovered === i ? "80px" : "0px",
                    opacity: hovered === i ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s ease, opacity 0.35s ease",
                  }}
                >
                  <p className="text-white/75 text-xs leading-relaxed">{description}</p>
                </div>

                {/* Learn more — slides up on hover */}
                <div
                  style={{
                    maxHeight: hovered === i ? "30px" : "0px",
                    opacity: hovered === i ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s ease 0.05s, opacity 0.35s ease 0.05s",
                  }}
                >
                  <p className="text-[#C8960A] text-xs font-semibold uppercase tracking-widest mt-2">
                    Learn more →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}