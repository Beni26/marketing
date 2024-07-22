import { IoCloseSharp } from "react-icons/io5";
import { toPersianNumbersWithComma } from "../../utils/topersianNumbers";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

const CartTable = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (id: number) => {
    const item = items.find((item) => item.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrement = (id: number) => {
    const item = items.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <table className="table-auto w-full mb-5 hidden md:inline-table">
        <thead className="text-sm">
          <tr className="border-b">
            <th className="p-4">حذف ایتم</th>
            <th className="p-4">محصول</th>
            <th className="p-4">قیمت</th>
            <th className="p-4">تعداد</th>
            <th className="p-4">جمع جزء</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr className="border-b" key={item.id}>
              <td className="p-4">
                <IoCloseSharp onClick={() => handleRemove(item.id)} />
              </td>
              <td className="p-4">
                <div className="flex items-center text-sm">
                  <img
                    src={item.productFirstImage}
                    className="w-14 h-14"
                    alt="product"
                  />
                  <span className="ml-2">{item.title}</span>
                </div>
              </td>
              <td className="p-4">
                {toPersianNumbersWithComma(item.price)} تومان
              </td>
              <td className="p-4">
                <div className="flex items-center justify-center">
                  <button
                    className="flex items-center justify-center w-9 h-10 border border-cl_border rounded-r-md bg-white"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                  <div className="flex items-center justify-center w-9 h-10 border-t border-b border-cl_border bg-gray-100 text-sm">
                    {toPersianNumbersWithComma(item.quantity)}
                  </div>
                  <button
                    className="flex items-center justify-center w-9 h-10 border border-cl_border rounded-l-md bg-white"
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                </div>
              </td>
              <td className="p-4 whitespace-nowrap w-36">
                {toPersianNumbersWithComma(item.price * item.quantity)} تومان
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      {items.map((item,index) => (
        <div className="flex items-center  mb-4 md:hidden border-b-2 border-red-400" key={index}>
          <img
            src={item.productFirstImage}
            className="w-16 h-16"
            alt="product"
          />
          <div className="w-full">
            <div className="flex justify-between w-full border-b  border-cl_border items-center p-4">
              <div className="w-1/2">{item.title}</div>
              <div className="w-1/2 flex justify-end">
                <IoCloseSharp onClick={() => handleRemove(item.id)} />
              </div>
            </div>
            <div className="flex justify-between border-b border-cl_border p-4">
              <span>قیمت</span>
              <span> {toPersianNumbersWithComma(item.price)} تومان</span>
            </div>
            <div className="flex justify-between border-b  border-cl_border p-4">
              <span>تعداد</span>
              <div className="flex items-center justify-center">
                <button
                  className="flex items-center justify-center w-9 h-10 border border-cl_border rounded-r-md bg-white"
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </button>
                <div className="flex items-center justify-center w-9 h-10 border-t border-b border-cl_border bg-gray-100 text-sm">
                  {toPersianNumbersWithComma(item.quantity)}
                </div>
                <button
                  className="flex items-center justify-center w-9 h-10 border border-cl_border rounded-l-md bg-white"
                  onClick={() => handleDecrement(item.id)}
                >
                  -
                </button>
              </div>
            </div>
            <div className="flex justify-between  p-4">
              <span>جمع جزء</span>
              <span>
                {toPersianNumbersWithComma(item.price * item.quantity)} تومان
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartTable;
