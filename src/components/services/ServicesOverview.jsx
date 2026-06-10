import {
  Ship,
  Plane,
  BadgeDollarSign,
  Warehouse,
  Truck,
  Route,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Ship,
    title: "Ocean Freight",
    description:
      "FCL, LCL, NVOCC programs, carrier contracts, and global trade lane management.",
    link: "/services/ocean-freight",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description:
      "Priority air cargo, expedited shipping, charter solutions, and time-critical freight.",
    link: "/services/air-freight",
  },
  {
    icon: BadgeDollarSign,
    title: "Customs Brokerage",
    description:
      "Import clearance, compliance management, classifications, duties, and documentation.",
    link: "/services/customs-brokerage",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description:
      "Storage, bonded facilities, inventory control, fulfillment, and distribution.",
    link: "/services/warehousing",
  },
  {
    icon: Truck,
    title: "Trucking & Drayage",
    description:
      "Port drayage, intermodal transportation, inland trucking, and final-mile delivery.",
    link: "/services/trucking-drayage",
  },
  {
    icon: Route,
    title: "Door-to-Door Logistics",
    description:
      "Complete logistics management from supplier pickup through final delivery.",
    link: "/services/door-to-door",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-8 md:py-10 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Section Header */}
        <div className="mb-6">

          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-[2px] bg-[#C8960A]" />

            <span className="uppercase tracking-[0.2em] text-[#1A73C8] text-[11px] font-semibold">
              What We Do
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1E3A7B] mb-2">
            Integrated logistics services
            for global supply chains.
          </h2>

          <p className="text-gray-600 text-sm max-w-2xl">
            Six tightly connected service lines engineered to move cargo
            efficiently across global markets.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 bg-white">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={index}
                to={service.link}
                className="
                  p-6
                  border-r
                  border-b
                  border-gray-200
                  min-h-[180px]
                  block
                  transition-all
                  duration-300
                  hover:bg-[#F8F9FB]
                  hover:shadow-sm
                  group
                "
              >
                {/* Top Row */}
                <div className="flex items-start justify-between mb-4">

                  <div className="w-10 h-10 bg-gray-50 flex items-center justify-center">
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className="text-[#1E3A7B]"
                    />
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="
                      text-[#1A73C8]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </div>

                {/* Title */}
                <h3 className="text-[#1E3A7B] text-lg font-bold mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-6">
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