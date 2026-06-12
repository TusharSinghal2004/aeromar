import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/common/PageTransition";
import LeadershipHero from "../components/leadership/LeadershipHero";
import LeadershipTeam from "../components/leadership/LeadershipTeam";

export default function Leadership() {
  return (
    <PageTransition>
      <Navbar />
      <LeadershipHero />
      <LeadershipTeam />
      <Footer />
    </PageTransition>
  );
}