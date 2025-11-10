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
  });
  return (
    <div className="mt-20 grid lg:grid-cols-2 gap-4">
      {progress.map((item) => (
        <div
          className={`${
            item.id === 1
              ? "bg-[#c93303] text-(--foreground) lg:bg-(--card-bg) hover:bg-[#c93303]"
              : item.id === 2
              ? "bg-[#c8d2d2] text-(--background) lg:text-(--foreground) lg:bg-(--card-bg) hover:bg-[#c8d2d2] hover:text-(--background)"
              : item.id === 3
              ? "bg-[#a1c9b8] text-(--background) lg:text-(--foreground) lg:bg-(--card-bg) hover:bg-[#a1c9b8] hover:text-(--background)"
              : "bg-[#decf3e] text-(--background) lg:text-(--foreground) lg:bg-(--card-bg) hover:bg-[#decf3e] hover:text-(--background)"
          }
           p-6 rounded-4xl
          transition-colors duration-500 ease-in-out cursor-pointer
          ${item.id % 2 === 0 ? "lg:relative lg:top-16 evenCard" : "oddCard"}
          `}
          key={item.id}
        >
          <div className="flex dm-mono-regular">
            <div className="text-[100px] lg:text-[120px]">{item.count}</div>
            <span className="text-[60px]">+</span>
          </div>
          <div className="text-[30px] lg:text-[40px] w-[45%] text-right justify-self-end font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Progress;
