import { CircleArrowDown } from "lucide-react";
import CircularBrand from "../components/CircularBrand";
// import lionGroup from "../assets/images/lionGroup.webp";
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
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { ImageHover } from "../components/image-reveal";

const Services = () => {
  const isLargeDevice = useMediaQuery({ minWidth: 770 });
  useGSAP(() => {
    const servicesPageTitleParagraphSplit = new SplitText("#servicePageTitle", {
      type: "lines",
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
    const servicesPageDescParagraphSplit = new SplitText("#servicePageDesc", {
      type: "lines",
    });
    gsap.from(servicesPageDescParagraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      stagger: 0.2,
      delay: 1,
    });
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

    if (isLargeDevice) {
      if (serviceCardContainer) {
        const containerElement = serviceCardContainer as HTMLElement;
        const totalScroll =
          containerElement.scrollWidth - window.innerWidth + 50;

        gsap.to(serviceCardContainer, {
          x: -totalScroll,
          duration: serviceCard.length,
          scrollTrigger: {
            trigger: ".serviceCardContainer",
            start: "top top",
            end: `+=${totalScroll}`,
            pin: true,
            scrub: true,
          },
        });
      }
    }

    gsap.from("#ourExpertiseText", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#ourExpertiseText",
        start: "top bottom",
        scrub: 1.5,
      },
    });
    gsap.utils.toArray<HTMLElement>(".cardContainer").forEach((card) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "center center",
          scrub: 1.5,
        },
      });

      tl.from(card.querySelectorAll(".cardTitle"), {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      });

      tl.from(
        card.querySelectorAll(".cardDesc"),
        {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
        },
        "<0.2"
      );
      tl.from(
        card.querySelectorAll(".cardSubDesc"),
        {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
        },
        "<0.2"
      );
    });

    const servicesPageParagraphSplit = new SplitText(".servicePageText", {
      type: "lines",
    });
    gsap.from(servicesPageParagraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      stagger: 0.2,
      delay: 0.6,
      scrollTrigger: {
        trigger: ".servicePageText",
        start: "top 60%",
        scrub: 1,
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
  });

  return (
    <div className="flex flex-col items-center gap-8 mt-10">
      <CircularBrand />
      <div
        id="servicePageTitle"
        className="flex flex-col w-full text-[50px] md:text-[110px] lg:text-[90px] text-center leading-[0.75] text-(--text-color) font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
      >
        <span>experience</span>
        <span>our wild digital</span>
        <span>magic.</span>
      </div>

      <div
        id="servicePageDesc"
        className="flex flex-col text-center uppercase lg:text-lg font-[Poppins] text-(--text-color)"
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
        className="flex flex-col text-center font-[Poppins] text-(--text-color-2) text-xl md:text-[36px] lg:text-[50px] mt-40"
      >
        <span className="thirdPage2ndDescSpan">
          In the wild digital realm, we craft
        </span>
        <span className="thirdPage2ndDescSpan">
          products that roar with user
        </span>
        <span className="thirdPage2ndDescSpan">friendly innovation.</span>
      </div>

      <div className="relative w-screen lionImgSection">
        {/* <img
          src={lionGroup}
          alt="lion"
          className="w-full h-full object-cover"
        />
        <div className="bg-black/50 absolute top-0 w-full h-full z-10 pointer-events-none" /> */}
        <ImageHover text1="boundless" text2="creativity" text3="realm." />
        {/* <div className="imgText group flex flex-col justify-center items-center w-full h-full absolute top-0 z-20 pointer-events-none text-white text-center leading-[0.75] text-[5rem] md:text-[8rem] lg:text-[12rem] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
          <span
            className="hover:text-transparent
            text-stroke-black
        hover:text-clip
        text-stroke-2 text-stroke-black
        duration-500 pointer-events-auto"
          >
            boundless
          </span>
          <span
            className="hover:text-transparent
            text-stroke-black
        hover:text-clip
        text-stroke-2 text-stroke-black
        duration-500 pointer-events-auto"
          >
            creative
          </span>
          <span
            className="hover:text-transparent
            text-stroke-black
        hover:text-clip
        text-stroke-2 text-stroke-black
        duration-500 pointer-events-auto"
          >
            realm.
          </span>
        </div> */}
      </div>

      <div className="">
        <div className="font-[Poppins] text-(--text-color) text-2xl lg:text-[48px] mt-40 lg:leading-14">
          <p className="servicePageText">
            We're here to make tech businesses roar in the digital jungle,
            crafting valuable impact through design, branding, and development
            services.
          </p>
        </div>
        <div className="mt-10 flex justify-end">
          <div className="text-(--text-color) font-[Poppins] md:w-1/2 space-y-4 lg:text-xl">
            <p className="servicePageText">
              Challenges are the soil where our growth blossoms. Armed with
              digital prowess, we fearlessly overcome them. Bring your branding,
              web design, and creative challenges; our lionhearted approach will
              leave a lasting impression.
            </p>
          </div>
        </div>
      </div>

      <div className="text-(--text-color) mt-32 mx-4 lg:mx-0 space-y-6">
        {serviceLists.map((service) => (
          <div
            key={service.id}
            className="cardContainer md:flex bg-(--card-bg) rounded-4xl p-10 md:p-14 lg:p-20"
          >
            <div className="md:w-1/2 flex md:flex-col leading-[0.8] text-[50px] lg:text-[80px] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
              <p className="cardTitle">{service.title1}</p>
              <p className="cardTitle">{service.title2}</p>
            </div>

            <div className="md:w-1/2 font-[Poppins] flex flex-col gap-8 mt-5 md:mt-0">
              <div className="cardDesc text-xl lg:text-xl w-[95%]">
                {service.desc}
              </div>
              <div className="grid grid-cols-2">
                {service.content.map((item) => (
                  <div className="cardSubDesc text-lg lg:text-xl">{item}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="font-[Poppins] text-(--text-color) text-center text-[44px] mt-20">
        <p id="ourExpertiseText">Our expertise</p>

        <div className="w-screen">
          <ThreeDScrollTriggerContainer className="my-10">
            <ThreeDScrollTriggerRow baseVelocity={3} direction={1}>
              {techStackListsA.map(({ id, image }) => (
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
              {techStackListsB.map(({ id, image }) => (
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

        <Button title="Let's connect" />
      </div>

      <div className="text-center space-y-4 mt-20">
        <div className="relative text-[100px] lg:text-[200px] leading-[0.75] text-(--text-color) font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
          <div className="relative">
            <p>our</p>
            <div className="textShadow1 bg-(--background) w-full h-full absolute top-0 -mt-3 lg:-mt-6 opacity-90"></div>
          </div>

          <div className="relative">
            <p>process</p>
            <div className="textShadow2 bg-(--background) w-full h-full absolute top-0 -mt-3 lg:-mt-6 opacity-90"></div>
          </div>
        </div>
        <p className="servicePageText font-[Poppins] mx-auto text-3xl text-(--text-color) w-[55%]">
          These pillars support excellence in the digital jungle.
        </p>
      </div>

      <div className="">
        <div className="w-screen md:flex serviceCardContainer cardContainer">
          {processLists.map((process) => (
            <div
              key={process.id}
              className="serviceCard border-2 border-(--foreground) rounded-3xl p-8 md:p-14 text-(--text-color) font-[Poppins] mx-auto my-5 lg:m-5 w-[90%] md:w-[550px] shrink-0"
            >
              <div className="cardTitle text-[40px] md:text-[50px]">
                {process.id}.
              </div>
              <div className="cardTitle leading-none text-[40px] md:text-[50px] my-4">
                {process.title}
              </div>
              <div className="mt-20 lg:mt-40">
                {process.lists.map((lists) => (
                  <div className="cardSubDesc text-2xl">{lists}</div>
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
