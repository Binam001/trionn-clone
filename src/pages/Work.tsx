import { CircleArrowDown } from "lucide-react";
import CircularBrand from "../components/CircularBrand";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { workLists } from "../constants";
import Footer from "../components/section/Footer";

const groupedPairs = [
  [11, 12],
  [16, 17],
  [19, 20],
];

const Work = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#workTitle",
      {
        opacity: 0,
        y: 50,
        // skewY: 45,
        rotationX: 90,
      },
      {
        opacity: 1,
        y: 0,
        // skewY: 0,
        rotationX: 0,
        duration: 1.5,
        ease: "power3.out",
      }
    );
    gsap.from("#workDesc", {
      y: 30,
      opacity: 0,
      duration: 1.5,
    });

    gsap.utils.toArray<HTMLElement>("#card").forEach((el) => {
      gsap.from(el, {
        xPercent: 20,
        duration: 1.5,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "center center",
          scrub: 1.5,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".textShadow").forEach((el) => {
      const card = el.closest(".mt-20")?.querySelector(".card");

      gsap.to(el, {
        xPercent: 100,
        // width: 0,
        // opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: card || el,
          start: "bottom 75%",
          scrub: 1.5,
        },
      });
    });
  });
  return (
    <div className="flex flex-col items-center gap-8">
      <CircularBrand />
      <div
        id="workTitle"
        className="flex flex-col w-full text-[50px] md:text-[110px] lg:text-[90px] text-center leading-[0.75] text-(--text-color) font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
      >
        <span>our creative</span>
        <span>roar defines our</span>
        <span>legacy.</span>
      </div>

      <div
        id="workDesc"
        className="flex flex-col text-center uppercase text-xs syne-normal text-(--text-color)"
      >
        <span>Our creative legacy roars with</span>
        <span>pride as we showcase the value we</span>
        <span>bring to our clients.</span>
      </div>

      <div className="flex justify-center">
        <a href="#workImageSection">
          <CircleArrowDown
            size={30}
            strokeWidth={1}
            className="text-(--text-color)/50 mt-8"
          />
        </a>
      </div>

      <div id="workImageSection" className="mt-32">
        {workLists.map((workItem, idx) => {
          // Check if current item is the first id of any pair
          const pair = groupedPairs.find(
            //@ts-ignore
            ([first, second]) => workItem.id === first
          );
          if (pair) {
            const nextItem = workLists[idx + 1];
            if (nextItem && nextItem.id === pair[1]) {
              return (
                <div
                  className={`flex flex-row items-center mt-20 gap-8`}
                  key={`group-${pair[0]}-${pair[1]}`}
                >
                  {[workItem, nextItem].map((item) => (
                    <div key={item.id} className="">
                      <img
                        // id="card"
                        src={item.image}
                        alt={item.title}
                        className={`card rounded-3xl`}
                      />
                      <div className="text-(--text-color) mt-10">
                        {/* <div className="">
                          <p className="relative text-[50px] md:text-[40px] lg:text-[50px] leading-[0.9] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
                            {item.title}
                          </p>
                          <div
                            // id="textShadow"
                            className="textShadow bg-(--background) w-full h-full absolute top-0 -mt-1 opacity-90"
                          ></div>
                        </div> */}
                        <div className="">
                          <p
                            // id="workImageTitle"
                            className="relative text-[50px] md:text-[40px] lg:text-[50px] leading-[0.9] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
                          >
                            {item.title}
                            <div
                              // id="textShadow"
                              className="textShadow bg-(--background) w-full h-full absolute top-0 -mt-1 opacity-90"
                            ></div>
                          </p>
                        </div>
                        <p className="text-xl syne-normal">{item.tag}</p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }
          }
          // Skip rendering second item of any pair
          //@ts-ignore
          if (groupedPairs.some(([first, second]) => workItem.id === second))
            return null;

          // Render all other items normally
          return (
            <div key={workItem.id} className={`${workItem.className} mt-20`}>
              <img
                // id="card"
                // id={`card=workItem.id.toString()`}
                src={workItem.image}
                alt={workItem.title}
                className="card rounded-3xl"
              />
              <div className="text-(--text-color) mt-10">
                <div className="">
                  <p
                    // id="workImageTitle"
                    className="relative text-[50px] md:text-[40px] lg:text-[50px] leading-[0.9] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
                  >
                    {workItem.title}
                    <div
                      // id="textShadow"
                      className="textShadow bg-(--background) w-full h-full absolute top-0 -mt-1 opacity-90"
                    ></div>
                  </p>
                </div>
                <p className="text-xl syne-normal">{workItem.tag}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Work;
