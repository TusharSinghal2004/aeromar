import { CheckCircle, ArrowRight } from "lucide-react";

const capabilities = [
  "FCL — 20', 40', 40'HC, 45'HC, reefer & flat-rack",
  "LCL consolidation from major U.S. and Asia gateways",
  "Direct & transshipment service routing",
  "Project & out-of-gauge cargo handling",
  "Bonded transport and ISF / AMS filing",
];

const benefits = [
  "Contracted carrier capacity even in peak season",
  "Single point of contact across origin and destination",
  "Transparent rate cards with no surprise surcharges",
  "Documentation accuracy that prevents costly delays",
];

export default function OceanFreightOverview() {
  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        <div className="grid lg:grid-cols-[1.6fr_0.9fr] gap-10">

          {/* Left Side */}
          <div>

            {/* Label */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-[2px] bg-[#C8960A]" />

              <span className="uppercase tracking-[0.2em] text-[#1A73C8] text-[11px] font-semibold">
                Overview
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A7B] leading-tight max-w-3xl">
              Built for shippers who measure outcomes, not effort.
            </h2>

            {/* Description */}
            <p className="mt-5 text-gray-600 text-base leading-8 max-w-4xl">
              As an FMC-licensed NVOCC, Aeromar moves containers on every
              major east-west and north-south trade lane. From single FCL
              bookings to multi-container programs, we negotiate carrier
              contracts that work for your margins, schedule, and cargo profile.
            </p>

            {/* Capabilities */}
            <div className="mt-10">

              <h3 className="uppercase tracking-[0.2em] text-[#1A73C8] text-[11px] font-semibold mb-5">
                Capabilities
              </h3>

              <div className="space-y-4">

                {capabilities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      size={18}
                      className="text-[#C8960A] mt-1 shrink-0"
                    />

                    <p className="text-[#081229] text-base">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Right Card */}
          <div>

            <div className="bg-[#F8F9FB] p-6 md:p-8">

              <h3 className="uppercase tracking-[0.2em] text-[#1A73C8] text-[11px] font-semibold mb-6">
                Benefits
              </h3>

              <div className="space-y-5 mb-8">

                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#C8960A] mt-3 shrink-0" />

                    <p className="text-[#081229] text-base leading-7">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

              <button
                className="
                  w-full
                  h-12
                  bg-[#1E3A7B]
                  text-white
                  font-semibold
                  text-sm
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:bg-[#163164]
                  transition-all
                "
              >
                REQUEST A QUOTE
                <ArrowRight size={16} />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}