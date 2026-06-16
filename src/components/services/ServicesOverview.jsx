import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Ship, Plane, FileBadge, Warehouse, Truck, Workflow, ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "FCL, LCL, NVOCC programs, carrier contracts, and global trade lane management.",
    link: "/ocean-freight",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Priority air cargo, expedited shipping, charter solutions, and time-critical freight.",
    link: "/air-freight",
  },
  {
    icon: FileBadge,
    title: "Customs Brokerage",
    description: "Import clearance, compliance management, classifications, duties, and documentation.",
    link: "/customs-brokerage",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Storage, bonded facilities, inventory control, fulfillment, and distribution.",
    link: "/warehousing",
  },
  {
    icon: Truck,
    title: "Trucking & Drayage",
    description: "Port drayage, intermodal transportation, inland trucking, and final-mile delivery.",
    link: "/trucking-drayage",
  },
  {
    icon: Workflow,
    title: "Door-to-Door Logistics",
    description: "Complete logistics management from supplier pickup through final delivery.",
    link: "/door-to-door",
  },
];

export default function ServicesOverview() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [tapped, setTapped] = useState(null);
  const ref = useRef(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fade = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(18px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  const handleTouchStart = (i) => setTapped(i);
  const handleTouchEnd = () => setTimeout(() => setTapped(null), 350);

  return (
    <section ref={ref} className="py-8 md:py-14 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-6 md:mb-7">
          <div style={fade(0.05)} className="flex items-center gap-3 mb-2">
            <span className="uppercase tracking-[0.2em] text-[#1A73C8] text-[10px] font-semibold">
              What We Do
            </span>
          </div>

          <h2 style={fade(0.13)} className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1E3A7B] mb-2 leading-snug">
            Integrated logistics services
            for global supply chains.
          </h2>

          <p style={fade(0.2)} className="text-gray-500 text-sm max-w-xl leading-6">
            Six tightly connected service lines engineered to move cargo
            efficiently across global markets.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border border-gray-200 bg-white">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isActive = isMobile ? tapped === i : hovered === i;

            return (
              <Link
                key={i}
                to={service.link}
                onMouseEnter={() => !isMobile && setHovered(i)}
                onMouseLeave={() => !isMobile && setHovered(null)}
                onTouchStart={() => handleTouchStart(i)}
                onTouchEnd={handleTouchEnd}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(26px)",
                  transition: `opacity 0.6s ease ${0.18 + i * 0.08}s, transform 0.6s ease ${0.18 + i * 0.08}s`,
                  WebkitTapHighlightColor: "transparent",
                }}
                className="relative p-5 md:p-6 border-r border-b border-gray-200 min-h-[150px] md:min-h-[170px] flex flex-col overflow-hidden no-underline active:scale-[0.98] transition-transform"
              >
                {/* Hover/tap fill */}
                <div
                  style={{
                    transform: isActive ? "translateY(0%)" : "translateY(101%)",
                    transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  className="absolute inset-0 bg-[#081229] pointer-events-none"
                />

                {/* Gold left border */}
                <div
                  style={{
                    height: isActive ? "100%" : "0%",
                    transition: "height 0.35s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  className="absolute left-0 top-0 w-[3px] bg-[#C8960A] pointer-events-none"
                />

                {/* Top row */}
                <div className="relative flex items-start justify-between mb-3 md:mb-4">
                  <div
                    style={{
                      background: isActive ? "rgba(255,255,255,0.08)" : "#F3F4F8",
                      transition: "background 0.3s ease",
                    }}
                    className="w-9 h-9 flex items-center justify-center"
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                      style={{
                        color: isActive ? "#C8960A" : "#1E3A7B",
                        transform: isActive ? "scale(1.15)" : "scale(1)",
                        transition: "color 0.25s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                      }}
                    />
                  </div>

                  <ArrowUpRight
                    size={15}
                    style={{
                      color: isActive ? "#C8960A" : "#1A73C8",
                      transform: isActive ? "translate(3px,-3px)" : "translate(0,0)",
                      transition: "color 0.25s ease, transform 0.3s ease",
                    }}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    color: isActive ? "#ffffff" : "#1E3A7B",
                    transition: "color 0.25s ease",
                  }}
                  className="relative text-sm md:text-base font-bold mb-2"
                >
                  {service.title}
                </h3>

                {/* Animated underline */}
                <div
                  style={{
                    width: isActive ? "2rem" : "0rem",
                    transition: "width 0.3s ease 0.05s",
                    backgroundColor: "#C8960A",
                  }}
                  className="relative h-[2px] mb-2 md:mb-3"
                />

                {/* Description */}
                <p
                  style={{
                    color: isActive ? "rgba(255,255,255,0.7)" : "#6B7280",
                    transition: "color 0.25s ease",
                  }}
                  className="relative text-xs leading-[1.75]"
                >
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}