import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editProfile } from "../../../services/profileService";

const useEditProfile = () => {
  const queryClinet = useQueryClient();
  const { isPending: isEditing, mutate: profileEdit } = useMutation({
    mutationFn: editProfile,
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClinet.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => console.log(err)
  });
  return { isEditing, profileEdit };
};

export default useEditProfile;
