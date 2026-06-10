import { ArrowRight } from "lucide-react";

import leader1 from "../../assets/images/leader1.png";
import leader2 from "../../assets/images/leader2.png";

const leaders = [
  {
    name: "Thomas Marano",
    role: "Co-Founder",
    image: leader1,
    description:
      "A seasoned logistics executive with over three decades of experience in international freight forwarding, NVOCC operations, and global supply chain management. Tom has built lasting carrier relationships and client partnerships that form the foundation of Aeromar's service excellence.",
  },
  {
    name: "Russell Gomes",
    role: "Co-Founder",
    image: leader2,
    description:
      "With deep expertise in India–USA trade corridors and international logistics operations, Russell brings strategic vision and operational excellence to every client engagement. His leadership drives Aeromar's commitment to transparent and relationship-driven logistics.",
  },
];

export default function LeadershipSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="uppercase tracking-[0.2em] text-[#C8960A] text-sm font-semibold">
            Leadership
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#081229]">
            Led By Industry Veterans
          </h2>

          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
            Decades of combined experience driving strategic logistics
            solutions and building trusted global partnerships.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
            >
              {/* Image */}
              <div className="relative h-[260px] md:h-[300px] overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081229] via-[#081229]/40 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {leader.name}
                  </h3>

                  <p className="text-[#C8960A] font-semibold mt-1">
                    {leader.role}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <p className="text-gray-600 leading-7 text-[15px]">
                  {leader.description}
                </p>

                <button className="mt-6 group flex items-center gap-2 text-[#C8960A] font-semibold hover:gap-3 transition-all">
                  View Full Profile

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}