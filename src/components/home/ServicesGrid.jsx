import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
    icon: Ship,
    title: "Freight Forwarding",
    description: "FCL, LCL, NVOCC programs, carrier contracts, and global trade lane management.",
  },
  {
    icon: Plane,
    title: "Custom Clearance",
    description: "Priority air cargo, expedited shipping, charter solutions, and time-critical freight.",
  },
  {
    icon: FileBadge,
    title: "Cargo Insurance",
    description: "End-to-end cargo coverage protecting from origin to destination",
  },
  {
    icon: Warehouse,
    title: "Warehousing and Distribution",
    description: "Storage, bonded facilities, inventory control, fulfillment, and distribution.",
  },
  {
    icon: Truck,
    title: "Drayage & Domestic Truck Delivery",
    description: "Port drayage, intermodal transportation, inland trucking, and final-mile delivery.",
  },
  {
    icon: Workflow,
    title: "Purchase Order Management",
    description: "Centralized PO tracking, vendor coordination and milestone visibility.",
  },
  {
    icon: Workflow,
    title: "Consulting and Advice",
    description: "Strategic logistics consulting to optimize your supply chain, reduce costs and navigate trade.",
  },
  {
    icon: Workflow,
    title: "Procurement & Sourcing",
    description: "End-to-end venfor identification, RFQ management and Supplier vending",
  },
  {
    icon: Truck,
    title: "Help you improve your footprint in US market",
    description: "End-to-end vendor identification, RFQ management, and strategic supplier onboarding to scale your boots-on-the-ground presence.",
  },
  {
    icon: ArrowUpRight,
    title: "IOR (Importer On Record)",
    description: "Complete handling of customs clearance, legal compliance, import duties, and paperwork to ensure seamless entry into the United States",
  },
];

export default function ServicesGrid() {
  const [headerRef, headerInView] = useInView(0.2);
  const [gridRef, gridInView] = useInView(0.1);

  return (
    <section className="bg-[#F8F9FB] py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div
          ref={headerRef}
          className="mb-8 lg:mb-12"
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
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#081229] leading-tight mb-4">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to={service.route}
                className="group bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 flex flex-row sm:flex-col gap-4 sm:gap-0 cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:bg-[#1E3A7B] hover:border-[#1E3A7B]"
                style={{
                  opacity: gridInView ? 1 : 0,
                  transform: gridInView ? "translateY(0px)" : "translateY(40px)",
                  transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease`,
                }}
              >
                <div className="w-10 h-10 bg-[#F0F4FA] rounded-lg flex items-center justify-center flex-shrink-0 sm:mb-4 transition-all duration-300 group-hover:bg-[#C8960A]">
                  <Icon size={18} className="text-[#1E3A7B] transition-colors duration-300 group-hover:text-white" />
                </div>

                <div className="flex flex-col flex-1">
                  <h3 className="text-[#1E3A7B] text-sm sm:text-base font-bold mb-1 sm:mb-2 transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4 flex-1 transition-colors duration-300 group-hover:text-white/70">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-[#C8960A] text-xs font-semibold uppercase tracking-widest transition-all duration-300 group-hover:gap-2.5">
                    Learn more
                    <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}