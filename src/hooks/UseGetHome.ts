import {useQuery } from '@tanstack/react-query';
import { getHome } from '../services/homeService';




const useGetHome = () => {
  const {data, isLoading}=  useQuery({
      queryKey:["owner-project"],
      queryFn:getHome,
  })
  const {categories,discounts,specials,productBoxDtos,sliders} = data || [];
  return {isLoading, categories,discounts,specials,productBoxDtos,sliders}
  
}

export default useGetHome;