import { useQuery } from '@tanstack/react-query';
import { getDetailProduct } from '../../services/product';

type UseGetDetailProductProps = {
  ProductId: object;
};

const useGetDetailProduct = ({ ProductId }: UseGetDetailProductProps) => {
  const { data: singleProduct, isLoading: gettingProduct } = useQuery({
    queryKey: ['Detail_Product', ProductId], // Changed to use `id` directly
    queryFn: () => {
      // const formData = new FormData();
      // formData.append("body", id);
      return getDetailProduct(ProductId);
    },
  });

  return { singleProduct, gettingProduct };
};

export default useGetDetailProduct;
