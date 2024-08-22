import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/product";

type useGetProductProps ={
  dataProduct: object;
    shouldFetch?:boolean;
    order?:number;
    page?:number
  }
const useGetProduct = ({ dataProduct,shouldFetch,order,page }: useGetProductProps) => {
    const { data, isLoading: productGetting } = useQuery({
      queryKey: ['product', dataProduct,order,page ],
      queryFn: () => getProducts(dataProduct),
      enabled:shouldFetch,
      staleTime: 0, // می‌توانید مدت زمان "تازه" بودن داده‌ها را تعیین کنید

    });
    const products = data ||[]; // مقدار پیش‌فرض به آرایه خالی
    return { products, productGetting };
  };
  
  export default useGetProduct;