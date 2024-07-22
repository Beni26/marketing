import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../../services/orderService";

const useGetOrder = () => {
    const {data:orders, isLoading:isGettingOrder } = useQuery({
      queryKey: ["my_order"],
      queryFn: getOrder,
    });
    return { isGettingOrder, orders };
  };
  
  export default useGetOrder;
  