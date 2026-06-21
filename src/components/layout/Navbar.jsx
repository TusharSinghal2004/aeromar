import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const navLinks = ["HOME", "ABOUT", "SERVICES", "CONTACT"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open + prevent horizontal scroll bleed
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="bg-white h-[70px] lg:h-[90px] flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 border-b border-gray-100 relative z-50">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0" onClick={() => setMenuOpen(false)}>
          <h1 className="text-xl lg:text-2xl font-bold text-[#1E3A7B]">AEROMAR</h1>
          <p className="text-[10px] lg:text-xs tracking-[4px] text-[#C8960A]">GLOBAL LOGISTICS</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((label) => (
            <NavLink
              key={label}
              to={`/${label === "HOME" ? "" : label.toLowerCase()}`}
              className={({ isActive }) =>
                `text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive ? "text-[#C8960A]" : "text-[#1E3A7B] hover:text-[#C8960A]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            to="/quote"
            className="hidden sm:flex bg-[#1E3A7B] px-5 py-2.5 text-xs font-semibold text-white items-center gap-2 hover:opacity-90 transition-all"
          >
            GET A QUOTE
            <ArrowRight size={14} />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#1E3A7B]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer — rendered in a portal-like fixed layer, clipped to viewport */}
      {/* Using visibility instead of pointer-events to avoid layout side effects */}
      <div
        className="lg:hidden"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          visibility: menuOpen ? "visible" : "hidden",
          // Critical: clip everything to viewport so nothing bleeds right
          overflow: "hidden",
          width: "100vw",
          height: "100vh",
        }}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Panel — slides in from right, strictly capped at 100vw */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            width: "min(288px, 100vw)",   // never wider than screen
            background: "white",
            boxShadow: "-4px 0 24px rgba(0,0,0,0.12)",
            display: "flex",
            flexDirection: "column",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
            willChange: "transform",      // GPU layer — no layout reflow
          }}
        >
          {/* Panel header */}
          <div className="h-[70px] flex items-center justify-between px-6 border-b border-gray-100 flex-shrink-0">
            <p className="text-xs tracking-[3px] text-[#C8960A] font-semibold uppercase">Menu</p>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[#1E3A7B] w-8 h-8 flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col py-4 overflow-y-auto flex-1">
            {navLinks.map((label, i) => (
              <NavLink
                key={label}
                to={`/${label === "HOME" ? "" : label.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(20px)",
                  transition: `opacity 0.3s ease ${0.05 + i * 0.05}s, transform 0.3s ease ${0.05 + i * 0.05}s`,
                }}
                className={({ isActive }) =>
                  `px-6 py-4 text-sm font-semibold tracking-wide border-b border-gray-50 transition-colors duration-200 ${
                    isActive ? "text-[#C8960A] bg-amber-50" : "text-[#1E3A7B] active:bg-gray-50"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="px-6 pt-4 pb-10 flex-shrink-0">
            <Link
              to="/quote"
              onClick={() => setMenuOpen(false)}
              className="w-full bg-[#1E3A7B] px-5 py-3.5 text-xs font-semibold text-white flex items-center justify-center gap-2 active:opacity-80 transition-all"
            >
              GET A QUOTE
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}