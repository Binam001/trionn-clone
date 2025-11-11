import dribble from "../../assets/images/dribbble.webp";
import { dribbble } from "../../constants";
import Button from "../Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const Dribbble = () => {
  const isTablet = useMediaQuery({ maxWidth: 770 });
  useGSAP(() => {
    const paragraphSplit = new SplitText("#dribbleText", {
      type: "lines",
      linesClass: "line-wrapper",
    });

    const oddRZ = isTablet ? 0 : -45;
    const evenRZ = isTablet ? 0 : 45;
    const oddXp = isTablet ? -300 : -120;
    const evenXp = isTablet ? 150 : 120;

    gsap.utils.toArray<HTMLElement>(".oddDribbbleCard").forEach((el) => {
      gsap.to(el, {
        xPercent: oddXp,
        rotateZ: oddRZ,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          scrub: 1.3,
        },
      });
    });
    gsap.utils.toArray<HTMLElement>(".evenDribbbleCard").forEach((el) => {
      gsap.to(el, {
        xPercent: evenXp,
        rotateZ: evenRZ,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          scrub: 1.3,
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
        <img src={dribble} alt="dribble" className="w-52 h-16" />
      </div>
      <p
        id="dribbleText"
        className="text-(--text-color-2) text-3xl syne-normal w-[60%] lg:w-[40%] text-center"
      >
        Like a lion's roar echoing through the jungle, a hint of our creative
        minds emerges.
      </p>
      <div className="dribbbleBtn">
        <Button title="View Dribbble" />
      </div>

      <div className="absolute grid grid-cols-2 gap-4">
        {dribbble.map(({ id, image }) => (
          <div
            key={id}
            className={`${
              id % 2 === 0 ? "evenDribbbleCard" : "oddDribbbleCard"
            }`}
          >
            <img
              src={image}
              alt={`dribbble + ${id}`}
              className="w-[400px] h-[240px] lg:w-[600px] lg:h-[420px] rounded-4xl -mt-40 max-w-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dribbble;
