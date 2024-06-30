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
const images = [
  {
    src: "https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/%D8%A8%D9%86-%D9%85%D8%A7%D9%86%D9%88-min.png",
    zoomSrc:
      "https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/%D8%A8%D9%86-%D9%85%D8%A7%D9%86%D9%88-min.png", // تصویر با کیفیت بالاتر
  },
  {
    src: "https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/%D8%A8%D9%86-%D9%85%D8%A7%D9%86%D9%88-min-1-min.png",
    zoomSrc:
      "https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/%D8%A8%D9%86-%D9%85%D8%A7%D9%86%D9%88-min-1-min.png", // تصویر با کیفیت بالاتر
  },
  {
    src: "https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/%D8%A8%D9%86-%D9%85%D8%A7%D9%86%D9%88-min-2-min.png",
    zoomSrc:
      "https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/%D8%A8%D9%86-%D9%85%D8%A7%D9%86%D9%88-min-2-min.png", // تصویر با کیفیت بالاتر
  },
  {
    src: "https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/%D8%A8%D9%86-%D9%85%D8%A7%D9%86%D9%88-min-3-min.png",
    zoomSrc:
      "https://theme.fullwp.ir/ecolive/home-10/wp-content/uploads/2023/03/%D8%A8%D9%86-%D9%85%D8%A7%D9%86%D9%88-min-3-min.png", // تصویر با کیفیت بالاتر
  },
];

const SwiperProduct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

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
        className="mySwiper2 border rounded-xl mb-5"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <InnerImageZoom
              src={image.src}
              zoomType="hover"
              zoomPreload={true}
              fullscreenOnMobile={false}
              hasSpacer={true}
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
        {images.map((image, index) => (
          <SwiperSlide key={index} className="border rounded-xl cursor-pointer">
            <img src={image.src} alt={`Thumbnail ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperProduct;
