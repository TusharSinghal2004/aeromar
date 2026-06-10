import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Leadership from "../pages/Leadership";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Quote from "../pages/Quote";
import OceanFreight from "../pages/OceanFright";
import AirFreight from "../pages/AirFright";
import CustomsBrokerage from "../pages/CustomsBrokerage";
import Warehousing from "../pages/Warehousing"
import TrackingAndDrayage from "../pages/TrackingAndDrayage"
import DoorToDoorLogistics from "../pages/DoorToDoorLogistics"


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/air-freight" element={<AirFreight />} />
      <Route path="/services/ocean-freight" element={<OceanFreight />} />
      <Route path="/services/customs-brokerage" element={<CustomsBrokerage />} />
      <Route path="/services/warehousing" element={<Warehousing />} />
      <Route path="/services/trucking-drayage" element={<TrackingAndDrayage />} />
      <Route path="/services/door-to-door" element={<DoorToDoorLogistics />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  );
}
