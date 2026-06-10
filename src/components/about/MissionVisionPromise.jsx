const cards = [
  {
    label: "Mission",
    text: "Move our customers' cargo with the same care, urgency, and accountability we'd give our own family business.",
  },
  {
    label: "Vision",
    text: "Be the most trusted FMC-licensed NVOCC connecting U.S. shippers with global trade partners — especially across the India-USA corridor.",
  },
  {
    label: "Promise",
    text: "Senior-level expertise on every shipment. Transparent communication. End-to-end accountability.",
  },
];

export default function MissionVisionPromise() {
  return (
    <section className="pb-12 md:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {cards.map((card, index) => (
            <div
              key={index}
              className="
                bg-[#FAFBFC]
                border-l-2
                border-[#C8960A]
                p-8
                aspect-square
                flex
                flex-col
              "
            >
              <span
                className="
                  uppercase
                  tracking-[0.25em]
                  text-[#1A73C8]
                  text-xs
                  font-semibold
                  mb-6
                "
              >
                {card.label}
              </span>

              <h3
                className="
                  text-[#1E3A7B]
                  text-xl
                  md:text-2xl
                  font-extrabold
                  leading-[1.45]
                "
              >
                {card.text}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}