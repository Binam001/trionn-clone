import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "../lightswind/3d-scroll-trigger";
const ScrollMarquee = () => {
  return (
    <div className="w-screen mt-16 -mx-4 md:-mx-20 flex items-center">
      <ThreeDScrollTriggerContainer className="">
        <ThreeDScrollTriggerRow baseVelocity={10} direction={1}>
          <div className="flex items-center mx-5">
            <img
              src="/images/dish/dish4.png"
              alt="dish4"
              className="size-24 md:size-32"
            />
          </div>
          <div className="text-(--title-color) font-bold leading-none text-[90px] lg:text-[150px] font-[Poppins] uppercase">
            welcome
          </div>
          {/* <img src="/images/dish/dish2.png" alt="dish2" /> */}
        </ThreeDScrollTriggerRow>
      </ThreeDScrollTriggerContainer>
    </div>
  );
};

export default ScrollMarquee;
