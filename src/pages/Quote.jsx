import { useState, useEffect } from "react";
import { ArrowRight, Mail, Phone, User, Building2, MessageSquare, CheckCircle2 } from "lucide-react";

export default function QuotePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative bg-[#0d1b3e] min-h-screen overflow-hidden">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#4a6fa5 1px, transparent 1px), linear-gradient(90deg, #4a6fa5 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: loaded ? 0.1 : 0,
          transition: "opacity 1.2s ease",
        }}
      />

      {/* Glow */}
      <div
        className="absolute right-0 top-0 w-[700px] h-[700px] rounded-full bg-[#1E3A7B] blur-3xl pointer-events-none"
        style={{
          opacity: loaded ? 0.2 : 0,
          transform: loaded ? "scale(1)" : "scale(0.7)",
          transition: "opacity 1.4s ease, transform 1.4s ease",
        }}
      />
      <div
        className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#C8960A] blur-3xl pointer-events-none"
        style={{
          opacity: loaded ? 0.1 : 0,
          transform: loaded ? "scale(1)" : "scale(0.7)",
          transition: "opacity 1.4s ease 0.15s, transform 1.4s ease 0.15s",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Heading + info */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0px)" : "translateY(32px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <p className="uppercase tracking-[2px] text-[#C8960A] font-extrabold text-xs">
                Get In Touch
              </p>
            </div>

            <h1 className="text-white font-extrabold leading-[1.05] mb-6" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
              <span
                style={{
                  display: "inline-block",
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0px)" : "translateY(24px)",
                  transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
                }}
              >
                Let's Move
              </span>
              <br />
              <span
                style={{
                  display: "inline-block",
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0px)" : "translateY(24px)",
                  transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
                }}
              >
                Your{" "}
                <span className="text-[#C8960A]">Cargo</span>
              </span>
            </h1>

            <p
              className="text-white/60 text-base lg:text-lg leading-relaxed max-w-md mb-10"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0px)" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
              }}
            >
              Tell us a bit about yourself and what you're looking for. Our team
              will get back to you within 24 hours with a tailored quote.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <div
                className="flex items-center gap-4"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateX(0px)" : "translateX(-20px)",
                  transition: "opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s",
                }}
              >
                <div className="w-11 h-11 bg-[#C8960A] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Email</p>
                  <p className="text-white font-semibold text-sm">quotes@aeromarglobal.com</p>
                </div>
              </div>

              <div
                className="flex items-center gap-4"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateX(0px)" : "translateX(-20px)",
                  transition: "opacity 0.5s ease 0.6s, transform 0.5s ease 0.6s",
                }}
              >
                <div className="w-11 h-11 bg-[#C8960A] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Phone</p>
                  <p className="text-white font-semibold text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Trust line */}
            <p
              className="text-white/30 text-xs mt-10 tracking-wide"
              style={{
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.6s ease 0.7s",
              }}
            >
              FMC Licensed NVOCC &nbsp;·&nbsp; Est. 1993 &nbsp;·&nbsp; 50+ Countries
            </p>
          </div>

          {/* RIGHT — Form */}
          <div
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0px) scale(1)" : "translateY(40px) scale(0.97)",
              transition: "opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s",
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center text-center py-12">
                <div className="w-16 h-16 bg-[#C8960A]/15 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle2 size={32} className="text-[#C8960A]" />
                </div>
                <h3 className="text-[#081229] text-2xl font-extrabold mb-2">
                  Thanks for reaching out!
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                  We've received your details and our team will get back to you
                  within 24 hours with a tailored quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h2 className="text-[#081229] text-2xl font-extrabold mb-1">
                    Request a Quote
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Fill in your details below and we'll be in touch shortly.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-[#081229] text-xs font-semibold uppercase tracking-widest mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl pl-11 pr-4 py-3 text-sm text-[#081229] placeholder-gray-400 focus:outline-none focus:border-[#C8960A] focus:ring-2 focus:ring-[#C8960A]/20 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[#081229] text-xs font-semibold uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl pl-11 pr-4 py-3 text-sm text-[#081229] placeholder-gray-400 focus:outline-none focus:border-[#C8960A] focus:ring-2 focus:ring-[#C8960A]/20 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Phone + Company */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#081229] text-xs font-semibold uppercase tracking-widest mb-2">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl pl-11 pr-4 py-3 text-sm text-[#081229] placeholder-gray-400 focus:outline-none focus:border-[#C8960A] focus:ring-2 focus:ring-[#C8960A]/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#081229] text-xs font-semibold uppercase tracking-widest mb-2">
                      Company
                    </label>
                    <div className="relative">
                      <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="w-full bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl pl-11 pr-4 py-3 text-sm text-[#081229] placeholder-gray-400 focus:outline-none focus:border-[#C8960A] focus:ring-2 focus:ring-[#C8960A]/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#081229] text-xs font-semibold uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-4 top-4 text-gray-400" />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your shipment needs..."
                      className="w-full bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl pl-11 pr-4 py-3 text-sm text-[#081229] placeholder-gray-400 focus:outline-none focus:border-[#C8960A] focus:ring-2 focus:ring-[#C8960A]/20 transition-all duration-300 resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#C8960A] hover:bg-[#b8850a] text-white font-semibold text-base py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 mt-2"
                >
                  Submit Request
                  <ArrowRight size={16} strokeWidth={2} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}