import CartTable from "../features/Orders/CartTable";
import ContainerCart from "../features/Orders/ContainerCart";
import { Discount } from "../features/Orders/Discount";
import TotalCart from "../features/Orders/TotalCart";
import UseCheckOrder from "../hooks/UseCheckOrder";

const Cart = () => {
  return (
    <div className="container xl:max-w-screen-xl mb-20 pl-4 pr-4 md:pl-0 md:pr-0 mt-10">
      {/* <ContainerCart /> */}
      {/* <UseCheckOrder>
        <div className="grid lg:grid-cols-9 gap-5">
          <div className="col-span-9 lg:col-span-6 overflow-x-auto">
            <CartTable />
            <div className="grid ">
              <Discount />
              <div></div>
            </div>
          </div>

          <div className="col-span-9 lg:col-span-3">
            <TotalCart />
          </div>
        </div>

      </UseCheckOrder> */}
      <ContainerCart />

    </div>
  );
};

export default Cart;
