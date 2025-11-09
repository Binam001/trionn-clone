import { CircleArrowDown } from "lucide-react";
import Button from "../components/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import introVideo from "../assets/videos/intro-video.mp4";
import CircularBrand from "../components/CircularBrand";

const LandingPage = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#text-1",
      { rotationX: 90, opacity: 0, y: 50 },
      { rotationX: 0, opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.from(".intro-video", {
      yPercent: -50,
      scale: 0.2,
      scrollTrigger: {
        trigger: ".intro-video",
        start: "top 70%",
        end: "bottom center",
        scrub: 1.5,
        // markers: true,
      },
    });
  });
  return (
    <main>
      <div
        id="text-1"
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

      {/* intro video */}
      <div className="intro-video mt-20">
        <video
          src={introVideo}
          muted
          playsInline
          loop
          autoPlay
          className="w-ful h-1/2 rounded-4xl"
        />
      </div>

      <CircularBrand />
    </main>
  );
};

export default LandingPage;
