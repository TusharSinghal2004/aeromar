import { useEffect, useRef, useState } from "react";
import {
  Eye, Cpu, FileText, Bell,
  MapPin, Package, DollarSign, CheckCircle
} from "lucide-react";

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

const features = [
  {
    icon: Eye,
    title: "Real-Time Shipment Visibility",
    description: "Track every shipment across ocean, air, and land in one unified view. Live status, live ETAs, live exceptions — always.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Route Optimization",
    description: "Our platform continuously analyzes routes, carrier performance, and market rates to recommend the smartest move for each shipment.",
  },
  {
    icon: FileText,
    title: "Digital Documentation",
    description: "Automated BOLs, customs forms, and compliance documents. Less errors, less admin time, more speed.",
  },
  {
    icon: Bell,
    title: "Alerts + Human Follow-Up",
    description: "When something changes, you'll know instantly — and a real person from our team is already working on the solution.",
  },
];

const dashboardStats = [
  { icon: Package,     value: "24",     label: "Active Shipments" },
  { icon: FileText,    value: "3",      label: "Awaiting Customs" },
  { icon: DollarSign,  value: "$14.2K", label: "Savings This Month" },
  { icon: CheckCircle, value: "99.1%",  label: "Accuracy Rate" },
];

const steps = ["PO Ready", "Departed", "In Transit", "Arriving", "Delivered"];

export default function YourComponentName() {
  const [leftRef, leftInView] = useInView(0.1);
  const [rightRef, rightInView] = useInView(0.1);

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!leftInView) return;
    const timeout = setTimeout(() => {
      let p = 0;
      const interval = setInterval(() => {
        p += 1;
        setProgress(p);
        if (p >= 62) clearInterval(interval);
      }, 18);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(timeout);
  }, [leftInView]);

  return (
    <section className="bg-[#F8F9FB] py-10 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* LEFT — UI Mockup */}
          <div
            ref={leftRef}
            className="relative"
            style={{
              opacity: leftInView ? 1 : 0,
              transform: leftInView ? "translateY(0px)" : "translateY(48px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="bg-[#1E3A7B] rounded-2xl p-4 sm:p-6 shadow-xl">
              <p className="text-white font-bold text-sm sm:text-base mb-1">Live Shipment Tracker</p>
              <p className="text-white/50 text-xs mb-5">Shanghai → Los Angeles · Ocean Freight</p>

              <div className="relative h-1.5 bg-white/10 rounded-full mb-3">
                <div
                  className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#C8960A] to-[#1A73C8]"
                  style={{ width: `${progress}%`, transition: "width 0.05s linear" }}
                />
                <div
                  className="absolute -top-1 w-3 h-3 rounded-full bg-white shadow border-2 border-[#C8960A]"
                  style={{ left: `calc(${progress}% - 6px)`, transition: "left 0.05s linear" }}
                />
              </div>

              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-1.5 text-white/60 text-xs">
                  <MapPin size={11} />
                  Currently: Pacific Ocean
                </div>
                <p className="text-white/60 text-xs">ETA: June 3</p>
              </div>

              <div className="flex items-center gap-0.5 overflow-x-auto pb-1 scrollbar-none">
                {steps.map((step, i) => (
                  <div key={step} className="flex items-center gap-0.5 flex-shrink-0">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${i <= 2 ? "bg-[#C8960A]" : "bg-white/20"}`} />
                    <span className={`text-[10px] whitespace-nowrap ${i <= 2 ? "text-white/80" : "text-white/30"}`}>{step}</span>
                    {i < steps.length - 1 && <div className="w-2 sm:w-3 h-px bg-white/10 flex-shrink-0 mx-0.5" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-5 mt-4 sm:mt-[-20px] sm:ml-8 sm:mr-[-16px] relative z-10">
              <p className="text-[#081229] font-bold text-sm mb-4">Your Dashboard</p>
              <div className="grid grid-cols-2 gap-3">
                {dashboardStats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="bg-[#F8F9FB] rounded-xl p-3 sm:p-3.5 flex flex-col gap-2">
                    <div className="w-7 h-7 bg-[#E8EEF8] rounded-lg flex items-center justify-center">
                      <Icon size={14} className="text-[#1E3A7B]" />
                    </div>
                    <p className="text-[#081229] text-lg sm:text-xl font-extrabold leading-none">{value}</p>
                    <p className="text-gray-400 text-xs">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Text Content */}
          <div
            ref={rightRef}
            style={{
              opacity: rightInView ? 1 : 0,
              transform: rightInView ? "translateY(0px)" : "translateY(48px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <p className="uppercase tracking-[2px] text-[#C8960A] font-semibold text-xs">
                Smart Technology
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#081229] leading-tight mb-4">
              Innovative IT Solutions That Drive Business Growth
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              We take global logistics complexity and turn it into something you actually
              understand — clear, actionable, always live.
            </p>

            <div className="space-y-5 sm:space-y-6">
              {features.map(({ icon: Icon, title, description }, i) => (
                <div
                  key={title}
                  className="flex gap-3 sm:gap-4"
                  style={{
                    opacity: rightInView ? 1 : 0,
                    transform: rightInView ? "translateY(0px)" : "translateY(24px)",
                    transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${0.3 + i * 0.1}s`,
                  }}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#C8960A] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={16} className="text-white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[#081229] font-bold text-sm mb-1">{title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}