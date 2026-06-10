import {
  ShieldCheck,
  HandHeart,
  Compass,
  Eye,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We honor every commitment we make to our customers and carrier partners.",
  },
  {
    icon: HandHeart,
    title: "Relationships",
    description:
      "Trust is built over decades, not transactions. Every shipment compounds it.",
  },
  {
    icon: Compass,
    title: "Expertise",
    description:
      "Senior operators on every account — not a queue of junior coordinators.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Honest rates, clear status updates, and no surprises at invoicing.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-[2px] bg-[#C8960A]" />

            <span className="uppercase tracking-[0.22em] text-[#1A73C8] text-xs font-semibold">
              Core Values
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1E3A7B]">
            What we stand on.
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-200">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="
                  p-6
                  border-r
                  border-b
                  border-gray-200
                  lg:min-h-[220px]
                  flex
                  flex-col
                "
              >
                <Icon
                  size={28}
                  strokeWidth={1.8}
                  className="text-[#C8960A] mb-5"
                />

                <h3 className="text-[#1E3A7B] text-xl font-bold mb-3">
                  {value.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-7">
                  {value.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}