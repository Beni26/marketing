import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { toPersianNumbersWithComma } from "../../utils/topersianNumbers";
import { HiMiniShoppingBag } from "react-icons/hi2";
import truncateText from "../../utils/truncateText";
import { sliders } from "./data";
import { Pagination, Navigation } from "swiper/modules";

const SwiperSlider = () => {
  return (
    <div className="overflow-hidden h-[450px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper sliderSpecials mt-12 !w-[90%] md:!w-full"
      >
        {sliders.map((slide) => (
          <SwiperSlide
            className="rounded-3xl p-5 border-2 border-cl_border group  transition-all duration-500"
            key={slide.title}
          >
            <div className="text-right">
              <div className="relative w-[253px] h-[197px]">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="cursor-pointer"
                />
                <span className="bg-primary text-white font-bold text-xs p-0.5 pr-2 pl-2 rounded-lg absolute top-0 right-0 leading-[22px]">
                  {toPersianNumbersWithComma(slide.discount)}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  to=""
                  className="text-[15px] hover:text-link_hover hover:underline hover:cursor-pointer"
                >
                  {slide.category}
                </Link>
                <Link
                  to=""
                  className="text-[16px] text-accent font-[600] hover:text-primary hover:cursor-pointer"
                >
                  {truncateText(slide.title, 30)}
                </Link>
              </div>
              <div className="mt-2 relative">
                <span className="text-primary font-bold text-xl">
                  {toPersianNumbersWithComma(slide.price)} تومان 
                </span>
                <del className="text-md font-bold text-gray-300">
                  {toPersianNumbersWithComma(slide.firstPrice)} تومان
                </del>
                <div className="absolute w-full flex items-center justify-between mt-3 top-[-23px] group-hover:top-0 group-hover:relative transition-all duration-200">
                  <div className="flex items-center justify-center invisible group-hover:visible ">
                    <button className="flex items-center justify-center w-9 h-10 border border-cl_border rounded-r-md bg-white">
                      +
                    </button>
                    <div className="flex items-center justify-center w-9 h-10 border-t border-b border-cl_border bg-gray-100 text-sm">
                      {toPersianNumbersWithComma(4)}
                    </div>
                    <button className="flex items-center justify-center w-9 h-10 border border-cl_border rounded-l-md bg-white">
                      -
                    </button>
                  </div>
                  <div className="bg-gray-100 h-[50px] w-[50px] flex items-center justify-center rounded-xl rounded-bl-[28px] font-bold text-gray-400 transition-all ease-in-out duration-500 group-hover:bg-primary group-hover:text-white hover:rounded-bl-xl cursor-pointer">
                    <HiMiniShoppingBag />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
