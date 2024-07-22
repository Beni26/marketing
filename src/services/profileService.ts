import http from "./httpService"

export const getProfile = ()=>{
    return http.post("Profile/GetProfile").then(({data})=>  data.data)
}

export const editProfile = (data:object)=>{
    return http.post("Profile/EditProfile",data)
}
