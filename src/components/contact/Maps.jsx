import { useEffect, useRef, useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";

export default function ContactMap() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Inject LocalBusiness schema for SEO
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Aeromar Global Logistics Solutions LLC",
      "description": "FMC-Licensed NVOCC and freight forwarding company specializing in ocean freight, air freight, customs brokerage, and the India-USA trade corridor.",
      "url": "https://www.aeromarglobal.com",
      "telephone": "+1-732-555-1234",
      "email": "info@aeromarglobal.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1234 Harbor Boulevard",
        "addressLocality": "Metuchen",
        "addressRegion": "NJ",
        "postalCode": "08840",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.5434,
        "longitude": -74.3632
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/aeromar-global-logistics",
        "https://www.google.com/maps?cid=YOUR_GOOGLE_CID"
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    script.id = "aeromar-local-schema";
    if (!document.getElementById("aeromar-local-schema")) {
      document.head.appendChild(script);
    }

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white pb-14 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Label row */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
          }}
          className="flex items-center justify-between mb-5"
        >
          <div className="flex items-center gap-3">
            <span className="uppercase tracking-[0.22em] text-[#C8960A] text-[10px] font-bold">
              Our Location
            </span>
          </div>

          <a
            href="https://maps.google.com/?q=Metuchen,NJ+08840"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#1A73C8] hover:text-[#C8960A] transition-colors duration-200"
          >
            Open in Google Maps
            <ExternalLink size={11} />
          </a>
        </div>

        {/* Map container */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
          className="relative overflow-hidden border border-gray-100"
        >
          {/* Animated top gold bar */}
          <div
            style={{
              width: visible ? "100%" : "0%",
              transition: "width 1s cubic-bezier(0.16,1,0.3,1) 0.4s",
            }}
            className="absolute top-0 left-0 h-[3px] bg-[#C8960A] z-10"
          />

          {/* Google Maps embed — Metuchen, NJ */}
          <iframe
  title="Aeromar Global Logistics — Metuchen NJ Office"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48500.37780172637!2d-74.44713592529298!3d40.55763465737646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b7ba194cbb97%3A0xd48174afb6d2cdd5!2sMetuchen%20Golf%20and%20Country%20Club!5e0!3m2!1sen!2sin!4v1781266006629!5m2!1sen!2sin"
  width="100%"
  height="420"
  style={{ border: 0, display: "block" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          {/* Overlay card */}
          <div className="absolute bottom-5 left-5 bg-white border border-gray-100 shadow-sm px-5 py-4 max-w-[220px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-[#C8960A] flex items-center justify-center flex-shrink-0">
                <MapPin size={12} className="text-white" />
              </div>
              <p className="text-[#1E3A7B] text-xs font-extrabold uppercase tracking-wide">
                Aeromar HQ
              </p>
            </div>
            <p className="text-gray-500 text-[11px] leading-[1.6]">
              1234 Harbor Boulevard<br />
              Metuchen, NJ 08840<br />
              United States
            </p>
            <div className="mt-2 pt-2 border-t border-gray-100">
              <p className="text-[10px] text-[#C8960A] font-semibold uppercase tracking-wide">
                Mon–Fri · 8am–6pm EST
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}