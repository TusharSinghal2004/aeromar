import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DoorToDoorLogisticsHero from "../components/service_pages/door-to-door-logistics/DoorToDoorLogisticsHero";
import DoorToDoorLogisticsOverview from "../components/service_pages/door-to-door-logistics/DoorToDoorLogisticsOverview";
import IndustriesServed from "../components/service_pages/door-to-door-logistics/IndustriesServed";
import DoorToDoorLogisticsProcess from "../components/service_pages/door-to-door-logistics/DoorToDoorLogisticsProcess"
import ExploreMoreSection from "../components/service_pages/door-to-door-logistics/ExploreMoreSection"

    
export default function DoorToDoorLogistics() {
  return (
    <>
      <Navbar />
      <DoorToDoorLogisticsHero />
      <DoorToDoorLogisticsOverview />
      <IndustriesServed />
      <DoorToDoorLogisticsProcess />
      <ExploreMoreSection />
      <Footer />
    </>
  );
}