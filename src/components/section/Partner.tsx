import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import doubleQuoteMark from "../../assets/images/double-quote-mark.svg";
// import PartnerCard from "../PartnerCard";
import { clients } from "../../constants";
// import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from "embla-carousel-react";
import { Play } from "lucide-react";

// const OPTIONS: EmblaOptionsType = { loop: true }
// type PropType = {
//   // slides: number[]
//   // options?: EmblaOptionsType
//   options?: OPTIONS
// }
const Partner = () => {
  // const { options } = props
  const [emblaRef] = useEmblaCarousel({ loop: true });
  useGSAP(() => {
    gsap.from("#partner", {
      xPercent: -25,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#partner",
        scrub: 1.5,
      },
    });
    gsap.from("#love", {
      xPercent: 25,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#love",
        scrub: 1.5,
      },
    });
    gsap.from("#text", {
      opacity: 0,
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      stagger: 0.06,
      delay: 0.6,
      scrollTrigger: {
        trigger: "#text",
        start: "top bottom",
        scrub: 1,
      },
    });
  });
  return (
    <div className="mt-40 text-(--text-color)">
      <div
        id="partner"
        className="text-[70px] md:text-[80px] lg:text-[200px] leading-[0.9] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
      >
        partner
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div
          id="love"
          className="text-[70px] md:text-[80px] lg:text-[200px] leading-[0.9] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**"
        >
          love
        </div>
        <p
          id="text"
          className="w-[70%] lg:w-[30%] text-(--text-color-2) text-2xl lg:text-3xl syne-normal"
        >
          Take heed, as the lion's roar in our client reviews resounds.
        </p>
      </div>

      <div className="embla -mx-28">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container mt-20 flex flex-row gap-10 ">
            {clients.map((client) => (
              <div
                key={client.id}
                className={`embla__slide bg-(--card-bg) border-2 border-(--text-color) hover:border-none w-[350px] h-[540px] lg:w-[500px] lg:h-[580px] rounded-4xl flex flex-col items-center justify-center text-center gap-20  hover:scale-[0.95] duration-300 transition-transform ${
                  [4, 5].includes(client.id) ? "flex-col-reverse" : ""
                }
                 ${client.id === 5 && "mr-10"}
                `}
              >
                <div className="flex flex-col items-center gap-4">
                  <div>
                    <img
                      src={client.image}
                      alt={client.name}
                      className={`rounded-full ${
                        [4, 5].includes(client.id) ? "size-18" : "size-32"
                      }`}
                    />
                  </div>

                  <div className="syne-normal">
                    <h1 className="text-2xl">{client.name}</h1>
                    <p>{client.position}</p>
                  </div>
                </div>

                <div className="">
                  {client.videoLink ? (
                    <div className="">
                      <a
                        href={client.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-(--background) rounded-4xl px-8 py-4 flex items-center gap-2"
                      >
                        Watch Video
                        <Play size={20} fill="white" />
                      </a>
                    </div>
                  ) : (
                    <div className="">
                      <div className="flex justify-center">
                        <img
                          src={doubleQuoteMark}
                          alt="double-quote-mark"
                          className="invert dark:invert-0 size-14"
                        />
                      </div>
                      <p className="syne-normal text-lg px-10">
                        {client.message}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <PartnerCard /> */}
    </div>
  );
};

export default Partner;
