import { useEffect, useRef, useState } from "react";
import {
  Sofa,
  Store,
  Factory,
  ShoppingCart,
  Package,
} from "lucide-react";

const industries = [
  { icon: Sofa, title: "Furniture" },
  { icon: Store, title: "Retail" },
  { icon: Factory, title: "Manufacturing" },
  { icon: ShoppingCart, title: "eCommerce" },
  { icon: Package, title: "Wholesale Distribution" },
];
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

export default function IndustriesServed() {
  const [sectionRef, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(null);

  const fadeUp = (delay) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(24px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  return (
    <section ref={sectionRef} className="py-10 md:py-12 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Label */}
        <div style={fadeUp(0.05)} className="flex items-center gap-3 mb-3">
          <span className="uppercase tracking-[0.2em] text-[#1A73C8] text-[11px] font-semibold">
            Industries Served
          </span>
        </div>

        {/* Heading */}
        <h2
          style={fadeUp(0.15)}
          className="text-3xl md:text-4xl font-extrabold text-[#1E3A7B] mb-8"
        >
          Verticals where trucking & drayage excels.
        </h2>

        {/* Industries */}
        <div className="flex flex-wrap gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isHovered = hovered === index;

            return (
              <div
                key={index}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0px)" : "translateY(24px)",
                  transition: `opacity 0.55s ease ${0.25 + index * 0.08}s, transform 0.55s ease ${0.25 + index * 0.08}s`,
                  borderColor: isHovered ? "#C8960A" : "#E5E7EB",
                  backgroundColor: isHovered ? "#fff" : "#fff",
                  boxShadow: isHovered ? "0 4px 16px rgba(200,150,10,0.12)" : "none",
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="min-w-[170px] h-[60px] px-6 border bg-white flex items-center gap-3 transition-all duration-300 cursor-default"
              >
                <Icon
                  size={18}
                  style={{
                    color: "#C8960A",
                    transform: isHovered ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                  }}
                />
                <span
                  style={{
                    color: isHovered ? "#C8960A" : "#1E3A7B",
                    transition: "color 0.25s ease",
                  }}
                  className="font-semibold text-lg"
                >
                  {industry.title}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}