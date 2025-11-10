import { CircleArrowDown } from "lucide-react";
import Button from "../components/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CircularBrand from "../components/CircularBrand";
import IntroVideo from "../components/IntroVideo";
import RecentWork from "../components/RecentWork";

const LandingPage = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#text-1",
      { rotationX: 90, opacity: 0, y: 50 },
      { rotationX: 0, opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.from(".text2", {
      xPercent: 25,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".text2",
        scrub: 1.5,
      },
    });
  });
  return (
    <main>
      <div
        id="text1"
        className="text-[50px] md:text-[32px] lg:text-[130px] text-center leading-[0.9] text-(--foreground) font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
      >
        <p>roar in the</p>
        <p>digital wilderness.</p>
      </div>

      <p className="text-sm md:text-base text-(--text-color) uppercase text-center syne-normal">
        We roar with success, delivering the TRIONN®
        <br /> through versatile design, branding and the latest
        <br /> tech development to companies.
      </p>

      <div className="flex justify-center">
        <a href="#intro-video">
          <CircleArrowDown
            size={32}
            strokeWidth={1}
            className="text-(--text-color)/50 mt-5"
          />
        </a>
      </div>

      <div className="flex justify-between">
        <Button title="Explore work" />
        <Button title="Get in touch" />
      </div>

      <IntroVideo />

      <CircularBrand />

      <RecentWork />

      <div className="h-dvh"></div>
    </main>
  );
};

export default LandingPage;
