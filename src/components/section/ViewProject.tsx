import { viewProjects } from "../../constants";
import Button from "../Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

const ViewProject = () => {
  const isTablet = useMediaQuery({ maxWidth: 770 });
  useGSAP(() => {
    const start = isTablet ? "top 80%" : "top 100%";
    const end = isTablet ? "center 90%" : "center center";
    gsap.from("#content", {
      y: 150,
      duration: 1.5,
      delay: 0.5,
      stagger: 1,
      scrollTrigger: {
        trigger: "#content",
        start: "top 80%",
        scrub: 1.2,
      },
    });

    //    gsap.fromTo(
    //   ".oddIndexImage",
    //   { xPercent: 200, rotateZ: 45 },
    //   {
    //     xPercent: 0,
    //     rotateZ: 0,
    //     scrollTrigger: {
    //       trigger: ".oddIndexImage",
    //       start: "top bottom",
    //       scrub: 1,
    //       markers: true,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   ".evenIndexImage",
    //   { xPercent: -200, rotateZ: -45 },
    //   {
    //     xPercent: 0,
    //     rotateZ: 0,
    //     scrollTrigger: {
    //       trigger: ".evenIndexImage",
    //       start: "top bottom",
    //       scrub: 1,
    //     },
    //   }
    // );

    gsap.utils.toArray<HTMLElement>(".oddIndexImage").forEach((el) => {
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
            scrub: 1.2,
          },
        }
      );
    });
    gsap.utils.toArray<HTMLElement>(".evenIndexImage").forEach((el) => {
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
  });
  return (
    <div className="mt-20">
      {viewProjects.map((project) => (
        <div
          key={project.id}
          className={`flex gap-4 lg:gap-20 py-4 lg:py-16 ${
            project.id % 2 !== 0
              ? "flex-col-reverse text-center lg:text-start lg:flex-row"
              : "flex-col-reverse text-center lg:text-end lg:flex-row-reverse"
          }`}
        >
          <div
            id="content"
            className="w-full lg:w-[40%] flex flex-col pt-10 gap-20 justify-center"
          >
            <div className="text-(--text-color) space-y-3">
              <h1 className="text-[50px] md:text-[40px] lg:text-[70px] leading-[0.9] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
                {project.title}
              </h1>
              <p className="text-xl syne-normal">{project.tag}</p>
            </div>
            <div className="hidden lg:block">
              <Button href="#" title="View project" />
            </div>
          </div>

          <div className="w-full lg:w-[60%] relative">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className={`rounded-4xl absolute -top-18 ${
                  project.id % 2 !== 0 ? "oddIndexImage" : "evenIndexImage"
                }`}
              />
            </a>
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-12 lg:hidden">
        <Button title="View all work" />
      </div>
    </div>
  );
};

export default ViewProject;
