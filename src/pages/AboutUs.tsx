import { CircleArrowDown } from "lucide-react";
import CircularBrand from "../components/CircularBrand";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

import { motion } from "framer-motion";
import Button from "../components/Button";
import Progress from "../components/section/Progress";
import Partner from "../components/section/Partner";
import Footer from "../components/section/Footer";
import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "../components/lightswind/3d-scroll-trigger";
import { partnerSideA, partnerSideB } from "../constants";
import ImageReveal from "../components/lightswind/image-reveal";
import { ImageHover } from "../components/image-reveal";
import PageTitle from "../components/section/PageTitle";
import { useEffect } from "react";

const AboutUs = () => {
  useGSAP(() => {
    gsap.from("#weHaveWorkForText", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#weHaveWorkForText",
        start: "top bottom",
        scrub: 1.5,
      },
    });

    // gsap.to(".textShadow1, .textShadow2", {
    //   xPercent: 100,
    //   stagger: 0.2,
    //   duration: 1.5,
    //   scrollTrigger: {
    //     trigger: ".textShadow1, .textShadow2",
    //     start: "top bottom",
    //     scrub: 1.5,
    //   },
    // });

    gsap.from("#btn", {
      opacity: 0,
      yPercent: 100,
      duration: 1.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#btn",
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
      },
    });
    gsap.from(".thirdDescP p", {
      opacity: 0,
      yPercent: 100,
      duration: 1.5,
      delay: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".thirdDescP",
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
      },
    });

    gsap.from(".candy1", {
      x: 300,
      rotate: 180,
      duration: 1,
      delay: 1,
    });
    gsap.from(".candy3", {
      x: -300,
      rotate: 180,
      duration: 1,
      delay: 1,
    });
    gsap.from("#yellowHat", {
      xPercent: 300,
      rotate: 180,
      duration: 1,
      delay: 1,
    });

    document.fonts.ready.then(() => {
      const secondParagraphSplit = new SplitText(".secondDesc", {
        type: "lines",
      });

      gsap.from(secondParagraphSplit.lines, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".secondDesc",
          start: "top bottom",
          end: "top center",
          scrub: 1.5,
        },
      });

      const thirdParagraphSplit = new SplitText(".thirdDesc", {
        type: "lines",
      });

      gsap.from(thirdParagraphSplit.lines, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".thirdDesc",
          start: "top bottom",
          end: "center 30%",
          scrub: 1.5,
        },
      });
    });

    const honorsAwardsParagraphSplit = new SplitText("#honorsAwardsDesc", {
      type: "lines",
    });
    gsap.from(honorsAwardsParagraphSplit.lines, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#honorsAwardsDesc",
        start: "top bottom",
        end: "center center",
        scrub: 1.5,
      },
    });
  });

  useEffect(() => {}, []);

  return (
    <motion.div
      // initial={{ y: -100, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // exit={{ y: -100, opacity: 0 }}
      // transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center relative"
    >
      {/* <div className="absolute right-0 top-0 z-20">
        <img
          // id="lolipop"
          src="/images/candy/candy1.png"
          alt="candy1"
          className="candy1 size-52"
        />
      </div>
      <div className="absolute left-0 -top-5 z-20">
        <img
          // id="lolipop"
          src="/images/candy/candy3.png"
          alt="candy3"
          className="candy3 size-52"
        />
      </div> */}

      <CircularBrand />

      <PageTitle
        text1="a"
        text2="flavor-driven"
        text3="dining destination."
        desc="Blending the freshest culinary trends, cooking techniques, and flavor
          craft is what we do best. We never settle for a single
          perspective—every dish is created from a world of inspiration."
      />

      <div
        id="yellowHat"
        className="absolute right-8 md:right-44 -top-4 lg:-top-16"
      >
        <img
          src="/images/costume/yellowHat.png"
          alt="Yellow Hat"
          className="size-20 lg:size-52 rotate-30"
        />
      </div>
      <div className="flex justify-center">
        <a href="#aboutSecondDesc">
          <CircleArrowDown
            size={30}
            strokeWidth={1}
            className="text-(--text-color)/50 mt-8"
          />
        </a>
      </div>

      <div
        id="aboutSecondDesc"
        className="secondDesc flex flex-col text-center font-[Poppins] text-(--text-color) text-xl md:text-[32px] lg:text-[45px] mt-20 lg:mt-40 w-full"
      >
        <p>
          Our kitchen carries a powerful legacy of delighting guests and
          crafting unforgettable dining experiences in the culinary wilderness.
        </p>
      </div>

      <div className="relative mt-20 w-screen">
        <ImageHover text1="majestic" text2="flavors" text3="await" />
      </div>

      {/* <div className="w-screen dark:bg-[linear-gradient(to_right,rgba(0,0,0,0.7)_20%,rgba(0,0,0,0.7)_80%),url('/images/redPatternBg.png')] bg-cover bg-center"> */}
      <div className="w-full px-3 md:px-10 lg:px-20 my-20 lg:my-40 z-50">
        <div className="thirdDesc font-[Poppins] text-(--text-color-2) text-3xl md:text-4xl lg:text-[48px] leading-12 lg:leading-14">
          <p className="">
            Guided by passion, we honor each dining journey, shaping dishes that
            thrive in the rich landscape of flavor. We stand as fearless
            curators of cuisine, mastering every step — from sourcing to
            cooking, plating, and the joy of every bite.
          </p>
        </div>
        <div className="mt-10 flex flex-col-reverse lg:flex lg:flex-row">
          <div id="btn" className="lg:w-1/2 mt-10 lg:mt-0">
            <Button title="Shyam's name story" />
          </div>
          <div className="thirdDescP text-(--text-color) font-[Poppins] lg:w-1/2 space-y-4 text-xl">
            <p>
              Driven by unwavering culinary passion, we work closely with our
              guests, understanding their tastes and desires, skillfully
              transforming ideas into dishes that capture their vision with
              perfect balance and flavor.
            </p>
            <p>
              We meticulously craft exquisite dishes, signature flavors,
              seasonal menus, and immersive dining experiences—curating
              everything with precision, passion, and a bold creative spark that
              brings every plate to life.
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="w-full">
        <Progress />
      </div>

      <div className="mt-40 max-w-[100vw] px-20">
        <Partner />
      </div>

      <div className="font-[Poppins] text-(--text-color) text-center text-[44px] mt-20">
        <p id="weHaveWorkForText">We've worked for...</p>

        <div className="w-screen">
          <ThreeDScrollTriggerContainer className="my-10">
            <ThreeDScrollTriggerRow baseVelocity={3} direction={1}>
              {partnerSideA.map(({ id, image }) => (
                <div
                  key={id}
                  className="size-60 lg:size-90 bg-(--card-bg) mx-1 rounded-3xl flex justify-center items-center mb-1"
                >
                  <img
                    src={image}
                    alt={`partnerSideAImg + ${id}`}
                    className="invert dark:invert-0 size-40 object-contain"
                  />
                </div>
              ))}
            </ThreeDScrollTriggerRow>
            <ThreeDScrollTriggerRow baseVelocity={3} direction={-1}>
              {partnerSideB.map(({ id, image }) => (
                <div
                  key={id}
                  className="size-60 lg:size-90 bg-(--card-bg) mx-1 rounded-3xl flex justify-center items-center"
                >
                  <img
                    key={id}
                    src={image}
                    alt={`partnerSideBImg + ${id}`}
                    className="invert dark:invert-0 size-40 object-contain"
                  />
                </div>
              ))}
            </ThreeDScrollTriggerRow>
          </ThreeDScrollTriggerContainer>
        </div>
      </div>

      <div className="text-center space-y-8 my-20">
        <div className="relative text-[80px] md:text-[120px] lg:text-[200px] leading-[0.75] text-(--text-color) font-[Britannic] uppercase">
          <div className="relative">
            <p>honors</p>
            {/* <div className="textShadow1 bg-(--background) w-full h-full absolute top-0 -mt-3 lg:-mt-6 opacity-90"></div> */}
          </div>

          <div className="relative">
            <p>& awards</p>
            {/* <div className="textShadow2 bg-(--background) w-full h-full absolute top-0 -mt-3 lg:-mt-6 opacity-90"></div> */}
          </div>
        </div>
        <div
          id="honorsAwardsDesc"
          className="font-[Poppins] mx-auto text-xl lg:text-3xl text-(--text-color) w-full lg:w-[80%] flex flex-col"
        >
          <p>
            We're India's top award-winning digital agency, carving our own path
            in the digital jungle, and the journey persists.
          </p>
        </div>
      </div>

      <div className="w-full mt-20">
        <ImageReveal />
        <p className="text-(--text-color-2)/60 text-center">and many more...</p>
      </div>

      <Footer />
    </motion.div>
  );
};

export default AboutUs;
