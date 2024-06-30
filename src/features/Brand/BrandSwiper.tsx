import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const BrandSwiper = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      pagination={{
        clickable: false,
      }}
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
        1400: {
          slidesPerView: 7,
          spaceBetween: 50,
        },
      }}
      className="mySwiper "
    >
      <SwiperSlide>
        <img
          src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/1.png"
          className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300 cursor-pointer !w-40 md:w-auto"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/2.jpg"
          className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300 cursor-pointer !w-40 md:w-auto"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/3.png"
          className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300 cursor-pointer !w-40 md:w-auto"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/4.png"
          className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300 cursor-pointer !w-40 md:w-auto"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/5.png"
          className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300 cursor-pointer !w-40 md:w-auto"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/6.png"
          className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300 cursor-pointer !w-40 md:w-auto"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/7.jpg"
          className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300 cursor-pointer !w-40 md:w-auto"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default BrandSwiper;
