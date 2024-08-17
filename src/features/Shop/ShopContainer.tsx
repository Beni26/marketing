import { useParams } from "react-router-dom";
import useGetProduct from "../product/useGetProduct";
import ItemProduct from "../product/ItemProduct";
import Select from "react-select";
import { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import ProductSkeleton from "../SpecialSale/ProductSkeleton";
import { useQueryClient } from "@tanstack/react-query";

const options = [
  { value: 0, label: " مرتب سازی براساس : ارزانترین " },
  { value: 1, label: " مرتب سازی براساس :گرانترین" },
  { value: 2, label: " مرتب سازی براساس :بیشترین تخفیف" },
  { value: 3, label: " مرتب سازی براساس :جدیدترین" },
];

type product = {
  brandId: string;
  categoryProductId: string;
  count: number;
  currentReserved: number;
  discountPercent: number;
  firstImage: string;
  id: string;
  maxCountReserve: number;
  price: number;
  priceAfterDiscount: number;
  priceAfterDiscountForShow: string;
  priceForShow: string;
  title: string;
};
const ShopContainer = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState(0);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (id) {
      queryClient.invalidateQueries({
        queryKey: ["product"],
      });
    }
  }, [id, queryClient]);
  const dataProduct = {
    type: 0,
    CategoryIds: [id],
    brandIds: null,
    isDiscount: false,
    discountPercent: 0,
    productTitle: null,
  };

  const formData = new FormData();
  formData.append("body", JSON.stringify(dataProduct));
  formData.append("order", JSON.stringify(order));
  formData.append("page", JSON.stringify(1));

  const { products, productGetting } = useGetProduct({ formData, order });

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <p className="flex items-center ">
          <FaSort />
          فیلتر
        </p>
        <Select
          defaultValue={options[0]}
          options={options}
          className="w-[300px] text-md"
          onChange={(data) => setOrder(data?.value ?? 0)}
        />
      </div>
      {productGetting ? (
        <div className="flex justify-between   mb-32 mt-5">
          <ProductSkeleton style={" border p-3 rounded-lg"} />
          <ProductSkeleton style={" border p-3 rounded-lg"} />
          <ProductSkeleton style={" border p-3 rounded-lg"} />
          <ProductSkeleton style={" border p-3 rounded-lg"} />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-5 mb-32 mt-5 items-start">
          {products.products.map((product: product) => (
            <div key={product.id}>
              <ItemProduct {...product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ShopContainer;
