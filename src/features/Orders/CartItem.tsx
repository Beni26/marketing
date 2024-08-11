import { IoCloseSharp } from "react-icons/io5";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/topersianNumbers";
import truncateText from "../../utils/truncateText";
import { BASE_URL_SITE } from "../../services/httpService";
import useManageItemsCart from "../../hooks/useManageItemsCart";
import { RotatingLines } from "react-loader-spinner";

type CartProps = {
  item: {
    productId: string;
    productTitle: string;
    pricePay: number;
    count: number;
    productFirstImage: string;
    pricePayForShow: string;
    id: string;
  };
};

const CartItem: React.FC<CartProps> = ({ item }) => {
  const { isManaging, manageOrder } = useManageItemsCart();

  const handelDelete = (productId: string) => {
    const data = {
      ProductId: productId,
    };
    const formData = new FormData();
    formData.append("body", JSON.stringify(data));
    manageOrder(formData);
  };

  return (
    <div
      className={` ${
        isManaging ? "after:absolute" : "after:static"
      } pt-4 pb-4 pr-7 pl-7 relative  after:left-0 after:bottom-0 after:w-full after:bg-black after:top-0 after:opacity-40`}
    >
      <div className="flex items-center gap-5">
        <div className="rounded-xl border w-14 h-14 overflow-hidden">
          <img
            src={`${BASE_URL_SITE}/Images/${item.productFirstImage}`}
            alt="cart"
            className="h-full object-contain p-2"
          />
        </div>
        <div>
          <h5
            className="text-sm font-bold text-accent mb-2"
            title={item.productTitle}
          >
            {truncateText(item.productTitle, 35)}
          </h5>
          <p className="flex gap-2 text-sm font-bold ">
            <span>{toPersianNumbers(item.count)}</span>
            <IoCloseSharp className="text-accent self-center text-xs" />
            <span className="text-primary">
              {toPersianNumbersWithComma(item.pricePay)} تومان
            </span>
          </p>
        </div>
      </div>
      <div
        className="absolute top-3 left-3 cursor-pointer"
        onClick={() => handelDelete(item.productId)}
      >
        <IoCloseSharp className="text-accent" />
      </div>
      {isManaging && (
        <div className="absolute flex justify-center w-full h-full right-0 top-0 z-10">
            <RotatingLines
              visible={true}
              width="25"
              strokeWidth="5"
              strokeColor="white"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
            />
        </div>
      )}
    </div>
  );
};

export default CartItem;
