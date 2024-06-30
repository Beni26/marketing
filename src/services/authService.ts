import http from "./httpService"

export const getOtp = (data:object)=>{
    return http.post("Account/ConfirmSms",data)
}
export const checkOtp = (data:object)=>{
    return http.post("Account/ConfirmSms",data)
}
export const login = (data:object)=>{
    return http.post("Account/Login",data)
}
export const getUser = ()=>{
    return http.post("Profile/GetProfile")
}