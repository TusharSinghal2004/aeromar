import heroImage from "../../assets/images/hero-banner.png";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[760px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {" "}
      <div className="absolute inset-0 "></div>
      ```
      <div className="relative z-10 pl-16 lg:pl-20 pt-16">
        <div className="flex items-center gap-4 mb-8">
          <p className="uppercase tracking-[1px] text-[#C8960A] font-semibold text-sm">
            Logistics · Procurement · Supply Chain
          </p>
        </div>

        <h1 className="text-white text-[72px] lg:text-[70px] font-bold leading-[0.95]">
          Solving the
        </h1>
        <h1 className="text-white text-[72px] lg:text-[70px] font-bold leading-[0.95]">
          Complex
        </h1>

        <h1 className="text-[#C8960A] text-[72px] lg:text-[70px] font-bold leading-[0.95] mb-8">
          Simply.
        </h1>

        <p className="text-white text-base lg:text-lg leading-relaxed max-w-4xl mb-14">
          Aeromar combines the smartest logistics technology with something the
          big players have forgotten — a real human on your side. Global supply
          chains, made effortless.
        </p>

        <div className="flex flex-wrap gap-5 mb-20">
          <button className="bg-[#C9963A] hover:bg-[#b8852e] text-white font-semibold text-base px-7 py-3 rounded-full flex items-center gap-2 transition-all duration-300">
            Start Shipping
            <ArrowRight size={16} strokeWidth={2} />
          </button>

          <button className="bg-transparent border border-white/50 hover:bg-white/10 text-white font-semibold text-base px-7 py-3 rounded-full transition-all duration-300">
            Our Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
