import { CircleArrowDown } from "lucide-react";
import CircularBrand from "../components/CircularBrand";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import lionGroup from "../assets/images/lionGroup.webp";
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
// import { animation } from "../components/animation/index";
const AboutUs = () => {
  // document.addEventListener("DOMContentLoaded", () => {
  //   animation();
  // });
  useGSAP(() => {
    gsap.fromTo(
      "#aboutUsTitle",
      {
        opacity: 0,
        y: 50,
        rotationX: 90,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 2,
        ease: "power3.out",
      }
    );
    gsap.from("#aboutUsDesc", {
      y: 30,
      opacity: 0,
      duration: 1.5,
      delay: 1,
    });
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

    gsap.to(".textShadow1, .textShadow2", {
      xPercent: 100,
      // width: 0,
      // opacity: 0,
      stagger: 0.2,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".textShadow1, .textShadow2",
        start: "top bottom",
        scrub: 1.5,
      },
    });

    // const paragraphSplit = new SplitText(".secondDesc, .thirdDesc", {
    //   type: "lines",
    //   linesClass: "line-wrapper",
    // });

    // gsap.from(paragraphSplit.lines, {
    //   y: 100,
    //   opacity: 0,
    //   duration: 0.8,
    //   stagger: 0.2,
    //   scrollTrigger: {
    //     trigger: ".secondDesc, .thirdDesc",
    //     start: "top bottom",
    //     scrub: 1.5,
    //   },
    // });

    const secondParagraphSplit = new SplitText(".secondDesc", {
      type: "lines",
      linesClass: "line-wrapper",
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
      linesClass: "line-wrapper",
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

    gsap.from(".imgText span", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".imgText",
        start: "top bottom",
        end: "30% center",
        scrub: 1.5,
      },
    });
    gsap.from("#btn", {
      opacity: 0,
      yPercent: 100,
      duration: 1.5,
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
    const honorsAwardsParagraphSplit = new SplitText("#honorsAwardsDesc", {
      type: "lines",
      linesClass: "line-wrapper",
    });

    gsap.from(honorsAwardsParagraphSplit.lines, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#honorsAwardsDesc",
        start: "top bottom",
        scrub: 1.5,
      },
    });
  });

  return (
    <div className="flex flex-col items-center gap-8">
      <CircularBrand />
      <div
        id="aboutUsTitle"
        className="flex flex-col w-full text-[50px] md:text-[90px] text-center leading-[0.75] text-(--text-color) font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
      >
        <span>a</span>
        <span>versatile</span>
        <span>design agency.</span>
      </div>

      <div
        id="aboutUsDesc"
        className="firstDesc flex flex-col text-center uppercase text-xs syne-normal text-(--text-color)"
      >
        <span>Combining the latest trends in design, tech, branding and</span>
        <span>
          many other fields is what we do best. We don't settle to view
        </span>
        <span>the world from one perspective.</span>
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
        className="secondDesc flex flex-col text-center syne-normal text-(--text-color) text-3xl lg:text-[50px] mt-0 lg:mt-40 w-full"
      >
        <span className="secondDescSpan">
          TRIONN® has a roaring 20+ years history
        </span>
        <span className="secondDescSpan">of empowering companies in the</span>
        <span className="secondDescSpan">corporate jungle.</span>
      </div>

      <div className="relative mt-20 w-full">
        <img
          src={lionGroup}
          alt="lion group"
          className="w-full h-full object-cover"
        />
        <div className="imgText flex flex-col justify-center items-center w-full h-full absolute top-0 text-white text-center leading-[0.75] text-[120px] lg:text-[12rem] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
          <span>majestic</span>
          <span>designs</span>
          <span>since</span>
          <span>2000</span>
        </div>
      </div>

      <div className="">
        <div className="thirdDesc syne-normal text-(--text-color-2) text-4xl lg:text-[48px] mt-40 leading-12 lg:leading-14">
          <p className="">
            Embracing the journey, we cater to every need, collaborating to pave
            the road for our diverse creative services to flourish in the
            business jungle. We are the roaring digital agency, boldly
            navigating the entire digital spectrum, from user research to
            branding, development, and evaluation.
          </p>
        </div>
        <div className="mt-10 flex">
          <div id="btn" className="w-1/2">
            <Button title="TRIONN® name story" />
          </div>
          <div className="thirdDescP text-(--text-color) syne-normal w-1/2 space-y-4 text-xl">
            <p>
              Infused with the lion's determination, we partner intimately with
              clients, exploring their lofty goals and subtle nuances, adeptly
              shifting from the theoretical to the pragmatic, bringing their
              vision to fruition.
            </p>
            <p>
              We meticulously craft Web Interfaces, Brands, IOS and Android
              application designs, and bespoke Web solutions, Content
              management, and e-commerce development, bringing their vision to
              life with a roar of creativity.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Progress />
      </div>

      <div className="mt-40 max-w-[100vw] px-20">
        <Partner />
      </div>

      <div className="syne-normal text-(--text-color) text-center text-[44px] mt-20">
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

      <div className="text-center space-y-4">
        <div className="relative text-[120px] lg:text-[200px] leading-[0.75] text-(--text-color) font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
          <div className="relative">
            <p>honors</p>
            <div className="textShadow1 bg-(--background) w-full h-full absolute top-0 -mt-3 lg:-mt-6 opacity-90"></div>
          </div>

          <div className="relative">
            <p>& awards</p>
            <div className="textShadow2 bg-(--background) w-full h-full absolute top-0 -mt-3 lg:-mt-6 opacity-90"></div>
          </div>
        </div>
        <div
          id="honorsAwardsDesc"
          className="syne-normal mx-auto text-3xl text-(--text-color) w-[80%] flex flex-col"
        >
          <span>We're India's top award-winning digital</span>
          <span>agency, carving our own path in the digital</span>
          <span>jungle, and the journey persists.</span>
        </div>
      </div>

      <div className="w-full mt-20">
        <ImageReveal />
        <p className="text-(--text-color-2)/60 text-center">and many more...</p>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
