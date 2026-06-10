import {
  Handshake,
  Truck,
  Ship,
  FileText,
  Warehouse,
  PackageCheck,
} from "lucide-react";

const steps = [
  {
    step: "STEP 01",
    title: "Supplier",
    description: "Origin coordination & booking",
    icon: Handshake,
  },
  {
    step: "STEP 02",
    title: "Pickup",
    description: "Inland transport to port",
    icon: Truck,
  },
  {
    step: "STEP 03",
    title: "Freight",
    description: "Ocean or air movement",
    icon: Ship,
  },
  {
    step: "STEP 04",
    title: "Customs",
    description: "Clearance & compliance",
    icon: FileText,
  },
  {
    step: "STEP 05",
    title: "Warehousing",
    description: "Storage & distribution",
    icon: Warehouse,
  },
  {
    step: "STEP 06",
    title: "Delivery",
    description: "Final-mile to consignee",
    icon: PackageCheck,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-12 md:py-14 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="uppercase tracking-[0.2em] text-[#C8960A] text-xs font-semibold">
            Our Process
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#081229]">
            A seamless logistics journey
          </h2>

          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
            From the supplier's door to the consignee's destination —
            accountable, transparent, and on time.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-8 left-0 right-0 h-px bg-gray-200" />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full border-2 border-[#C8960A] bg-white flex items-center justify-center">
                    <Icon
                      size={26}
                      className="text-[#1E3A7B]"
                    />
                  </div>

                  <p className="mt-4 text-[#C8960A] text-xs font-semibold tracking-wide">
                    {item.step}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-[#081229]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 leading-relaxed px-2">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet + Mobile */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5"
              >
                <div className="w-12 h-12 rounded-full border-2 border-[#C8960A] flex items-center justify-center">
                  <Icon
                    size={20}
                    className="text-[#1E3A7B]"
                  />
                </div>

                <p className="mt-4 text-[#C8960A] text-xs font-semibold tracking-wide">
                  {item.step}
                </p>

                <h3 className="mt-2 text-lg font-bold text-[#081229]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}