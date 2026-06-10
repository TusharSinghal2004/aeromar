import aboutImage from "../../assets/images/about-logistics.png";
import { CheckCircle } from "lucide-react";

export default function AboutPreview() {
return ( <section className="bg-[#F8F9FB] py-20 lg:py-28"> <div className="max-w-7xl mx-auto px-6 lg:px-8">

```
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT IMAGE */}
      <div className="relative">

        {/* FMC Badge */}
        <div
          className="
            absolute
            -top-5
            -left-5
            z-20
            bg-[#C8960A]
            rounded-2xl
            px-6
            py-4
            shadow-lg
          "
        >
          <p className="text-[11px] uppercase tracking-[3px] text-[#1E3A7B]">
            FMC License
          </p>

          <h3 className="text-[#1E3A7B] text-2xl font-bold">
            #019576
          </h3>
        </div>

        {/* Image */}
        <img
          src={aboutImage}
          alt="Aeromar Logistics"
          className="
            w-full
            rounded-[30px]
            object-cover
            shadow-xl
          "
        />

        {/* Experience Card */}
        <div
          className="
            absolute
            bottom-[-30px]
            right-[-20px]
            bg-white/20
            backdrop-blur-md
            rounded-[28px]
            p-6
            w-[220px]
            h-[170px]
            shadow-xl
          "
        >
          <h2 className="text-[#1E3A7B] text-5xl font-extrabold">
            30+
          </h2>

          <p className="uppercase tracking-[3px] text-xs text-[#1E3A7B] mt-2">
            Years Of Trusted
          </p>

          <p className="uppercase tracking-[3px] text-xs text-[#1E3A7B]">
            Global Trade
          </p>

          <p className="uppercase tracking-[3px] text-xs text-[#1E3A7B]">
            Leadership
          </p>
        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div>

        <p className="uppercase tracking-[4px] text-[#C8960A] font-semibold text-sm mb-5">
          About Aeromar
        </p>

        <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight text-[#081229] mb-8">
          Global logistics
          expertise built
          <span className="text-[#1E3A7B]">
            {" "}on relationships.
          </span>
        </h2>

        <p className="text-gray-500 text-lg leading-relaxed mb-10">
          Aeromar Global Logistics Solutions LLC is an FMC-Licensed
          NVOCC and international freight forwarding company
          headquartered in Metuchen, New Jersey. We help importers
          and exporters move cargo worldwide through ocean freight,
          air freight, customs brokerage, warehousing, and trucking
          solutions — delivered with three decades of senior-level
          logistics expertise.
        </p>

        <div className="space-y-4 mb-10">

          {[
            "30+ years operational experience",
            "Direct carrier & terminal relationships",
            "End-to-end global logistics expertise",
            "Personalized, senior-led client support",
            "USA, India, Middle East, Europe & Asia focus",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <CheckCircle
                size={20}
                className="text-[#C8960A]"
              />

              <span className="text-gray-700 text-lg">
                {item}
              </span>
            </div>
          ))}

        </div>

        <button
          className="
            bg-[#1E3A7B]
            hover:bg-[#163066]
            text-white
            px-8
            py-4
            rounded-full
            font-semibold
            transition-all
          "
        >
          Explore our services
        </button>

      </div>

    </div>

  </div>
</section>

);
}
