import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import OceanFreightHero from "../components/service_pages/ocean-fright/OceanFreightHero";
import OceanFreightOverview from "../components/service_pages/ocean-fright/OceanFreightOverview";
import IndustriesServed from "../components/service_pages/ocean-fright/IndustriesServed";
import OceanFreightProcess from "../components/service_pages/ocean-fright/OceanFreightProcess"
import ExploreMoreSection from "../components/service_pages/ocean-fright/ExploreMoreSection"


export default function OceanFreight() {
  return (
    <>
      <Navbar />
      <OceanFreightHero />
      <OceanFreightOverview />
      <IndustriesServed />
      <OceanFreightProcess />
      <ExploreMoreSection />
      <Footer />
    </>
  );
}