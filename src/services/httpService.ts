import axios from "axios";
import Cookies from 'js-cookie';
import { TokenBody } from "../features/authentication/type";
import { loginSuccess, logoutSuccess } from "../features/authentication/authSlice";
import { store } from "../store";


export const BASE_URL = "https://tranteestapi.abiports.com/api";
export const BASE_URL_SITE = "https://tranteestapi.abiports.com";
const app = axios.create({
    baseURL:BASE_URL,
    // withCredentials:true,
})

const http = {
    get:app.get,
    post:app.post,
    delete:app.delete,
    put:app.put,
    patch:app.patch,
}

app.interceptors.request.use(
    (config) => {
        const token = Cookies.get("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);




app.interceptors.response.use(
    (res)=>res,
    async(err)=>{
        const originalConfig = err.config;
        if(err.response.status === 401 && !originalConfig._retry){
            originalConfig._retry = true;
            const dispatch = store.dispatch; // استفاده از dispatch از store

            try {
                const securityKey = Cookies.get('securityKey');
                const refreshToken : TokenBody = {
                    securityKey: securityKey || '',
                    deviceType: 1,
                    appVersion: 1,
                    imei: "reza",
                  };
                  const formData = new FormData();
                  formData.append("body", JSON.stringify(refreshToken));
                  const {data} = await axios.post(`${BASE_URL}/Account/Login`,formData)
                
                if(data){
                    const { securityKey,token } = data.data;          
                    Cookies.set("securityKey", securityKey);
                    Cookies.set("token", token);
                    dispatch(loginSuccess());
                    return app(originalConfig)
                } 
            } catch (error) {
                Cookies.remove("securityKey");
                Cookies.remove("token");
                dispatch(logoutSuccess());
                window.location.href = '/auth'

                return Promise.reject(error)
                
            }
        }
        return Promise.reject(err);

    }
);

export default http;
