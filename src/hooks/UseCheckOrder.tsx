import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Link } from "react-router-dom";

type UseCheckOrder = {
  children: React.ReactNode;
};
const UseCheckOrder:React.FC<UseCheckOrder> = ({children}) => {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <>
      {items.length > 0 ? (
         children 
      ) : (
        <div className="flex flex-col justify-center items-center  w-full text-center m-auto gap-5">
          <img
            src="https://i.ibb.co/dB4Bsv4/22533534-removebg-preview.png"
            alt=""
            className="w-80 pr-5"
          />
          <p className="text-xl">سبد خرید شما در حال حاضر خالی است.</p>
          <Link
            to="/"
            className="bg-primary hover:opacity-80  w-[150px] p-3 text-center text-white rounded-md "
          >
            بازگشت
          </Link>
        </div>
      )}
    </>
  );
};
export default UseCheckOrder;
