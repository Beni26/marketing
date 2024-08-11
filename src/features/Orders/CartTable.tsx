import { cartsTyps } from "./types";
import { OrderItem } from "./OrderItem";

type CartTableProps = {
  cartItems: cartsTyps;
};
const CartTable: React.FC<CartTableProps> = ({ cartItems }) => {
  const { orderItems } = cartItems;

  // const items = useSelector((state: RootState) => state.cart.items);
  // const dispatch = useDispatch();
  // const handleIncrement = (id: number) => {
  //   const item = items.find((item) => item.id === id);
  //   if (item) {
  
  // const handleDecrement = (id: number) => {
  //   const item = items.find((item) => item.id === id);
  //   if (item && item.quantity > 1) {
  //     dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
  //   }
  // };

  // const handleRemove = (id: number) => {
  //   dispatch(removeItem(id));
  // };

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
          {orderItems.map((item, index) => (
            <OrderItem item={item} key={index} isMobile={false} />
          ))}
        </tbody>
      </table>

      {orderItems.map((item, index) => (
        <OrderItem item={item} key={index} isMobile={true} />
      ))}
    </div>
  );
};

export default CartTable;
