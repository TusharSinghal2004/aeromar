import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Chemical Procurement",
    description:
      "Direct sourcing from vetted Asian manufacturers with rigorous quality oversight throughout every step of the supply process. We connect global buyers to trusted producers at competitive terms.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    link: "/services/chemical-procurement",
  },
  {
    title: "Global Sourcing",
    description:
      "Multi-origin procurement strategy leveraging our long-standing supplier relationships across multiple geographies. We identify the best source for your requirements, every time.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    link: "/services/global-sourcing",
  },
  {
    title: "End-to-End Logistics",
    description:
      "Freight, customs clearance, and last-mile delivery managed through Aeromar Global Logistics — our sister company with decades of sourcing infrastructure experience.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80",
    link: "/services/logistics",
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
    <section ref={ref} className="py-8 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div style={fade(0.05)} className="flex items-center gap-3 mb-2">
            <span className="uppercase tracking-[0.2em] text-[#1A73C8] text-[10px] font-semibold">
              What We Do
            </span>
          </div>
          <h2 style={fade(0.13)} className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1E3A7B] mb-2 leading-snug">
            Core Services
          </h2>
          <p style={fade(0.2)} className="text-gray-500 text-sm max-w-xl leading-6">
            Three tightly connected service lines engineered for eudora.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-gray-200">
          {services.map((service, i) => {
            const isActive = isMobile ? tapped === i : hovered === i;
            const cardDelay = 0.18 + i * 0.1;

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
                  transform: visible
                    ? isActive ? "translateY(-4px)" : "translateY(0)"
                    : "translateY(26px)",
                  transition: `opacity 0.6s ease ${cardDelay}s, transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease`,
                  boxShadow: isActive ? "0 16px 32px -12px rgba(8,18,41,0.25)" : "0 0px 0px rgba(0,0,0,0)",
                  WebkitTapHighlightColor: "transparent",
                  borderRight: i < services.length - 1 ? "1px solid #e5e7eb" : "none",
                }}
                className="relative flex flex-col overflow-hidden no-underline group"
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    style={{
                      transform: isActive ? "scale(1.1)" : "scale(1)",
                      transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                      filter: isActive ? "brightness(0.7)" : "brightness(0.85)",
                    }}
                  />
                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: isActive
                        ? "linear-gradient(to bottom, rgba(8,18,41,0.3) 0%, rgba(8,18,41,0.7) 100%)"
                        : "linear-gradient(to bottom, transparent 30%, rgba(8,18,41,0.5) 100%)",
                      transition: "background 0.4s ease",
                    }}
                  />

                  {/* Shimmer sweep on hover */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
                      transform: isActive ? "translateX(60%)" : "translateX(-110%)",
                      transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    background: isActive ? "#081229" : "#ffffff",
                    transition: "background 0.4s cubic-bezier(0.16,1,0.3,1)",
                    borderTop: "1px solid #e5e7eb",
                  }}
                  className="flex flex-col flex-1 p-5 md:p-6 relative"
                >
                  {/* Gold left border accent */}
                  <div
                    style={{
                      height: isActive ? "100%" : "0%",
                      transition: "height 0.35s cubic-bezier(0.16,1,0.3,1)",
                    }}
                    className="absolute left-0 top-0 w-[3px] bg-[#C8960A] pointer-events-none"
                  />

                  {/* Arrow */}
                  <div className="flex justify-end mb-3">
                    <ArrowUpRight
                      size={15}
                      style={{
                        color: isActive ? "#C8960A" : "#1A73C8",
                        transform: isActive
                          ? "translate(3px,-3px) rotate(8deg)"
                          : "translate(0,0) rotate(0deg)",
                        transition: "color 0.25s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      color: isActive ? "#ffffff" : "#1E3A7B",
                      transform: isActive ? "translateX(2px)" : "translateX(0px)",
                      transition: "color 0.25s ease, transform 0.3s ease",
                    }}
                    className="text-sm md:text-base font-bold mb-2"
                  >
                    {service.title}
                  </h3>

                  {/* Animated underline */}
                  <div
                    style={{
                      width: isActive ? "2rem" : "0rem",
                      transition: "width 0.35s cubic-bezier(0.16,1,0.3,1) 0.05s",
                      backgroundColor: "#C8960A",
                    }}
                    className="h-[2px] mb-3"
                  />

                  {/* Description */}
                  <p
                    style={{
                      color: isActive ? "rgba(255,255,255,0.7)" : "#6B7280",
                      opacity: isActive ? 1 : 0.92,
                      transition: "color 0.25s ease, opacity 0.3s ease",
                    }}
                    className="text-xs leading-[1.75]"
                  >
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}