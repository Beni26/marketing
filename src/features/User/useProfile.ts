import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/profileService";

const useProfile = (shouldFetch:boolean) => {
    const { data, isLoading } = useQuery({
      queryKey: ["profile"],
      queryFn: getProfile,
      enabled: shouldFetch,
    });
    return { isLoading, data };
  };
  
  export default useProfile;
  