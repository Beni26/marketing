import {  useMutation, useQueryClient } from '@tanstack/react-query';
import { manageItem } from '../services/orderService';
import toast from 'react-hot-toast';


const useManageItemsCart= ()=>{
    const queryClient = useQueryClient()
    const {isPending: isManaging, mutate:manageOrder, data,isSuccess}= useMutation({
        mutationFn:manageItem,
        onSuccess:()=>{
            // toast.success(data.message)
            queryClient.invalidateQueries({
                queryKey: ["ordersCart"],
            });
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError:(err:any)=> {
            toast.error(err?.response.data.Message)
        }
      
    })
    const status = data?.isSuccess || false
    return { isManaging, manageOrder,status,data,isSuccess };

}

export default useManageItemsCart;


