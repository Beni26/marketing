import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/product";

type useGetProductProps ={
    formData: FormData;
    shouldFetch:boolean
  }
const useGetProduct = ({ formData,shouldFetch }: useGetProductProps) => {
    const { data, isLoading: productGetting } = useQuery({
      queryKey: ['product', formData],
      queryFn: () => getProducts(formData),
      enabled:shouldFetch,
      cacheTime: 0,

    });
    const products = data ||[]; // مقدار پیش‌فرض به آرایه خالی
    return { products, productGetting };
  };
  
  export default useGetProduct;