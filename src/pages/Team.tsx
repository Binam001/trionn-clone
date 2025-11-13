import { CircleArrowDown } from "lucide-react";
import CircularBrand from "../components/CircularBrand";
import lionGroup from "../assets/images/lionGroup.webp";
import Footer from "../components/section/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
  });
  return (
    <div className="flex flex-col items-center gap-8">
      <CircularBrand />
      <div
        id="workTitle"
        className="flex flex-col w-full text-[50px] md:text-[110px] lg:text-[90px] text-center leading-[0.75] text-(--text-color) font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
      >
        <span>each and</span>
        <span>every one of us</span>
        <span>is a digital lion.</span>
      </div>

      <div
        id="workDesc"
        className="flex flex-col text-center uppercase text-xs syne-normal text-(--text-color)"
      >
        <span>If you also see yourself as the king or</span>

        <span>queen of the digital jungle, you might be</span>
        <span>one of us. Drop us a line.</span>
      </div>

      <div className="flex justify-center">
        <a href="#fourthPage2ndDesc">
          <CircleArrowDown
            size={30}
            strokeWidth={1}
            className="text-(--text-color)/50 mt-8"
          />
        </a>
      </div>

      <div
        id="fourthPage2ndDesc"
        className="flex flex-col text-center syne-normal text-(--text-color-2) text-[50px] mt-40"
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
        <div className="flex flex-col justify-center items-center w-full h-full absolute top-0 text-(--text-color) text-center leading-[0.75] text-[12rem] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
          <span>born with</span>
          <span>creative</span>
          <span>instincts.</span>
        </div>
      </div>

      <div className="">
        <div className="syne-normal text-(--text-color) text-[48px] mt-40 leading-14 w-1/2">
          <p>In the heart of our wild team, we find our strength.</p>
        </div>
        <div className="mt-10 flex justify-end">
          <div className="text-(--text-color) syne-normal w-1/2 space-y-4 text-xl">
            <p>
              In our creative jungle, designers, thinkers, strategists unite
              like a lion's roar, crafting vibrant projects resonating with the
              wild symphony of innovation.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4 mt-20">
        <div className="relative text-[200px] leading-[0.75] text-(--text-color) font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
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
        <p className="syne-normal mx-auto text-3xl text-(--text-color) w-[55%]">
          These pillars support excellence in the digital jungle.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
