// import { CircleArrowDown } from "lucide-react";
import CircularBrand from "../components/CircularBrand";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

import { AnimatePresence, motion } from "framer-motion";
import Progress from "../components/section/Progress";
import Partner from "../components/section/Partner";
import Footer from "../components/section/Footer";
// import {
//   ThreeDScrollTriggerContainer,
//   ThreeDScrollTriggerRow,
// } from "../components/lightswind/3d-scroll-trigger";
// import { partnerSideA, partnerSideB } from "../constants";
// import ImageReveal from "../components/lightswind/image-reveal";
// import { ImageHover } from "../components/image-reveal";
import PageTitle from "../components/section/PageTitle";

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

    gsap.from("#spinningDish", {
      xPercent: -100,
      duration: 1.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#spinningDish",
        start: "top bottom",
        end: "center center",
        scrub: 1,
      },
    });
    // gsap.from("#ourAchievements", {
    //   yPercent: 200,
    //   opacity: 0,
    //   duration: 1.5,
    //   scrollTrigger: {
    //     trigger: "#ourAchievements",
    //     start: "top bottom",
    //     end: "center center",
    //     scrub: 1,
    //   },
    // });
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

    gsap.from(".sweets4", {
      xPercent: -200,
      // rotate: 180,
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
      yPercent: -200,
      rotate: 180,
      duration: 1,
      delay: 1,
    });
    gsap.from("#honors", {
      xPercent: -25,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#honors",
        start: "top 80%",
        end: "center 30%",
        scrub: 1.5,
      },
    });
    gsap.from("#awards", {
      xPercent: 25,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#awards",
        start: "top 80%",
        end: "center 30%",
        scrub: 1.5,
      },
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
        className="flex flex-col items-center relative"
      >
        {/* <div className="absolute w-full h-full bg-red-500"></div> */}
        {/* <div className="absolute left-0 top-52 z-20">
        <img
          // id="lolipop"
          src="/images/sweets/sweets4.png"
          alt="candy1"
          className="sweets4 w-64 h-52"
        />
      </div> */}
        {/* <div className="absolute left-0 -top-5 z-20">
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
          text3="dining"
          highlighter="destination."
          desc="Blending the freshest culinary trends, cooking techniques, and flavor
          craft is what we do best. We never settle for a single
          perspective—every dish is created from a world of inspiration."
        />

        <div
          id="yellowHat"
          className="absolute -top-10 lg:-top-15 hidden md:block"
          // className="absolute right-8 md:right-44 -top-4 lg:-top-16"
        >
          <img
            src="/images/costume/yellowHat.png"
            alt="Yellow Hat"
            className="size-16 lg:size-28 rotate-30 ml-10"
          />
        </div>
        {/* <div className="flex justify-center">
        <a href="#aboutSecondDesc">
          <CircleArrowDown
            size={30}
            strokeWidth={1}
            className="text-(--text-color)/50 mt-8"
          />
        </a>
      </div> */}

        {/* <div
        id="aboutSecondDesc"
        className="secondDesc flex flex-col text-center font-[Poppins] text-(--text-color) text-xl mt-20 lg:mt-40 w-full"
      >
        <p>
          Our kitchen carries a powerful legacy of delighting guests and
          crafting unforgettable dining experiences in the culinary wilderness.
        </p>
      </div> */}

        {/* <div className="relative mt-20 w-screen">
        <ImageHover text1="majestic" text2="flavors" text3="await" />
      </div> */}

        {/* <div className="w-screen dark:bg-[linear-gradient(to_right,rgba(0,0,0,0.7)_20%,rgba(0,0,0,0.7)_80%),url('/images/redPatternBg.png')] bg-cover bg-center"> */}
        <div className="w-full px-3 md:px-10 lg:px-20 mt-20 lg:mt-40">
          <div className="thirdDesc font-[Britannic] text-(--title-color) text-xl md:text-3xl lg:text-6xl lg:leading-12 uppercase text-center">
            <p className="">
              {/* Guided by passion, we honor each dining journey, shaping dishes that
            thrive in the rich landscape of flavor. We stand as fearless
            curators of cuisine, mastering every step — from sourcing to
            cooking, plating, and the joy of every bite. */}
              who we are?
            </p>
          </div>
          <div className="mt-10 flex flex-col-reverse md:flex md:flex-row">
            <div id="spinningDish" className="md:w-1/2 md:mt-0">
              <img
                src="/images/dish/circularDish.png"
                alt=""
                className="animate-[spin_20s_linear_infinite] object-contain md:w-[80%] lg:w-[70%]"
              />
            </div>
            <div className="thirdDescP text-(--text-color) font-[Poppins] md:w-1/2 space-y-4">
              <p className="">
                {/* <p className="hidden md:block"> */}
                Driven by unwavering culinary passion, we work closely with our
                guests, understanding their tastes and desires, skillfully
                transforming ideas into dishes that capture their vision with
                perfect balance and flavor.
              </p>
              {/* <p className=""> */}
              <p className="hidden lg:block">
                We meticulously craft exquisite dishes, signature flavors,
                seasonal menus, and immersive dining experiences—curating
                everything with precision, passion, and a bold creative spark
                that brings every plate to life.
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* <div className="relative text-xl md:text-3xl lg:text-6xl leading-[0.75] text-(--title-color) font-[Britannic] uppercase">
        <p id="ourAchievements">Our Achievements</p>
      </div> */}
        <div className="w-full">
          <Progress />
        </div>

        <div className="mt-20 md:mt-40 max-w-[100vw] px-20">
          <Partner />
        </div>

        {/* <div className="font-[Poppins] text-(--text-color) text-center text-[44px] mt-20">
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
      </div> */}

        <div className="text-center space-y-8 my-20 w-full">
          <div className="relative text-4xl md:text-5xl lg:text-8xl leading-[0.75] text-(--title-color) font-[Britannic] uppercase">
            <div className="relative">
              <p id="honors">honors</p>
              {/* <div className="textShadow1 bg-(--background) w-full h-full absolute top-0 -mt-3 lg:-mt-6 opacity-90"></div> */}
            </div>

            <div className="relative">
              <p id="awards">& awards</p>
              {/* <div className="textShadow2 bg-(--background) w-full h-full absolute top-0 -mt-3 lg:-mt-6 opacity-90"></div> */}
            </div>
          </div>
          <div
            id="honorsAwardsDesc"
            className="font-[Poppins] mx-auto lg:text-xl text-(--text-color) w-full lg:w-[60%] flex flex-col"
          >
            <p>
              We're Kathmandu's taste innovators, taming the flavors of the city
              and creating legendary dining experiences that keep guests coming
              back.
            </p>
          </div>
        </div>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutUs;
