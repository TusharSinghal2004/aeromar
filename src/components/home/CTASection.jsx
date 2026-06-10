import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-14 md:py-16 bg-[#F8F9FB] overflow-hidden">
      
      {/* Background Shapes */}
      <div className="absolute top-[-120px] left-[22%] w-[380px] h-[380px] rounded-full bg-slate-100 opacity-80" />

      <div className="absolute bottom-[-120px] right-[22%] w-[280px] h-[280px] rounded-full bg-[#F2EFE8] opacity-70" />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 lg:px-12 text-center">

        {/* Label */}
        <span className="uppercase tracking-[0.2em] text-[#C8960A] text-xs font-semibold">
          Get Started
        </span>

        {/* Heading */}
        <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
          <span className="text-[#1E3A7B]">
            Need A Reliable
          </span>

          <br />

          <span className="text-[#C8960A]">
            Logistics Partner?
          </span>
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-2xl mx-auto text-gray-500 text-base md:text-lg leading-relaxed">
          Request a freight quote today and discover why businesses
          trust Aeromar for their global shipping and logistics needs.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          
          <button className="group bg-[#C8960A] text-[#081229] font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-3 hover:opacity-90 transition">
            Get A Quote

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          <button className="border-2 border-[#1E3A7B] text-[#1E3A7B] font-bold px-8 py-4 rounded-lg hover:bg-[#1E3A7B] hover:text-white transition">
            Contact Our Team
          </button>

        </div>

      </div>
    </section>
  );
}