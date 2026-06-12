import { useEffect, useRef, useState } from "react";
import { Search, BarChart2, Handshake, AlertTriangle, ClipboardList, Globe, ArrowUpRight } from "lucide-react";

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

const services = [
  {
    icon: Search,
    title: "Supplier Discovery & Vetting",
    description: "Access a curated network of verified, reliable suppliers across Asia, Europe, and the Americas.",
  },
  {
    icon: BarChart2,
    title: "Cost & Spend Analysis",
    description: "Identify savings opportunities with data-driven spend analytics and market rate benchmarking.",
  },
  {
    icon: Handshake,
    title: "Vendor Negotiations",
    description: "We negotiate on your behalf — better pricing, stronger terms, long-term partnerships.",
  },
  {
    icon: AlertTriangle,
    title: "Supply Risk Management",
    description: "Monitor supplier health, geopolitical risks, and alternative sourcing to protect your continuity.",
  },
  {
    icon: ClipboardList,
    title: "Purchase Order Management",
    description: "End-to-end PO management from creation to goods receipt, integrated with our logistics platform.",
  },
  {
    icon: Globe,
    title: "Global Sourcing Strategy",
    description: "China+1, nearshoring, reshoring — we help you build a supply chain that's resilient and future-proof.",
  },
];

const tags = ["Strategic Sourcing", "Vendor Management", "Cost Optimization", "Global Trade", "Supply Risk"];

const stats = [
  { value: "500+", label: "Verified Suppliers" },
  { value: "30%",  label: "Avg. Cost Savings" },
  { value: "18+",  label: "Years Experience" },
  { value: "40+",  label: "Countries Sourced" },
];

export default function ProcurementSection() {
  const [leftRef, leftInView] = useInView(0.1);
  const [rightRef, rightInView] = useInView(0.1);
  const [gridRef, gridInView] = useInView(0.1);

  return (
    <section className="bg-[#081229] py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-start">

          {/* LEFT — Profile Card */}
          <div
            ref={leftRef}
            className="bg-[#0E1E3D] rounded-2xl p-7 flex flex-col items-center text-center border border-[#1E3A7B]/30"
            style={{
              opacity: leftInView ? 1 : 0,
              transform: leftInView ? "translateY(0px)" : "translateY(48px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1A73C8] to-[#C8960A] flex items-center justify-center mb-4 shadow-lg">
              <span className="text-white text-2xl font-extrabold">E</span>
            </div>

            <h3 className="text-white text-xl font-bold mb-1">Eudora</h3>
            <p className="text-[#C8960A] text-[10px] font-semibold uppercase tracking-[3px] mb-4">
              Head of Procurement & Sourcing · Aeromar
            </p>

            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              With deep expertise across global supplier networks, trade finance, and strategic
              sourcing, Eudora leads Aeromar's procurement division — ensuring clients get
              the best value, the right suppliers, and zero supply disruption.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold text-[#C8960A] border border-[#C8960A]/40 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 w-full mb-6">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-[#081229] rounded-xl p-3 text-center">
                  <p className="text-white text-lg font-extrabold">{value}</p>
                  <p className="text-gray-500 text-[10px] mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            <button className="w-full bg-[#C8960A] hover:bg-[#b8850a] transition-colors duration-300 text-[#081229] font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2">
              Connect with Eudora
              <ArrowUpRight size={15} />
            </button>
          </div>

          {/* RIGHT — Heading + Services Grid */}
          <div
            ref={rightRef}
            style={{
              opacity: rightInView ? 1 : 0,
              transform: rightInView ? "translateY(0px)" : "translateY(48px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 bg-[#C8960A]" />
              <p className="uppercase tracking-[4px] text-[#C8960A] font-semibold text-xs">
                Procurement & Sourcing
              </p>
            </div>

            <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Your Sourcing Advantage,<br />Built on Relationships
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-xl">
              Procurement isn't just purchasing — it's strategy. Eudora and her team bring
              market intelligence, supplier relationships, and negotiation power that
              directly impact your bottom line.
            </p>

            <div ref={gridRef} className="grid md:grid-cols-2 gap-3">
              {services.map(({ icon: Icon, title, description }, i) => (
                <div
                  key={title}
                  className="group bg-[#0E1E3D] hover:bg-[#132645] border border-[#1E3A7B]/30 hover:border-[#1E3A7B]/60 rounded-xl p-5 cursor-pointer transition-all duration-300"
                  style={{
                    opacity: gridInView ? 1 : 0,
                    transform: gridInView ? "translateY(0px)" : "translateY(32px)",
                    transition: `opacity 0.5s ease ${0.3 + i * 0.08}s, transform 0.5s ease ${0.3 + i * 0.08}s`,
                  }}
                >
                  <div className="w-8 h-8 bg-[#1E3A7B]/40 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1E3A7B] transition-colors duration-300">
                    <Icon size={15} className="text-[#C8960A]" />
                  </div>
                  <p className="text-white font-bold text-sm mb-1.5">{title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}