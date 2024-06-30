import http from "./httpService"

export const getProfile = ()=>{
    return http.post("Profile/GetProfile").then(({data})=>  data.data)
}
