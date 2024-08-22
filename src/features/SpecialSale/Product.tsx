import { toPersianNumbersWithComma } from "../../utils/topersianNumbers";
import { Link } from "react-router-dom";
import truncateText from "../../utils/truncateText";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { BASE_URL_SITE } from "../../services/httpService";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import useManageItemsCart from "../../hooks/useManageItemsCart";
import { useDispatch } from "react-redux";
import { setIsOpenCartDrawer } from "../ShareSlice/drawerSlice";
import placeholderImage from "../../assets/images/placeholderItem.webp";

interface ProductProps {
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
  // isManaging: boolean;
  // handelCart: (formData: FormData) => void;
}

const Product: React.FC<ProductProps> = ({
  title,
  price,
  firstImage,
  discountPercent,
  priceAfterDiscount,
  id,
  maxCountReserve,
  categoryProductId,
}) => {
  const [count, setCount] = useState(1);
  const { isManaging, manageOrder, status } = useManageItemsCart();
  const dispatch = useDispatch();
  const handelProduct = (id: string) => {
    const data = {
      ProductId: id,
      Count: count,
    };
    // const formData = new FormData();
    // formData.append("body", JSON.stringify(data));
    manageOrder(data);
  };
  useEffect(() => {
    if (status) {
      dispatch(setIsOpenCartDrawer(true));
    }
  }, [status, dispatch]);

  return (
    <div className="text-right">
      <div className="relative w-[253px] h-[197px] mb-2">
        <Link to={`/product/${id}`}>
          <img
            src={`${BASE_URL_SITE}/Images/${firstImage}`}
            alt={title}
            className="cursor-pointer !object-contain"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = placeholderImage;
            }}
          />
        </Link>
        <span className="bg-primary text-white font-bold text-xs p-0.5 pr-2 pl-2 rounded-lg absolute top-0 right-0 leading-[22px]">
          {toPersianNumbersWithComma(discountPercent)} %
        </span>
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
          className="text-[16px] text-accent font-[600] hover:text-primary hover:cursor-pointer"
          title={title}
        >
          {truncateText(title, 30)}
        </Link>
      </div>
      <div className="mt-2 relative">
        <span className="text-primary font-bold text-xl">
          {toPersianNumbersWithComma(priceAfterDiscount)} تومان
        </span>
        <del className="text-md font-bold text-gray-300">
          {toPersianNumbersWithComma(price)} تومان
        </del>
        <div className="absolute w-full flex items-center justify-between mt-3 top-[-23px] group-hover:top-0 group-hover:relative transition-all duration-200">
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
  );
};
export default Product;
