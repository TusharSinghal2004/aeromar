import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import CoreValues from "../components/about/CoreValues";
import QuoteCTASection from "../components/about/QuoteCTASection";

export default function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <OurStory />
      <CoreValues />
      <QuoteCTASection />
      <Footer />
    </>
  );
}