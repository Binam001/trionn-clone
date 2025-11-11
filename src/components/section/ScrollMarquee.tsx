import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "../lightswind/3d-scroll-trigger";
const ScrollMarquee = () => {
  return (
    <ThreeDScrollTriggerContainer className="mt-32">
      <ThreeDScrollTriggerRow baseVelocity={10} direction={1}>
        <div className="text-(--text-color) font-bold leading-none text-[90px] lg:text-[150px] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
          - wild ideas! -
        </div>
      </ThreeDScrollTriggerRow>
      <ThreeDScrollTriggerRow baseVelocity={10} direction={-1}>
        <div className="text-(--text-color) font-bold leading-none text-[90px] lg:text-[150px] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
          - let's dive in! -
        </div>
      </ThreeDScrollTriggerRow>
    </ThreeDScrollTriggerContainer>
  );
};

export default ScrollMarquee;
