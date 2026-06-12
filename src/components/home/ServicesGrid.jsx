import { useEffect, useRef, useState } from "react";
import {
  Ship, Plane, FileBadge, Warehouse, Truck, Workflow, ArrowUpRight,
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

const services = [
  {
    title: "Ocean Freight",
    description: "FCL, LCL & project cargo via our global carrier network with real-time container tracking.",
    icon: Ship,
  },
  {
    title: "Air Freight",
    description: "Time-critical, perishable and high-value air cargo handled with priority booking worldwide.",
    icon: Plane,
  },
  {
    title: "Customs Brokerage",
    description: "Licensed U.S. customs clearance with zero-surprise compliance and full documentation.",
    icon: FileBadge,
  },
  {
    title: "Warehousing",
    description: "Bonded, FTZ and DC operations across key U.S. gateways with pick-and-pack services.",
    icon: Warehouse,
  },
  {
    title: "Trucking & Drayage",
    description: "Port drayage, OTR and final-mile delivery across North America. FTL, LTL, multimodal.",
    icon: Truck,
  },
];

export default function ServicesGrid() {
  const [headerRef, headerInView] = useInView(0.2);
  const [gridRef, gridInView] = useInView(0.1);

  return (
    <section className="bg-[#F8F9FB] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <div
          ref={headerRef}
          className="grid lg:grid-cols-2 gap-8 items-end mb-12"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0px)" : "translateY(32px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 bg-[#C8960A]" />
              <p className="uppercase tracking-[4px] text-[#C8960A] font-semibold text-xs">
                What We Do
              </p>
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-[#081229] leading-tight">
              End-to-End Logistics,<br />
              Without the Headache
            </h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed lg:max-w-md lg:ml-auto">
            From ocean freight to last-mile delivery — we connect every link in your
            supply chain with expertise that keeps you in control and a team that
            genuinely cares.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-xl border border-[#E2E8F0] p-7 flex flex-col cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#1E3A7B]/20"
                style={{
                  opacity: gridInView ? 1 : 0,
                  transform: gridInView ? "translateY(0px)" : "translateY(40px)",
                  transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`,
                }}
              >
                <div className="w-12 h-12 bg-[#F0F4FA] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[#1E3A7B]">
                  <Icon size={20} className="text-[#1E3A7B] transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-[#1E3A7B] text-lg font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <div className="flex items-center gap-1.5 text-[#C8960A] text-xs font-semibold uppercase tracking-widest transition-all duration-300 group-hover:gap-2.5">
                  Learn more
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            );
          })}

          {/* Featured Dark Card */}
          <div
            className="group bg-[#1E3A7B] rounded-xl p-7 flex flex-col cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-[#162d61]"
            style={{
              opacity: gridInView ? 1 : 0,
              transform: gridInView ? "translateY(0px)" : "translateY(40px)",
              transition: "opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s",
            }}
          >
            <div className="w-12 h-12 bg-[#C8960A] rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#b8850a]">
              <Workflow size={20} className="text-white" />
            </div>
            <h3 className="text-white text-lg font-bold mb-3">
              Door-to-Door Logistics
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">
              One contract, one team — origin pickup to final delivery with full visibility across every leg.
            </p>
            <div className="flex items-center gap-1.5 text-[#C8960A] text-xs font-semibold uppercase tracking-widest transition-all duration-300 group-hover:gap-2.5">
              Learn more
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}