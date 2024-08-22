import { useParams } from "react-router-dom";
import ItemProduct from "../product/ItemProduct";
import Select from "react-select";
import { useEffect, useState, useRef, useCallback } from "react";
import { FaSort } from "react-icons/fa";
import ProductSkeleton from "../SpecialSale/ProductSkeleton";
import { useQueryClient } from "@tanstack/react-query";
import useGetProduct from "../product/useGetProduct";

const options = [
  { value: 0, label: "مرتب سازی براساس : ارزانترین" },
  { value: 1, label: "مرتب سازی براساس : گرانترین" },
  { value: 2, label: "مرتب سازی براساس : بیشترین تخفیف" },
  { value: 3, label: "مرتب سازی براساس : جدیدترین" },
];

type Product = {
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

const TestShop = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState(0);
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const sentinelRef = useRef<HTMLDivElement>(null);

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
  formData.append("page", JSON.stringify(page));

  const { products, productGetting } = useGetProduct({ formData, order });

  useEffect(() => {
    if (id) {
      queryClient.invalidateQueries({
        queryKey: ["product"],
      });
      setPage(1); // بازنشانی شماره صفحه به 1
    }
  }, [id, queryClient]);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <p className="flex items-center">
          <FaSort />
          فیلتر
        </p>
        <Select
          defaultValue={options[0]}
          options={options}
          className="w-[300px] text-md"
          onChange={(data) => {
            setOrder(data?.value ?? 0);
            setPage(1);
            queryClient.invalidateQueries({
              queryKey: ["product"],
            });
          }}
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-32 mt-5 items-start">
        {products?.products?.length > 0 ? (
          products.products.map((product: Product) => (
            <div key={product.id}>
              <ItemProduct {...product} />
            </div>
          ))
        ) : (
          !productGetting && <p>No products found.</p>
        )}
      </div>
      {productGetting && (
        <div className="flex justify-between mb-32 mt-5">
          <ProductSkeleton style={"border p-3 rounded-lg"} />
          <ProductSkeleton style={"border p-3 rounded-lg"} />
          <ProductSkeleton style={"border p-3 rounded-lg"} />
          <ProductSkeleton style={"border p-3 rounded-lg"} />
        </div>
      )}
      {/* Sentinel element for triggering loading more products */}
      <div ref={sentinelRef} style={{ height: "20px" }}></div>
    </div>
  );
};

export default ShopContainer;
