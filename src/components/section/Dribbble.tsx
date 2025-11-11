import dribble from "../../assets/images/dribbble.webp";
import { dribbble } from "../../constants";
import Button from "../Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

const Dribbble = () => {
  const isTablet = useMediaQuery({ maxWidth: 770 });
  useGSAP(() => {
    const oddRZ = isTablet ? 0 : -45;
    const evenRZ = isTablet ? 0 : 45;
    const oddXp = isTablet ? -200 : -120;
    const evenXp = isTablet ? 150 : 120;
    gsap.utils.toArray<HTMLElement>(".oddDribbbleCard").forEach((el) => {
      gsap.to(el, {
        // xPercent: -100,
        xPercent: oddXp,
        // rotateZ: -45,
        rotateZ: oddRZ,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          // end,
          scrub: 1.3,
        },
      });
    });
    gsap.utils.toArray<HTMLElement>(".evenDribbbleCard").forEach((el) => {
      gsap.to(el, {
        // xPercent: 100,
        xPercent: evenXp,
        rotateZ: evenRZ,
        // rotateZ: 45,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          // end,
          scrub: 1.3,
        },
      });
    });
  });
  return (
    <div className="relative py-[180px] lg:py-[300px] flex flex-col justify-center items-center gap-14">
      <div>
        <img src={dribble} alt="dribble" className="w-52 h-16" />
      </div>
      <p className="text-(--text-color-2) text-3xl syne-normal w-[60%] lg:w-[40%] text-center">
        Like a lion's roar echoing through the jungle, a hint of our creative
        minds emerges.
      </p>
      <div className="">
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
