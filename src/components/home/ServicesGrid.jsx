import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Ship,
  Plane,
  FileBadge,
  Warehouse,
  Truck,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
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
    route: "/ocean-freight",
    description:
      "FCL, LCL & project cargo via our global carrier network with real-time container tracking.",
    icon: Ship,
  },
  {
    title: "Air Freight",
    route: "/air-freight",
    description:
      "Time-critical, perishable and high-value air cargo handled with priority booking worldwide.",
    icon: Plane,
  },
  {
    title: "Customs Brokerage",
    route: "/customs-brokerage",
    description:
      "Licensed U.S. customs clearance with zero-surprise compliance and full documentation.",
    icon: FileBadge,
  },
  {
    title: "Warehousing",
    route: "/warehousing",
    description:
      "Bonded, FTZ and DC operations across key U.S. gateways with pick-and-pack services.",
    icon: Warehouse,
  },
  {
    title: "Trucking & Drayage",
    route: "/trucking-drayage",
    description:
      "Port drayage, OTR and final-mile delivery across North America. FTL, LTL, multimodal.",
    icon: Truck,
  },
];

export default function ServicesGrid() {
  const [headerRef, headerInView] = useInView(0.2);
  const [gridRef, gridInView] = useInView(0.1);

  return (
    <section className="bg-[#F8F9FB] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={headerRef}
          className="mb-12"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0px)" : "translateY(32px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <p className="uppercase tracking-[2px] text-[#C8960A] font-semibold text-xs mb-3">
              What We Do
            </p>

            <h2 className="text-3xl lg:text-5xl font-extrabold text-[#081229] leading-tight mb-4">
              Comprehensive Logistics Services
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
              End-to-end solutions engineered for global trade — backed by senior
              logistics professionals and decades of carrier relationships.
            </p>
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                to={service.route}
                className="group bg-white rounded-xl border border-[#E2E8F0] p-5 flex flex-col cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:bg-[#1E3A7B] hover:border-[#1E3A7B]"
                style={{
                  opacity: gridInView ? 1 : 0,
                  transform: gridInView
                    ? "translateY(0px)"
                    : "translateY(40px)",
                  transition: `opacity 0.5s ease ${
                    index * 0.08
                  }s, transform 0.5s ease ${
                    index * 0.08
                  }s, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease`,
                }}
              >
                <div className="w-10 h-10 bg-[#F0F4FA] rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#C8960A]">
                  <Icon
                    size={18}
                    className="text-[#1E3A7B] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="text-[#1E3A7B] text-base font-bold mb-2 transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 transition-colors duration-300 group-hover:text-white/70">
                  {service.description}
                </p>

                <div className="flex items-center gap-1.5 text-[#C8960A] text-xs font-semibold uppercase tracking-widest transition-all duration-300 group-hover:gap-2.5">
                  Learn more
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </Link>
            );
          })}

          {/* Door-to-Door Logistics */}
          <Link
            to="/door-to-door"
            className="group bg-white rounded-xl border border-[#E2E8F0] p-5 flex flex-col cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:bg-[#1E3A7B] hover:border-[#1E3A7B]"
            style={{
              opacity: gridInView ? 1 : 0,
              transform: gridInView
                ? "translateY(0px)"
                : "translateY(40px)",
              transition:
                "opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div className="w-10 h-10 bg-[#F0F4FA] rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#C8960A]">
              <Workflow
                size={18}
                className="text-[#1E3A7B] transition-colors duration-300 group-hover:text-white"
              />
            </div>

            <h3 className="text-[#1E3A7B] text-base font-bold mb-2 transition-colors duration-300 group-hover:text-white">
              Door-to-Door Logistics
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 transition-colors duration-300 group-hover:text-white/70">
              One contract, one team — origin pickup to final delivery with full
              visibility across every leg.
            </p>

            <div className="flex items-center gap-1.5 text-[#C8960A] text-xs font-semibold uppercase tracking-widest transition-all duration-300 group-hover:gap-2.5">
              Learn more
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}