import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ServicesHero from "../components/services/ServicesHero";
import ServicesOverview from "../components/services/ServicesOverview";
import QuoteCTASection from "../components/about/QuoteCTASection";


export default function Services() {
  return (
    <>
      <Navbar />

      <ServicesHero />

      <ServicesOverview />

      <QuoteCTASection />

      <Footer />
    </>
  );
}