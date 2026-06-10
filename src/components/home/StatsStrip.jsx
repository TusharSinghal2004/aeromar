import {
Anchor,
ShieldCheck,
Globe,
BadgeCheck,
} from "lucide-react";

export default function StatsStrip() {
return ( <section className="bg-white py-12 md:py-16 lg:py-20"> <div className="max-w-7xl mx-auto px-6 lg:px-10">

```
    {/* Statistics */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-center">

      <div>
        <h2 className="text-[#1E3A7B] text-4xl md:text-5xl lg:text-6xl font-extrabold">
          30+
        </h2>

        <p className="text-gray-500 text-sm md:text-base mt-2">
          Years Experience
        </p>
      </div>

      <div>
        <h2 className="text-[#1E3A7B] text-4xl md:text-5xl lg:text-6xl font-extrabold">
          100%
        </h2>

        <p className="text-gray-500 text-sm md:text-base mt-2">
          FMC Licensed NVOCC
        </p>
      </div>

      <div>
        <h2 className="text-[#1E3A7B] text-4xl md:text-5xl lg:text-6xl font-extrabold">
          150+
        </h2>

        <p className="text-gray-500 text-sm md:text-base mt-2">
          Global Carrier Network
        </p>
      </div>

      <div>
        <h2 className="text-[#1E3A7B] text-4xl md:text-5xl lg:text-6xl font-extrabold">
          1 USA HQ
        </h2>

        <p className="text-gray-500 text-sm md:text-base mt-2">
          United States Headquarters
        </p>
      </div>

    </div>

    {/* Divider */}
    <div className="border-t border-gray-200 my-10 md:my-14"></div>

    {/* Features */}
    <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16">

      <div className="flex items-center gap-2">
        <Anchor
          size={20}
          className="text-[#C8960A]"
        />
        <span className="text-sm md:text-base text-gray-600">
          FMC Licensed
        </span>
      </div>

      <div className="flex items-center gap-2">
        <BadgeCheck
          size={20}
          className="text-[#C8960A]"
        />
        <span className="text-sm md:text-base text-gray-600">
          NVOCC
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Globe
          size={20}
          className="text-[#C8960A]"
        />
        <span className="text-sm md:text-base text-gray-600">
          Global Logistics Network
        </span>
      </div>

      <div className="flex items-center gap-2">
        <ShieldCheck
          size={20}
          className="text-[#C8960A]"
        />
        <span className="text-sm md:text-base text-gray-600">
          Customs Expertise
        </span>
      </div>

    </div>

  </div>
</section>

);
}
