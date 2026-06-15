import { useEffect, useRef, useState } from "react";
import aboutImage from "../../assets/images/about-logistics.png";
import { CheckCircle, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

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

export default function AboutPreview() {
  const [leftRef, leftInView] = useInView(0.1);
  const [rightRef, rightInView] = useInView(0.1);

  return (
    <section className="bg-white pt-2 lg:pt 0 pb-16 lg:pb-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="border-t border-gray-200 mb-14" />

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT IMAGE */}
          <div
            ref={leftRef}
            className="relative"
            style={{
              opacity: leftInView ? 1 : 0,
              transform: leftInView ? "translateY(0px)" : "translateY(48px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >

            {/* FMC Badge */}
<div className="absolute -top-8 -left-10 z-20 px-5 py-3 rounded-2xl shadow-lg border border-[#C9A73A]/30 bg-gradient-to-br from-[#F4D96A] via-[#D7B03F] via-50% to-[#A97B18]">  <p className="text-[10px] uppercase tracking-[3px] text-[#1E3A7B] font-semibold">
    FMC License
  </p>
  <h3 className="text-[#1E3A7B] text-xl font-extrabold mt-0.5">
    #019576
  </h3>
</div>
            {/* Image */}
            <img
              src={aboutImage}
              alt="Aeromar Logistics"
              className="w-full h-[480px] object-cover"
            />

            {/* Experience Card */}
            <div className="absolute bottom-0 right-0 bg-[#1E3A7B] p-4 w-[190px]">
              <h2 className="text-white text-5xl font-extrabold leading-none">
                30+
              </h2>
              <div className="w-8 h-0.5 bg-[#C8960A] my-3" />
              <p className="uppercase tracking-[2px] text-xs text-white/70 leading-relaxed">
                Years of trusted<br />global trade<br />leadership
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
              {/* <div className="w-6 h-0.5 bg-[#C8960A]" /> */}
              <p className="uppercase tracking-[4px] text-[#C8960A] font-semibold text-xs">
                About Aeromar
              </p>
            </div>

            <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight text-[#081229] mb-6">
              Global logistics expertise
              <span className="text-[#1E3A7B]"> built on relationships.</span>
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Aeromar Global Logistics Solutions LLC is an FMC-Licensed NVOCC and
              international freight forwarding company headquartered in Metuchen,
              New Jersey. We help importers and exporters move cargo worldwide
              through ocean freight, air freight, customs brokerage, warehousing,
              and trucking — delivered with three decades of senior-level expertise.
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
                  <CheckCircle size={16} className="text-[#C8960A] flex-shrink-0" />
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
              {/* <button className="text-[#1E3A7B] text-sm font-semibold underline underline-offset-4 hover:text-[#C8960A] transition-colors duration-300">
                Meet the team 
              </button> */}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}