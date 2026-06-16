import { useEffect, useRef, useState } from "react";
import {
  Ship, Anchor, Globe, Waves, Container, Navigation,
} from "lucide-react";

const carriers = [
  { name: "Maersk", icon: Ship },
  { name: "CMA CGM", icon: Anchor },
  { name: "ONE", icon: Globe },
  { name: "Yang Ming", icon: Waves },
  { name: "MSC", icon: Container },
  { name: "Wan Hai", icon: Navigation },
];

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

function AnimatedCounter({ target, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsStrip() {
  const [statsRef, statsInView] = useInView(0.2);
  const [carrierRef, carrierInView] = useInView(0.2);

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Stats — 2 cols on mobile, 4 on md+ */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-x-6 text-center items-center"
          style={{
            opacity: statsInView ? 1 : 0,
            transform: statsInView ? "translateY(0px)" : "translateY(32px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {[
            { target: 150, suffix: "+", label: "Countries Served" },
            { target: 98,  suffix: "%", label: "On Time Delivery" },
            { target: 24,  suffix: "/7", label: "Human Support" },
            { target: 30,  suffix: "+", label: "Years Experience" },
          ].map(({ target, suffix, label }) => (
            <div key={label} className="flex flex-col items-center">
              <h2 className="text-[#1E3A7B] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                <AnimatedCounter target={target} />{suffix}
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 my-8 md:my-11" />

        {/* Carrier Strip */}
        <div
          ref={carrierRef}
          style={{
            opacity: carrierInView ? 1 : 0,
            transform: carrierInView ? "translateY(0px)" : "translateY(32px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
        >
          <p className="text-center text-xs font-semibold text-[#1E3A7B] tracking-widest uppercase mb-6">
            Ocean Carrier Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-10">
            {carriers.map(({ name, icon: Icon }) => (
              <div key={name} className="group flex flex-col items-center gap-1.5 cursor-default">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-[#1E3A7B]/20 bg-[#1E3A7B]/5 flex items-center justify-center transition-all duration-300 group-hover:bg-[#1E3A7B]/10 group-hover:border-[#1E3A7B]/40">
                  <Icon size={18} className="text-[#1E3A7B] transition-colors duration-300" />
                </div>
                <span className="text-xs font-semibold text-[#1E3A7B]/60 tracking-wide transition-colors duration-300 group-hover:text-[#1E3A7B]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}