import { PiArrowLeftDuotone } from "react-icons/pi";
import { PiCalendarStar } from "react-icons/pi";
import BrandSwiper from "./BrandSwiper";
const index = () => {
  return (
    <div className="container  xl:max-w-screen-xl mb-20 pl-4 pr-4 md:pl-0 md:pr-0">
      <div className="flex items-center justify-between mb-9">
        <div className="flex items-center gap-3 group">
          <div className="w-20 h-[1px] bg-primary hidden lg:block"></div>
          <div className="text-primary px-2 py-[1px] ">
            <PiCalendarStar
              size="30px"
              className="group-hover:scale-90 transition-all ease-in-out duration-300"
            />
          </div>
          <div>
            <p className="text-primary font-bold  text-sm lg:text-lg mb-1">
              جدیدترین محصولات اکولایو مارکت
            </p>
            <p className="text-xs lg:text-sm text-accent">
              Ecolive Market brands
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <p className="flex items-center text-primary text-sm lg:text-lg gap-1 font-bold">
            همه برندها <PiArrowLeftDuotone />
          </p>
          <div className="w-20 h-[1px] bg-primary hidden lg:block"></div>
        </div>
      </div>
      <BrandSwiper />
    </div>
  );
};

export default index;
