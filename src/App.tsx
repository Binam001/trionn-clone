import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="px-28">
      <Navbar />
      <div className="mt-36">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
