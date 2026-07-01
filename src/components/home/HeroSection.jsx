import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Place the map image in your assets folder and import it,
// e.g. src/assets/world-map.png
import worldMapImg from "../../assets/images/world-map.jpg";

const cities = [
  { name: "New York", top: 48, left: 26, labelSide: "right" },
  { name: "London", top: 41, left: 47, labelSide: "right" },
  { name: "Mumbai", top: 60, left: 69, labelSide: "right" },
  { name: "Lagos", top: 65, left: 50, labelSide: "left" },
  { name: "Sydney", top: 85, left: 89, labelSide: "left" },
];

// Which cities connect to which (matches the reference network look)
const routes = [
  ["New York", "London"],
  ["London", "Lagos"],
  ["Lagos", "Mumbai"],
  ["Mumbai", "Sydney"],
];

function getCity(name) {
  return cities.find((c) => c.name === name);
}

function RouteLines({ visible }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 pointer-events-none"
      style={{
        width: "100%",
        height: "100%",
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease 0.6s",
      }}
    >
      {routes.map(([a, b], i) => {
        const c1 = getCity(a);
        const c2 = getCity(b);
        if (!c1 || !c2) return null;
        const mx = (c1.left + c2.left) / 2;
        const my = Math.min(c1.top, c2.top) - 8;
        return (
          <path
            key={`${a}-${b}`}
            d={`M${c1.left},${c1.top} Q${mx},${my} ${c2.left},${c2.top}`}
            stroke="#C8960A"
            strokeWidth="0.3"
            fill="none"
            opacity="0.75"
            strokeDasharray="1.5,1.2"
            vectorEffect="non-scaling-stroke"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-20"
              dur={`${2.5 + i * 0.4}s`}
              repeatCount="indefinite"
            />
          </path>
        );
      })}
    </svg>
  );
}

function CityPin({ name, top, left, labelSide, delay }) {
  return (
    <div
      className="absolute"
      style={{ top: `${top}%`, left: `${left}%`, transform: "translate(-50%, -50%)" }}
    >
      {/* Pulse ring */}
      <span
        className="absolute rounded-full bg-[#C8960A]"
        style={{
          width: "26px",
          height: "26px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.35,
          animation: `pinPulse 2.2s ease-out ${delay}s infinite`,
        }}
      />
      {/* Core dot */}
      <span
        className="relative block rounded-full bg-[#C8960A] border-2 border-white"
        style={{
          width: "10px",
          height: "10px",
          boxShadow: "0 0 8px rgba(200,150,10,0.9)",
        }}
      />
      {/* Label */}
      <span
        className="absolute whitespace-nowrap text-white font-semibold uppercase"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          left: labelSide === "right" ? "16px" : undefined,
          right: labelSide === "left" ? "16px" : undefined,
          fontSize: "11px",
          letterSpacing: "0.05em",
          textShadow: "0 1px 4px rgba(0,0,0,0.8)",
        }}
      >
        {name}
      </span>
    </div>
  );
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative bg-[#0d1b3e] overflow-hidden"
      style={{ minHeight: "650px" }}
    >
      <style>{`
        @keyframes pinPulse {
          0% { transform: translate(-50%, -50%) scale(0.6); opacity: 0.6; }
          70% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
          100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
        }
      `}</style>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#4a6fa5 1px, transparent 1px), linear-gradient(90deg, #4a6fa5 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#1E3A7B] opacity-20 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-stretch">

        <div
          className="flex flex-col justify-center items-center lg:items-start gap-5 py-16 text-center lg:text-left"
          style={{ flex: "0 0 45%", paddingLeft: "clamp(24px, 6vw, 96px)", paddingRight: "clamp(24px, 6vw, 40px)" }}
        >
          <div
            className="flex items-center justify-center lg:justify-start gap-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <p className="uppercase tracking-[2px] text-[#C8960A] font-semibold text-sm">
              Logistics · Procurement · Supply Chain
            </p>
          </div>

          <div>
            <h1
              className="text-white font-bold leading-[1]"
              style={{
                fontSize: "clamp(42px, 5vw, 72px)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(36px)",
                transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
              }}
            >
              Moving The World
            </h1>
            <h1
              className="text-[#C8960A] font-bold leading-[1] mt-1"
              style={{
                fontSize: "clamp(42px, 5vw, 72px)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(36px)",
                transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
              }}
            >
              Responsibly.
            </h1>
          </div>

          <p
            className="text-white/60 leading-relaxed"
            style={{
              fontSize: "clamp(14px, 1.1vw, 18px)",
              maxWidth: "480px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s",
            }}
          >
            Aeromar combines the smartest logistics technology with something the
            big players have forgotten a real human on your side. Global supply
            chains, made effortless.
          </p>

          <div
            className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s",
            }}
          >
            <Link
              to="/quote"
              className="group bg-[#C8960A] hover:bg-[#b8850a] text-white font-semibold text-base px-7 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#C8960A]/30 hover:-translate-y-0.5"
            >
              Request A Quote
              <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold text-base px-7 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Services
              <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div
          className="flex items-center justify-center px-4 pb-8 lg:pb-0"
          style={{ flex: "0 0 55%", position: "relative" }}
        >
          <div
            className="relative"
            style={{
              width: "100%",
              maxWidth: "700px",
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0.96)",
              transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
            }}
          >
            {/* Map image */}
            <img
              src={worldMapImg}
              alt="Aeromar Global Network Map"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "16px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              }}
            />

            {/* Dark overlay so gold pins/labels pop */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: "16px",
                background:
                  "linear-gradient(180deg, rgba(13,27,62,0.15) 0%, rgba(13,27,62,0.05) 40%, rgba(13,27,62,0.25) 100%)",
              }}
            />

            {/* Route connectors */}
            <RouteLines visible={visible} />

            {/* City pins */}
            {cities.map((city, i) => (
              <CityPin
                key={city.name}
                name={city.name}
                top={city.top}
                left={city.left}
                labelSide={city.labelSide}
                delay={i * 0.35}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8F9FB] to-transparent" />
    </section>
  );
}