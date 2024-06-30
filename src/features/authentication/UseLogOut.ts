import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const UseLogOut = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate()

    const logout = () => {
        Cookies.remove('token')
        queryClient.removeQueries();
        navigate("/auth",{replace:true})
    };

    return logout;
};

export default UseLogOut;
