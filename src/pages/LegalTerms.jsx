import { useEffect, useRef } from "react";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: [
      {
        subtitle: null,
        text: `By accessing our website or engaging Aeromar Global Logistics Solutions LLC ("Aeromar," "we," "our," or "us") for any logistics, freight forwarding, customs brokerage, or related services, you ("Client," "you," or "your") agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of our website and services immediately.

These Terms, together with any applicable service agreements, rate confirmations, or quotes issued by Aeromar, constitute the entire agreement between you and Aeromar. In the event of a conflict, the specific service agreement shall prevail.`,
      },
    ],
  },
  {
    id: "services",
    title: "Services Provided",
    content: [
      {
        subtitle: null,
        text: `Aeromar provides international and domestic logistics solutions including but not limited to:
- Freight forwarding (air, ocean, and ground)
- Customs brokerage and import/export compliance
- Supply chain consulting and project cargo management
- Warehousing and distribution services
- Cargo insurance procurement assistance
- Trade documentation and compliance support

All services are subject to applicable U.S. federal regulations, including those administered by CBP, FMC, TSA, and BIS.`,
      },
    ],
  },
  {
    id: "quotes",
    title: "Quotes, Rates & Payment",
    content: [
      {
        subtitle: "Quotes",
        text: `All quotes and rate estimates provided by Aeromar are non-binding unless confirmed in writing via a formal rate confirmation or signed service agreement. Rates are subject to change due to carrier surcharges, fuel fluctuations, regulatory fees, currency exchange, and other market conditions.`,
      },
      {
        subtitle: "Payment Terms",
        text: `Unless otherwise agreed in writing, payment is due within thirty (30) days of invoice date. Aeromar reserves the right to charge interest on overdue balances at the rate of 1.5% per month (18% per annum) or the maximum rate permitted by applicable law, whichever is lower.`,
      },
      {
        subtitle: "Liens",
        text: `Aeromar shall have a general lien on any and all property and documents in its possession, custody, or control for all sums due from the Client. If unpaid amounts remain outstanding for more than sixty (60) days, Aeromar may sell or dispose of such property to recover amounts owed.`,
      },
    ],
  },
  {
    id: "client-obligations",
    title: "Client Obligations",
    content: [
      {
        subtitle: null,
        text: `You agree to:
- Provide accurate, complete, and timely shipment information including HS codes, weight, dimensions, value, and country of origin
- Comply with all applicable U.S. and international export/import laws and regulations
- Obtain all required export licenses, permits, and approvals prior to shipment
- Ensure goods are properly classified under the Harmonized Tariff Schedule of the United States (HTSUS)
- Not ship prohibited or restricted goods without proper documentation and prior disclosure to Aeromar
- Indemnify Aeromar against any fines, penalties, or losses resulting from your failure to comply with applicable laws`,
      },
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: [
      {
        subtitle: "General Limitation",
        text: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AEROMAR'S TOTAL LIABILITY TO YOU FOR ANY CLAIM SHALL NOT EXCEED THE LESSER OF (A) THE TOTAL FEES PAID BY YOU TO AEROMAR IN THE THREE (3) MONTHS PRECEDING THE CLAIM, OR (B) $500 USD.`,
      },
      {
        subtitle: "Exclusion of Consequential Damages",
        text: `AEROMAR SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, LOSS OF BUSINESS, OR LOSS OF DATA, EVEN IF AEROMAR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.`,
      },
      {
        subtitle: "Cargo Loss & Damage",
        text: `Aeromar's liability for cargo loss or damage is limited as follows: (a) ocean shipments — COGSA, $500 per package unless higher value declared; (b) air shipments — Montreal or Warsaw Convention; (c) domestic ground — Carmack Amendment. Aeromar strongly recommends Clients obtain adequate cargo insurance.`,
      },
      {
        subtitle: "Force Majeure",
        text: `Aeromar shall not be liable for delays or failures resulting from acts beyond our reasonable control, including acts of God, pandemics, war, terrorism, strikes, government action, port congestion, or carrier delays.`,
      },
    ],
  },
  {
    id: "cargo-insurance",
    title: "Cargo Insurance",
    content: [
      {
        subtitle: null,
        text: `Aeromar does not automatically insure cargo against loss or damage. Unless you specifically request cargo insurance in writing and Aeromar confirms its procurement, your shipment will not be insured beyond the carrier's standard liability limits. It is your responsibility to obtain adequate cargo insurance. Aeromar can assist in procuring cargo insurance at your request and expense.`,
      },
    ],
  },
  {
    id: "prohibited",
    title: "Prohibited Goods",
    content: [
      {
        subtitle: null,
        text: `The following are prohibited without prior written approval:
- Hazardous materials not compliant with DOT, IATA, or IMDG regulations
- Goods subject to U.S. trade sanctions or embargoes (OFAC-restricted destinations or parties)
- Dual-use items requiring EAR licenses without prior approval
- Narcotics, controlled substances, and illegal drugs
- Counterfeit goods or goods infringing intellectual property rights
- Firearms and weapons without proper federal licensing
- Currency and negotiable instruments above declared thresholds without disclosure
- Human remains or biological agents without proper documentation

Aeromar reserves the right to refuse, inspect, or return any shipment and to report suspected illegal activity to appropriate authorities.`,
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: [
      {
        subtitle: null,
        text: `All content on the Aeromar website — including logos, text, graphics, images, and software — is the property of Aeromar Global Logistics Solutions LLC and is protected by U.S. copyright, trademark, and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.`,
      },
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    content: [
      {
        subtitle: null,
        text: `Both parties agree to keep confidential any non-public, proprietary, or sensitive business information disclosed during the course of the business relationship, including pricing, trade lanes, client lists, and operational data. This obligation survives termination for a period of three (3) years.`,
      },
    ],
  },
  {
    id: "dispute",
    title: "Dispute Resolution & Governing Law",
    content: [
      {
        subtitle: "Governing Law",
        text: `These Terms shall be governed by and construed in accordance with the laws of the United States and the State of [State], without regard to conflict of law principles.`,
      },
      {
        subtitle: "Arbitration",
        text: `Any dispute that cannot be resolved through good-faith negotiation shall be finally resolved by binding arbitration under the rules of the American Arbitration Association (AAA) by a single arbitrator in [City, State]. Judgment on the award may be entered in any court of competent jurisdiction.`,
      },
      {
        subtitle: "Class Action Waiver",
        text: `YOU AND AEROMAR AGREE THAT EACH PARTY MAY BRING CLAIMS ONLY IN AN INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE ACTION.`,
      },
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: [
      {
        subtitle: null,
        text: `You agree to indemnify, defend, and hold harmless Aeromar and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of: (a) your violation of these Terms; (b) your violation of any applicable law; (c) inaccurate or incomplete information you provide; (d) your shipment of prohibited goods; or (e) any third-party claim relating to your use of our services.`,
      },
    ],
  },
  {
    id: "termination",
    title: "Termination",
    content: [
      {
        subtitle: null,
        text: `Aeromar reserves the right to suspend or terminate your access to our services at any time, with or without cause and with or without notice. Upon termination, all outstanding payment obligations become immediately due. Sections relating to liability, indemnification, confidentiality, governing law, and dispute resolution shall survive termination.`,
      },
    ],
  },
  {
    id: "website",
    title: "Website Use & Disclaimer",
    content: [
      {
        subtitle: null,
        text: `The Aeromar website is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted or error-free. Information on the website is for general informational purposes only and does not constitute legal or regulatory advice.`,
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    content: [
      {
        subtitle: null,
        text: `Aeromar reserves the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website with a revised "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated Terms.`,
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      {
        subtitle: null,
        text: `For questions about these Terms and Conditions, please contact:

Aeromar Global Logistics Solutions LLC
Email: legal@aeromarglobal.com
Phone: +1 (800) 000-0000
Address: [Company Address], United States`,
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

export default function LegalTerms() {
  const refs = useSectionReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <style>{animStyles}</style>

      {/* Hero */}
      <div className="bg-[#0B1F3A] py-16 px-6 relative overflow-hidden">
        
        <div className="max-w-4xl mx-auto relative">
          <p className="hero-eyebrow text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">
            Legal
          </p>
          <h1 className="hero-title text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Terms & Conditions
          </h1>
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
            Please read these Terms and Conditions carefully before using the services provided by Aeromar Global
            Logistics Solutions LLC. These Terms govern your use of our website and all logistics, freight forwarding,
            customs brokerage, and related services. They contain important provisions regarding your rights and
            obligations, limitations of liability, and dispute resolution.
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
        <p className="text-slate-500 text-xs mt-1">These Terms are governed by the laws of the United States.</p>
      </div>
    </div>
  );
}