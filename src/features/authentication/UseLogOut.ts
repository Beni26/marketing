import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { logoutSuccess } from "./authSlice";

const UseLogOut = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logout = () => {
        Cookies.remove('securityKey')
        Cookies.remove('token')
        dispatch(logoutSuccess());
        queryClient.removeQueries();
        navigate("/",{replace:true})
    };

    return logout;
};

export default UseLogOut;
