import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative py-12 lg:py-12 bg-[#0E1E3D] overflow-hidden">

      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #1A73C8 0%, transparent 50%), radial-gradient(circle at 80% 50%, #C8960A 0%, transparent 50%)"
        }}
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">

        <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
          Ready to Simplify<br />Your Supply Chain?
        </h2>

        <p className="text-white/60 text-sm leading-relaxed mb-7">
          Tell us where you need to go. We'll map the route, handle the
          complexity, and keep you informed every step of the way.
        </p>

        {/* Email input + CTA — stack on mobile, row on sm+ */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-[#1A2F52] rounded-xl border border-[#1E3A7B]/50 mb-3 mx-auto max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email"
            className="flex-1 bg-transparent px-5 py-4 text-white placeholder-white/40 text-sm outline-none rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
          />
          <Link
            to="/quote"
            className="bg-[#C8960A] hover:bg-[#b8850a] transition-colors duration-300 text-white font-bold text-sm px-6 py-4 whitespace-nowrap flex items-center justify-center rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none"
          >
            Get a Quote
          </Link>
        </div>

        <button className="group inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-300">
          Talk to Eudora about Procurement
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>

      </div>
    </section>
  );
}