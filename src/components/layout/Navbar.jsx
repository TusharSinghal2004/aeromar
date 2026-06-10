import { ArrowRight } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white h-[90px] flex items-center justify-between px-6 md:px-10 lg:px-16 border-b border-gray-100">

      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <h1 className="text-3xl font-bold text-[#1E3A7B]">
          AEROMAR
        </h1>

        <p className="text-sm tracking-[4px] text-[#1A73C8]">
          GLOBAL LOGISTICS
        </p>
      </Link>

      {/* Navigation */}
      <div className="hidden lg:flex items-center gap-10">
        
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold transition-all duration-300 ${
              isActive
                ? "text-[#C8960A]"
                : "text-[#1E3A7B] hover:text-[#C8960A]"
            }`
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-semibold transition-all duration-300 ${
              isActive
                ? "text-[#C8960A]"
                : "text-[#1E3A7B] hover:text-[#C8960A]"
            }`
          }
        >
          ABOUT
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            `font-semibold transition-all duration-300 ${
              isActive
                ? "text-[#C8960A]"
                : "text-[#1E3A7B] hover:text-[#C8960A]"
            }`
          }
        >
          SERVICES
        </NavLink>

        <NavLink
          to="/leadership"
          className={({ isActive }) =>
            `font-semibold transition-all duration-300 ${
              isActive
                ? "text-[#C8960A]"
                : "text-[#1E3A7B] hover:text-[#C8960A]"
            }`
          }
        >
          LEADERSHIP
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `font-semibold transition-all duration-300 ${
              isActive
                ? "text-[#C8960A]"
                : "text-[#1E3A7B] hover:text-[#C8960A]"
            }`
          }
        >
          BLOG
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-semibold transition-all duration-300 ${
              isActive
                ? "text-[#C8960A]"
                : "text-[#1E3A7B] hover:text-[#C8960A]"
            }`
          }
        >
          CONTACT
        </NavLink>

      </div>

      <Link
        to="/quote"
        className="
          bg-[#C8960A]
          px-6
          py-3
          font-semibold
          text-[#1E3A7B]
          flex
          items-center
          gap-3
          hover:opacity-90
          transition-all
        "
      >
        GET A QUOTE
        <ArrowRight size={18} />
      </Link>
    </nav>
  );
}