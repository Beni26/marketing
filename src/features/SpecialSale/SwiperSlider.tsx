import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import useGetHome from "../../hooks/UseGetHome";
import ProductSkeleton from "./ProductSkeleton";
import Product from "./Product";

export interface ProductType {
  title: string;
  firstImage: string;
  price: number;
  discountPercent: number;
  priceAfterDiscount: number;
  count: number;
  maxCountReserve: number;
  categoryProductId: string;
  brandId: string;
  priceForShow: string;
  priceAfterDiscountForShow: string;
  currentReserved: number;
  id: string;
}

const SwiperSlider = () => {
  const { specials, isLoading } = useGetHome();

  // const handleAddToCart = (formData: FormData) => {
  //   dispatch(addItem({ id, title, price, quantity: count, productFirstImage }));
  //   dispatch(setIsOpenCartDrawer(true));

  //   manageOrder(formData);
  //   if (status) {
  //     dispatch(setIsOpenCartDrawer(true));
  //   }
  // };

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
        {isLoading
          ? Array(4)
              .fill(0)
              .map((_, index) => (
                <SwiperSlide
                  key={index}
                  className="rounded-3xl p-3 border-2 border-cl_border group transition-all duration-500"
                >
                  <ProductSkeleton />
                </SwiperSlide>
              ))
          : specials?.products?.map((product: ProductType) => (
              <SwiperSlide
                className="rounded-3xl p-5 border-2 border-cl_border group transition-all duration-500"
                key={product.title}
              >
                <Product {...product} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
