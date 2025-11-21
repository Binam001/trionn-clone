import { useMediaQuery } from "react-responsive";
import SmokeyCursor from "./components/lightswind/smokey-cursor";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Route, Routes, useLocation } from "react-router-dom";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./pages/LoadingScreen";
// import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const isLargeDevice = useMediaQuery({ minWidth: 1024 });
  const location = useLocation();

  // const [showLoading, setShowLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const saved = localStorage.getItem("soundPreference");
  //   if (saved) {
  //     setShowLoading(true);
  //   }
  // }, []);
  // const handleSoundSelect = (enabled: boolean) => {
  //   localStorage.setItem("soundPreference", enabled ? "enabled" : "disabled");
  //   setShowLoading(false);

  //   if (enabled) {
  //     // Optional: play intro sound here
  //     console.log("Sound enabled");
  //   }
  // };
  return (
    <div
      id="background"
      className="w-screen bg-fixed relative overflow-x-hidden"
    >
      <div className="fixed inset-0 z-20 fixedgradient pointer-events-none"></div>

      <LoadingScreen />

      <div
        id="bgGradient"
        className="w-full relative px-10 md:px-20 z-30"
        // className="w-screen relative px-3 md:px-10 lg:px-20 z-50"
      >
        <ScrollToTop />
        {isLargeDevice ? (
          <SmokeyCursor
            simulationResolution={64}
            dyeResolution={512}
            densityDissipation={5}
            velocityDissipation={3}
            enableShading={false}
            // backgroundColor={{ r: 0.5, g: 0.5, b: 0.5 }}
            // autoColors={false}
          />
        ) : null}
        <Navbar />
        <div className="pt-20">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
