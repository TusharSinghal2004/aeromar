import { ArrowRight } from "lucide-react";

export default function QuoteCTASection() {
  return (
    <section className="bg-[#1E3A7B] py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">

          {/* Left Content */}
          <div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-[2px] bg-[#C8960A]" />

              <span className="uppercase tracking-[0.18em] text-[#C8960A] text-[10px] font-semibold">
                Need A Reliable Logistics Partner?
              </span>
            </div>

            <h2 className="font-extrabold leading-[1.05]">

              <span className="block text-white text-2xl md:text-3xl lg:text-4xl">
                Request a freight quote
              </span>

              <span className="block text-white text-2xl md:text-3xl lg:text-4xl">
                today —
              </span>

              <span className="block text-[#C8960A] text-2xl md:text-3xl lg:text-4xl mt-1">
                we respond within 4
              </span>

              <span className="block text-[#C8960A] text-2xl md:text-3xl lg:text-4xl">
                business hours.
              </span>

            </h2>

          </div>

          {/* Right Buttons */}
          <div className="flex flex-col gap-3 lg:pl-8">

            <button
              className="
                bg-[#C8960A]
                text-[#081229]
                font-bold
                text-sm
                h-14
                flex
                items-center
                justify-center
                gap-2
                hover:opacity-95
                transition-all
              "
            >
              GET QUOTE
              <ArrowRight size={16} />
            </button>

            <button
              className="
                border
                border-white/30
                text-white
                font-bold
                text-sm
                h-14
                flex
                items-center
                justify-center
                gap-2
                hover:bg-white/5
                transition-all
              "
            >
              CONTACT TEAM
              <ArrowRight size={16} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}