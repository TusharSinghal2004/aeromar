import { CheckCircle2 } from "lucide-react";
import warehouseImage from "../../assets/images/warehouse.png";

const features = [
  {
    title: "Senior-Level Expertise",
    description:
      "Three decades of operational depth on every shipment with direct access to experienced logistics professionals.",
  },
  {
    title: "Personalized Service",
    description:
      "Dedicated account management tailored to your cargo requirements, customers, and deadlines.",
  },
  {
    title: "Global Carrier Network",
    description:
      "Strong partnerships across ocean, air, and ground transportation providers worldwide.",
  },
  {
    title: "India–USA Trade Expertise",
    description:
      "Specialized knowledge of trade lanes, documentation, customs compliance, and regulations.",
  },
  {
    title: "Transparent Communication",
    description:
      "Clear updates, milestone visibility, and proactive communication throughout every shipment.",
  },
  {
    title: "End-to-End Coverage",
    description:
      "From pickup and warehousing to customs clearance and final delivery through one team.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-8 lg:gap-10 items-center">
          
          {/* Left Side */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-[#C8960A]" />

              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-[#1A73C8]">
                Why Aeromar
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-[#081229] leading-[1.05]">
              Why global
              <br />
              businesses
              <br />
              choose Aeromar.
            </h2>

            <p className="mt-5 text-[15px] md:text-base text-gray-600 leading-8 max-w-md">
              We engineer logistics programs that protect schedules,
              reduce risk, and create dependable supply chains across
              global markets. Our team combines decades of experience,
              carrier relationships, and operational excellence to keep
              your business moving.
            </p>

            <div className="mt-7 overflow-hidden rounded-md">
              <img
                src={warehouseImage}
                alt="Aeromar Warehouse"
                className="w-full h-[220px] md:h-[250px] object-cover"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200">
            {features.map((feature, index) => (
              <div
                key={index}
                className="
                  h-[195px]
                  md:h-[205px]
                  p-5 md:p-6
                  border-r border-b border-gray-200
                  flex flex-col
                "
              >
                <CheckCircle2
                  size={18}
                  strokeWidth={2}
                  className="text-[#C8960A] mb-4"
                />

                <h3 className="text-lg md:text-xl font-bold text-[#1E3A7B] leading-tight mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm md:text-[15px] text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}