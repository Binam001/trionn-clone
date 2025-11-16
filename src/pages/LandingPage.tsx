import { CircleArrowDown } from "lucide-react";
import Button from "../components/Button";
import gsap from "gsap";
import { SplitText } from "gsap/all";
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
    const servicesPageTitleParagraphSplit = new SplitText("#landingPageTitle", {
      type: "lines",
      linesClass: "line-wrapper",
    });
    gsap.from(servicesPageTitleParagraphSplit.lines, {
      opacity: 0,
      filter: "blur(100px)",
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      stagger: 0.2,
      delay: 0.6,
    });
    const servicesPageDescParagraphSplit = new SplitText("#landingPageDesc", {
      type: "lines",
      linesClass: "line-wrapper",
    });
    gsap.from(servicesPageDescParagraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      stagger: 0.2,
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="py-16 md:py-0">
        <CircularBrand />
        <div
          id="landingPageTitle"
          className="text-[50px] md:text-[110px] lg:text-[115px] text-center leading-[0.75] text-(--text-color) font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
        >
          <p>roar of</p>
          <p>flavors unleashed</p>
        </div>

        <p
          id="landingPageDesc"
          className="text-xs text-(--text-color) w-1/2 mx-auto uppercase text-center syne-normal mt-5"
        >
          We roar with flavor, serving unforgettable dining experiences through
          creative menu design, exceptional hospitality, and innovative culinary
          techniques that delight every guest.
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
        className="mt-20 lg:mt-40 flex flex-col items-center text-[80px] lg:text-[200px] leading-[0.8] text-(--foreground) font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
      >
        <span id="join1Text">dine</span>
        <span id="join2Text">with</span>
        <span id="join3Text">style</span>
      </div>

      <SocialLink />

      <Footer />
    </motion.div>
  );
};

export default LandingPage;
