import http from "./httpService"

export const getOrder = ()=>{
    return http.post("order/GetOrder").then(({data})=>  data.data)
}