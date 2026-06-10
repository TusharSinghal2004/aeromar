import heroImage from "../../assets/images/hero-banner.png";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
return (
<section
className="relative min-h-[760px] bg-cover bg-center"
style={{
backgroundImage: `url(${heroImage})`,
}}
> <div className="absolute inset-0 bg-[#1E3A7B]/85"></div>

```
  <div className="relative z-10 pl-16 lg:pl-20 pt-16">

    <div className="flex items-center gap-4 mb-8">
      <div className="w-16 h-[2px] bg-[#C8960A]" />

      <p className="uppercase tracking-[4px] text-[#C8960A] font-semibold text-sm">
        FMC-LICENSED NVOCC • FREIGHT FORWARDING
      </p>
    </div>

    <h1 className="text-white text-[72px] lg:text-[88px] font-extrabold leading-[0.95]">
      Moving The World
    </h1>

    <h1 className="text-[#C8960A] text-[72px] lg:text-[88px] font-extrabold leading-[0.95] mb-8">
      Responsibly.
    </h1>

    <p className="text-white text-xl lg:text-2xl leading-relaxed max-w-4xl mb-14">
      FMC-Licensed NVOCC and Freight Forwarding solutions
      connecting USA, India, the Middle East, Europe &
      Southeast Asia — built on 30+ years of senior-level
      logistics expertise.
    </p>

    <div className="flex flex-wrap gap-5 mb-20">

      <button
        className="
          bg-[#C8960A]
          text-[#1E3A7B]
          font-bold
          px-10
          py-4
          flex
          items-center
          gap-3
          hover:brightness-110
          transition-all
        "
      >
        GET A FREIGHT QUOTE
        <ArrowRight size={20} />
      </button>

      <button
        className="
          border
          border-white/40
          text-white
          font-bold
          px-10
          py-4
          flex
          items-center
          gap-3
          hover:bg-white
          hover:text-[#1E3A7B]
          transition-all
        "
      >
        SPEAK WITH A LOGISTICS EXPERT
        <ArrowRight size={20} />
      </button>

    </div>
  </div>
</section>
);
}
