import http from "./httpService"

export const  getProducts = (data:object)=>{
    return http.post("Product/GetProduct",data).then(({data})=>  data.data)
}
export const  getDetailProduct = (data:object)=>{
    return http.post("Product/GetDetail",data).then(({data})=>  data.data)
}