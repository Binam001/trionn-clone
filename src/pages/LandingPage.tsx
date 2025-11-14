import { CircleArrowDown } from "lucide-react";
import Button from "../components/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import IntroVideo from "../components/IntroVideo";
import RecentWork from "../components/section/RecentWork";
import ViewProject from "../components/section/ViewProject";
import About from "../components/section/About";
import Progress from "../components/section/Progress";
import Partner from "../components/section/Partner";
import ScrollMarquee from "../components/section/ScrollMarquee";
import Dribbble from "../components/section/Dribbble";
import SocialLink from "../components/section/SocialLink";
import Footer from "../components/section/Footer";
import CircularBrand from "../components/CircularBrand";
import { motion } from "framer-motion";

const LandingPage = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#text1",
      { rotationX: 90, opacity: 0, y: 50 },
      { rotationX: 0, opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );
    gsap.from("#introDesc", {
      y: 30,
      opacity: 0,
      duration: 1.5,
      delay: 1,
    });

    gsap.from("#join1Text, #join2Text", {
      xPercent: 50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#join1Text, #join2Text",
        scrub: 1.5,
      },
    });
    gsap.from("#join3Text", {
      xPercent: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: "#join3Text",
        scrub: 1.5,
      },
    });

    gsap.from(".circular-brand", {
      xPercent: 200,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".circular-brand",
        start: "top 10%",
        end: "bottom center",
        scrub: 1,
      },
    });
  });
  return (
    <motion.div
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0, x: 1000 }}
    >
      <div className="py-16 md:py-0">
        <CircularBrand />
        <div
          id="text1"
          className="text-[50px] md:text-[110px] lg:text-[115px] text-center leading-[0.75] text-(--text-color) font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
        >
          <p>roar in the</p>
          <p>digital wilderness.</p>
        </div>

        <p
          id="introDesc"
          className="text-xs text-(--text-color) uppercase text-center syne-normal mt-5"
        >
          We roar with success, delivering the TRIONN®
          <br /> through versatile design, branding and the latest
          <br /> tech development to companies.
        </p>
      </div>

      <div className="flex justify-center">
        <a href="#introVideo">
          <CircleArrowDown
            size={30}
            strokeWidth={1}
            className="text-(--text-color)/50 mt-5"
          />
        </a>
      </div>

      <div className="flex justify-between mt-10">
        <Button title="Explore work" />
        <Button title="Get in touch" />
      </div>

      <IntroVideo />
      <RecentWork />
      <ViewProject />
      <About />
      <Progress />
      <Partner />
      <ScrollMarquee />
      <Dribbble />

      <div
        id="join"
        className="flex flex-col items-center text-[80px] lg:text-[200px] leading-[0.8] text-(--foreground) font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
      >
        <span id="join1Text">join our</span>
        <span id="join2Text">jungle</span>
        <span id="join3Text">trek</span>
      </div>

      <SocialLink />

      <Footer />

      {/* <div className="h-dvh"></div> */}
    </motion.div>
  );
};

export default LandingPage;
