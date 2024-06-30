import http from "./httpService"

export const getHome = ()=>{
    return http.post("Home/GetHome").then(({data})=>  data.data)
}