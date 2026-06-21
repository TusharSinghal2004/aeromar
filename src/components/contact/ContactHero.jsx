import { useEffect, useState } from "react";
import { Phone, Mail, Clock } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80";

const contacts = [
  { icon: Phone, label: "Call Us",      value: "7329634537",       sub: "Mon–Fri, 8am–6pm EST" },
  { icon: Mail,  label: "Email",         value: "inside.sales@aeromar.us", sub: "We reply on time" },
  { icon: Clock, label: "Response Time", value: "Same Day",           sub: "Business emails don't sit" },
];

export default function ContactHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
  });

  return (
    <section className="relative min-h-[90svh] flex items-center overflow-hidden">

      <img
        src={heroImage}
        alt="Contact Aeromar"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          transform: visible ? "scale(1)" : "scale(1.06)",
          transition: "transform 1.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#081229]/97 via-[#081229]/82 to-[#081229]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#081229]/75 via-transparent to-transparent" />

      <div
        className="absolute left-0 top-0 w-[3px] bg-[#C8960A]"
        style={{
          height: visible ? "100%" : "0%",
          transition: "height 1s cubic-bezier(0.16,1,0.3,1) 0.2s",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full py-24 md:py-28">
        <div className="max-w-3xl">

          <div style={fade(0.15)} className="flex items-center gap-3 mb-5">
            <span className="uppercase tracking-[0.3em] text-[#C8960A] text-xs font-bold">
              Contact Us
            </span>
          </div>

          <h1
            style={fade(0.26)}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-5"
          >
            Talk to a{" "}
            <span className="relative inline-block">
              senior
              <span
                className="absolute bottom-0 left-0 h-[3px] bg-[#C8960A]"
                style={{
                  width: visible ? "100%" : "0%",
                  transition: "width 0.8s cubic-bezier(0.16,1,0.3,1) 0.9s",
                }}
              />
            </span>
            {" "}logistics
            <br />expert.
          </h1>

          <p style={fade(0.38)} className="text-sm md:text-base text-white/70 leading-7 max-w-lg mb-8">
            No call centers. No bots. Reach our team directly by phone,
            email, WhatsApp, or the form below.
          </p>

          <div
            style={fade(0.5)}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full"
          >
            {contacts.map(({ icon: Icon, label, value, sub }, i) => (
              <ContactCard
                key={label}
                Icon={Icon}
                label={label}
                value={value}
                sub={sub}
                delay={0.52 + i * 0.08}
                visible={visible}
              />
            ))}
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function ContactCard({ Icon, label, value, sub, delay, visible }) {
  const [active, setActive] = useState(false);

  const displayValue = value.length > 22 ? value.replace("aeromarglobal", "aeromar") : value;

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setTimeout(() => setActive(false), 300)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        background: active ? "rgba(200,150,10,0.12)" : "rgba(255,255,255,0.05)",
        borderColor: active ? "#C8960A" : "rgba(255,255,255,0.1)",
        WebkitTapHighlightColor: "transparent",
      }}
      className="border px-5 py-4 flex flex-row items-center gap-4 cursor-default"
    >
      <div className="flex-shrink-0">
        <Icon
          size={20}
          style={{
            color: active ? "#C8960A" : "rgba(255,255,255,0.5)",
            transform: active ? "scale(1.15)" : "scale(1)",
            transition: "color 0.25s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        />
      </div>

      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-0.5">
          {label}
        </p>
        <p
          className="text-sm font-bold leading-snug whitespace-nowrap"
          style={{ color: active ? "#C8960A" : "#fff", transition: "color 0.25s ease" }}
        >
          {displayValue}
        </p>
        <p className="text-xs text-white/40 mt-0.5 leading-snug whitespace-nowrap">{sub}</p>
      </div>
    </div>
  );
} 