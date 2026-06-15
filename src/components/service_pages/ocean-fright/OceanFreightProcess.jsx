import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const processSteps = [
  "Scoping & rate analysis",
  "Carrier booking & documentation",
  "Live execution & milestone tracking",
  "Delivery, invoicing & program review",
];

const faqs = [
  {
    question: "Do you handle hazardous cargo?",
    answer:
      "Yes. We manage IMO-classified hazardous cargo across select trade lanes with full compliance documentation, proper container selection, and carrier pre-approval.",
  },
  {
    question: "Can you quote on a recurring lane?",
    answer:
      "Absolutely. We offer contracted rate programs for recurring lanes, giving you rate stability, priority space, and a dedicated point of contact for each shipment.",
  },
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

export default function OceanFreightProcess() {
  const [leftRef, leftInView] = useInView(0.1);
  const [rightRef, rightInView] = useInView(0.1);
  const [openFaq, setOpenFaq] = useState(null);

  const fadeUp = (inView, delay) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(24px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side — Process */}
          <div ref={leftRef}>

            {/* Label */}
            <div style={fadeUp(leftInView, 0.05)} className="flex items-center gap-3 mb-3">
              <div
                style={{
                  width: leftInView ? "2.5rem" : "0rem",
                  transition: "width 0.5s ease 0.1s",
                }}
                className="h-[2px] bg-[#C8960A]"
              />
              <span className="uppercase tracking-[0.2em] text-[#1A73C8] text-[11px] font-semibold">
                How We Run It
              </span>
            </div>

            {/* Heading */}
            <h2
              style={fadeUp(leftInView, 0.15)}
              className="text-3xl md:text-4xl font-extrabold text-[#1E3A7B] leading-tight mb-8"
            >
              A repeatable process —
              engineered for your cargo profile.
            </h2>

            {/* Steps */}
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  style={fadeUp(leftInView, 0.25 + index * 0.1)}
                  className="flex items-center gap-5"
                >
                  <span
                    style={{
                      opacity: leftInView ? 1 : 0,
                      transform: leftInView ? "scale(1)" : "scale(0.7)",
                      transition: `opacity 0.5s ease ${0.3 + index * 0.1}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.3 + index * 0.1}s`,
                    }}
                    className="text-4xl font-extrabold text-[#C8960A] min-w-[60px]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[#081229] text-xl font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side — FAQ */}
          <div ref={rightRef}>

            {/* Label */}
            <div style={fadeUp(rightInView, 0.05)} className="flex items-center gap-3 mb-3">
              <div
                style={{
                  width: rightInView ? "2.5rem" : "0rem",
                  transition: "width 0.5s ease 0.1s",
                }}
                className="h-[2px] bg-[#C8960A]"
              />
              <span className="uppercase tracking-[0.2em] text-[#1A73C8] text-[11px] font-semibold">
                FAQ
              </span>
            </div>

            {/* Heading */}
            <h2
              style={fadeUp(rightInView, 0.15)}
              className="text-3xl md:text-4xl font-extrabold text-[#1E3A7B] mb-8"
            >
              Frequently asked.
            </h2>

            {/* Accordion */}
            <div>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={index}
                    style={fadeUp(rightInView, 0.25 + index * 0.1)}
                    className="border-b border-gray-200"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full py-5 flex items-center justify-between text-left group"
                    >
                      <span
                        style={{
                          color: isOpen ? "#C8960A" : "#1E3A7B",
                          transition: "color 0.25s ease",
                        }}
                        className="text-lg font-semibold"
                      >
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={18}
                        style={{
                          color: isOpen ? "#C8960A" : "#9CA3AF",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.35s ease, color 0.25s ease",
                        }}
                      />
                    </button>

                    {/* Answer */}
                    <div
                      style={{
                        maxHeight: isOpen ? "200px" : "0px",
                        opacity: isOpen ? 1 : 0,
                        transition: "max-height 0.4s ease, opacity 0.3s ease",
                        overflow: "hidden",
                      }}
                    >
                      <p className="text-gray-500 text-base leading-7 pb-5">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}