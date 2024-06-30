import { PiArrowLeftDuotone } from "react-icons/pi";
import { toPersianNumbersWithComma } from "../../utils/topersianNumbers";
import { sliders } from "../SpecialSale/data";

const LatestProduct = () => {
  return (
    <div className="container xl:max-w-screen-xl mb-5 pl-4 pr-4 md:pl-0 md:pr-0">
      <div className="flex items-center justify-center lg:justify-between mb-9 flex-col lg:flex-row space-y-5 lg:space-y-1">
        <div className="flex items-center gap-3 flex-col lg:flex-row">
          <div className="w-20 h-[1px] bg-primary hidden lg:block"></div>
          <div className="border-[1px] lg:border-2 border-primary rounded-lg text-primary px-2 py-[1px]  text-xs lgtext-sm">
            New
          </div>
          <div>
            <p className="text-primary font-bold text-sm lg:text-lg mb-1">
              جدیدترین محصولات اکولایو مارکت
            </p>
            <p className="text-xs lg:text-sm text-accent">
              The latest Ecolive Market products
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <p className="flex items-center text-primary  text-sm lg:text-md gap-1 font-bold ">
            مشاهد محصولات <PiArrowLeftDuotone />
          </p>
          <div className="w-20 h-[1px] bg-primary hidden lg:block"></div>
        </div>
      </div>





      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3">
        {sliders.map((slide,index) => (
          <div className="flex relative group items-center border border-cl_border rounded-md  p-2 pl-1 pr-1 w-full" key={index}>
            <div>
              <img
                src={slide.img}
                alt=""
                className="w-[130px] h-[110px]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-bold text-accent hover:text-primary transition-all ease-in-out duration-300 cursor-pointer w-32">
                {slide.title}
              </p>
              <div>
                <del className="text-gray-300">
                  {toPersianNumbersWithComma(slide.firstPrice)} تومان
                </del>
                <p className="text-primary font-bold">
                  {toPersianNumbersWithComma(slide.price)} تومان
                </p>
              </div>
            </div>
            <button className="absolute left-2 bg-gray-100 w-8 h-8  text-gray-300 flex items-center justify-center text-2xl rounded-md rounded-bl-[15px] transition-all ease-in-out duration-300 group-hover:bg-gray-200 group-hover:text-black hover:rounded-bl-md">
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;
