import { Link } from "react-router-dom";
import useGetOrder from "./useGetOrder";
import Tabs from "./Tabs";

const OrderContainer = () => {
  const { isGettingOrder, orders } = useGetOrder();
  const tabs = [
    { label: "جاری", status: 1 },
    { label: "پرداخت  شده ", status: 3 },
    { label: "  لغو شده ", status: 11 },
  ];
  if (isGettingOrder) {
    return <div>در حال بارگذاری...</div>;
  }

  if (!orders || orders.length === 0) {
    return <EmptyOrders />;
  }
  return (
    <div>
      <Tabs tabs={tabs} orders={orders} />
    </div>
  );
};
export default OrderContainer;

export const EmptyOrders = () => {
  return (
    <div className="flex justify-between bg-primary text-white rounded border-r-[5px] border-red-700 border-x-2 font-bold">
      <div className="p-4">هیچ سفارشی هنوز ثبت نشده است.</div>
      <div className="p-4 flex items-center gap-5 cursor-pointer">
        | <Link to="/shop">مرور محصولات</Link>
      </div>
    </div>
  );
};
