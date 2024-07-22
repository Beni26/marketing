import React, { useState,  useEffect } from "react";
import orderEmpty from "../../../assets/images/order-empty.svg" 
import Items from "./Items";


type TabProps = {
  label: string;
  status: number;
};
export type Items ={
  orderStatus:number
  datePaymentFa:string;
  numberTracking:string;
  pricePayForShow:string;
  discountPriceForShow:string;
  orderItems:{productFirstImage:string}[];
  id:number;
  
}
type TabsProps = {
  tabs: TabProps[];
  orders: Items[];
};

const Tabs: React.FC<TabsProps> = ({ tabs, orders }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [filteredOrders, setFilteredOrders] = useState<Items[]>([]); 

  useEffect(() => {
    const status = tabs[selectedTab].status;
    const filtered = orders.filter((order) => order?.orderStatus === status);
    setFilteredOrders(filtered);
  }, [selectedTab, orders, tabs]);

  const getOrderCount = (status: number) => {
    return orders.filter((order) => order?.orderStatus === status).length;
  };
  return (
    <div>
      <ul className="flex gap-4 mt-10 justify-around border-b">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`cursor-pointer relative p-3 transition-all ${
              selectedTab === index
                ? "border-b-2 border-primary"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => setSelectedTab(index)}
          >
            <div className="flex items-center gap-2 justify-center">
              <span>{tab.label}</span>
              <div
                className={`${
                  selectedTab === index ? "bg-primary" : "bg-gray-300 "
                }           flex items-center justify-center  px-2 text-sm  text-white h-7 rounded-md`}
              >
                <span>{getOrderCount(tab.status)}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((filteredOrder) => (
            <div key={filteredOrder.id} className="p-4 border-b">
              <Items filteredOrder={filteredOrder} />
            </div>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src={orderEmpty} width="200px"
              alt=""
            />
            <p>هیچ سفارشی یافت نشد.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
