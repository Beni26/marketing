import { useMutation, useQuery } from '@tanstack/react-query';
import { getUser } from '../../services/authService';


const useUser= () => {
   const {data, isLoading}= useQuery({
    queryKey:['user'],
    queryFn:getUser,
    retry:false
   })
    return {isLoading, data}
}

export default useUser
