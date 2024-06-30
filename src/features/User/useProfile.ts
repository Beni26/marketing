import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/profileService";

const useProfile = () => {
    const { data, isLoading } = useQuery({
      queryKey: ["profile"],
      queryFn: getProfile,
    });
    return { isLoading, data };
  };
  
  export default useProfile;
  