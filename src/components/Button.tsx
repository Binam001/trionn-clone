import { MagneticButton } from "../components/ui/magnetic-button";

interface ButtonProps {
  title: string;
  href?: string;
  // className?: string;
  // onClick?: () => void;
}
const Button = ({ title, href }: ButtonProps) => {
  const Component = href ? "a" : "button";
  return (
    <MagneticButton>
      <Component
        href={href}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        className="relative w-fit px-4 py-2 md:px-6 md:py-3 lg:px-12 lg:py-6 text-sm md:text-base text-(--text-color-2) font-[Poppins] ring-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out
        hover:ring-0 hover:text-(--foreground) hover:scale-[1.2]
        after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 
        after:w-0 after:h-0 after:rounded-full after:bg-(--foreground)/50 after:blur-lg after:transition-all after:duration-300
        hover:after:size-60 after:pointer-events-none"
      >
        {title}
      </Component>
    </MagneticButton>
  );
};

export default Button;
