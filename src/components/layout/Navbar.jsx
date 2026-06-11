import { ArrowRight } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white h-[90px] flex items-center justify-between px-6 md:px-10 lg:px-16 border-b border-gray-100">

      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <h1 className="text-2xl font-bold text-[#1E3A7B]">
          AEROMAR
        </h1>
        <p className="text-xs tracking-[4px] text-[#C8960A]">
          GLOBAL LOGISTICS
        </p>
      </Link>

      {/* Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        {["HOME", "ABOUT", "SERVICES", "LEADERSHIP", "BLOG", "CONTACT"].map((label) => (
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

      {/* CTA Button */}
      <Link
        to="/quote"
        className="bg-[#1E3A7B] px-5 py-2.5 text-xs font-semibold text-white flex items-center gap-2 hover:opacity-90 transition-all"
      >
        GET A QUOTE
        <ArrowRight size={14} />
      </Link>
    </nav>
  );
}