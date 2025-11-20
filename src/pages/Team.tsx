// import { CircleArrowDown } from "lucide-react";
import CircularBrand from "../components/CircularBrand";
import Footer from "../components/section/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import TeamCard from "../components/TeamCard";
import { eventListsA, eventListsB } from "../constants";
import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "../components/lightswind/3d-scroll-trigger";
import PageTitle from "../components/section/PageTitle";
import { Typewriter } from "../components/ui/typewriter";
import { AnimatePresence, motion } from "framer-motion";

const Team = () => {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const servicesPageTitleParagraphSplit = new SplitText("#teamPageTitle", {
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
      const servicesPageDescParagraphSplit = new SplitText("#teamPageDesc", {
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
          end: "center center",
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
          scrub: 1.5,
        },
      });
      const joinKitchenCrewParagraphSplit = new SplitText(".joinKitchenCrew", {
        type: "lines",
      });
      gsap.from(joinKitchenCrewParagraphSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 2,
        ease: "expo.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".joinKitchenCrew",
          start: "top 80%",
          scrub: 1,
        },
      });
      const joinKitchenCrewDescParagraphSplit = new SplitText(
        ".joinKitchenCrewDesc",
        {
          type: "lines",
        }
      );
      gsap.from(joinKitchenCrewDescParagraphSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 2,
        ease: "expo.out",
        stagger: 0.2,
        delay: 1.5,
        scrollTrigger: {
          trigger: ".joinKitchenCrewDesc",
          start: "top 80%",
          scrub: 1,
        },
      });
    });

    // gsap.to(".textShadow1, .textShadow2, .textShadow3", {
    //   xPercent: 100,
    //   stagger: 0.2,
    //   duration: 1.5,
    //   scrollTrigger: {
    //     trigger: ".textShadow1, .textShadow2, .textShadow3",
    //     start: "top bottom",
    //     scrub: 1.5,
    //   },
    // });

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

    // gsap.from("#teamGroup", {
    //   y: 100,
    //   scrollTrigger: {
    //     trigger: "#teamGroup",
    //     start: "top bottom",
    //     scrub: 2,
    //   },
    // });
    gsap.from("#ourDigitalJungleText", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#ourDigitalJungleText",
        start: "top bottom",
        scrub: 1.5,
      },
    });

    gsap.from("#beLikeALion", {
      yPercent: 50,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#beLikeALion",
        start: "top bottom",
        end: "center center",
        scrub: 1.5,
      },
    });
    gsap.utils.toArray<HTMLElement>(".applyForPost").forEach((el) => {
      gsap.from(el, {
        yPercent: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "center center",
          scrub: 1,
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
      <motion.div className="flex flex-col items-center gap-8 mt-10 font-[Poppins] text-(--text-color)">
        <CircularBrand />
        <PageTitle
          text1="the masters"
          text2="behind"
          highlighter="the magic"
          desc="Our passionate chefs, skilled staff, and creative minds work together to craft unforgettable dining experiences, turning every meal into a story of flavor and excellence."
        />

        {/* <div className="flex justify-center">
        <a href="#fourthPage2ndDesc">
          <CircleArrowDown size={30} strokeWidth={1} className="/50 mt-8" />
        </a>
      </div> */}

        <div
          // id="fourthPage2ndDesc"
          className="secondDesc flex flex-col text-center text-(--title-color) text-xl md:text-3xl lg:text-6xl lg:w-[60%] mt-40 font-[Britannic] uppercase"
        >
          <p className="">Our leadership</p>
        </div>

        {/* <div className="relative w-screen mt-20">
        <img src={lionGroup} alt="lion group" />
        <div className="imgText flex flex-col justify-center items-center w-full h-full absolute top-0 text-white text-center leading-[0.75] text-[5rem] md:text-[8rem] lg:text-[12rem] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
          <span>born with</span>
          <span>creative</span>
          <span>instincts.</span>
        </div>
      </div> */}

        {/* <div className="w-full">
        <div className="thirdDesc w-ful lg:w-1/2 text-[48px] mt-40 leading-14 ">
          <p>In the heart of our wild team, we find our strength.</p>
        </div>
        <div className="mt-10 flex justify-end">
          <div className="thirdDescP lg:w-1/2 space-y-4 text-xl">
            <p>
              In our creative jungle, designers, thinkers, strategists unite
              like a lion's roar, crafting vibrant projects resonating with the
              wild symphony of innovation.
            </p>
          </div>
        </div>
      </div> */}

        <div className="w-full mt-10 flex justify-center">
          {/* <div className="w-1/2 bg-(--card-bg-2) px-5 py-10 rounded-2xl"> */}
          <div className="md:w-[60%] lg:w-1/3 bg-white border px-5 py-10 rounded-2xl overflow-hidden space-y-8">
            <div className="w-full flex justify-center gap-8">
              <img
                src="/images/team/albert-mizuno.webp"
                alt="Albert Mizuno"
                className="size-40 object-cover rounded-full"
              />
            </div>
            <div className="space-y-2 text-center">
              <div className="text-2xl">
                <Typewriter text={["Albert Mizuno"]} hideCursorOnType />
              </div>
              <div className="text-(--text-color)/50">
                <Typewriter
                  text={["Founder"]}
                  initialDelay={2000}
                  hideCursorOnType
                />
              </div>
              <div className="mt-5">
                <p>
                  <span className="text-2xl">“</span>
                  Great food isn't cooked — it's crafted with heart.
                  <span className="text-2xl">”</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <TeamCard />

        <div className="text-center space-y-4 mt-20 w-full">
          <div className="relative text-3xl md:text-5xl lg:text-8xl leading-[0.75] font-[Britannic] text-(--title-color) uppercase">
            <div className="relative joinKitchenCrew">
              <p>join</p>
              {/* <div className="textShadow1 bg-(--background) w-full h-full absolute top-0 -mt-3 lg:-mt-6 opacity-90"></div> */}
            </div>

            <div className="relative joinKitchenCrew">
              <p>kitchen</p>
              {/* <div className="textShadow2 bg-(--background) w-full h-full absolute top-0 -mt-3 lg:-mt-6 opacity-90"></div> */}
            </div>
            <div className="relative joinKitchenCrew">
              <p>crew</p>
              {/* <div className="textShadow3 bg-(--background) w-full h-full absolute top-0 -mt-3 lg:-mt-6 opacity-90"></div> */}
            </div>
          </div>
          <div className="joinKitchenCrewDesc mx-auto md:text-xl w-full lg:w-1/2">
            Our pride is expanding—we welcome those hungry to create
            unforgettable flavors.
          </div>
        </div>

        <div
          id="teamGroupContainer"
          className="relative w-screen h-[400px] lg:h-[600px]"
        >
          <div className="absolute inset-0 w-full h-full z-10 bg-black/50" />
          <img
            id="teamGroup"
            src="/images/team/group.png"
            alt="teamGroup"
            className="absolute w-full h-full object-cover"
          />
        </div>

        {/* <div id="beLikeALion" className="text-left lg:w-[75%] mt-10 space-y-3">
        <p className="lg:w-[50%] text-5xl md:text-[60px] leading-[1.2]">
          Do you aspire to be like a lion?
        </p>
        <p className="lg:w-[70%] text-xl md:text-3xl">
          Like a powerful lion joining our pack, every fresh team member
          strengthens our innovative and diligent wilderness.
        </p>
      </div> */}

        {/* <div className="w-full lg:w-[75%] mt-10">
        {teamHireLists.map((hire) => (
          <div
            key={hire.id}
            className="applyForPost text-3xl flex flex-col md:flex-row md:justify-between gap-6 md:gap-0 border-y py-10"
          >
            <span>{hire.post}</span>
            <Button title="Apply now!" />
          </div>
        ))}
      </div> */}

        <div className="mt-20">
          <div
            id="ourDigitalJungleText"
            className="text-center text-xl md:text-3xl lg:text-6xl text-(--title-color) font-[Britannic]"
          >
            Our Gallery
          </div>

          <div className="w-screen">
            <ThreeDScrollTriggerContainer className="my-20">
              <ThreeDScrollTriggerRow baseVelocity={3} direction={1}>
                {eventListsA.map((event) => (
                  <div className="mx-1" key={event.id}>
                    <img
                      src={event.image}
                      alt={`eventA + ${event.id}`}
                      className="w-72 h-56 lg:w-96 lg:h-80 rounded-3xl object-cover"
                    />
                  </div>
                ))}
              </ThreeDScrollTriggerRow>
              <ThreeDScrollTriggerRow baseVelocity={3} direction={-1}>
                {eventListsB.map((event) => (
                  <div className="mx-1" key={event.id}>
                    <img
                      src={event.image}
                      alt={`eventB + ${event.id}`}
                      className="w-72 h-56 lg:w-96 lg:h-80 rounded-3xl object-cover"
                    />
                  </div>
                ))}
              </ThreeDScrollTriggerRow>
            </ThreeDScrollTriggerContainer>
          </div>
        </div>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Team;
