import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IoCloseSharp } from "react-icons/io5";
import truncateText from "../../utils/truncateText";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/topersianNumbers";

 type DetailOrders = {
  onSubmit: () => void;
}
const DetailOrders:React.FC<DetailOrders> = ({onSubmit}) => {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1 className=" text-2xl mb-5">سفارش شما</h1>
      <div className="flex justify-between text-lg  pt-5 pb-5 border-b">
        <span>محصول </span>
        <span>جمع جزء</span>
      </div>
      <ul>
        {items.map((item, index) => (
          <li
            className="flex justify-between text-md pt-5 pb-5  border-b"
            key={index}
          >
            <span className="flex items-center gap-1" title={item.title}>
              {truncateText(item.title, 28)} <IoCloseSharp />{" "}
              {toPersianNumbers(item.quantity)}
            </span>
            <span>{toPersianNumbersWithComma(item.price)}تومان</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between text-xl  pt-5 pb-5 border-b mb-10">
        <span>مجموع </span>
        <span>{toPersianNumbersWithComma(totalPrice)} تومان</span>
      </div>
      <div className="text-sm leading-7 text-justify text-accent" >
        اطلاعات شخصی شما برای پردازش سفارش شما، پشتیبانی از تجربه شما در سراسر
        این وب سایت و برای اهداف دیگری که در سیاست حفظ حریم خصوصی ما توضیح داده
        شده است، استفاده خواهد شد.
      </div>
      <button className="bg-primary w-full p-3 text-white rounded-lg mt-5 hover:opacity-55" onClick={()=>onSubmit()}>ثبت سفارش</button>
    </div>
  );
};
export default DetailOrders;
