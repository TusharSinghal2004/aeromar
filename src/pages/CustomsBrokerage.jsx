import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CustomsBrokerageHero from "../components/service_pages/customs-brokerage/CustomsBrokerageHero";
import CustomsBrokerageOverview from "../components/service_pages/customs-brokerage/CustomsBrokerageOverview";
import IndustriesServed from "../components/service_pages/customs-brokerage/IndustriesServed";
import CustomsBrokerageProcess from "../components/service_pages/customs-brokerage/CustomsBrokerageProcess"
import ExploreMoreSection from "../components/service_pages/customs-brokerage/ExploreMoreSection"

    
export default function OceanFreight() {
  return (
    <>
      <Navbar />
      <CustomsBrokerageHero />
      <CustomsBrokerageOverview />
      <IndustriesServed />
      <CustomsBrokerageProcess />
      <ExploreMoreSection />
      <Footer />
    </>
  );
}