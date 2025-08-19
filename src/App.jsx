import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Mot from "./pages/Mot";
import Brake from "./pages/Brake";
import Diagnostics from "./pages/Diagnostics";
import Suspension from "./pages/Suspension";
import AirCondition from "./pages/AirCondition";
import Clutch from "./pages/Clutch";
import Timing from "./pages/Timing";
import Tyre from "./pages/Tyre";
import Vehicle from "./pages/Vehicle";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services/mot-testing" element={<Mot />} />
        <Route path="services/brake" element={<Brake />} />
        <Route path="services/air-condition" element={<AirCondition />} />
        <Route path="services/diagnostics" element={<Diagnostics />} />
        <Route path="services/clutch" element={<Clutch />} />
        <Route path="services/timing-system" element={<Timing/>} />
        <Route path="/services/tyre-Alignment" element={<Tyre />} />
        <Route path="/services/vehicle-service" element={<Vehicle />} />
        <Route path="/services/suspension" element={<Suspension />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
