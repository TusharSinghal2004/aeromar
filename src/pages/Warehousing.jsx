import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import WarehousingHero from "../components/service_pages/warehousing/WarehousingHero";
import WarehousingOverview from "../components/service_pages/warehousing/WarehousingOverview";
import IndustriesServed from "../components/service_pages/warehousing/IndustriesServed";
import WarehousingProcess from "../components/service_pages/warehousing/WarehousingProcess"
import ExploreMoreSection from "../components/service_pages/warehousing/ExploreMoreSection"

    
export default function Warehousing() {
  return (
    <>
      <Navbar />
      <WarehousingHero />
      <WarehousingOverview />
      <IndustriesServed />
      <WarehousingProcess />
      <ExploreMoreSection />
      <Footer />
    </>
  );
}