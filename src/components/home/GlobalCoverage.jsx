export default function GlobalCoverage() {
  const regions = [
    {
      title: "North America",
      locations: "USA HQ • Major Ports & Inland Hubs",
    },
    {
      title: "India",
      locations: "Mundra • Nhava Sheva • Chennai • Tuticorin",
    },
    {
      title: "Middle East",
      locations: "Jebel Ali • Dammam • Sohar",
    },
    {
      title: "Europe",
      locations: "Rotterdam • Antwerp • Hamburg",
    },
    {
      title: "Southeast Asia",
      locations: "Singapore • Port Klang • Ho Chi Minh",
    },
  ];

  return (
    <section className="py-10 md:py-12 bg-[#081229] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-8 items-center">

          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-[#C8960A]" />

              <span className="uppercase tracking-[0.2em] text-[#C8960A] text-xs font-semibold">
                Global Coverage
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05]">
              <span className="text-white">
                Five trade lanes.
              </span>

              <br />

              <span className="text-[#C8960A]">
                One operations
              </span>

              <br />

              <span className="text-[#C8960A]">
                team.
              </span>
            </h2>

            <p className="mt-5 text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
              Wherever your suppliers and customers are, we already have
              boots on the ground and contracted carrier capacity to move
              your cargo on schedule.
            </p>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 border border-[#20304F]">

            {regions.map((region, index) => (
              <div
                key={index}
                className="border-r border-b border-[#20304F] bg-[#081229] p-5 md:p-6"
              >
                <span className="uppercase tracking-[0.2em] text-[#C8960A] text-[11px] font-semibold">
                  Region
                </span>

                <h3 className="mt-3 text-xl md:text-2xl font-bold text-white">
                  {region.title}
                </h3>

                <p className="mt-3 text-sm md:text-base text-gray-400 leading-relaxed">
                  {region.locations}
                </p>
              </div>
            ))}

            {/* Decorative Block */}
            <div className="hidden md:block bg-[#15233F]" />
          </div>

        </div>
      </div>
    </section>
  );
}