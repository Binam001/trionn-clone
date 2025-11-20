import { comboLists } from "../../constants";
// import Button from "../Button";
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
      opacity: 0,
      duration: 1.5,
      delay: 0.2,
      scrollTrigger: {
        trigger: "#content",
        start: "top 80%",
        end: "center center",
        scrub: 1.2,
      },
    });

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
    <div className="mt-10 md:mt-20">
      {comboLists.map((combo) => (
        <div
          key={combo.id}
          className={`flex gap-4 lg:gap-20 py-4 lg:py-6 ${
            combo.id % 2 !== 0
              ? "flex-col-reverse text-center lg:text-start lg:flex-row"
              : "flex-col-reverse text-center lg:text-end lg:flex-row-reverse"
          }`}
        >
          <div
            id="content"
            className="w-full lg:w-[40%] flex flex-col gap-10 justify-center"
          >
            <div className="text-(--text-color) space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-7xl text-(--title-color) leading-[0.9] font-[Britannic] uppercase">
                {combo.title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-[Poppins] text-(--text-yellow)">
                Rs. {combo.price}
              </p>
            </div>
            {/* <div className="hidden lg:block">
              <Button href="#" title="View Combo" />
            </div> */}
          </div>

          <div className="w-full lg:w-[60%] relative">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={combo.image}
                alt={combo.title}
                className={`rounded-4xl ${
                  combo.id % 2 !== 0 ? "oddIndexImage" : "evenIndexImage"
                }`}
              />
            </a>
          </div>
        </div>
      ))}
      {/* <div className="flex justify-center mt-12 lg:hidden">
        <Button title="View all Combo" />
      </div> */}
    </div>
  );
};

export default ViewProject;
