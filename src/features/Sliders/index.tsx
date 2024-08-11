import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useGetHome from "../../hooks/UseGetHome";
import Skeleton from "react-loading-skeleton";
import { BASE_URL_SITE } from "../../services/httpService";

// Define types for Swiper components

interface sliderType {
  id: string;
  fileName: string;
}

const Index: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);
  const { sliders, isLoading } = useGetHome();

  const onAutoplayTimeLeft = (time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        (1 - progress).toString()
      );
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
        onAutoplayTimeLeft={(_, time, progress) =>
          onAutoplayTimeLeft(time, progress)
        }
        className="mySwiper rounded-xl h-full"
      >
        {isLoading
          ? Array(1)
              .fill(0)
              .map((_, index) => (
                <SwiperSlide key={index}>
                  <Skeleton height={424} width={848} />
                </SwiperSlide>
              ))
          : sliders?.map((slider: sliderType) => (
              <SwiperSlide key={slider.id}>
                <img
                  src={`${BASE_URL_SITE}/Sliders/${slider.fileName}`}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    
                    currentTarget.src =
                      "https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/slider1.jpg";
                  }}
                />
              </SwiperSlide>
            ))}
        {sliders && sliders.length > 1 && (
          <div className="autoplay-progress " slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle
                className="stroke-white stroke-[2px]"
                cx="24"
                cy="24"
                r="20"
              ></circle>
            </svg>
            <span className="text-white text-sm" ref={progressContent}></span>
          </div>
        )}
      </Swiper>
    </>
  );
};

export default Index;
