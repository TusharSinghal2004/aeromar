import { useEffect, useRef, useState } from "react";
import { Ship, Anchor, Globe, Waves, Container, Navigation } from "lucide-react";

const carriers = [
  { name: "Maersk",    icon: Ship },
  { name: "CMA CGM",  icon: Anchor },
  { name: "ONE",      icon: Globe },
  { name: "Yang Ming", icon: Waves },
  { name: "MSC",      icon: Container },
  { name: "Wan Hai",  icon: Navigation },
];

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
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 text-center">
          <div>
            <h2 className="text-[#1E3A7B] text-4xl md:text-5xl font-extrabold">
              <AnimatedCounter target={30} />+
            </h2>
            <p className="text-gray-500 text-sm mt-1">Years Experience</p>
          </div>
          <div>
            <h2 className="text-[#1E3A7B] text-4xl md:text-5xl font-extrabold leading-tight">FMC</h2>
            <p className="text-[#C8960A] text-xs font-semibold tracking-wide mt-0.5">Licensed #019576</p>
          </div>
          <div>
            <h2 className="text-[#1E3A7B] text-4xl md:text-5xl font-extrabold">
              <AnimatedCounter target={6} />
            </h2>
            <p className="text-gray-500 text-sm mt-1">Ocean Carriers</p>
          </div>
          <div>
            <h2 className="text-[#1E3A7B] text-4xl md:text-5xl font-extrabold">
              <AnimatedCounter target={3} />
            </h2>
            <p className="text-gray-500 text-sm mt-1">U.S. Warehouse Locations</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />

        {/* Carrier Strip */}
        <div>
          <p className="text-center text-xs font-semibold text-[#1E3A7B] tracking-widest uppercase mb-6">
            Ocean Carrier Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {carriers.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="group flex flex-col items-center gap-1.5 cursor-default"
              >
                <div className="w-12 h-12 rounded-full border border-[#1E3A7B]/20 bg-[#1E3A7B]/5 flex items-center justify-center transition-all duration-300 group-hover:bg-[#1E3A7B]/10 group-hover:border-[#1E3A7B]/40">
                  <Icon
                    size={20}
                    className="text-[#1E3A7B] transition-colors duration-300"
                  />
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