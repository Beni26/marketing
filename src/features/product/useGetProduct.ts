import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/product";

type useGetProductProps ={
    formData: FormData;
    shouldFetch?:boolean;
    order?:number
  }
const useGetProduct = ({ formData,shouldFetch,order }: useGetProductProps) => {
    const { data, isLoading: productGetting } = useQuery({
      queryKey: ['product', formData,order],
      queryFn: () => getProducts(formData),
      enabled:shouldFetch,
      staleTime: 0, // می‌توانید مدت زمان "تازه" بودن داده‌ها را تعیین کنید

    });
    const products = data ||[]; // مقدار پیش‌فرض به آرایه خالی
    return { products, productGetting };
  };
  
  export default useGetProduct;