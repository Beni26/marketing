import http from "./httpService"

export const getOrder = ()=>{
    return http.post("order/GetOrder").then(({data})=>  data.data)
}
export const getCart = (data:object)=>{
    return http.post("order/GetCart",data).then(({data})=>  data.data)
}
export const  manageItem = (data:object)=>{
    return http.post("order/AddEditDeleteItem",data).then(({data})=>  data)
}