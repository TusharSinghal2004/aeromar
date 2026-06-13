import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import TrustBar from "../components/home/TrustBar";
import AboutPreview from "../components/home/AboutPreview";
import ServicesGrid from "../components/home/ServicesGrid";
import SmartTechnology from "../components/home/SmartTechnology";
import IndustriesWeServe from "../components/home/IndustriesWeServe";
import LeadershipSection from "../components/home/LeadershipSection";
import GlobalCoverage from "../components/home/GlobalCoverage";
import CTASection from "../components/home/CTASection";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/common/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <AboutPreview />
      <ServicesGrid />
      <SmartTechnology />
      <IndustriesWeServe />
      <GlobalCoverage />
      <LeadershipSection />
      <CTASection />
      <Footer />
    </PageTransition>
  );
}
