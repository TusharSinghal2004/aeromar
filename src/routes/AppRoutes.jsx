import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Leadership from "../pages/Leadership";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Quote from "../pages/Quote";
import OceanFreight from "../pages/OceanFreight";        
import AirFreight from "../pages/AirFreight";
import CustomsBrokerage from "../pages/CustomsBrokerage";
import Warehousing from "../pages/Warehousing";
import TruckingDrayage from "../pages/TruckingDrayage";
import DoorToDoorLogistics from "../pages/DoorToDoorLogistics";
import LegalPrivacy from "../pages/LegalPrivacy";
import LegalTerms from "../pages/LegalTerms";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/air-freight" element={<AirFreight />} />
      <Route path="/ocean-freight" element={<OceanFreight />} />
      <Route path="/customs-brokerage" element={<CustomsBrokerage />} />
      <Route path="/warehousing" element={<Warehousing />} />
      <Route path="/trucking-drayage" element={<TruckingDrayage />} />
      <Route path="/door-to-door" element={<DoorToDoorLogistics />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/legal-privacy" element={<LegalPrivacy />} />
      <Route path="/legal-terms" element={<LegalTerms />} />

    </Routes>
  );
}