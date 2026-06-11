import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import TrustBar from "../components/home/TrustBar";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import ServicesGrid from "../components/home/ServicesGrid";
import WhyChooseUs from "../components/home/WhyChooseUs";
import LeadershipSection from "../components/home/LeadershipSection";
import GlobalCoverage from "../components/home/GlobalCoverage";
import ProcessSection from "../components/home/ProcessSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <LeadershipSection />
      <GlobalCoverage />
      <ProcessSection />
      <CTASection />
      <Footer />
    </>
  );
}