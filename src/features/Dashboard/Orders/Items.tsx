import { TiTick } from "react-icons/ti";
import { Items as OrderItems } from "./Tabs";

type ItemsProps = {
  filteredOrder:OrderItems
}
const Items:React.FC<ItemsProps> = ({ filteredOrder }) => {
  return (
    <div>
      <div className="flex gap-2 text-sm font-semibold text-accent">
        <span className="flex items-center justify-center text-white w-5 h-5 rounded-full bg-green-500">
          <TiTick />
        </span>
        تحویل داده شده
      </div>
      <div className="text-sm flex justify-around mt-3">
        <span>تاریخ : {filteredOrder.datePaymentFa} </span>
        <span>کد سفارش : {filteredOrder.numberTracking}</span>
        <span>مبلغ : {filteredOrder.pricePayForShow}</span>
        <span>تخفیف : {filteredOrder.discountPriceForShow}</span>
      </div>
      <div>
        {filteredOrder.orderItems.map((item,index) => (
          <img
            src={item.productFirstImage} key={index}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; 
              currentTarget.src =
                "https://dkstatics-public.digikala.com/digikala-products/571e2a8fa27397118e6bc424538675d5739b031a_1680936949.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80";
            }}
            alt=""
            className="w-20 mt-5"
          />
        ))}
      </div>
    </div>
  );
};
export default Items;
