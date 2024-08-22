import { useQuery } from "@tanstack/react-query"
import { getCart } from "../../services/orderService"

// const useGetCart = () => {
//  const {data:cartItems,isLoading:cartGetting} = useQuery({
//     queryKey:['ordersCart'],
//     queryFn:getCart
//  })
//  return {cartItems, cartGetting}
// }
// export default useGetCart


// const useGetCart = () => {
//   const queryClient = useQueryClient();

//   const { mutate: fetchCart, data, isPending: cartGetting } = useMutation({
//     mutationKey: ['ordersCart'],
//     mutationFn: getCart,
//   });

//   const cartItems = data?.orderItems || []; // مقدار پیش‌فرض به آرایه خالی

//   return { fetchCart, cartItems, cartGetting };
// }

// export default useGetCart;

type useGetCartProps ={
  discount: object;
  CheckLogin:boolean;
}
const useGetCart = ({ discount, CheckLogin }: useGetCartProps) => {
  const { data, isLoading: cartGetting } = useQuery({
    queryKey: ['ordersCart', discount],
    queryFn: () => getCart(discount),
    enabled:CheckLogin
  });
  const cartItems = data || { orderItems: [] }; // مقدار پیش‌فرض به آرایه خالی
  return { cartItems, cartGetting };
};

export default useGetCart;