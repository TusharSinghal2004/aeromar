import {
  Ship,
  Plane,
  FileBadge,
  Warehouse,
  Truck,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Ocean Freight",
    description:
      "FCL, LCL & project cargo via our global carrier network.",
    icon: Ship,
  },
  {
    title: "Air Freight",
    description:
      "Time-critical, perishable and high-value air cargo.",
    icon: Plane,
  },
  {
    title: "Customs Brokerage",
    description:
      "Licensed U.S. customs clearance with zero-surprise compliance.",
    icon: FileBadge,
  },
  {
    title: "Warehousing",
    description:
      "Bonded, FTZ and DC operations across key U.S. gateways.",
    icon: Warehouse,
  },
  {
    title: "Trucking & Drayage",
    description:
      "Port drayage, OTR and final-mile across North America.",
    icon: Truck,
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#F8F9FB] pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-[#DCE2EA]">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  min-h-[280px]
                  p-8
                  border-r
                  border-b
                  border-[#DCE2EA]
                  bg-white
                  hover:bg-[#FAFBFC]
                  transition-all
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    bg-[#F5F6F8]
                    flex
                    items-center
                    justify-center
                    mb-8
                  "
                >
                  <Icon
                    size={24}
                    className="text-[#1E3A7B]"
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-[#1E3A7B]
                    text-2xl
                    font-bold
                    mb-4
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-gray-500
                    text-base
                    leading-relaxed
                    mb-8
                  "
                >
                  {service.description}
                </p>

                {/* Link */}
                <button
                  className="
                    flex
                    items-center
                    gap-2
                    text-[#1A73C8]
                    uppercase
                    tracking-[3px]
                    font-semibold
                    text-xs
                  "
                >
                  Learn More
                  <ArrowUpRight size={16} />
                </button>
              </div>
            );
          })}

          {/* Featured Card */}

          <div
            className="
              min-h-[280px]
              p-8
              bg-[#1E3A7B]
              text-white
              flex
              flex-col
            "
          >
            <div
              className="
                w-14
                h-14
                bg-[#C8960A]
                flex
                items-center
                justify-center
                mb-8
              "
            >
              <Workflow
                size={24}
                className="text-[#081229]"
              />
            </div>

            <h3
              className="
                text-2xl
                font-bold
                mb-4
              "
            >
              Door-to-Door Logistics
            </h3>

            <p
              className="
                text-white/80
                text-base
                leading-relaxed
                mb-8
              "
            >
              One contract, one team — origin pickup to final
              delivery.
            </p>

            <button
              className="
                mt-auto
                flex
                items-center
                gap-2
                text-[#C8960A]
                uppercase
                tracking-[3px]
                font-semibold
                text-xs
              "
            >
              Learn More
              <ArrowUpRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}