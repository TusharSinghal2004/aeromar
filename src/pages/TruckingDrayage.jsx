import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TrackingAndDrayageHero from "../components/service_pages/trucking-drayage/TrackingAndDrayageHero";
import TrackingAndDrayageOverview from "../components/service_pages/trucking-drayage/TrackingAndDrayageOverview";
import IndustriesServed from "../components/service_pages/trucking-drayage/IndustriesServed";
import TrackingAndDrayageProcess from "../components/service_pages/trucking-drayage/TrackingAndDrayageProcess"
import ExploreMoreSection from "../components/service_pages/trucking-drayage/ExploreMoreSection"

    
export default function TrackingAndDrayage() {
  return (
    <>
      <Navbar />
      <TrackingAndDrayageHero />
      <TrackingAndDrayageOverview />
      <IndustriesServed />
      <TrackingAndDrayageProcess />
      <ExploreMoreSection />
      <Footer />
    </>
  );
}