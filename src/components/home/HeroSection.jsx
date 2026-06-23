import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function WorldMap() {
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setPulse(p => (p + 1) % 100), 50);
    return () => clearInterval(interval);
  }, []);

  const cities = [
    { name: "New York", x: 185, y: 178 },
    { name: "London", x: 375, y: 148 },
    { name: "Mumbai", x: 555, y: 210 },
    { name: "Lagos", x: 382, y: 248 },
    { name: "Sydney", x: 680, y: 310 },
  ];

  const routes = [
    [0, 1], [1, 2], [1, 3], [2, 4], [3, 2],
  ];

  return (
    <svg viewBox="0 0 860 460" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0d2352" />
          <stop offset="100%" stopColor="#060e1f" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <rect width="860" height="460" fill="url(#bgGrad)" rx="16" />

      {/* Grid lines */}
      <g stroke="#1a3a6a" strokeWidth="0.4" opacity="0.5">
        {[80,160,240,320,400].map(y => <line key={y} x1="0" y1={y} x2="860" y2={y} />)}
        {[86,172,258,344,430,516,602,688,774].map(x => <line key={x} x1={x} y1="0" x2={x} y2="460" />)}
      </g>
      {/* Equator */}
      <line x1="0" y1="240" x2="860" y2="240" stroke="#1e4a8a" strokeWidth="0.8" opacity="0.6" strokeDasharray="6,4" />
      {/* Tropics */}
      <line x1="0" y1="193" x2="860" y2="193" stroke="#1a3870" strokeWidth="0.4" opacity="0.4" strokeDasharray="3,6" />
      <line x1="0" y1="287" x2="860" y2="287" stroke="#1a3870" strokeWidth="0.4" opacity="0.4" strokeDasharray="3,6" />

      {/* North America */}
      <path d="M90,90 L175,78 L210,95 L228,115 L235,140 L225,165 L210,182 L195,190 L180,198 L162,205 L148,218 L140,235 L128,248 L115,255 L100,248 L88,232 L80,210 L78,185 L82,158 L86,128 Z" fill="#1a3d6e" stroke="#2a5a9e" strokeWidth="0.8" opacity="0.85" />
      <path d="M148,218 L162,205 L175,210 L180,228 L172,248 L158,260 L145,255 L138,242 Z" fill="#1a3d6e" stroke="#2a5a9e" strokeWidth="0.8" opacity="0.85" />

      {/* Greenland */}
      <path d="M248,48 L285,42 L308,52 L318,70 L310,88 L290,95 L268,92 L250,78 Z" fill="#152e54" stroke="#2a5a9e" strokeWidth="0.6" opacity="0.7" />

      {/* Europe */}
      <path d="M350,95 L385,88 L408,95 L418,108 L412,122 L398,132 L385,138 L370,142 L358,135 L348,120 L344,108 Z" fill="#1a3d6e" stroke="#2a5a9e" strokeWidth="0.8" opacity="0.85" />
      <path d="M370,142 L390,138 L405,148 L408,162 L395,172 L378,168 L365,158 Z" fill="#1a3d6e" stroke="#2a5a9e" strokeWidth="0.8" opacity="0.85" />
      {/* Scandinavia */}
      <path d="M380,68 L395,60 L408,68 L412,82 L405,92 L392,95 L380,88 Z" fill="#1a3d6e" stroke="#2a5a9e" strokeWidth="0.6" opacity="0.75" />

      {/* Africa */}
      <path d="M355,168 L395,162 L420,172 L435,192 L442,220 L438,255 L428,285 L410,310 L390,328 L368,332 L348,322 L335,298 L328,268 L330,238 L338,210 L345,188 Z" fill="#1a3d6e" stroke="#2a5a9e" strokeWidth="0.8" opacity="0.85" />

      {/* Asia */}
      <path d="M418,78 L480,65 L545,68 L598,75 L638,88 L660,105 L665,128 L650,148 L628,158 L605,162 L578,158 L552,165 L528,172 L505,168 L482,175 L460,170 L440,160 L428,145 L420,128 L415,108 Z" fill="#1a3d6e" stroke="#2a5a9e" strokeWidth="0.8" opacity="0.85" />
      {/* South/SE Asia */}
      <path d="M505,168 L528,172 L545,185 L548,205 L538,222 L518,228 L500,218 L492,200 L495,182 Z" fill="#1a3d6e" stroke="#2a5a9e" strokeWidth="0.8" opacity="0.85" />
      <path d="M552,165 L578,158 L592,168 L595,185 L582,198 L562,195 L548,182 Z" fill="#1a3d6e" stroke="#2a5a9e" strokeWidth="0.8" opacity="0.85" />
      {/* Japan */}
      <path d="M658,112 L668,108 L675,118 L670,130 L660,132 L654,122 Z" fill="#1a3d6e" stroke="#2a5a9e" strokeWidth="0.6" opacity="0.75" />

      {/* Middle East */}
      <path d="M440,148 L468,142 L488,150 L492,168 L480,182 L460,185 L442,175 Z" fill="#1a3d6e" stroke="#2a5a9e" strokeWidth="0.8" opacity="0.85" />

      {/* South America */}
      <path d="M185,248 L218,240 L240,250 L252,272 L255,305 L248,338 L235,368 L218,390 L200,400 L182,395 L168,375 L160,345 L158,312 L162,278 L170,258 Z" fill="#1a3d6e" stroke="#2a5a9e" strokeWidth="0.8" opacity="0.85" />

      {/* Australia */}
      <path d="M628,272 L678,262 L718,270 L738,292 L740,318 L725,338 L698,348 L668,345 L645,330 L632,308 L625,288 Z" fill="#1a3d6e" stroke="#2a5a9e" strokeWidth="0.8" opacity="0.85" />
      {/* New Zealand */}
      <path d="M748,328 L758,320 L765,330 L760,345 L750,348 L744,338 Z" fill="#1a3d6e" stroke="#2a5a9e" strokeWidth="0.6" opacity="0.75" />

      {/* Route lines */}
      {routes.map(([a, b], i) => {
        const c1 = cities[a], c2 = cities[b];
        const mx = (c1.x + c2.x) / 2;
        const my = Math.min(c1.y, c2.y) - 45;
        return (
          <path
            key={i}
            d={`M${c1.x},${c1.y} Q${mx},${my} ${c2.x},${c2.y}`}
            stroke="#C8960A"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
            strokeDasharray="5,3"
          >
            <animate attributeName="strokeDashoffset" from="0" to="-60" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
          </path>
        );
      })}

      {/* City dots + pulses + labels */}
      {cities.map((city, i) => (
        <g key={city.name}>
          <circle cx={city.x} cy={city.y} r="14" fill="#C8960A" opacity="0.06">
            <animate attributeName="r" from="6" to="18" dur={`${2 + i * 0.3}s`} begin={`${i * 0.5}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.3" to="0" dur={`${2 + i * 0.3}s`} begin={`${i * 0.5}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={city.x} cy={city.y} r="4" fill="#C8960A" filter="url(#glow)" />
          <circle cx={city.x} cy={city.y} r="2" fill="white" />

          {/* Label positioning per city */}
          <text
            x={city.name === "New York" ? city.x - 8 : city.name === "Sydney" ? city.x - 8 : city.x + 10}
            y={city.name === "London" ? city.y - 10 : city.name === "Lagos" ? city.y + 18 : city.y - 10}
            fill="#C8960A"
            fontSize="11"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
            opacity="0.95"
            textAnchor={city.name === "New York" || city.name === "Sydney" ? "end" : "start"}
          >
            {city.name}
          </text>
          <text
            x={city.name === "New York" ? city.x - 8 : city.name === "Sydney" ? city.x - 8 : city.x + 10}
            y={city.name === "London" ? city.y - 10 : city.name === "Lagos" ? city.y + 18 : city.y - 10}
            fill="#C8960A"
            fontSize="11"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
            opacity="0.95"
            textAnchor={city.name === "New York" || city.name === "Sydney" ? "end" : "start"}
            dy="13"
          >
          </text>
        </g>
      ))}

      {/* Corner watermark */}
      <text x="16" y="448" fill="#1e3a7b" fontSize="10" fontFamily="system-ui,sans-serif" opacity="0.5">AEROMAR GLOBAL NETWORK</text>
    </svg>
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
          <div style={{ width: "100%", maxWidth: "700px" }}>
            <WorldMap />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8F9FB] to-transparent" />
    </section>
  );
}