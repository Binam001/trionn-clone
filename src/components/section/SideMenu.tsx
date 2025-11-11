import { CircleX } from "lucide-react";
import { socialLists } from "../../constants";

const SideMenu = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="text-(--text-color) px-20">
      <button
        onClick={() => setOpen(false)}
        className="w-full flex justify-end gap-4 py-10 pr-10 text-2xl font-bold"
      >
        Close
        <div className="cursor-pointer">
          <CircleX size={40} />
        </div>
      </button>
      <div className="flex py-14">
        <ul className="w-1/2 text-[100px] leading-[0.8] font-[daysoftype] uppercase**[font-feature-settings:'ss01']**">
          <li className="group relative duration-500 transition-all">
            <span className="block group-hover:ml-16 transition-all duration-500">
              work
            </span>
            <div className="absolute left-0 top-[40%] -translate-y-[40%] hidden group-hover:block size-8 bg-(--text-color) rounded-full"></div>
          </li>
          <li className="group relative duration-500 transition-all">
            <span className="block group-hover:ml-16 transition-all duration-500">
              about
            </span>
            <div className="absolute left-0 top-[40%] -translate-y-[40%] hidden group-hover:block size-8 bg-(--text-color) rounded-full"></div>
          </li>
          <li className="group relative duration-500 transition-all">
            <span className="block group-hover:ml-16 transition-all duration-500">
              services
            </span>
            <div className="absolute left-0 top-[40%] -translate-y-[40%] hidden group-hover:block size-8 bg-(--text-color) rounded-full"></div>
          </li>
          <li className="group relative duration-500 transition-all">
            <span className="block group-hover:ml-16 transition-all duration-500">
              team
            </span>
            <div className="absolute left-0 top-[40%] -translate-y-[40%] hidden group-hover:block size-8 bg-(--text-color) rounded-full"></div>
          </li>
          <li className="group relative duration-500 transition-all">
            <span className="block group-hover:ml-16 transition-all duration-500">
              contact
            </span>
            <div className="absolute left-0 top-[40%] -translate-y-[40%] hidden group-hover:block size-8 bg-(--text-color) rounded-full"></div>
          </li>
        </ul>

        <div className="w-1/2 text-end flex flex-col justify-end gap-10">
          <div className="flex flex-col gap-4 text-2xl">
            <a href="">hello@trionn.com</a>
            <a href="">+91 98241 82099</a>
          </div>
          <div className="flex justify-end">
            {socialLists.map((social) => (
              <div key={social.id} className="">
                <a href="#">
                  <img
                    src={social.image}
                    alt={social.name}
                    className="size-10"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
