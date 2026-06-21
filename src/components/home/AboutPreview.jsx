import { useEffect, useRef, useState } from "react";
import { CheckCircle, ArrowUpRight, Award } from "lucide-react";
import { Link } from "react-router-dom";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

export default function AboutPreview() {
  const [leftRef, leftInView] = useInView(0.1);
  const [rightRef, rightInView] = useInView(0.1);

  return (
    <section className="bg-white pt-2 lg:pt-0 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="border-t border-gray-200 mb-14" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT IMAGE */}
          <div
            ref={leftRef}
            className="relative pb-10 pr-10"
            style={{
              opacity: leftInView ? 1 : 0,
              transform: leftInView ? "translateY(0px)" : "translateY(48px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&auto=format&fit=crop&q=80"
              alt="Aeromar Logistics"
              className="w-full h-[480px] object-cover"
            />

            {/* Floating Experience Card */}
            <div
              className="absolute bottom-0 right-0 bg-[#1E3A7B] rounded-2xl p-5 w-[200px]"
              style={{ boxShadow: "0 20px 60px rgba(30,58,123,0.3)" }}
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                <Award size={20} className="text-white" />
              </div>
              <h2 className="text-white text-4xl font-extrabold leading-none mb-1">
                30+
              </h2>
              <div className="w-6 h-0.5 bg-[#C8960A] mb-2" />
              <p className="text-white/60 text-[11px] uppercase tracking-[2px] leading-relaxed font-medium">
                Years of trusted
                <br />
                global trade
                <br />
                leadership
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            ref={rightRef}
            style={{
              opacity: rightInView ? 1 : 0,
              transform: rightInView ? "translateY(0px)" : "translateY(48px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <p className="uppercase tracking-[4px] text-[#C8960A] font-semibold text-xs">
                About Aeromar
              </p>
            </div>

            <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight text-[#081229] mb-6">
              Global logistics expertise
              <span className="text-[#1E3A7B]"> built on relationships.</span>
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Our management team brings over 100 years of combined experience
              in international freight, ocean logistics, and global trade —
              senior professionals who have seen every market, every challenge,
              and every opportunity the industry has to offer.
            </p>

            <div className="space-y-3 mb-10">
              {[
                "30+ years operational experience",
                "Direct carrier & terminal relationships",
                "End-to-end global logistics expertise",
                "Personalized, senior-led client support",
                "USA, India, Middle East, Europe & Asia focus",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle
                    size={16}
                    className="text-[#C8960A] flex-shrink-0"
                  />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/services"
                className="group bg-[#1E3A7B] hover:bg-[#162d61] text-white px-7 py-3 text-sm font-semibold transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore Our Services
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
