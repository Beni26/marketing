import { useParams } from "react-router-dom";
import useGetProduct from "../product/useGetProduct";
import ItemProduct from "../product/ItemProduct";
import Select from "react-select";
import { useEffect, useRef, useState } from "react";
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
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState<product[]>([]);
  const [loadingMore, setLoadingMore] = useState(false); // حالت برای لودینگ بیشتر
  const [isObserverActive, setIsObserverActive] = useState(true);
  const queryClient = useQueryClient();
  const finishRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id) {
      queryClient.invalidateQueries({
        queryKey: ["product"],
      });
      setPage(1);
      setAllProducts([]);
    }
  }, [id, queryClient]);

  // const dataProduct = {
  //   type: 0,
  //   CategoryIds: [id],
  //   // CategoryIds: [
  //   //   "703644d3-7516-4e5c-0ea9-08d899f05edd",
  //   //   "b7bc962b-ad87-4bf9-0eab-08d899f05edd",
  //   //   "1decc85e-6375-46c6-0eaa-08d899f05edd",
  //   //   "6fbea3fa-405d-44d5-0eac-08d899f05edd",
  //   //   "bf6eb9ee-4c6f-46d4-0eae-08d899f05edd",
  //   // ],
  //   brandIds: null,
  //   isDiscount: false,
  //   discountPercent: 0,
  //   productTitle: null,
  // };
const dataProduct = {
  filter: {
    type: 0,
    categoryIds: [id],
    brandIds:null,
    isDiscount: false,
    discountPercent: 0,
    productTitle: null,
  },
  page: page,
  orderType: order
}
  // const formData = new FormData();
  // formData.append("body", JSON.stringify(dataProduct));
  // formData.append("order", JSON.stringify(order));
  // formData.append("page", JSON.stringify(page));

  const { products, productGetting } = useGetProduct({ dataProduct, order, page });
  useEffect(() => {
    if (products && products.products) {
      setAllProducts((prevProducts) => [...prevProducts, ...products.products]);
      setLoadingMore(false); // بعد از دریافت داده‌ها، لودینگ را به false تغییر دهید
  
      // فقط در صورتی که محصولات بیشتری وجود داشته باشد، observer را دوباره فعال کنید
      if (products.products.length > 0) {
        setIsObserverActive(true);
      }
    }
  }, [products]);
  
  useEffect(() => {
    if (!productGetting && isObserverActive) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            console.log("Reached the end of the product list!");
            setLoadingMore(true); // تنظیم لودینگ قبل از درخواست داده جدید
            setPage((prevPage) => prevPage + 1);
            setIsObserverActive(false); // غیرفعال کردن observer تا زمانی که محصولات بارگذاری شوند
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        }
      );
  
      if (finishRef.current) {
        observer.observe(finishRef.current);
      }
  
      return () => {
        if (finishRef.current) {
          observer.unobserve(finishRef.current);
        }
      };
    }
  }, [productGetting, isObserverActive]);

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
          onChange={(data) => {
            setOrder(data?.value ?? 0);
            setPage(1);
            setAllProducts([]);
            setIsObserverActive(true);
          }}
        />
      </div>
      <div className="min-h-screen">
        {productGetting && page === 1 ? (
          <div className="flex justify-between   mb-52 mt-5">
            <ProductSkeleton style={" border p-3 rounded-lg"} />
            <ProductSkeleton style={" border p-3 rounded-lg"} />
            <ProductSkeleton style={" border p-3 rounded-lg"} />
            <ProductSkeleton style={" border p-3 rounded-lg"} />
          </div>
        ) : (
          <div className="grid md:grid-col-3 lg:grid-cols-4 gap-5 mb-52 mt-5 items-start">
            {allProducts.map((product: product) => (
              <div key={product.id}>
                <ItemProduct {...product} />
              </div>
            ))}
            {loadingMore &&
              Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={`loading-${index}`}>
                    <ProductSkeleton style={" border p-3 rounded-lg"} />
                  </div>
                ))}
          </div>
        )}
      </div>
      {!productGetting && !loadingMore && (
        <div ref={finishRef} className="finish"></div>
      )}
    </div>
  );
};

export default ShopContainer;
