import { CircleArrowDown } from "lucide-react";
import CircularBrand from "../components/CircularBrand";
import lionGroup from "../assets/images/lionGroup.webp";
import Footer from "../components/section/Footer";
import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "../components/lightswind/3d-scroll-trigger";
import {
  processLists,
  serviceLists,
  techStackListsA,
  techStackListsB,
} from "../constants";
import Button from "../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Services = () => {
  useGSAP(() => {
    gsap.to(".textShadow1, .textShadow2", {
      xPercent: 100,
      stagger: 0.2,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".textShadow1, .textShadow2",
        start: "top bottom",
        scrub: 1.5,
      },
    });

    const serviceCard = gsap.utils.toArray(".serviceCard");
    const serviceCardContainer = document.querySelector(
      ".serviceCardContainer"
    );

    if (serviceCardContainer) {
      const containerElement = serviceCardContainer as HTMLElement;
      const totalScroll = containerElement.scrollWidth - window.innerWidth + 50;

      gsap.to(serviceCardContainer, {
        x: -totalScroll,
        duration: serviceCard.length,
        scrollTrigger: {
          trigger: ".serviceCardContainer",
          start: "10% top",
          end: `+=${totalScroll}`,
          pin: true,
          scrub: true,
        },
      });
    }
  });
  return (
    <div className="flex flex-col items-center gap-8">
      <CircularBrand />
      <div
        id="workTitle"
        className="flex flex-col w-full text-[50px] md:text-[110px] lg:text-[90px] text-center leading-[0.75] text-(--text-color) font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
      >
        <span>experience</span>
        <span>our wild digital</span>
        <span>magic.</span>
      </div>

      <div
        id="workDesc"
        className="flex flex-col text-center uppercase text-xs syne-normal text-(--text-color)"
      >
        <span>Experience the wild array of</span>
        <span>services that make your company</span>
        <span>stand out.</span>
      </div>

      <div className="flex justify-center">
        <a href="#thirdPage2ndDesc">
          <CircleArrowDown
            size={30}
            strokeWidth={1}
            className="text-(--text-color)/50 mt-8"
          />
        </a>
      </div>

      <div
        id="thirdPage2ndDesc"
        className="flex flex-col text-center syne-normal text-(--text-color-2) text-[50px] mt-40"
      >
        <span className="thirdPage2ndDescSpan">
          In the wild digital realm, we craft
        </span>
        <span className="thirdPage2ndDescSpan">
          products that roar with user
        </span>
        <span className="thirdPage2ndDescSpan">friendly innovation.</span>
      </div>

      <div className="relative">
        <img src={lionGroup} alt="lion group" />
        <div className="flex flex-col justify-center items-center w-full h-full absolute top-0 text-(--text-color) text-center leading-[0.75] text-[12rem] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
          <span>boundless</span>
          <span>creative</span>
          <span>realm.</span>
        </div>
      </div>

      <div className="">
        <div className="syne-normal text-(--text-color) text-[48px] mt-40 leading-14">
          <p>
            We're here to make tech businesses roar in the digital jungle,
            crafting valuable impact through design, branding, and development
            services.
          </p>
        </div>
        <div className="mt-10 flex justify-end">
          <div className="text-(--text-color) syne-normal w-1/2 space-y-4 text-xl">
            <p>
              Challenges are the soil where our growth blossoms. Armed with
              digital prowess, we fearlessly overcome them. Bring your branding,
              web design, and creative challenges; our lionhearted approach will
              leave a lasting impression.
            </p>
          </div>
        </div>
      </div>

      <div className="text-(--text-color) mt-32 space-y-6">
        {serviceLists.map((service) => (
          <div
            key={service.id}
            className="flex bg-(--card-bg) rounded-4xl p-20"
          >
            <div className="w-1/2 leading-[0.8] text-[80px] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
              <p className="">{service.title1}</p>
              <p className="">{service.title2}</p>
            </div>

            <div className="w-1/2 syne-normal flex flex-col gap-8">
              <div className="text-xl w-[95%]">{service.desc}</div>
              <div className="grid grid-cols-2">
                {service.content.map((item) => (
                  <div className="text-xl">{item}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="syne-normal text-(--text-color) text-center text-[44px] mt-20">
        <p>Our expertise</p>

        <div className="w-screen">
          <ThreeDScrollTriggerContainer className="my-10">
            <ThreeDScrollTriggerRow baseVelocity={3} direction={1}>
              {techStackListsA.map(({ id, image }) => (
                <div
                  key={id}
                  className="size-90 bg-(--card-bg) mx-1 rounded-3xl flex justify-center items-center mb-1"
                >
                  <img
                    src={image}
                    alt={`partnerSideAImg + ${id}`}
                    className="invert dark:invert-0 size-40"
                  />
                </div>
              ))}
            </ThreeDScrollTriggerRow>
            <ThreeDScrollTriggerRow baseVelocity={3} direction={-1}>
              {techStackListsB.map(({ id, image }) => (
                <div
                  key={id}
                  className="size-90 bg-(--card-bg) mx-1 rounded-3xl flex justify-center items-center"
                >
                  <img
                    key={id}
                    src={image}
                    alt={`partnerSideBImg + ${id}`}
                    className="invert dark:invert-0 size-40"
                  />
                </div>
              ))}
            </ThreeDScrollTriggerRow>
          </ThreeDScrollTriggerContainer>
        </div>

        <Button title="Let's connect" />
      </div>

      <div className="text-center space-y-4 mt-20">
        <div className="relative text-[130px] lg:text-[200px] leading-[0.75] text-(--text-color) font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
          <div className="relative">
            <p>our</p>
            <div className="textShadow1 bg-(--background) w-full h-full absolute top-0 -mt-3 lg:-mt-6 opacity-90"></div>
          </div>

          <div className="relative">
            <p>process</p>
            <div className="textShadow2 bg-(--background) w-full h-full absolute top-0 -mt-3 lg:-mt-6 opacity-90"></div>
          </div>
        </div>
        <p className="syne-normal mx-auto text-3xl text-(--text-color) w-[55%]">
          These pillars support excellence in the digital jungle.
        </p>
      </div>

      <div className="">
        <div className="w-screen flex serviceCardContainer">
          {processLists.map((process) => (
            <div
              key={process.id}
              className="serviceCard border-2 border-(--foreground) rounded-3xl p-14 text-(--text-color) syne-normal m-5 w-[550px] shrink-0"
            >
              <div className="text-[50px]">{process.id}.</div>
              <div className="text-[50px] my-4">{process.title}</div>
              <div className="mt-40">
                {process.lists.map((lists) => (
                  <div className="text-xl">{lists}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
