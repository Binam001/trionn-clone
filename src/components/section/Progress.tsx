import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { progress } from "../../constants";
import { useMediaQuery } from "react-responsive";

const Progress = () => {
  const isTablet = useMediaQuery({ maxWidth: 770 });
  useGSAP(() => {
    const start = isTablet ? "top 80%" : "top bottom";
    const end = isTablet ? "center 90%" : "center center";
    gsap.utils.toArray<HTMLElement>(".oddCard").forEach((el) => {
      gsap.fromTo(
        el,
        { xPercent: -100, rotateZ: -45 },
        {
          xPercent: 0,
          rotateZ: 0,
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: 1.5,
          },
        }
      );
    });
    gsap.utils.toArray<HTMLElement>(".evenCard").forEach((el) => {
      gsap.fromTo(
        el,
        { xPercent: 100, rotateZ: 45 },
        {
          xPercent: 0,
          rotateZ: 0,
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: 1.5,
          },
        }
      );
    });
    gsap.from("#ourAchievements", {
      yPercent: 200,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#ourAchievements",
        start: "top bottom",
        end: "center center",
        scrub: 1,
      },
    });
  });
  return (
    <>
      <div className="relative my-20 md:my-40 text-xl md:text-3xl lg:text-6xl text-center leading-[0.75] text-(--title-color) font-[Britannic] uppercase">
        <p id="ourAchievements">Our Achievements</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        {progress.map((item) => (
          <div
            className={`space-y-10
           p-6 rounded-4xl text-(--foreground) hover:text-(--red) border-2 border-(--foreground)/70 hover:border-(--red)
          transition-colors duration-500 ease-in-out cursor-pointer backdrop-blur-sm
          ${item.id % 2 === 0 ? "lg:relative lg:top-1/2 evenCard" : "oddCard"}
          `}
            key={item.id}
          >
            <div className="flex font-[Poppins]">
              <div className="text-6xl lg:text-8xl">{item.count}</div>
              <span className="text-5xl">+</span>
            </div>
            <div className="text-xl md:text-2xl lg:text-4xl w-[50%] text-right justify-self-end font-[Poppins] uppercase">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Progress;
