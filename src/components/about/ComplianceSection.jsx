import { CheckCircle } from "lucide-react";
import complianceImage from "../../assets/images/fmc.png";

const features = [
  "FMC-Licensed NVOCC (OTI License)",
  "Continuous Customs Bond",
  "C-TPAT Compliance Ready",
  "ISO-aligned operating procedures",
];

export default function ComplianceSection() {
  return (
    <section className="bg-[#081229] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-[2px] bg-[#C8960A]" />

              <span className="uppercase tracking-[0.22em] text-[#C8960A] text-xs font-semibold">
                FMC Licensing & Trust
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.08] max-w-2xl">
              FMC-Licensed. NVOCC-Bonded.
              Built for compliance from day one.
            </h2>

            <p className="mt-6 text-white/75 text-base leading-8 max-w-xl">
              Our Federal Maritime Commission license is more than a
              regulatory stamp — it's a legal and financial guarantee
              for every shipper we serve. Combined with a continuous
              customs bond and senior-level brokerage team, Aeromar
              gives importers and exporters the compliance backbone
              enterprise programs require.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={18}
                    className="text-[#C8960A] flex-shrink-0"
                  />

                  <span className="text-white/90 text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Image */}
          <div className="relative">

            <img
              src={complianceImage}
              alt="Compliance Team"
              className="w-full h-[420px] object-cover"
            />

            {/* FMC Badge */}
            <div
              className="
                absolute
                -bottom-6
                -left-6
                bg-[#C8960A]
                px-8
                py-6
                shadow-lg
              "
            >
              <h3 className="text-[#081229] text-3xl font-extrabold">
                FMC
              </h3>

              <p className="text-[#081229] uppercase tracking-[0.2em] text-xs mt-2">
                Licensed NVOCC
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}