import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

const features = [
  "FMC-Licensed NVOCC (OTI License)",
  "Continuous Customs Bond",
  "C-TPAT Compliance Ready",
  "ISO-aligned operating procedures",
];

const complianceImage = "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80";

export default function ComplianceSection() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fade = (delay, axis = "Y", dist = 24) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translate(0,0)" : `translate${axis}(${dist}px)`,
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section ref={ref} className="bg-[#081229] py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div>
            <div style={fade(0.05)} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#C8960A]" />
              <span className="uppercase tracking-[0.22em] text-[#C8960A] text-[10px] font-semibold">
                FMC Licensing & Trust
              </span>
            </div>

            <h2
              style={fade(0.15)}
              className="text-2xl md:text-3xl lg:text-[2.2rem] font-extrabold text-white leading-[1.12] max-w-lg"
            >
              FMC-Licensed. NVOCC-Bonded.
              Built for compliance from day one.
            </h2>

            <p style={fade(0.25)} className="mt-4 text-white/70 text-sm leading-7 max-w-lg">
              Our Federal Maritime Commission license is more than a
              regulatory stamp — it's a legal and financial guarantee
              for every shipper we serve. Combined with a continuous
              customs bond and senior-level brokerage team, Aeromar
              gives importers and exporters the compliance backbone
              enterprise programs require.
            </p>

            <div className="mt-6 space-y-3">
              {features.map((item, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-20px)",
                    transition: `opacity 0.6s ease ${0.35 + i * 0.08}s, transform 0.6s ease ${0.35 + i * 0.08}s`,
                  }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <CheckCircle
                    size={16}
                    style={{
                      color: "#C8960A",
                      transform: hovered === i ? "scale(1.25)" : "scale(1)",
                      transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                    }}
                    className="flex-shrink-0"
                  />
                  <span
                    style={{
                      color: hovered === i ? "#fff" : "rgba(255,255,255,0.8)",
                      transform: hovered === i ? "translateX(4px)" : "translateX(0)",
                      transition: "color 0.2s ease, transform 0.25s ease",
                    }}
                    className="text-sm"
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            style={fade(0.2, "X", 40)}
            className="relative"
          >
            {/* Image with subtle zoom-in on load */}
            <div className="overflow-hidden">
              <img
                src={complianceImage}
                alt="Compliance Team"
                style={{
                  transform: visible ? "scale(1)" : "scale(1.06)",
                  transition: "transform 1.2s cubic-bezier(0.16,1,0.3,1) 0.2s",
                }}
                className="w-full h-[360px] object-cover"
              />
            </div>

            {/* Animated border accent */}
            <div
              style={{
                width: visible ? "100%" : "0%",
                transition: "width 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s",
              }}
              className="absolute top-0 left-0 h-[3px] bg-[#C8960A]"
            />

            {/* FMC Badge */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translate(-1.5rem, 1.5rem) scale(1)" : "translate(-1.5rem, 1.5rem) scale(0.85)",
                transition: "opacity 0.5s ease 0.7s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.7s",
              }}
              className="absolute bottom-0 left-0 bg-[#C8960A] px-6 py-5 shadow-lg"
            >
              <h3 className="text-[#081229] text-2xl font-extrabold tracking-wide">
                FMC
              </h3>
              <p className="text-[#081229] uppercase tracking-[0.2em] text-[10px] mt-1 font-semibold">
                Licensed NVOCC
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}