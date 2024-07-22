import { IoCloseSharp } from "react-icons/io5";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/topersianNumbers";
import { useDispatch } from "react-redux";
import { removeItem } from "./CartSlice";
import truncateText from "../../utils/truncateText";

type CartProps = {
  item: { id: number; title: string; price: number; quantity: number,productFirstImage:string };
};

const CartItem: React.FC<CartProps> = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="pt-4 pb-4 pr-7 pl-7 relative">
      <div className="flex items-center gap-5">
        <div className="rounded-xl border w-14 h-14">
          <img
            src={item.productFirstImage}
            alt="cart"
            className="h-full"
          />
        </div>
        <div>
          <h5 className="text-sm font-bold text-accent mb-2" title={item.title}>{truncateText(item.title,35) }</h5>
          <p className="flex gap-2 text-sm font-bold ">
            <span>{toPersianNumbers(item.quantity)}</span> <IoCloseSharp className="text-accent self-center text-xs" />
            <span className="text-primary">
              {toPersianNumbersWithComma(item.price)} تومان
            </span>
          </p>
        </div>
      </div>
      <div
        className="absolute top-3 left-3 cursor-pointer"
        onClick={() => dispatch(removeItem(item.id))}
      >
        <IoCloseSharp className="text-accent" />
      </div>
    </div>
  );
};

export default CartItem;
