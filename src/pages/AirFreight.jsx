import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import AirFreightHero from "../components/service_pages/air-freight/AirFreightHero";
import AirFreightOverview from "../components/service_pages/air-freight/AirFreightOverview";
import IndustriesServed from "../components/service_pages/air-freight/IndustriesServed";
import AirFreightProcess from "../components/service_pages/air-freight/AirFreightProcess"
import ExploreMoreSection from "../components/service_pages/air-freight/ExploreMoreSection"

    
export default function OceanFreight() {
  return (
    <>
      <Navbar />
      <AirFreightHero />
      <AirFreightOverview />
      <IndustriesServed />
      <AirFreightProcess />
      <ExploreMoreSection />
      <Footer />
    </>
  );
}