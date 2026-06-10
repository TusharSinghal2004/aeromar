import heroImage from "../../../assets/images/hero-banner.png";

export default function OceanFreightHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Ocean Freight"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081229]/95 via-[#081229]/85 to-[#081229]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 py-20">

        <div className="max-w-2xl">

          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-[13px] uppercase tracking-[0.18em] mb-8">
            <span className="text-white/70">Home</span>

            <span className="text-white/40">/</span>

            <span className="text-white/70">Services</span>

            <span className="text-white/40">/</span>

            <span className="text-[#C8960A]">
              Customs Brokerage
            </span>
          </div>

          {/* Label */}
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-[2px] bg-[#C8960A]" />

            <span className="uppercase tracking-[0.22em] text-[#C8960A] text-[12px] font-semibold">
              Service
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-none">
            Customs Brokerage
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-xl">
            FCL, LCL & project cargo via our global carrier network.
          </p>

        </div>

      </div>
    </section>
  );
}