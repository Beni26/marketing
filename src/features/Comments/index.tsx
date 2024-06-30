import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import { TiStarFullOutline } from "react-icons/ti";

export default function index() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
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
   
        }}
        className="comments"
        
      >
        {[1,2,3,4,5,6].map(() => (
          <SwiperSlide className="!h-[407px] !bg-transparent rounded-lg">
            <div className="w-[420px] !h-[207px] rounded-lg  p-6 pr-3 pl-3  flex flex-col justify-center bg-white">
              <p className="text-[16px] leading-6 mb-7 text-start">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون است.
              </p>
              <p className="flex text-yellow-400 mb-3 text-lg">
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
              </p>
              <p className="text-sm text-primary font-bold text-right">
                سیروس محمدعلیزاده 🙂
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
