import { HiMiniShoppingBag } from "react-icons/hi2";
import SwiperProduct from "../features/product/Swiper-Product";
import { toPersianNumbersWithComma } from "../utils/topersianNumbers";
import ItemProduct from "../features/product/ItemProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

export default function Product() {
  return (
    <div className="container xl:max-w-screen-xl mb-20 pl-4 pr-4 md:pl-0 md:pr-0 mt-10">
      <div className="grid grid-cols-6 gap-x-8 mb-5">
        <div className="lg:col-span-3 col-span-6  mb-5 lg:mb-0">
          <SwiperProduct />
        </div>
        <div className="lg:col-span-3 col-span-6">
          <h1 className="font-bold text-accent text-3xl">
            دانه قهوه اسپرسو بن مانو جورنو – 250 گرم
          </h1>
          <p className="text-2xl mt-2 text-primary font-bold">
            <del className="text-gray-300 text-xl">
              {toPersianNumbersWithComma(117000)} تومان{" "}
            </del>
            {toPersianNumbersWithComma(110000)} تومان
          </p>
          <ul className="mt-6 list-disc  space-y-1 pr-10 text-gray-500 ">
            <li>نوع بسته‌بندی : بسته‌ای</li>
            <li> کشور تولیدکننده: ایران</li>
            <li>مناسب برای دستگاه : اسپرسوساز، موکاپات</li>
          </ul>
          <hr className="mb-6 mt-6" />
          <div>
            <div className=" w-full flex items-center gap-8 mt-3 flex-col md:flex-row">
              <div className="flex items-center justify-center  ">
                <button className="flex items-center justify-center w-14 h-14 border  rounded-r-md bg-white">
                  +
                </button>
                <div className="flex items-center justify-center  w-14 h-14 border-t border-b  bg-gray-100 text-sm">
                  {toPersianNumbersWithComma(4)}
                </div>
                <button className="flex items-center justify-center  w-14 h-14 border  rounded-l-md bg-white">
                  -
                </button>
              </div>
              <button className="bg-primary text-white p-4  pl-5 pr-5 gap-3 flex items-center justify-center rounded-xl  font-bold hover:bg-opacity-80 transition-all ease-in-out duration-500   cursor-pointer">
                <HiMiniShoppingBag /> افزودن به سبد خرید
              </button>
            </div>
          </div>
          <hr className="mb-6 mt-6" />
          <ul className="mt-6   space-y-1 pr-10 text-gray-500 ">
            <li>شناسه محصول: dksap-104113</li>
            <li>دسته: مواد غذایی</li>
            <li>برچسب: بن مانو, قهوه</li>
          </ul>
        </div>
      </div>
      <div className="overflow-hidden h-[530px] mt-10  ">
        <h1 className="text-center text-primary text-4xl ">محصولات مرتبط</h1>
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
          <SwiperSlide className="rounded-3xl p-5 border-2 border-cl_border group  transition-all duration-500">
            <ItemProduct />
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl p-5 border-2 border-cl_border group  transition-all duration-500">
            <ItemProduct />
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl p-5 border-2 border-cl_border group  transition-all duration-500">
            <ItemProduct />
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl p-5 border-2 border-cl_border group  transition-all duration-500">
            <ItemProduct />
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl p-5 border-2 border-cl_border group  transition-all duration-500">
            <ItemProduct />
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl p-5 border-2 border-cl_border group  transition-all duration-500">
            <ItemProduct />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
