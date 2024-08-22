import React, { useState, useEffect } from "react";
import { CartItem } from "./types";
import { toPersianNumbersWithComma } from "../../utils/topersianNumbers";
import { BASE_URL_SITE } from "../../services/httpService";
import { IoCloseSharp } from "react-icons/io5";
import useManageItemsCart from "../../hooks/useManageItemsCart";
import { ThreeDots } from "react-loader-spinner";

interface OrderItemProps {
  item: CartItem;
  isMobile: boolean;
}

export const OrderItem: React.FC<OrderItemProps> = ({ item, isMobile }) => {
  const [count, setCount] = useState(item.count);
  const [pendingCount, setPendingCount] = useState<number | null>(null);
  const { isManaging, manageOrder, isSuccess } = useManageItemsCart();

  const handleUpdateCount = (newCount: number) => {
    if (newCount > item.maxCountReserve) {
      return;
    }
    if (newCount !== count || newCount === 0) {
      // فقط در صورتی که مقدار جدید با مقدار قبلی متفاوت باشد
      setPendingCount(newCount);
      const data = {
        ProductId: item.productId,
        Count: newCount,
      };
      // const formData = new FormData();
      // formData.append("body", JSON.stringify(data));
      manageOrder(data);
    }
  };
  useEffect(() => {
    if (isSuccess && pendingCount !== null) {
      setCount(pendingCount);
      setPendingCount(null);
    }
  }, [isSuccess, pendingCount]);

  return (
    <>
      {!isMobile ? (
        <tr className="border-b text-center " key={item.id}>
          <td
            className="p-4 cursor-pointer "
            onClick={() => handleUpdateCount(0)}
          >
            <IoCloseSharp className="mx-auto" />
          </td>
          <td className="p-4">
            <div className="flex items-center text-sm">
              <img
                src={`${BASE_URL_SITE}/Images/${item.productFirstImage}`}
                className="w-14 h-14"
                alt="product"
              />
              <span className="ml-2">{item.productTitle}</span>
            </div>
          </td>
          <td className="p-4">{toPersianNumbersWithComma(item.price)} تومان</td>
          <td className="p-4">
            <div className="flex items-center justify-center">
              <button
                className="flex items-center justify-center w-10 h-11 border border-cl_border rounded-r-md bg-white"
                onClick={() => handleUpdateCount(count + 1)}
              >
                +
              </button>
              <div className="flex items-center justify-center w-11 h-11 border-t border-b border-cl_border  font-bold text-sm">
                {isManaging && pendingCount !== 0 ? (
                  <span className="w-full p-2">
                    <ThreeDots color="#ee384e" />
                  </span>
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    <span>
                      {toPersianNumbersWithComma(
                        count === 0 ? item.count : count
                      )}
                    </span>
                    {count === item.maxCountReserve && (
                      <span className="text-xs">حداکثر</span>
                    )}
                  </div>
                )}
              </div>
              <button
                className="flex items-center justify-center w-10 h-11 border border-cl_border rounded-l-md bg-white"
                onClick={() => handleUpdateCount(count > 1 ? count - 1 : 1)}
              >
                -
              </button>
            </div>
          </td>
          <td className="p-4 whitespace-nowrap w-36">
            {toPersianNumbersWithComma(item.pricePay * count)} تومان
          </td>
        </tr>
      ) : (
        <div className="flex items-center  mb-4 md:hidden border-b-2 border-red-400">
          <img
            src={`${BASE_URL_SITE}/Images/${item.productFirstImage}`}
            className="w-16 h-16"
            alt="product"
          />
          <div className="w-full">
            <div className="flex justify-between w-full border-b  border-cl_border items-center p-4">
              <div className="w-1/2">{item.productTitle}</div>
              <div className="w-1/2 flex justify-end">
                <IoCloseSharp onClick={() => handleUpdateCount(0)} />
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
                  className="flex items-center justify-center w-11 h-11 border border-cl_border rounded-r-md bg-white"
                  onClick={() => handleUpdateCount(count + 1)}
                >
                  +
                </button>

                <div className="flex items-center justify-center w-11 h-11 border-t border-b border-cl_border  font-bold text-sm">
                  {isManaging && pendingCount !== 0 ? (
                    <span className="w-full p-2">
                      <ThreeDots color="#ee384e" />
                    </span>
                  ) : (
                    <div className="flex flex-col justify-center items-center">
                      <span>
                        {toPersianNumbersWithComma(
                          count === 0 ? item.count : count
                        )}
                      </span>
                      {count === item.maxCountReserve && (
                        <span className="text-xs">حداکثر</span>
                      )}
                    </div>
                  )}
                </div>

                <button
                  className="flex items-center justify-center w-11 h-11 border border-cl_border rounded-l-md bg-white"
                  onClick={() => handleUpdateCount(count > 1 ? count - 1 : 1)}
                >
                  -
                </button>
              </div>
            </div>

            <div className="flex justify-between  p-4">
              <span>جمع جزء</span>
              <span>
                {toPersianNumbersWithComma(item.pricePay * item.count)} تومان
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
