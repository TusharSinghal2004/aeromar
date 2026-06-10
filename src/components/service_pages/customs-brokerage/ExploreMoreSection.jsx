import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Air Freight",
    link: "/services/air-freight",
  },
  {
    title: "Customs Brokerage",
    link: "/services/customs-brokerage",
  },
  {
    title: "Warehousing",
    link: "/services/warehousing",
  },
  {
    title: "Trucking & Drayage",
    link: "/services/trucking-drayage",
  },
  {
    title: "Door-to-Door Logistics",
    link: "/services/door-to-door",
  },
];

export default function ExploreMoreSection() {
  return (
    <section className="bg-[#081229] py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-[2px] bg-[#C8960A]" />

          <span className="uppercase tracking-[0.22em] text-[#C8960A] text-[11px] font-semibold">
            Explore More
          </span>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 border border-white/10">

          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="
                group
                h-[95px]
                px-6
                flex
                items-center
                justify-between
                border-b
                border-r
                border-white/10
                hover:bg-white/5
                transition-all
              "
            >
              <h3
                className="
                  text-white
                  text-xl
                  font-bold
                  group-hover:text-[#C8960A]
                  transition
                "
              >
                {service.title}
              </h3>

              <ArrowUpRight
                size={18}
                className="
                  text-[#C8960A]
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  transition
                "
              />
            </Link>
          ))}

          {/* Empty Box */}
          <div className="hidden md:block h-[95px] bg-white/10" />

        </div>

      </div>
    </section>
  );
}