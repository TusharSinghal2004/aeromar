import { ChevronDown } from "lucide-react";

const processSteps = [
  "Scoping & rate analysis",
  "Carrier booking & documentation",
  "Live execution & milestone tracking",
  "Delivery, invoicing & program review",
];

const faqs = [
  "Do you handle hazardous cargo?",
  "Can you quote on a recurring lane?",
];

export default function OceanFreightProcess() {
  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-[2px] bg-[#C8960A]" />

              <span className="uppercase tracking-[0.2em] text-[#1A73C8] text-[11px] font-semibold">
                How We Run It
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A7B] leading-tight mb-8">
              A repeatable process —
              engineered for your cargo profile.
            </h2>

            <div className="space-y-6">

              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5"
                >
                  <span className="text-4xl font-extrabold text-[#C8960A] min-w-[60px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-[#081229] text-xl font-semibold">
                    {step}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* Right Side */}
          <div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-[2px] bg-[#C8960A]" />

              <span className="uppercase tracking-[0.2em] text-[#1A73C8] text-[11px] font-semibold">
                FAQ
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A7B] mb-8">
              Frequently asked.
            </h2>

            <div>

              {faqs.map((faq, index) => (
                <button
                  key={index}
                  className="
                    w-full
                    py-5
                    border-b
                    border-gray-200
                    flex
                    items-center
                    justify-between
                    text-left
                  "
                >
                  <span className="text-[#1E3A7B] text-lg font-semibold">
                    {faq}
                  </span>

                  <ChevronDown
                    size={18}
                    className="text-gray-400"
                  />
                </button>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}