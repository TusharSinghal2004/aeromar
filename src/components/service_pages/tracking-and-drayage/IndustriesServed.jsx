import {
  Sofa,
  Factory,
  ShoppingBag,
  Wheat,
  ShoppingCart,
} from "lucide-react";

const industries = [
  {
    icon: Sofa,
    title: "Furniture",
  },
  {
    icon: Factory,
    title: "Manufacturing",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
  },
  {
    icon: Wheat,
    title: "Agriculture",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce",
  },
];

export default function IndustriesServed() {
  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-[2px] bg-[#C8960A]" />

          <span className="uppercase tracking-[0.2em] text-[#1A73C8] text-[11px] font-semibold">
            Industries Served
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A7B] mb-8">
          Verticals where ocean freight excels.
        </h2>

        {/* Industries Grid */}
        <div className="flex flex-wrap gap-4">

          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="
                  min-w-[170px]
                  h-[60px]
                  px-6
                  border
                  border-gray-200
                  bg-white
                  flex
                  items-center
                  gap-3
                  hover:border-[#C8960A]
                  transition-all
                  duration-300
                "
              >
                <Icon
                  size={18}
                  className="text-[#C8960A]"
                />

                <span className="font-semibold text-[#1E3A7B] text-lg">
                  {industry.title}
                </span>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}