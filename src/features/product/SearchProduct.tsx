import  { useEffect, useState } from "react";
import SearchField from "../../ui/SearchField";
import useGetProduct from "./useGetProduct";

const SearchProduct = () => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(false);

  // به‌روزرسانی formData با inputValue
  const dataProduct = {
    type: 0,
    CategoryIds: null,
    brandIds: null,
    isDiscount: false,
    discountPercent: 0,
    productTitle: inputValue, // استفاده از inputValue برای عنوان محصول
  };

  const formData = new FormData();
  formData.append("body", JSON.stringify(dataProduct));
  formData.append("order", JSON.stringify(0));
  formData.append("page", JSON.stringify(1));

  // استفاده از useGetProduct
  const { products, productGetting } = useGetProduct({ formData, shouldFetch });

  useEffect(() => {
    // وقتی products تغییر می‌کند، گزینه‌ها را به‌روزرسانی کنید
    if (!productGetting && shouldFetch) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newOptions = products.products.map((item: any, index:number) => ({
        label: item.title,
        value: item.id,
        image: item.firstImage,
        index:++index,
        id:item.id
      }));
      setOptions(newOptions);
      setShouldFetch(false); // Reset fetching flag
    }
  }, [products, productGetting, shouldFetch]);

  // تابع loadOptions
  const loadOptions = async (input: string) => {
    setInputValue(input);
    setShouldFetch(true);
    return options;
  };

  return (
    <div>
      <SearchField loadOptions={loadOptions} />
    </div>
  );
};

export default SearchProduct;
