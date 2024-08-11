import { IoCloseSharp } from "react-icons/io5";
import CartItem from "./CartItem";
import { toPersianNumbersWithComma } from "../../utils/topersianNumbers";
import { Link } from "react-router-dom";

type CartItem = {
  productId: string;
  productTitle: string;
  price: number;
  count: number;
  productFirstImage: string;
  pricePayForShow: string;
  pricePay: number;
  id: string;
};

type cartsTyps = {
  orderStatus: number;
  price: number;
  discountPrice: number;
  pricePay: number;
  discountCode: string;
  addressName: null;
  fullLocation: null;
  latitude: null;
  longitude: null;
  addressTel: null;
  addressFullName: null;
  orderItems: CartItem[];
}



type CartDrawerProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  carts: cartsTyps;
};

const CartDrawer: React.FC<CartDrawerProps> = ({ setIsOpen, carts }) => {
  const {orderItems}= carts
  return (
    <div className="h-full flex flex-col">
      <div className="w-full flex border-b h-14 items-center pt-8 pb-8 justify-between">
        <p className="flex items-center justify-center pr-5 text-accent font-bold relative h-full content-center after:transition-all after:ease-in-out after:duration-200 after:absolute after:bottom-0 after:h-[2px] after:bg-primary">
          سبد خرید
        </p>
        <div
          className="w-8 h-8 flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <IoCloseSharp />
        </div>
      </div>
      <div className="flex-grow flex flex-col">
        {orderItems && orderItems.length > 0 ? (
          <div className="flex-grow flex flex-col">
            <div className="overflow-y-auto flex-grow" style={{ maxHeight: '70vh' }}>
              {orderItems.map((cart, index) => (
                <div className={`border-b border-cl_border`} key={index}>
                  <CartItem item={cart} />
                </div>
              ))}
            </div>
            <div className="">
              <div className="p-4">
                <div className="flex justify-between mb-5 text-lg">
                  <span>جمع جزء :</span>
                  <span className="text-primary ml-2 font-bold">
                    {toPersianNumbersWithComma(carts.pricePay)} تومان
                  </span>
                </div>
                <Link
                  to="/cart"
                  className="w-full block bg-gray-100 hover:bg-gray-200 p-2 text-center mb-2 rounded-md text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  مشاهده سبد خرید
                </Link>
                <Link
                  to="/checkout"
                  className="w-full block bg-primary hover:opacity-80 p-2 text-center text-white rounded-md text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  تسویه حساب
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <p className="w-full p-5 text-center text-xl text-accent">
            هیچ محصولی در سبد خرید نیست.
          </p>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
