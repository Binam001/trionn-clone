// import { CircleArrowDown } from "lucide-react";
import Button from "../components/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import IntroVideo from "../components/IntroVideo";
import ComboCard from "../components/section/ComboCard";
import About from "../components/section/About";
import Progress from "../components/section/Progress";
import Partner from "../components/section/Partner";
import ScrollMarquee from "../components/section/ScrollMarquee";
import Dish from "../components/section/Dish";
import SocialLink from "../components/section/SocialLink";
import Footer from "../components/section/Footer";
import { AnimatePresence, motion } from "framer-motion";
import PageTitle from "../components/section/PageTitle";
import OurCombo from "../components/section/OurCombo";
import { useState } from "react";
import MenuSlider from "../components/MenuSlider";
import CircularBrand from "../components/CircularBrand";
import { useMediaQuery } from "react-responsive";
import Component from "../components/ThumbnailCarousel";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "430px" });
  const navigate = useNavigate();

  useGSAP(() => {
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
        <div className="py-16 md:pt-0 md:pb-20 relative h-full lg:h-screen flex flex-col gap-20 md:gap-0 md:justify-between xl:justify-evenly">
          <PageTitle
            text1="a"
            text2="kingdom of"
            text3="untamed"
            highlighter="taste"
            desc="We unleash bold flavors, crafting unforgettable dining moments through imaginative dishes, heartfelt hospitality, and culinary mastery that excites every palate."
          />
          <div className="circular-brand">
            <CircularBrand />
          </div>
          {openMenu && (
            <div className="fixed inset-0 z-100">
              <div
                className="absolute inset-0 backdrop-blur-lg bg-black/20"
                onClick={() => setOpenMenu(false)}
              ></div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-full">
                  {/* <button
                  onClick={() => setOpenMenu(false)}
                  className="absolute -top-5 -right-5 bg-white text-black rounded-full p-2 shadow-lg hover:scale-110 transition"
                >
                  ✕
                </button> */}

                  {!isMobile ? (
                    <div className="relative w-[900px] h-[550px]">
                      {" "}
                      <MenuSlider />
                    </div>
                  ) : (
                    <Component />
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-between md:mb-20 lg:mb-15 xl:mb-0">
            <Button onClick={() => setOpenMenu(true)} title="View Menu" />

            <Button onClick={() => navigate("/contact")} title="Get in touch" />
          </div>
        </div>

        <IntroVideo />
        <OurCombo />
        <ComboCard />
        <About />
        <Progress />
        <Partner />
        <ScrollMarquee />
        <Dish />

        <div
          id="join"
          className="mt-20 lg:mt-40 flex flex-col items-center text-6xl md:text-7xl lg:text-9xl leading-[0.8] text-(--title-color) font-[Britannic] uppercase"
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
