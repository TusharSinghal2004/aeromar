import { useEffect, useRef } from "react";

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: [
      {
        subtitle: "Information You Provide Directly",
        text: `When you contact us, request a quote, or use our services, we may collect:
- Full name, business name, and job title
- Email address, phone number, and mailing address
- Shipment details including origin, destination, cargo type, weight, and dimensions
- Payment and billing information
- Any other information you voluntarily provide in forms or communications`,
      },
      {
        subtitle: "Information Collected Automatically",
        text: `When you visit our website, we automatically collect certain technical information:
- IP address and approximate geographic location
- Browser type, version, and operating system
- Pages visited, time spent, and referring URLs
- Device identifiers and cookie data
- Clickstream data and interaction logs`,
      },
      {
        subtitle: "Information From Third Parties",
        text: `We may receive information about you from third-party partners such as freight brokers, customs authorities, shipping carriers, and business partners who facilitate your logistics transactions.`,
      },
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: [
      {
        subtitle: null,
        text: `Aeromar Global Logistics Solutions LLC uses your information to:
- Process and fulfill freight forwarding, customs brokerage, and logistics requests
- Provide quotes, invoices, and shipment status updates
- Communicate with you about your cargo and related services
- Comply with U.S. and international customs and export/import regulations
- Process payments and prevent fraudulent transactions
- Improve our website, services, and customer experience
- Send marketing communications where you have opted in
- Respond to inquiries and provide customer support
- Meet our legal, regulatory, and contractual obligations`,
      },
    ],
  },
  {
    id: "sharing",
    title: "Sharing Your Information",
    content: [
      {
        subtitle: null,
        text: `We do not sell, rent, or trade your personal information. We may share your information with:`,
      },
      {
        subtitle: "Service Providers & Logistics Partners",
        text: `Carriers, freight forwarders, customs brokers, warehousing partners, and technology vendors who assist in delivering our services. These parties are contractually obligated to protect your information.`,
      },
      {
        subtitle: "Government & Regulatory Authorities",
        text: `U.S. Customs and Border Protection (CBP), the Transportation Security Administration (TSA), the Federal Maritime Commission (FMC), and other regulatory bodies as required by law.`,
      },
      {
        subtitle: "Business Transfers",
        text: `In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.`,
      },
      {
        subtitle: "Legal Requirements",
        text: `We may disclose information when required by law, court order, or to protect the rights, property, or safety of Aeromar, our customers, or others.`,
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Tracking Technologies",
    content: [
      {
        subtitle: null,
        text: `We use cookies and similar tracking technologies to enhance your experience on our website. These include:
- Essential cookies required for website functionality
- Analytics cookies to understand how visitors use our site (e.g., Google Analytics)
- Preference cookies to remember your settings

You may control cookie preferences through your browser settings. Disabling cookies may limit certain website features. We do not respond to Do Not Track (DNT) browser signals at this time.`,
      },
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: [
      {
        subtitle: null,
        text: `We retain personal information for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations (including U.S. customs and trade recordkeeping requirements, which may be up to 5 years), resolve disputes, and enforce our agreements. When your information is no longer needed, we securely delete or anonymize it.`,
      },
    ],
  },
  {
    id: "security",
    title: "Data Security",
    content: [
      {
        subtitle: null,
        text: `Aeromar implements industry-standard technical and organizational safeguards to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include encrypted data transmission (SSL/TLS), access controls, and secure data storage. However, no method of transmission over the Internet is 100% secure. We encourage you to use strong passwords and keep your account credentials confidential.`,
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your Privacy Rights",
    content: [
      {
        subtitle: "U.S. State Privacy Rights",
        text: `Depending on your state of residence, you may have the following rights:
- Right to know what personal information we collect and how it is used
- Right to access a copy of your personal information
- Right to request correction of inaccurate data
- Right to request deletion of your personal information, subject to legal exceptions
- Right to opt out of the sale of personal information (we do not sell your data)
- Right to non-discrimination for exercising your privacy rights

California residents may have additional rights under the California Consumer Privacy Act (CCPA) / California Privacy Rights Act (CPRA). To exercise your rights, contact us at privacy@aeromarglobal.com.`,
      },
      {
        subtitle: "Marketing Opt-Out",
        text: `You may opt out of marketing emails at any time by clicking "Unsubscribe" in any marketing email or by contacting us directly.`,
      },
    ],
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: [
      {
        subtitle: null,
        text: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected information from a child, please contact us immediately and we will take steps to delete it.`,
      },
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Links",
    content: [
      {
        subtitle: null,
        text: `Our website may contain links to third-party websites, carrier portals, or partner platforms. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: [
      {
        subtitle: null,
        text: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will post the updated policy on this page and update the "Last Updated" date. Your continued use of our website after such changes constitutes your acceptance of the updated policy.`,
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      {
        subtitle: null,
        text: `If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:

Aeromar Global Logistics Solutions LLC
Email: privacy@aeromarglobal.com
Phone: +1 (800) 000-0000
Address: [Company Address], United States

We will respond to all verified requests within 45 days as required by applicable U.S. law.`,
      },
    ],
  },
];

const animStyles = `
  @keyframes fadeSlideDown {
    from { opacity: 0; transform: translateY(-24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes goldLine {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }

  .hero-eyebrow  { animation: fadeSlideDown 0.55s ease both; animation-delay: 0.05s; }
  .hero-title    { animation: fadeSlideDown 0.6s ease both;  animation-delay: 0.18s; }
  .hero-meta     { animation: fadeIn 0.6s ease both;         animation-delay: 0.38s; }
  .hero-line     { animation: goldLine 0.7s ease both;       animation-delay: 0.5s; transform-origin: left; }
  .intro-block   { animation: fadeSlideUp 0.6s ease both;    animation-delay: 0.25s; }
  .toc-block     { animation: fadeSlideUp 0.55s ease both;   animation-delay: 0.1s; }

  .section-reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .section-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

function useSectionReveal() {
  const refs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return refs;
}

export default function LegalPrivacy() {
  const refs = useSectionReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <style>{animStyles}</style>

      {/* Hero */}
      <div className="bg-[#0B1F3A] py-16 px-6 relative overflow-hidden">
        {/* Subtle animated background grid */}
        
        <div className="max-w-4xl mx-auto relative">
          <p className="hero-eyebrow text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">
            Legal
          </p>
          <h1 className="hero-title text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          {/* Animated gold underline */}
          <div className="hero-line h-[2px] w-16 bg-[#C9A84C] mb-5" />
          <p className="hero-meta text-slate-300 text-base">
            Last Updated: June 16, 2025 &nbsp;·&nbsp; Effective Date: June 16, 2025
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="intro-block bg-[#F5F7FA] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-slate-700 text-base leading-relaxed">
            Aeromar Global Logistics Solutions LLC ("Aeromar," "we," "our," or "us") is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal
            information when you visit our website or engage with our freight forwarding, customs brokerage, and
            global logistics services. Please read this policy carefully. By using our services or website, you
            agree to the practices described herein.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* TOC */}
        <div className="toc-block mb-12 p-6 border border-slate-200 rounded-lg bg-[#F5F7FA]">
          <p className="text-xs font-semibold text-[#0B1F3A] tracking-widest uppercase mb-4">
            Table of Contents
          </p>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-[#0B1F3A] hover:text-[#C9A84C] transition-colors duration-200 flex items-start gap-2"
                >
                  <span className="text-[#C9A84C] font-bold min-w-[20px]">{i + 1}.</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-8 section-reveal"
              ref={(el) => (refs.current[idx] = el)}
              style={{ transitionDelay: `${idx * 0.04}s` }}
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-[#C9A84C] font-bold text-sm w-7 shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h2 className="text-xl font-bold text-[#0B1F3A]">{section.title}</h2>
              </div>
              <div className="pl-11 space-y-5">
                {section.content.map((block, j) => (
                  <div key={j}>
                    {block.subtitle && (
                      <h3 className="text-sm font-semibold text-[#0B1F3A] uppercase tracking-wide mb-2 border-l-2 border-[#C9A84C] pl-3">
                        {block.subtitle}
                      </h3>
                    )}
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                      {block.text}
                    </p>
                  </div>
                ))}
              </div>
              {idx < sections.length - 1 && <div className="mt-10 border-b border-slate-100" />}
            </section>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#0B1F3A] mt-16 py-8 px-6 text-center">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Aeromar Global Logistics Solutions LLC. All rights reserved.
        </p>
        <p className="text-slate-500 text-xs mt-1">This policy is governed by the laws of the United States.</p>
      </div>
    </div>
  );
}