import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/common/PageTransition";
import ContactHero from "../components/contact/ContactHero";
import GetAQuote from "../components/contact/GetAQuote";
import Maps from "../components/contact/Maps";


export default function Leadership() {
  return (
    <PageTransition>
      <Navbar />
      <ContactHero />
      <GetAQuote />
      <Maps />
      <Footer />
    </PageTransition>
  );
}
