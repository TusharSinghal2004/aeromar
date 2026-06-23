import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/common/PageTransition";
import EudoraServices from "../components/eudora/EudoraServices"
import EudoraHero from "../components/eudora/EudoraHero"
import EudoraLeadership from "../components/eudora/EudoraLeadership"


export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <EudoraHero />
      <EudoraServices />
      <EudoraLeadership />
      <Footer />
    </PageTransition>
  );
}
