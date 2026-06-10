import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import CustomsBrokerageHero from "../components/service_pages/customs-brokerage/CustomsBrokerageHero";
import OceanFreightOverview from "../components/service_pages/ocean-fright/OceanFreightOverview";
import IndustriesServed from "../components/service_pages/ocean-fright/IndustriesServed";
import OceanFreightProcess from "../components/service_pages/ocean-fright/OceanFreightProcess"
import ExploreMoreSection from "../components/service_pages/ocean-fright/ExploreMoreSection"

    
export default function OceanFreight() {
  return (
    <>
      <Navbar />
      <CustomsBrokerageHero />
      <OceanFreightOverview />
      <IndustriesServed />
      <OceanFreightProcess />
      <ExploreMoreSection />
      <Footer />
    </>
  );
}