import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import TrackingAndDrayageHero from "../components/service_pages/tracking-and-drayage/TrackingAndDrayageHero";
import TrackingAndDrayageOverview from "../components/service_pages/tracking-and-drayage/TrackingAndDrayageOverview";
import IndustriesServed from "../components/service_pages/tracking-and-drayage/IndustriesServed";
import TrackingAndDrayageProcess from "../components/service_pages/tracking-and-drayage/TrackingAndDrayageProcess"
import ExploreMoreSection from "../components/service_pages/tracking-and-drayage/ExploreMoreSection"

    
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