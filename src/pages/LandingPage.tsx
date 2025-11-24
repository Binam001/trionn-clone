// import { CircleArrowDown } from "lucide-react";
import Button from "../components/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import IntroVideo from "../components/IntroVideo";
import ComboCard from "../components/section/ComboCard";
import About from "../components/section/About";
import Progress from "../components/section/Progress";
import Partner from "../components/section/Partner";
import ScrollMarquee from "../components/section/ScrollMarquee";
import Dish from "../components/section/Dish";
import SocialLink from "../components/section/SocialLink";
import Footer from "../components/section/Footer";
import { AnimatePresence, motion } from "framer-motion";
// import PageTitle from "../components/section/PageTitle";
import OurCombo from "../components/section/OurCombo";
import { useState } from "react";
import MenuSlider from "../components/MenuSlider";
import CircularBrand from "../components/CircularBrand";
import { useMediaQuery } from "react-responsive";
import Component from "../components/ThumbnailCarousel";
import { CircleX } from "lucide-react";

const LandingPage = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isTablet = useMediaQuery({ maxWidth: "770px" });

  useGSAP(() => {
    gsap.from("#landingPageTitle", {
      opacity: 0,
      filter: "blur(100px)",
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      delay: 1,
    });
    gsap.from("#landingPageDesc", {
      opacity: 0,
      filter: "blur(50px)",
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      delay: 1.5,
    });
    gsap.from(".landgingPageBtn", {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      delay: 2,
    });

    gsap.from("#join1Text, #join2Text", {
      xPercent: 50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#join1Text, #join2Text",
        start: "top bottom",
        end: "center center",
        scrub: 1.5,
      },
    });
    gsap.from("#join3Text", {
      xPercent: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: "#join3Text",
        start: "top bottom",
        end: "center center",
        scrub: 1.5,
      },
    });

    // gsap.from(".circular-brand", {
    //   xPercent: 200,
    //   opacity: 0,
    //   duration: 2,
    //   scrollTrigger: {
    //     trigger: ".circular-brand",
    //     start: "top 10%",
    //     end: "bottom center",
    //     scrub: 1,
    //   },
    // });
    gsap.to("#landingPageTopSection", {
      opacity: 0,
      // filter: "blur(5px)",
      scrollTrigger: {
        trigger: "#landingPageSecondSection",
        start: "center center",
        scrub: 1,
      },
    });
  });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-(--yellow) z-999"
        initial={{ y: "-100%" }}
        animate={{
          y: ["-100%", "0%", "0%", "-100%"],
          transition: {
            duration: 1,
            times: [0, 0.4, 0.6, 1],
            // ease: "easeInOut",
            ease: [0.76, 0, 0.24, 1],
          },
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.1,
          duration: 0.1,
        }}
      >
        <div className="relative">
          <div
            id="landingPageTopSection"
            className="fixed bg-(--title-color) h-screen w-screen -mx-4 md:-mx-20 -mt-20 flex items-center flex-col gap-8 md:gap-0 md:flex-row"
          >
            <div className="w-full md:w-[60%] md:h-full md:pl-16 flex flex-col md:justify-between md:gap-8 xl:gap-16 pt-16 md:py-16 lg:py-32 z-10">
              {/* text */}
              <div className="text-white text-center md:text-left">
                <div
                  id="landingPageTitle"
                  className="text-3xl md:text-4xl lg:text-6xl uppercase font-[Britannic] flex flex-col whitespace-nowrap"
                >
                  <span>taste the</span>
                  <span>magic of every bite!</span>
                </div>
                <div
                  id="landingPageDesc"
                  className="text-sm md:text-base font-[Poppins]"
                >
                  <p>Happiness is Homemade - So Are Our Sweets!</p>
                </div>
              </div>
              {/* button */}
              <div className="w-max landgingPageBtn hidden md:block">
                <Button onClick={() => setOpenMenu(true)} title="View Menu" />
              </div>
            </div>

            <div className="w-full md:w-[40%] h-1/2 md:h-fit md:translate-x-4 flex items-center px-4 md:px-0">
              <div className="w-full md:hidden z-10">
                <button
                  onClick={() => setOpenMenu(true)}
                  className="landgingPageBtn px-4 py-2 text-(--title-color) bg-(--yellow) rounded-full md:hidden whitespace-nowrap"
                >
                  View Menu
                </button>
              </div>
              <img
                src="/images/sweets/sweets8.png"
                alt="sweets"
                className="xl:float-right h-full translate-x-1/2"
              />
            </div>
            {/* <div
              className="w-[40%] bg-yellow-500 h-full relative"
              style={{ clipPath: "circle(60% at 73% 50%)" }}
            >
              <div
                className="w-full bg-black h-full relative"
                style={{ clipPath: "circle(60% at 76% 50%)" }}
              >
                <div className="absolute bottom-0 left-0">
                  <img
                    src="/images/sweets/sweets7.png"
                    alt="sweets"
                    className="ml-1"
                  />
                </div>
              </div>
            </div> */}
          </div>

          {/* <div className="py-8 md:pt-0 md:pb-20 relative h-full lg:h-screen flex flex-col md:gap-0 md:justify-between xl:justify-evenly"> */}
          {/* <PageTitle
            text1="sweets that make"
            text2="every visit"
            highlighter="special"
            desc="We unleash bold flavors, crafting unforgettable dining moments through imaginative dishes, heartfelt hospitality, and culinary mastery that excites every palate."
          /> */}
          <div className="circular-brand">
            <CircularBrand />
          </div>
          {openMenu && (
            <div className="fixed inset-0 z-100">
              <div
                className="absolute inset-0 backdrop-blur-lg bg-black/80"
                onClick={() => setOpenMenu(false)}
              ></div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-full">
                  <button
                    onClick={() => setOpenMenu(false)}
                    className="absolute -top-5 right-[18%] lg:right-1/12 hidden lg:block"
                  >
                    <CircleX fill="white" color="red" />
                  </button>

                  {!isTablet ? (
                    <div className="relative w-[900px] h-[550px]">
                      <MenuSlider />
                    </div>
                  ) : (
                    <>
                      <Component />
                      <div className="mt-2 flex justify-center">
                        <button
                          onClick={() => setOpenMenu(false)}
                          className="text-white/80 text-xl w-full"
                        >
                          Tap to close
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          {/* <div className="landgingPageBtn hidden md:flex justify-between md:mb-20 lg:mb-15 xl:mb-0">
            <Button onClick={() => setOpenMenu(true)} title="View Menu" />

            <Button onClick={() => navigate("/contact")} title="Get in touch" />
          </div> */}
        </div>

        {/* <IntroVideo /> */}
        {/* <div className="md:hidden flex flex-col gap-4 mt-8">
          <button
            onClick={() => setOpenMenu(true)}
            className="px-4 py-2 text-(--title-color) bg-(--yellow) rounded-full"
          >
            View Menu
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="px-4 py-2 border-2 border-(--title-color) rounded-full text-(--title-color)"
          >
            Get in touch
          </button>
        </div> */}
        <div id="landingPageSecondSection" className="">
          <OurCombo />
        </div>
        <ComboCard />
        <About />
        <Progress />
        <Partner />
        <ScrollMarquee />
        <Dish />

        <div
          id="join"
          className="mt-0 md:mt-8 lg:mt-32 flex flex-col items-center text-6xl md:text-7xl lg:text-9xl leading-[0.8] text-(--title-color) font-[Britannic] uppercase"
        >
          <span id="join1Text">dine</span>
          <span id="join2Text">with</span>
          <span id="join3Text" className="text-(--text-yellow)">
            style
          </span>
        </div>

        <SocialLink />

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default LandingPage;
