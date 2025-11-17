import useEmblaCarousel from "embla-carousel-react";
import { teamLists } from "../constants";
import linkedin from "../assets/images/linkedin.svg";

const TeamCard = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true });

  return (
    <section className="embla -mx-28 mt-20">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {teamLists.map((team) => (
            <div className="embla__slide flex-none" key={team.id}>
              <div className="">
                <div className="flex flex-col gap-4">
                  <div>
                    <img
                      src={team.image}
                      alt={team.name}
                      className="rounded-4xl w-[380px] h-[450px] lg:w-[480px] lg:h-[520px]"
                    />
                  </div>

                  <div className="font-[Poppins] text-(--text-color) space-y-2">
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
  min-width: 0;
  padding-left: var(--slide-spacing);
}       
        `}</style>
    </section>
  );
};

export default TeamCard;
