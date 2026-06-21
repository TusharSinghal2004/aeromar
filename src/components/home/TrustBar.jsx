import { useEffect, useRef, useState } from "react";

const carriers = ["Maersk", "CMA CGM", "ONE", "Yang Ming", "MSC", "Wan Hai"];

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

        <div
          ref={statsRef}
          className="flex flex-wrap justify-center gap-10 md:gap-20 text-center items-center"
          style={{
            opacity: statsInView ? 1 : 0,
            transform: statsInView ? "translateY(0px)" : "translateY(32px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {[
            { target: 24, suffix: "/7", label: "Human Support" },
            { target: 100, suffix: "+", label: "Years Experience Combined" },
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

        <div
          ref={carrierRef}
          style={{
            opacity: carrierInView ? 1 : 0,
            transform: carrierInView ? "translateY(0px)" : "translateY(32px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
        >
          <p className="text-center text-xs font-semibold text-[#1E3A7B] tracking-widest uppercase mb-6">
            All Major Ocean Carriers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
            {carriers.map((name) => (
              <span
                key={name}
                className="px-4 py-1.5 rounded-full border border-[#1E3A7B]/20 bg-[#1E3A7B]/5 text-xs font-semibold text-[#1E3A7B]/70 tracking-wide"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}