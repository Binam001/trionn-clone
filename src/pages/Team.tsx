import { CircleArrowDown } from "lucide-react";
import CircularBrand from "../components/CircularBrand";
import lionGroup from "../assets/images/lionGroup.webp";
import lionGroup2 from "../assets/images/lionGroup2.webp";
import Footer from "../components/section/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import TeamCard from "../components/TeamCard";
import { eventListsA, eventListsB, teamHireLists } from "../constants";
import Button from "../components/Button";
import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "../components/lightswind/3d-scroll-trigger";

const Team = () => {
  useGSAP(() => {
    gsap.to(".textShadow1, .textShadow2, .textShadow3", {
      xPercent: 100,
      stagger: 0.2,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".textShadow1, .textShadow2, .textShadow3",
        start: "top bottom",
        scrub: 1.5,
      },
    });

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
        scrub: 1.5,
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
  });
  return (
    <div className="flex flex-col items-center gap-8 syne-normal text-(--text-color)">
      <CircularBrand />
      <div
        id="workTitle"
        className="flex flex-col w-full text-[50px] md:text-[110px] lg:text-[90px] text-center leading-[0.75] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
      >
        <span>each and</span>
        <span>every one of us</span>
        <span>is a digital lion.</span>
      </div>

      <div
        // id="workDesc"
        className="firstDesc flex flex-col text-center uppercase text-xs"
      >
        <span>If you also see yourself as the king or</span>

        <span>queen of the digital jungle, you might be</span>
        <span>one of us. Drop us a line.</span>
      </div>

      <div className="flex justify-center">
        <a href="#fourthPage2ndDesc">
          <CircleArrowDown size={30} strokeWidth={1} className="/50 mt-8" />
        </a>
      </div>

      <div
        // id="fourthPage2ndDesc"
        className="secondDesc flex flex-col text-center text-(--text-color-2) text-[50px] mt-40"
      >
        <span className="fourthPage2ndDescSpan">
          Our work excels, driven by our
        </span>
        <span className="fourthPage2ndDescSpan">
          wild and creative team, delivering
        </span>
        <span className="fourthPage2ndDescSpan">the highest quality.</span>
      </div>

      <div className="relative">
        <img src={lionGroup} alt="lion group" />
        <div className="imgText flex flex-col justify-center items-center w-full h-full absolute top-0  text-center leading-[0.75] text-[12rem] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
          <span>born with</span>
          <span>creative</span>
          <span>instincts.</span>
        </div>
      </div>

      <div className="">
        <div className="thirdDesc text-[48px] mt-40 leading-14 w-1/2">
          <p>In the heart of our wild team, we find our strength.</p>
        </div>
        <div className="mt-10 flex justify-end">
          <div className="thirdDescP w-1/2 space-y-4 text-xl">
            <p>
              In our creative jungle, designers, thinkers, strategists unite
              like a lion's roar, crafting vibrant projects resonating with the
              wild symphony of innovation.
            </p>
          </div>
        </div>
      </div>

      <TeamCard />

      <div className="text-center space-y-4 mt-20">
        <div className="relative text-[200px] leading-[0.75] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
          <div className="relative">
            <p>wanna</p>
            <div className="textShadow1 bg-(--background) w-full h-full absolute top-0 -mt-6 opacity-90"></div>
          </div>

          <div className="relative">
            <p>join</p>
            <div className="textShadow2 bg-(--background) w-full h-full absolute top-0 -mt-6 opacity-90"></div>
          </div>
          <div className="relative">
            <p>trionn?</p>
            <div className="textShadow3 bg-(--background) w-full h-full absolute top-0 -mt-6 opacity-90"></div>
          </div>
        </div>
        <div className="mx-auto text-3xl  w-[60%]">
          We are always looking for the best talent in the digital jungle.
        </div>
      </div>

      <div className="">
        <img src={lionGroup2} alt="liongroup" />
      </div>

      <div className="text-left w-[60%] mt-10 space-y-3">
        <div className="flex flex-col text-[50px] leading-[1.2]">
          <span>Do you aspire to</span>
          <span>be like a lion?</span>
        </div>
        <div className="flex flex-col text-xl">
          <span>Like a powerful lion joining our pack, every fresh</span>
          <span>team member strengthens our innovative and</span>
          <span>diligent wilderness.</span>
        </div>
      </div>

      <div className="w-[60%] mt-10">
        {teamHireLists.map((hire) => (
          <div
            key={hire.id}
            className=" text-3xl flex justify-between border-y py-10"
          >
            <span>{hire.post}</span>
            <Button title="Apply now!" />
          </div>
        ))}
      </div>

      <div className="mt-20">
        <div className="text-3xl text-center">Our digital jungle!</div>

        <div className="w-screen">
          <ThreeDScrollTriggerContainer className="my-20">
            <ThreeDScrollTriggerRow baseVelocity={3} direction={1}>
              {eventListsA.map((event) => (
                <div className="mx-3" key={event.id}>
                  <img
                    src={event.image}
                    alt={`eventA + ${event.id}`}
                    className="w-80 h-72 rounded-3xl"
                  />
                </div>
              ))}
            </ThreeDScrollTriggerRow>
            <ThreeDScrollTriggerRow baseVelocity={3} direction={-1}>
              {eventListsB.map((event) => (
                <div className="mx-3" key={event.id}>
                  <img
                    src={event.image}
                    alt={`eventB + ${event.id}`}
                    className="w-80 h-72 rounded-3xl"
                  />
                </div>
              ))}
            </ThreeDScrollTriggerRow>
          </ThreeDScrollTriggerContainer>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
