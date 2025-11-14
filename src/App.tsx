import { useMediaQuery } from "react-responsive";
import SmokeyCursor from "./components/lightswind/smokey-cursor";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Route, Routes, useLocation } from "react-router-dom";
import Work from "./pages/Work";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const isLargeDevice = useMediaQuery({ minWidth: 1024 });
  const location = useLocation();
  return (
    <div className="px-3 md:px-10 lg:px-20 bg-(--background) overflow-hidden">
      {isLargeDevice ? (
        <SmokeyCursor
          simulationResolution={64}
          dyeResolution={512}
          densityDissipation={5}
          velocityDissipation={3}
          enableShading={false}
          backgroundColor={{ r: 0.5, g: 0.5, b: 0.5 }}
        />
      ) : null}
      <Navbar />
      <div className="pt-36">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
