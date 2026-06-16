import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const navLinks = ["HOME", "ABOUT", "SERVICES", "LEADERSHIP", "BLOG", "CONTACT"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          {/* CTA — hidden on mobile */}
          <Link
            to="/quote"
            className="hidden sm:flex bg-[#1E3A7B] px-5 py-2.5 text-xs font-semibold text-white items-center gap-2 hover:opacity-90 transition-all"
          >
            GET A QUOTE
            <ArrowRight size={14} />
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#1E3A7B]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel header */}
          <div className="h-[70px] flex items-center justify-between px-6 border-b border-gray-100">
            <p className="text-xs tracking-[3px] text-[#C8960A] font-semibold uppercase">Menu</p>
            <button onClick={() => setMenuOpen(false)} className="text-[#1E3A7B]">
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col py-4">
            {navLinks.map((label) => (
              <NavLink
                key={label}
                to={`/${label === "HOME" ? "" : label.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-4 text-sm font-semibold tracking-wide border-b border-gray-50 transition-colors duration-200 ${
                    isActive ? "text-[#C8960A] bg-amber-50" : "text-[#1E3A7B] hover:text-[#C8960A] hover:bg-gray-50"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="px-6 pt-4 mt-auto pb-10">
            <Link
              to="/quote"
              onClick={() => setMenuOpen(false)}
              className="w-full bg-[#1E3A7B] px-5 py-3.5 text-xs font-semibold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-all"
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