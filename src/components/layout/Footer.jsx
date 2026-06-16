import { Ship, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#081229] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Main Footer */}
        <div className="py-10 lg:py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Company — full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#C8960A] flex items-center justify-center flex-shrink-0">
                <Ship size={18} className="text-[#081229]" />
              </div>
              <div>
                <h3 className="text-base font-extrabold tracking-wide">AEROMAR</h3>
                <p className="text-[#C8960A] text-[10px] font-semibold tracking-[3px]">GLOBAL LOGISTICS</p>
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-6 mb-5">
              FMC-Licensed NVOCC & Freight Forwarding.
              Moving the world responsibly — connecting
              USA, India, the Middle East, Europe,
              and Southeast Asia.
            </p>

            <div className="mb-5">
              <p className="uppercase tracking-[3px] text-[#C8960A] text-[10px] font-semibold mb-1">
                FMC License
              </p>
              <p className="text-gray-500 text-xs">OTI License No. 019576</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="uppercase tracking-[3px] text-[#C8960A] text-[10px] font-semibold mb-4 lg:mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Ocean Freight",
                "Air Freight",
                "Customs Brokerage",
                "Warehousing",
                "Trucking & Drayage",
                "Door-To-Door Logistics",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-gray-400 text-xs hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="uppercase tracking-[3px] text-[#C8960A] text-[10px] font-semibold mb-4 lg:mb-5">
              Company
            </h4>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: "About", to: "/about" },
                { label: "Leadership", to: "/leadership" },
                { label: "Blog", to: "/blog" },
                { label: "Request Quote", to: "/quote" },
                { label: "Contact", to: "/contact" },
                { label: "Privacy Policy", to: "/privacy" },
                { label: "Terms & Conditions", to: "/terms" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-gray-400 text-xs hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="uppercase tracking-[3px] text-[#C8960A] text-[10px] font-semibold mb-3">
              Coming Soon
            </h4>
            <ul className="space-y-2">
              {["Client Portal", "Shipment Tracking", "Resources Library", "Market Intelligence"].map((item) => (
                <li key={item} className="text-gray-600 text-xs flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#C8960A]/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="uppercase tracking-[3px] text-[#C8960A] text-[10px] font-semibold mb-4 lg:mb-5">
              Contact
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={13} className="text-[#C8960A] mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-xs leading-5">
                  1234 Harbor Boulevard<br />
                  Edison, NJ 08837, USA
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={13} className="text-[#C8960A] flex-shrink-0" />
                <a href="tel:+17325551234" className="text-gray-400 text-xs hover:text-white transition-colors duration-200">
                  +1 (732) 555-1234
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={13} className="text-[#C8960A] flex-shrink-0" />
                <a href="mailto:info@aeromarglobal.com" className="text-gray-400 text-xs hover:text-white transition-colors duration-200 break-all">
                  info@aeromarglobal.com
                </a>
              </div>
            </div>

            {/* Mini CTA */}
            <div className="mt-6 border border-[#1E3A7B]/40 rounded-xl p-4">
              <p className="text-white text-xs font-semibold mb-1">Ready to ship?</p>
              <p className="text-gray-500 text-[11px] mb-3">Get a quote in under 2 minutes.</p>
              <Link
                to="/quote"
                className="w-full bg-[#C8960A] hover:bg-[#b8850a] transition-colors duration-300 text-white font-bold text-xs py-2 flex items-center justify-center rounded-lg"
              >
                Get a Quote
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#20304F] py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="text-gray-600 text-[11px]">
            © 2026 Aeromar Global Logistics Solutions LLC. All rights reserved.
          </p>
          <p className="text-gray-600 uppercase tracking-[3px] text-[10px]">
            Moving The World Responsibly
          </p>
        </div>

      </div>
    </footer>
  );
}