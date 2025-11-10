import SmokeyCursor from "./components/lightswind/smokey-cursor";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className="px-3 md:px-10 lg:px-28 bg-(--background)">
      <SmokeyCursor
        simulationResolution={64}
        dyeResolution={512}
        densityDissipation={5}
        velocityDissipation={3}
        enableShading={false}
      />
      <Navbar />
      <div className="pt-36">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
