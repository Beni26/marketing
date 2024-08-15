import { useQuery } from '@tanstack/react-query';
import { getDetailProduct } from '../../services/product';

type UseGetDetailProductProps = {
  id: string;
};

const useGetDetailProduct = ({ id }: UseGetDetailProductProps) => {
  const { data: singleProduct, isLoading: gettingProduct } = useQuery({
    queryKey: ['Detail_Product', id], // Changed to use `id` directly
    queryFn: () => {
      const formData = new FormData();
      formData.append("body", id);
      return getDetailProduct(formData);
    },
  });

  return { singleProduct, gettingProduct };
};

export default useGetDetailProduct;
