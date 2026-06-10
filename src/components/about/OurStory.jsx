export default function OurStory() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left Side */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-[2px] bg-[#C8960A]" />

              <span className="uppercase tracking-[0.25em] text-[#1A73C8] text-sm font-semibold">
                Our Story
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E3A7B] leading-[1.08] max-w-lg">
              Built by operators. Run by people who answer the phone.
            </h2>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <p className="text-gray-600 text-base md:text-lg leading-8">
              Aeromar was founded by Thomas Marano and Russell Gomes —
              two career logistics operators with more than three decades
              each across NVOCC, freight forwarding, and customs brokerage.
              The premise was simple: global shippers deserve a
              U.S.-headquartered partner where the people negotiating their
              carrier contracts are the same people answering the phone
              when a container is on hold at port.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-8">
              Today, Aeromar moves cargo across five continents — with
              deep specialization on the India–USA corridor and a U.S.
              footprint that spans every major gateway port. We're
              FMC-licensed, compliance-driven, and relentlessly focused
              on the outcomes our customers actually measure:
              on-time delivery, landed cost, and zero compliance surprises.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}