import "./App.css";

import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Constuction from "./Components/Constuction";
import CarParking from "./Components/CarParking";
import Patrolling from "./Components/Patrolling";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UniformSecurity from "./Components/UniformSecurity";
import Privacy from "./Components/PrivacyPolicy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/ConstuctionSite" element={<Constuction />} />
          <Route path="/ParkingSite" element={<CarParking />} />
          <Route path="/MobilePatrolling" element={<Patrolling />} />
          <Route path="/UniformSecurity" element={<UniformSecurity />} />
          <Route path="/about" element={<About />} />
          <Route path="/Policy" element={<Privacy />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
