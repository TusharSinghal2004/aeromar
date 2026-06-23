import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Quote from "../pages/Quote";
import LegalPrivacy from "../pages/LegalPrivacy";
import LegalTerms from "../pages/LegalTerms";
import Eudora from "../pages/Eudora"


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/legal-privacy" element={<LegalPrivacy />} />
      <Route path="/legal-terms" element={<LegalTerms />} />
      <Route path="/eudora" element={<Eudora />} />


    </Routes>
  );
}