import { ArrowRight } from "lucide-react";

function AnimatedGlobe() {
  return (
    <svg viewBox="0 0 480 460" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <radialGradient id="sphereGrad" cx="40%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#1e3d7a" />
          <stop offset="100%" stopColor="#0a1628" />
        </radialGradient>
        <clipPath id="sphereClip">
          <circle cx="240" cy="230" r="185" />
        </clipPath>
      </defs>

      <circle cx="240" cy="230" r="210" fill="none" stroke="#1E3A7B" strokeWidth="0.5" opacity="0.3" />
      <circle cx="240" cy="230" r="225" fill="none" stroke="#1E3A7B" strokeWidth="0.3" opacity="0.15" />
      <circle cx="240" cy="230" r="185" fill="url(#sphereGrad)" />

      <g clipPath="url(#sphereClip)" stroke="#2a4a8a" strokeWidth="0.6" fill="none" opacity="0.5">
        <ellipse cx="240" cy="230" rx="185" ry="40" />
        <ellipse cx="240" cy="230" rx="185" ry="90" />
        <ellipse cx="240" cy="230" rx="185" ry="140" />
        <ellipse cx="240" cy="175" rx="165" ry="35" />
        <ellipse cx="240" cy="285" rx="165" ry="35" />
        <ellipse cx="240" cy="230" rx="40" ry="185" />
        <ellipse cx="240" cy="230" rx="90" ry="185" />
        <ellipse cx="240" cy="230" rx="140" ry="185" />
      </g>

      <g clipPath="url(#sphereClip)" fill="#1e4a8a" opacity="0.75">
        <path d="M115,130 L155,122 L178,135 L182,158 L165,172 L148,178 L128,168 L112,152 Z" />
        <path d="M148,178 L170,174 L178,190 L168,208 L150,210 L140,198 Z" />
        <path d="M168,230 L195,225 L210,240 L208,268 L192,285 L172,282 L160,265 L162,245 Z" />
        <path d="M248,118 L278,112 L295,124 L290,140 L272,148 L250,142 Z" />
        <path d="M272,140 L295,135 L310,148 L305,162 L285,165 L268,158 Z" />
        <path d="M268,170 L298,165 L318,182 L320,215 L308,242 L285,250 L265,238 L258,210 L260,185 Z" />
        <path d="M300,112 L348,105 L375,118 L378,142 L358,155 L328,152 L302,138 Z" />
        <path d="M348,145 L385,138 L408,152 L405,175 L378,182 L352,172 Z" />
        <path d="M355,260 L388,255 L402,270 L398,288 L375,295 L355,285 Z" />
        <ellipse cx="372" cy="225" rx="18" ry="10" />
        <ellipse cx="395" cy="238" rx="12" ry="7" />
      </g>

      <ellipse cx="190" cy="165" rx="55" ry="35" fill="white" opacity="0.04" />

      <path d="M148,168 Q210,105 272,144" stroke="#C8960A" strokeWidth="1.4" fill="none" opacity="0.7" strokeDasharray="5,3">
        <animate attributeName="strokeDashoffset" from="0" to="-60" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M290,138 Q330,115 370,128" stroke="#C8960A" strokeWidth="1.2" fill="none" opacity="0.6" strokeDasharray="4,3">
        <animate attributeName="strokeDashoffset" from="0" to="-50" dur="2.5s" repeatCount="indefinite" />
      </path>
      <path d="M155,200 Q162,218 172,230" stroke="#C8960A" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="3,4">
        <animate attributeName="strokeDashoffset" from="0" to="-40" dur="3.5s" repeatCount="indefinite" />
      </path>
      <path d="M278,155 Q278,162 280,175" stroke="#C8960A" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="3,4">
        <animate attributeName="strokeDashoffset" from="0" to="-35" dur="4s" repeatCount="indefinite" />
      </path>
      <path d="M375,182 Q385,220 378,258" stroke="#C8960A" strokeWidth="1" fill="none" opacity="0.45" strokeDasharray="3,4">
        <animate attributeName="strokeDashoffset" from="0" to="-40" dur="4.5s" repeatCount="indefinite" />
      </path>

      <circle cx="148" cy="168" r="4.5" fill="#C8960A" />
      <circle cx="148" cy="168" r="4.5" fill="none" stroke="#C8960A" strokeWidth="1.2">
        <animate attributeName="r" from="4.5" to="18" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.7" to="0" dur="2s" repeatCount="indefinite" />
      </circle>

      <circle cx="278" cy="138" r="4" fill="#C8960A" />
      <circle cx="278" cy="138" r="4" fill="none" stroke="#C8960A" strokeWidth="1">
        <animate attributeName="r" from="4" to="16" dur="2.2s" begin="0.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.7" to="0" dur="2.2s" begin="0.4s" repeatCount="indefinite" />
      </circle>

      <circle cx="372" cy="138" r="4" fill="#C8960A" />
      <circle cx="372" cy="138" r="4" fill="none" stroke="#C8960A" strokeWidth="1">
        <animate attributeName="r" from="4" to="16" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.7" to="0" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
      </circle>

      <circle cx="285" cy="212" r="3.5" fill="#C8960A" />
      <circle cx="285" cy="212" r="3.5" fill="none" stroke="#C8960A" strokeWidth="0.8">
        <animate attributeName="r" from="3.5" to="14" dur="2.6s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.6" to="0" dur="2.6s" begin="1s" repeatCount="indefinite" />
      </circle>

      <circle cx="378" cy="272" r="3.5" fill="#C8960A" />
      <circle cx="378" cy="272" r="3.5" fill="none" stroke="#C8960A" strokeWidth="0.8">
        <animate attributeName="r" from="3.5" to="14" dur="2.8s" begin="1.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.6" to="0" dur="2.8s" begin="1.4s" repeatCount="indefinite" />
      </circle>

      <g fill="white" fontFamily="system-ui,sans-serif" fontSize="10" opacity="0.65">
        <text x="125" y="162">New York</text>
        <text x="258" y="132">London</text>
        <text x="376" y="132">Mumbai</text>
        <text x="290" y="228">Lagos</text>
        <text x="355" y="290">Sydney</text>
      </g>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative bg-[#0d1b3e] overflow-x-hidden"
      style={{ minHeight: "600px" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#4a6fa5 1px, transparent 1px), linear-gradient(90deg, #4a6fa5 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#1E3A7B] opacity-20 blur-3xl pointer-events-none" />

      {/* Layout */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-stretch" style={{ minHeight: "520px" }}>

        {/* LEFT — takes 55% width, flush left with page padding */}
        <div
          className="flex flex-col justify-center gap-5 py-16"
          style={{ flex: "0 0 55%", paddingLeft: "clamp(24px, 6vw, 96px)", paddingRight: "40px" }}
        >
          {/* Eyebrow */}
          <p className="uppercase text-[#C8960A] font-semibold text-sm">
            Logistics · Procurement · Supply Chain
          </p>

          {/* Headline */}
          <div>
            <h1 className="text-white font-bold leading-[1]" style={{ fontSize: "clamp(42px, 5vw, 65px)" }}>
              Moving The World
            </h1>
            <h1 className="text-[#C8960A] font-bold leading-[1] mt-1" style={{ fontSize: "clamp(42px, 5vw, 65px)" }}>
              Responsibly.
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-white/60 leading-relaxed" style={{ fontSize: "clamp(14px, 1.1vw, 14px)", maxWidth: "480px" }}>
            Aeromar combines the smartest logistics technology with something the
            big players have forgotten — a real human on your side. Global supply
            chains, made effortless.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-2">
            <button className="bg-[#C8960A] hover:bg-[#b8850a] text-white font-semibold text-base px-7 py-3 rounded-full flex items-center gap-2 transition-all duration-300">
              Start Shipping
              <ArrowRight size={16} strokeWidth={2} />
            </button>
            <button className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold text-base px-7 py-3 rounded-full transition-all duration-300">
              Our Solutions
            </button>
          </div>
        </div>

        {/* RIGHT — globe fills remaining 45%, slightly overflows top/bottom for cinematic feel */}
        <div
          className="flex items-center justify-center"
          style={{ flex: "0 0 45%", position: "relative", overflow: "visible" }}
        >
          <div style={{ width: "100%", maxWidth: "580px", marginTop: "-20px", marginBottom: "-20px" }}>
            <AnimatedGlobe />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8F9FB] to-transparent" />
    </section>
  );
}