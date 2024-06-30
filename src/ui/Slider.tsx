import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Define types for Swiper components

interface Props {}

const Slider: React.FC<Props> = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = ( time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", (1 - progress).toString());
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={(_, time, progress) => onAutoplayTimeLeft(time, progress)}
        className="mySwiper rounded-xl"
      >
        <SwiperSlide><img src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/slider1.jpg" alt="slider1" /></SwiperSlide>
        <SwiperSlide><img src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/slider3-min-1.jpg" alt="slider2" /></SwiperSlide>
        <SwiperSlide><img src="https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/slider2-min-1.jpg" alt="slider3" /></SwiperSlide>

        <div className="autoplay-progress " slot="container-end" >
          <svg viewBox="0 0 48 48"  ref={progressCircle}>
            <circle  className="stroke-white stroke-[2px]" cx="24" cy="24" r="20"></circle>
          </svg>
          <span className="text-white text-sm" ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
