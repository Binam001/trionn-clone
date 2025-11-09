import { CircleArrowDown } from "lucide-react";
import Button from "../components/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const LandingPage = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#text-1",
      { rotationX: 90, opacity: 0, y: 50 },
      { rotationX: 0, opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  });
  return (
    <main>
      <div
        id="text-1"
        className="text-[130px] text-center leading-[0.9] text-(--text-color) font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
      >
        <p>roar in the</p>
        <p>digital wilderness.</p>
      </div>

      <p className="text-(--text-color) uppercase text-center syne-normal">
        We roar with success, delivering the TRIONN®
        <br /> through versatile design, branding and the latest
        <br /> tech development to companies.
      </p>

      <div className="flex justify-center">
        <CircleArrowDown
          size={32}
          strokeWidth={1}
          className="text-(--text-color)/50 mt-5"
        />
      </div>

      <div className="flex justify-between">
        <Button title="Explore work" />
        <Button title="Get in touch" />
      </div>
    </main>
  );
};

export default LandingPage;
