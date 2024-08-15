import { Swiper, SwiperSlide } from "swiper/react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper as SwiperClass } from "swiper/types";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import { BASE_URL_SITE } from "../../services/httpService";

type SwiperProductProps = {
  firstImage: string;
  images: string[];
};
const SwiperProduct: React.FC<SwiperProductProps> = ({
  images,
  firstImage,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const safeImages = images ?? []; // Default to empty array if images is null
  const newImages = Array.from(new Set([firstImage, ...safeImages]));

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 border rounded-xl mb-5 w-"
      >
        {newImages.map((image, index) => (
          <SwiperSlide key={index}>
            <InnerImageZoom
              src={`${BASE_URL_SITE}/Images/${image}`}
              zoomType="hover"
              zoomPreload={true}
              fullscreenOnMobile={false}
              hasSpacer={true}
              imgAttributes={{
                className: "!w-[300px]  ",
              }}
              className="w-full !h-[500px] flex items-center justify-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {newImages.map((image, index) => (
          <SwiperSlide
            key={index}
            className="border rounded-xl cursor-pointer p-2 overflow-hidden"
          >
            <img
              src={`${BASE_URL_SITE}/Images/${image}`}
              alt={`Thumbnail ${index}`}
              className="!h-32"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperProduct;
