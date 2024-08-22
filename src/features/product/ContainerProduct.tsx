import { HiMiniShoppingBag } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import SwiperProduct from "./Swiper-Product";
import { toPersianNumbersWithComma } from "../../utils/topersianNumbers";
import ItemProduct from "./ItemProduct";
import { useParams } from "react-router-dom";
import useGetDetailProduct from "./useGetDetailProduct";
import Skeleton from "react-loading-skeleton";
import ProductSkeleton from "../SpecialSale/ProductSkeleton";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useManageItemsCart from "../../hooks/useManageItemsCart";
import Loading from "../../ui/Loading";

type similarProduct = {
  brandId: string;
  categoryProductId: string;
  count: number;
  currentReserved: number;
  discountPercent: number;
  firstImage: string;
  id: string;
  maxCountReserve: number;
  price: number;
  priceAfterDiscount: number;
  priceAfterDiscountForShow: string;
  priceForShow: string;
  title: string;
};
const ContainerProduct = () => {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const ProductId= {
    data:id
  }
  const { gettingProduct, singleProduct } = useGetDetailProduct({
    ProductId : ProductId as object
  });
  const { isManaging, manageOrder } = useManageItemsCart();

  const [count, setCount] = useState(1);


  useEffect(() => {
    if (id) {
      queryClient.invalidateQueries({
        queryKey: ["Detail_Product", id],
      });
    }
  }, [id, queryClient]);

  if (gettingProduct) {
    return <SkeltonComponent />;
  }

  const handelAddItem = (newCount: number) => {
    if (newCount > singleProduct.maxCountReserve) {
      return;
    }
    const data = {
      ProductId: singleProduct.id,
      Count: newCount,
    };
    // const formData = new FormData();
    // formData.append("body", JSON.stringify(data));
    manageOrder(data);
  };

  return (
    <>
      <div className="grid grid-cols-6 gap-x-8 mb-5">
        <div className="lg:col-span-3 col-span-6  mb-5 lg:mb-0">
          <div>
            <SwiperProduct
              firstImage={singleProduct.firstImage}
              images={singleProduct.images}
            />
          </div>
        </div>
        <div className="lg:col-span-3 col-span-6">
          <h1 className="font-bold text-accent text-3xl">
            {singleProduct.title}
          </h1>
          <p className="text-2xl mt-2 text-primary font-bold">
            <del className="text-gray-300 text-xl">
              {toPersianNumbersWithComma(singleProduct.price)} تومان{" "}
            </del>
            {toPersianNumbersWithComma(singleProduct.price)} تومان
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
                <button
                  className="flex items-center justify-center w-14 h-14 border  rounded-r-md bg-white"
                  onClick={() =>
                    setCount((prev) =>
                      prev < singleProduct.maxCountReserve ? prev + 1 : prev
                    )
                  }
                >
                  +
                </button>
                <div className="flex flex-col items-center justify-center  w-14 h-14 border-t border-b  bg-gray-100 text-sm">
                  {toPersianNumbersWithComma(count)}
                  {count === singleProduct.maxCountReserve && (
                    <span className="text-xs">حداکثر</span>
                  )}
                </div>
                <button
                  className="flex items-center justify-center  w-14 h-14 border  rounded-l-md bg-white"
                  onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
                >
                  -
                </button>
              </div>
              <button
                className="bg-primary text-white p-4  pl-5 pr-5 gap-3 flex items-center justify-center rounded-xl
                font-bold hover:bg-opacity-80 transition-all ease-in-out duration-500   cursor-pointer h-[56px]  w-[196px]"
                onClick={() => handelAddItem(count)}
              >
                {isManaging ? (
                  <Loading />
                ) : (
                  <>
                    <HiMiniShoppingBag /> افزودن به سبد خرید
                  </>
                )}
              </button>
            </div>
          </div>
          <hr className="mb-6 mt-6" />
          <ul className="mt-6   space-y-1 pr-10 text-gray-500 ">
            <li>شناسه محصول: dksap-104113</li>
            <li>دسته: {singleProduct.categoryTitle}</li>
            <li>برچسب:{singleProduct.brand.title}</li>
          </ul>
        </div>
      </div>
      {singleProduct.similarProducts &&
        singleProduct.similarProducts.length > 0 && (
          <div className="overflow-hidden h-[530px] mt-10  ">
            <h1 className="text-center text-primary text-4xl ">
              محصولات مرتبط
            </h1>

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
              {singleProduct.similarProducts.map(
                (similarProduct: similarProduct) => (
                  <SwiperSlide
                    className="rounded-3xl p-5  group  transition-all duration-500 "
                    key={similarProduct.id}
                  >
                    <ItemProduct {...similarProduct} />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        )}
    </>
  );
};
export default ContainerProduct;

const SkeltonComponent = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-x-8 mb-5  ">
        <div className="lg:col-span-3 col-span-6  mb-5 lg:mb-0 ">
          <div>
            <Skeleton height={400} width="100%" />

            <div className="flex mt-4  gap-4  ">
              <div className="flex-1">
                <Skeleton height={130} />{" "}
              </div>
              <div className="flex-1">
                <Skeleton height={130} />{" "}
              </div>
              <div className="flex-1">
                <Skeleton height={130} />{" "}
              </div>
              <div className="flex-1">
                <Skeleton height={130} />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 col-span-6">
          <Skeleton height={40} width={`80%`} />

          <Skeleton height={20} width={`40%`} />

          <ul className="mt-6 list-disc  space-y-1  text-gray-500 ">
            <Skeleton height={10} width={`40%`} />
            <Skeleton height={10} width={`40%`} />
            <Skeleton height={10} width={`40%`} />
          </ul>
          <hr className="mb-6 mt-6" />
          <div>
            <div className=" w-full flex items-center gap-8 mt-3 flex-col md:flex-row">
              <div className="flex items-center justify-center  ">
                <Skeleton height={40} width={150} />
              </div>
              <Skeleton height={40} width={150} />
            </div>
          </div>
          <hr className="mb-6 mt-6" />
          <ul className="mt-6   space-y-1  text-gray-500 ">
            <Skeleton height={10} width={`40%`} />
            <Skeleton height={10} width={`40%`} />
            <Skeleton height={10} width={`40%`} />
          </ul>
        </div>
      </div>
      <div className="overflow-hidden h-[530px] mt-10  ">
        <div className="text-center">
          <Skeleton height={30} width={300} />
        </div>

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
          <SwiperSlide className="rounded-3xl p-5  group  transition-all duration-500 ">
            <ProductSkeleton />
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl p-5  group  transition-all duration-500 ">
            <ProductSkeleton />
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl p-5  group  transition-all duration-500 ">
            <ProductSkeleton />
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl p-5  group  transition-all duration-500 ">
            <ProductSkeleton />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
