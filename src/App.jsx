import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import FasterSection from "./components/FasterSection";
import TitleSection from "./components/TitleSection";

import { Routes, Route } from "react-router-dom";
import DemosSection from "./components/DemosSection";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="max-w-7xl mx-auto pt-20 px-6">
              <HeroSection />
              {/* <FeatureSection /> */}
              <Workflow />
              {/* <Pricing /> */}
              {/* <Testimonials /> */}
              <FasterSection />
              <DemosSection />
              {/* <TitleSection /> */}
              <Footer />
            </div>
          }
        />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
};

export default App;
