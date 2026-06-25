import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, ArrowRight, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office",
    lines: ["717 Main Street, Metuchen NJ 08840 USA"],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["7329634537"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["inside.sales@aeromarus.com"],
  },
];

const inputClass = `
  w-full bg-[#F8F9FB] border border-gray-200 text-[#1E3A7B] text-sm px-4 py-3
  placeholder-gray-400 outline-none
  focus:border-[#C8960A] focus:bg-white
  transition-all duration-200
`;

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [hoveredInfo, setHoveredInfo] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fade = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section ref={ref} className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">

          {/* ── Left: Contact Info ── */}
          <div>
            {/* Header */}
            <div style={fade(0.05)} className="flex items-center gap-3 mb-4">
              <span className="uppercase tracking-[0.22em] text-[#C8960A] text-[10px] font-bold">
                Reach Us
              </span>
            </div>

            <h2 style={fade(0.13)} className="text-2xl md:text-3xl font-extrabold text-[#1E3A7B] mb-8 leading-tight">
              USA Headquarters
            </h2>

            {/* Info rows */}
            <div className="space-y-5 mb-8">
              {contactInfo.map(({ icon: Icon, label, lines }, i) => (
                <div
                  key={label}
                  onMouseEnter={() => setHoveredInfo(i)}
                  onMouseLeave={() => setHoveredInfo(null)}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-16px)",
                    transition: `opacity 0.6s ease ${0.2 + i * 0.08}s, transform 0.6s ease ${0.2 + i * 0.08}s`,
                    cursor: "default",
                  }}
                  className="flex items-start gap-4 group"
                >
                  {/* Icon box */}
                  <div
                    style={{
                      background: hoveredInfo === i ? "#C8960A" : "#F0F4FF",
                      transition: "background 0.25s ease",
                    }}
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <Icon
                      size={15}
                      style={{
                        color: hoveredInfo === i ? "#fff" : "#1E3A7B",
                        transition: "color 0.25s ease",
                      }}
                    />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold mb-0.5">
                      {label}
                    </p>
                    {lines.map((line) => (
                      <p
                        key={line}
                        style={{
                          color: hoveredInfo === i ? "#C8960A" : "#1E3A7B",
                          transition: "color 0.25s ease",
                        }}
                        className="text-sm font-semibold leading-snug"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div style={fade(0.55)}>
              <button
                className="group bg-[#C8960A] text-white font-bold text-xs tracking-widest px-6 py-3 rounded-full flex items-center gap-2 hover:opacity-90 transition-all hover:-translate-y-0.5"
              >
                CHAT ON WHATSAPP
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Divider with response promise */}
            <div
              style={fade(0.65)}
              className="mt-8 pt-6 border-t border-gray-100"
            >
              <div className="border-l-[3px] border-[#C8960A] pl-4 py-0.5">
                <p className="text-xs text-[#1E3A7B] font-semibold leading-5">
                  We respond to every inquiry within 4 business hours.
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  Mon – Fri · 8 am – 6 pm EST
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div
            style={fade(0.2)}
            className="bg-[#F8F9FB] border border-gray-100 p-7 md:p-9"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#C8960A] flex items-center justify-center">
                  <Send size={22} className="text-white" />
                </div>
                <h3 className="text-[#1E3A7B] text-lg font-extrabold">Message Sent</h3>
                <p className="text-gray-500 text-sm max-w-xs leading-6">
                  We'll have a senior team member reach out within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] uppercase tracking-[0.18em] text-[#1E3A7B] font-bold mb-1.5">
                      Name <span className="text-[#C8960A]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John Smith"
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      style={{ borderColor: focused === "name" ? "#C8960A" : "" }}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase tracking-[0.18em] text-[#1E3A7B] font-bold mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      onFocus={() => setFocused("company")}
                      onBlur={() => setFocused(null)}
                      style={{ borderColor: focused === "company" ? "#C8960A" : "" }}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] uppercase tracking-[0.18em] text-[#1E3A7B] font-bold mb-1.5">
                      Email <span className="text-[#C8960A]">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="john@acme.com"
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      style={{ borderColor: focused === "email" ? "#C8960A" : "" }}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase tracking-[0.18em] text-[#1E3A7B] font-bold mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (000) 000-0000"
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      style={{ borderColor: focused === "phone" ? "#C8960A" : "" }}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.18em] text-[#1E3A7B] font-bold mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Ocean freight quote — India to USA"
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    style={{ borderColor: focused === "subject" ? "#C8960A" : "" }}
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.18em] text-[#1E3A7B] font-bold mb-1.5">
                    Message <span className="text-[#C8960A]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your shipment, route, cargo type, and timeline..."
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={{ borderColor: focused === "message" ? "#C8960A" : "", resize: "none" }}
                    className={inputClass}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group w-full bg-[#081229] text-white font-bold text-xs tracking-widest py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#1E3A7B] transition-all duration-300 hover:-translate-y-0.5"
                >
                  SEND MESSAGE
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}