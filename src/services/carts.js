import httpService from "./httpService"

export const  getAllPaginatedCartsService = (page , countOnPage , searchChar)=>{
    return httpService(`/admin/carts?page=${page}&count=${countOnPage}&searchChar=${searchChar}` , 'get')
}
 
export const  addNewCartService = (data)=>{
    return httpService('/admin/carts' , 'post' , data)
}
 
export const  getOneCartService = (cartId)=>{
    return httpService(`/admin/carts/${cartId}` , 'get')
}
 
export const  updateCartsService = (cartId , data)=>{
    return httpService(`/admin/carts/${cartId}` , 'put' , data)
}
 
export const  deleteCartService = (cartId)=>{
    return httpService(`/admin/carts/${cartId}` , 'delete')
}
 