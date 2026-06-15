import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const services = [
  { title: "Ocean Freight", link: "/ocean-freight" },
  { title: "Air Freight", link: "/air-freight" },
  { title: "Customs Brokerage", link: "/customs-brokerage" },
  { title: "Warehousing", link: "/warehousing" },
  { title: "Trucking & Drayage", link: "/trucking-drayage" },
];

export default function ExploreMoreSection() {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".service-card");
    if (!cards) return;
    cards.forEach((c) => {
      c.style.opacity = "0";
      c.style.transform = "translateY(12px)";
    });
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cards.forEach((c, i) =>
            setTimeout(() => {
              c.style.opacity = "1";
              c.style.transform = "translateY(0)";
            }, i * 80)
          );
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-[#081229] py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-8">
          <span className="uppercase tracking-[0.22em] text-[#C8960A] text-[11px] font-semibold">
            Explore More
          </span>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/10"
        >
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="
                service-card group relative
                h-[90px] px-6
                flex items-center justify-between
                border-b border-r border-white/10
                overflow-hidden
              "
              style={{
                transition:
                  "opacity 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              {/* hover fill */}
              <div
                className="
                  absolute inset-0
                  bg-white/[0.03]
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
              />

              {/* left gold accent line */}
              <div
                className="
                  absolute left-0 top-0 bottom-0 w-[2px]
                  bg-[#C8960A]
                  scale-y-0 group-hover:scale-y-100
                  origin-bottom transition-transform duration-300 ease-out
                "
              />

              <h3
                className="
                  relative z-10
                  text-white text-[17px] font-bold tracking-wide
                  group-hover:text-[#C8960A]
                  transition-colors duration-250
                "
              >
                {service.title}
              </h3>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C8960A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="
                  relative z-10 flex-shrink-0
                  group-hover:translate-x-1 group-hover:-translate-y-1
                  transition-transform duration-250
                "
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          ))}

          {/* Empty filler box */}
          <div className="hidden md:block h-[90px] border-b border-r border-white/10 bg-white/[0.025]" />
        </div>

      </div>
    </section>
  );
}