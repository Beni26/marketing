import { Link } from "react-router-dom";
import { toPersianNumbersWithComma } from "../../utils/topersianNumbers";



type TotalCartProps = {
  totalPrice:number
}
const TotalCart:React.FC<TotalCartProps> = ({totalPrice}) => {


  return (
    <div className="border border-cl_border rounded-lg p-7 space-y-5">
      <h3>جمع کل سبد خرید</h3>
      <div className="flex justify-between border-b pb-6 text-lg">
        <span>جمع جزء</span>
        <span>{toPersianNumbersWithComma(totalPrice)} تومان</span>
      </div>
      <div className="flex justify-between pb-4 text-lg">
        <span>مجموع</span>
        <span className=" font-bold text-2xl">
          {toPersianNumbersWithComma(totalPrice)} تومان
        </span>
      </div>
      <Link
        to="/checkout"
        className="w-full block bg-primary hover:opacity-80 p-4 text-center text-white rounded-md text-sm"
      >
        ادامه جهت تسویه حساب
      </Link>
    </div>
  );
};
export default TotalCart;
