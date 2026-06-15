import { useEffect, useRef, useState } from "react";

// const stats = [
//   { value: "30+", label: "Years Combined Experience" },
//   { value: "5", label: "Continents Served" },
//   { value: "100%", label: "FMC Licensed & Compliant" },
// ];

export default function OurStory() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fade = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
  });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Side */}
          <div className="lg:sticky lg:top-24">

            <div style={fade(0)} className="flex items-center gap-3 mb-4">
              <span className="uppercase tracking-[0.25em] text-[#1A73C8] text-xs font-semibold">
                Our Story
              </span>
            </div>

            <h2
              style={fade(0.12)}
              className="text-2xl md:text-3xl lg:text-[2.1rem] font-extrabold text-[#1E3A7B] leading-[1.12] max-w-sm"
            >
              Built by operators. Run by people who answer the phone.
            </h2>

            {/* Divider */}
            <div style={fade(0.24)} className="my-7 w-full h-[1px] bg-[#E8EDF5]" />

          </div>

          {/* Right Side */}
          <div className="space-y-5">

            <p style={fade(0.18)} className="text-gray-500 text-sm md:text-[0.95rem] leading-7">
              Aeromar was founded by Thomas Marano and Russell Gomes —
              two career logistics operators with more than three decades
              each across NVOCC, freight forwarding, and customs brokerage.
              The premise was simple: global shippers deserve a
              U.S.-headquartered partner where the people negotiating their
              carrier contracts are the same people answering the phone
              when a container is on hold at port.
            </p>

            <p style={fade(0.28)} className="text-gray-500 text-sm md:text-[0.95rem] leading-7">
              Today, Aeromar moves cargo across five continents — with
              deep specialization on the India–USA corridor and a U.S.
              footprint that spans every major gateway port. We're
              FMC-licensed, compliance-driven, and relentlessly focused
              on the outcomes our customers actually measure:
              on-time delivery, landed cost, and zero compliance surprises.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}