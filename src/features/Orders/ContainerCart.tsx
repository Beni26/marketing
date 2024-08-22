import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CartTable from "./CartTable";
import { Discount } from "./Discount";
import TotalCart from "./TotalCart";
import { Link } from "react-router-dom";
import EmptyBag from "../../assets/images/empty-cart.svg";

import useGetCart from "./useGetCart";





const ContainerCart = () => {
  // const items = useSelector((state: RootState) => state.cart.items);
  const CheckLogin = useSelector((state: RootState) => state.auth.isLoggedIn);

  const discount ={data:null};
  // const formData = new FormData();
  // formData.append("body", JSON.stringify(data));
  const { cartItems } = useGetCart({discount,CheckLogin});
  return (
    <>
      {cartItems.orderItems.length > 0 ? (
        <div className="grid lg:grid-cols-9 gap-5">
          <div className="col-span-9 lg:col-span-6 overflow-x-auto">
            <CartTable cartItems={cartItems} />
            <div className="grid ">
              <Discount />
              <div></div>
            </div>
          </div>

          <div className="col-span-9 lg:col-span-3">
            <TotalCart totalPrice={cartItems.pricePay} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center  w-full text-center m-auto gap-5">
          <img
            src={EmptyBag}
            alt=""
            className="w-80 pr-5"
          />
          <p className="text-xl">سبد خرید شما در حال حاضر خالی است.</p>
          <Link to="/" className="bg-primary hover:opacity-80  w-[150px] p-3 text-center text-white rounded-md ">
            بازگشت
          </Link>
        </div>
      )}
    </>
  );
};
export default ContainerCart;
