import useEmblaCarousel from "embla-carousel-react";
import { teamLists } from "../constants";
import linkedin from "../assets/images/linkedin.svg";

const TeamCard = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="embla -mx-28 ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {teamLists.map((team) => (
            <div className="embla__slide" key={team.id}>
              <div
                //   className={`bg-(--card-bg) border-2 border-(--text-color) hover:border-none w-[350px] h-[540px] lg:w-[500px] lg:h-[580px] rounded-4xl flex flex-col items-center justify-center text-center gap-20  hover:scale-[0.95] duration-300
                // `}
                className=""
              >
                <div className="flex flex-col gap-4">
                  <div>
                    <img
                      src={team.image}
                      alt={team.name}
                      className="rounded-4xl w-[480px] h-[520px]"
                    />
                  </div>

                  <div className="syne-normal text-(--text-color) space-y-2">
                    <h1 className="text-2xl">{team.name}</h1>
                    <p>{team.position}</p>
                    {team.id === 1 && (
                      <img src={linkedin} alt="linkedin" className="size-10" />
                    )}
                  </div>
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
  flex: 0 0 30%;
  min-width: 0;
  padding-left: var(--slide-spacing);
}       
        `}</style>
    </section>
  );
};

export default TeamCard;
