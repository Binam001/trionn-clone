import { darkLogo, dishLists, lightLogo } from "../../constants";
import Button from "../Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const Dribbble = () => {
  const isTablet = useMediaQuery({ maxWidth: 770 });
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );
  useEffect(() => {
    const updateTheme = () => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      }
    };
    window.addEventListener("theme-change", updateTheme);
    window.addEventListener("storage", updateTheme);

    return () => window.removeEventListener("storage", updateTheme);
  }, []);

  useGSAP(() => {
    const paragraphSplit = new SplitText("#dribbleText", {
      type: "lines",
    });

    // const oddRZ = isTablet ? 0 : -45;
    // const evenRZ = isTablet ? 0 : 45;
    const oddXp = isTablet ? -70 : -120;
    const evenXp = isTablet ? 70 : 120;
    const start = isTablet ? "top center" : "top 80%";

    gsap.utils.toArray<HTMLElement>(".oddDribbbleCard").forEach((el) => {
      gsap.to(el, {
        xPercent: oddXp,
        rotate: 180,
        // opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start,
          end: "center center",
          scrub: 1.5,
        },
      });
    });
    gsap.utils.toArray<HTMLElement>(".evenDribbbleCard").forEach((el) => {
      gsap.to(el, {
        xPercent: evenXp,
        rotate: 180,
        // opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start,
          scrub: 1.5,
        },
      });
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      stagger: 0.06,
      delay: 0.6,
      scrollTrigger: {
        trigger: "#dribbleText",
        start: "top 60%",
        scrub: 1,
      },
    });
    gsap.from(".dribbbleBtn", {
      opacity: 0,
      yPercent: 100,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".dribbbleBtn",
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
      },
    });
  });
  return (
    <div className="relative py-[180px] lg:py-[300px] flex flex-col justify-center items-center gap-14">
      <div>
        <img
          src={theme === "dark" ? darkLogo : lightLogo}
          alt="dribble"
          className="w-52 h-20"
        />
      </div>
      <p
        id="dribbleText"
        className="text-(--text-color-2) text-3xl font-[Poppins] w-[60%] lg:w-[40%] text-center"
      >
        Like a lion's roar echoing through the jungle, a hint of our creative
        minds emerges.
      </p>
      <div className="dribbbleBtn">
        <Button title="View Dribbble" />
      </div>

      <div className="absolute grid grid-cols-2 pointer-events-none">
        {dishLists.map(({ id, image }) => (
          <div
            key={id}
            className={`${
              id % 2 === 0 ? "evenDribbbleCard" : "oddDribbbleCard"
            }`}
          >
            <img
              src={image}
              alt={`dribbble + ${id}`}
              className="size-[200px] lg:size-[300px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dribbble;
