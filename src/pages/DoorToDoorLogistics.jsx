import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DoorToDoorLogisticsHero from "../components/service_pages/door-to-door/DoorToDoorLogisticsHero";
import DoorToDoorLogisticsOverview from "../components/service_pages/door-to-door/DoorToDoorLogisticsOverview";
import IndustriesServed from "../components/service_pages/door-to-door/IndustriesServed";
import DoorToDoorLogisticsProcess from "../components/service_pages/door-to-door/DoorToDoorLogisticsProcess"
import ExploreMoreSection from "../components/service_pages/door-to-door/ExploreMoreSection"

    
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