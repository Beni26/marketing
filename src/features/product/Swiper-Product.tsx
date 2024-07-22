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
    src: "https://dkstatics-public.digikala.com/digikala-products/754fb37556ba509ce6df8e6cd285439fac513506_1673437706.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    zoomSrc:
      "https://dkstatics-public.digikala.com/digikala-products/754fb37556ba509ce6df8e6cd285439fac513506_1673437706.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", // تصویر با کیفیت بالاتر
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/29576402c3bb3f6fe20ef86a08a035d060c84396_1673702294.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    zoomSrc:
      "https://dkstatics-public.digikala.com/digikala-products/29576402c3bb3f6fe20ef86a08a035d060c84396_1673702294.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", // تصویر با کیفیت بالاتر
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/754fb37556ba509ce6df8e6cd285439fac513506_1673437706.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    zoomSrc:
      "https://dkstatics-public.digikala.com/digikala-products/754fb37556ba509ce6df8e6cd285439fac513506_1673437706.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", // تصویر با کیفیت بالاتر
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/5052e56e58254ac7ebda2fbd38925ad8d1d23713_1673437710.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    zoomSrc:
      "https://dkstatics-public.digikala.com/digikala-products/5052e56e58254ac7ebda2fbd38925ad8d1d23713_1673437710.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", // تصویر با کیفیت بالاتر
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
