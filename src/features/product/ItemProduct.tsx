import { Link } from "react-router-dom";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { toPersianNumbersWithComma } from "../../utils/topersianNumbers";
import truncateText from "../../utils/truncateText";
import { BASE_URL_SITE } from "../../services/httpService";
import { useState } from "react";
import useManageItemsCart from "../../hooks/useManageItemsCart";
import { RotatingLines } from "react-loader-spinner";
import placeholderImage from "../../assets/images/placeholderItem.webp";
type ItemProductProps = {
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
const ItemProduct: React.FC<ItemProductProps> = ({
  title,
  firstImage,
  discountPercent,
  price,
  priceAfterDiscount,
  id,
  maxCountReserve,
  categoryProductId,
}) => {
  const [count, setCount] = useState(1);
  const { isManaging, manageOrder } = useManageItemsCart();
  const handelProduct = (id: string) => {
    const data = {
      ProductId: id,
      Count: count,
    };
    const formData = new FormData();
    formData.append("body", JSON.stringify(data));
    manageOrder(formData);
  };

  return (
    <div className="relative    group  transition-all duration-500 h-[354px] w-full">
      <div className="text-right border  p-5 rounded-3xl absolute w-full h-full left-0 top-0 bottom-0 bg-white group-hover:h-[410px] group-hover:z-20">
        <div className="relative  w-[203px] h-[155px]">
          <Link to={`/product/${id}`}>
            <img
              src={`${BASE_URL_SITE}/Images/${firstImage}`}
              className="cursor-pointer !object-contain  mx-auto w-[203px] h-[155px]"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = placeholderImage;
              }}
            />
          </Link>
          {discountPercent > 0 && (
            <span className="bg-primary text-white font-bold text-xs p-0.5 pr-2 pl-2 rounded-lg absolute top-0 right-0 leading-[22px]">
              {toPersianNumbersWithComma(discountPercent)} %
            </span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <Link
            to={`/shop/${categoryProductId}`}
            className="text-[15px] hover:text-link_hover hover:underline hover:cursor-pointer"
          >
            مواد غذایی
          </Link>
          <Link
            to={`/product/${id}`}
            className="text-[16px] text-accent font-[600] hover:text-primary hover:cursor-pointer mb-4"
          >
            {truncateText(title, 30)}
          </Link>
        </div>
        <div className="mt-2 relative">
          <div className="text-primary font-bold text-xl">
            {toPersianNumbersWithComma(priceAfterDiscount)} تومان
          </div>
          {priceAfterDiscount !== price && (
            <del className="text-md font-bold text-gray-300">
              {toPersianNumbersWithComma(price)} تومان
            </del>
          )}
          <div className="absolute w-full flex items-center justify-between mt-3 top-[-23px] group-hover:top-0 group-hover:relative transition-all duration-200 z-10">
            <div className="flex items-center justify-center invisible group-hover:visible ">
              <button
                className="flex items-center justify-center w-11 h-11 border border-cl_border rounded-r-md bg-white"
                onClick={() =>
                  setCount((prev) => (prev < maxCountReserve ? prev + 1 : prev))
                }
              >
                +
              </button>
              <div className="flex flex-col items-center justify-center w-11 h-11 border-t border-b border-cl_border bg-gray-100 text-sm">
                {toPersianNumbersWithComma(count)}
                {count === maxCountReserve && (
                  <span className="text-xs">حداکثر</span>
                )}
              </div>
              <button
                className="flex items-center justify-center w-11 h-11 border border-cl_border rounded-l-md bg-white"
                onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                -
              </button>
            </div>

            <div
              className="bg-gray-100 h-[50px] w-[50px] flex items-center justify-center
                rounded-xl rounded-bl-[28px] font-bold text-gray-400 transition-all
                ease-in-out duration-500 group-hover:bg-primary group-hover:text-white
                hover:rounded-bl-xl cursor-pointer relative"
              onClick={() => handelProduct(id)}
            >
              <HiMiniShoppingBag />
              {isManaging && (
                <div className="absolute">
                  <RotatingLines
                    visible={true}
                    width="25"
                    strokeWidth="5"
                    strokeColor="black"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
