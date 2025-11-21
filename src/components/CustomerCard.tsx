import useEmblaCarousel from "embla-carousel-react";
// import doubleQuoteMark from "../assets/images/double-quote-mark.svg";
import { clients } from "../constants";
import { Star } from "lucide-react";
// import { Play } from "lucide-react";

const CustomerCard = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true });

  return (
    <section className="embla -mx-28 mt-8 md:mt-16 cursor-grab">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {clients.map((client) => (
            <div className="embla__slide flex-none" key={client.id}>
              <div
                className={`backdrop-blur-sm border-2 border-(--text-color) w-[300px] h-[450px] md:w-[350px] md:h-[540px] lg:w-[500px] lg:h-[580px] rounded-4xl flex flex-col items-center justify-center text-center gap-8  hover:scale-[0.95] duration-300  
                
                `}
              >
                <div className="flex flex-col items-center gap-4">
                  <div>
                    <img
                      src={client.image}
                      alt={client.name}
                      className={`rounded-full size-20 md:size-32`}
                    />
                  </div>

                  <div className="font-[Poppins]">
                    <h1 className="text-xl md:text-2xl">{client.name}</h1>
                    <div className="flex items-center justify-center mt-5 gap-4">
                      <Star color="#FFCB04" fill="#FFCB04" size="28" />{" "}
                      <div className="">
                        <span className="text-2xl md:text-4xl">
                          {client.rating}
                        </span>
                        <span className="translate-y-1">/5</span>
                      </div>
                    </div>
                    {/* <p>{client.position}</p> */}
                  </div>
                </div>

                <div className="">
                  {/* {client.videoLink ? (
                    <div className="">
                      <a
                        href={client.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white rounded-4xl px-8 py-4 flex items-center gap-2"
                      >
                        Watch Video
                        <Play size={20} fill="white" />
                      </a>
                    </div>
                  ) : ( */}
                  <div className="">
                    {/* <div className="flex justify-center">
                      <img
                        src={doubleQuoteMark}
                        alt="double-quote-mark"
                        className="invert dark:invert-0 size-6 lg:size-14"
                      />
                    </div> */}
                    <p className="font-[Poppins] text-sm md:text-lg px-8">
                      {client.message}
                    </p>
                  </div>
                  {/* )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`

        .embla {
  --slide-height: 50rem;
  --slide-spacing: 1rem;
  --slide-size: 70%;
}
.embla__viewport {
  overflow: hidden;
}
.embla__container {
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
}
.embla__slide {
  transform: translate3d(0, 0, 0);
  min-width: 0;
  padding-left: var(--slide-spacing);
}       
        `}</style>
    </section>
  );
};

export default CustomerCard;
