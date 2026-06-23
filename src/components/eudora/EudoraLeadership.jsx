import { useEffect, useRef, useState } from "react";
import scottImage from "../../assets/images/image.png";

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

export default function LeadershipSection() {
  const [ref, inView] = useInView(0.15);

  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className="grid sm:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] gap-6 lg:gap-10 items-start"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0px)" : "translateY(32px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {/* Image — always square */}
          <div className="w-full max-w-[280px] sm:max-w-none aspect-square rounded-2xl overflow-hidden bg-[#F0F4FA] mx-auto sm:mx-0">
            <img
              src={scottImage}
              alt="Scott Vierck"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Brief */}
          <div>
            <p className="uppercase tracking-[3px] text-[#C8960A] font-semibold text-xs mb-3">
              Leadership
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081229] mb-1">
              Scott Vierck
            </h2>
            <p className="text-[#1E3A7B] text-sm font-semibold mb-5">
              Senior Vice President, Business Development
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Scott brings 30+ years of experience in the oil and gas industry,
              specializing in specialty chemicals, strategic sourcing, and supply
              chain solutions. He previously held senior account management roles
              at Connell / Wilbur-Ellis and Ashland Distribution Company. At Eudora,
              he drives strategic customer partnerships and growth across the
              company's energy-focused portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}