import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import leader1 from "../../assets/images/leader1.png";
import leader2 from "../../assets/images/leader2.png";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

const leaders = [
  {
    name: "Thomas Marano",
    role: "Co-Founder",
    image: leader1,
    description:
      "A seasoned logistics executive with over three decades of experience in international freight forwarding, NVOCC operations, and global supply chain management. Tom has built lasting carrier relationships and client partnerships that form the foundation of Aeromar's service excellence.",
    stats: [
      { value: "30+", label: "Years Experience" },
      { value: "50+", label: "Carrier Partners" },
    ],
  },
  {
    name: "Russell Gomes",
    role: "Co-Founder",
    image: leader2,
    description:
      "With deep expertise in India–USA trade corridors and international logistics operations, Russell brings strategic vision and operational excellence to every client engagement. His leadership drives Aeromar's commitment to transparent and relationship-driven logistics.",
    stats: [
      { value: "20+", label: "Trade Corridors" },
      { value: "15+", label: "Years in USA–India Trade" },
    ],
  },
];

export default function LeadershipSection() {
  const [headerRef, headerInView] = useInView(0.2);
  const [gridRef, gridInView] = useInView(0.1);

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-10"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0px)" : "translateY(32px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-0.5 bg-[#C8960A]" />
            <p className="uppercase tracking-[4px] text-[#C8960A] font-semibold text-xs">
              Leadership
            </p>
            <div className="w-6 h-0.5 bg-[#C8960A]" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#081229] leading-tight mb-4">
            Led By Industry Veterans
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Decades of combined experience driving strategic logistics
            solutions and building trusted global partnerships.
          </p>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid lg:grid-cols-2 gap-6">
          {leaders.map((leader, i) => (
            <div
              key={leader.name}
              className="group bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                opacity: gridInView ? 1 : 0,
                transform: gridInView ? "translateY(0px)" : "translateY(48px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              }}
            >
              {/* Image */}
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081229] via-[#081229]/50 to-transparent" />

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-white">{leader.name}</h3>
                    <p className="text-[#C8960A] text-sm font-semibold mt-0.5">{leader.role}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#C8960A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={16} className="text-[#081229]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {leader.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 pt-5 border-t border-[#E2E8F0]">
                  {leader.stats.map(({ value, label }) => (
                    <div key={label} className="bg-[#F8F9FB] rounded-xl p-3.5">
                      <p className="text-[#1E3A7B] text-xl font-extrabold">{value}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}