import { useMutation } from '@tanstack/react-query';
import { getUser } from '../../services/authService';


const useUser= () => {
    return useMutation({
        mutationFn: getUser,
        
      });
}

export default useUser
