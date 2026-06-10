import {
  Ship,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#081229] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Main Footer */}
        <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-[#C8960A] flex items-center justify-center">
                <Ship size={20} className="text-[#081229]" />
              </div>

              <div>
                <h3 className="text-xl font-extrabold">
                  AEROMAR
                </h3>

                <p className="text-[#C8960A] text-xs font-semibold tracking-[0.15em]">
                  GLOBAL LOGISTICS
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-7">
              FMC-Licensed NVOCC & Freight Forwarding.
              Moving the world responsibly — connecting
              USA, India, the Middle East, Europe,
              and Southeast Asia.
            </p>

            <div className="mt-5">
              <h4 className="uppercase tracking-[0.2em] text-[#C8960A] text-xs font-semibold">
                FMC License
              </h4>

              <p className="mt-1 text-gray-400 text-sm">
                OTI License No. 000000NF
              </p>
            </div>

            {/* Placeholder Social Boxes */}
            <div className="flex gap-2 mt-5">
              <div className="w-9 h-9 border border-[#20304F]" />
              <div className="w-9 h-9 border border-[#20304F]" />
              <div className="w-9 h-9 border border-[#20304F]" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="uppercase tracking-[0.2em] text-[#C8960A] text-xs font-semibold mb-5">
              Services
            </h4>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition">Ocean Freight</a></li>
              <li><a href="#" className="hover:text-white transition">Air Freight</a></li>
              <li><a href="#" className="hover:text-white transition">Customs Brokerage</a></li>
              <li><a href="#" className="hover:text-white transition">Warehousing</a></li>
              <li><a href="#" className="hover:text-white transition">Trucking & Drayage</a></li>
              <li><a href="#" className="hover:text-white transition">Door-To-Door Logistics</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="uppercase tracking-[0.2em] text-[#C8960A] text-xs font-semibold mb-5">
              Company
            </h4>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Leadership</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Request Quote</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            </ul>

            <div className="mt-6">
              <h4 className="uppercase tracking-[0.2em] text-[#C8960A] text-xs font-semibold mb-4">
                Coming Soon
              </h4>

              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Client Portal</li>
                <li>Shipment Tracking</li>
                <li>Resources Library</li>
                <li>Market Intelligence</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="uppercase tracking-[0.2em] text-[#C8960A] text-xs font-semibold mb-5">
              Contact
            </h4>

            <div className="space-y-4 text-gray-300 text-sm">

              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-[#C8960A] mt-1 flex-shrink-0"
                />

                <p>
                  1234 Harbor Boulevard
                  <br />
                  Edison, NJ 08837, USA
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="text-[#C8960A] flex-shrink-0"
                />
                <p>+1 (732) 555-1234</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="text-[#C8960A] flex-shrink-0"
                />
                <p>info@aeromarglobal.com</p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#20304F] py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2026 Aeromar Global Logistics Solutions LLC.
            All rights reserved.
          </p>

          <p className="text-gray-500 uppercase tracking-[0.2em] text-xs md:text-sm">
            Moving The World Responsibly
          </p>
        </div>

      </div>
    </footer>
  );
}