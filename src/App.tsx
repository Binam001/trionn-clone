import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className="px-3 md:px-10 lg:px-28 bg-(--background)">
      <Navbar />
      <div className="pt-36">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
