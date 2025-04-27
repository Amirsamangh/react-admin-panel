import httpService from "./httpService"

export const getAllDiscountsService = () =>{
    return httpService('/admin/discounts' , 'get')
}

export const addDiscountCodeService = (data)=>{
    return httpService('/admin/discounts' , 'post' , data)
}

export const getOneDiscountService = (discountId) =>{
    return httpService(`/admin/discounts/${discountId}` , 'get')
}

export const editDiscountService = (discountId , data)=>{
    return httpService(`/admin/discounts/${discountId}` , 'put' , data)
}

export const deleteDiscountService = (discountId)=>{
    return httpService(`/admin/discounts/${discountId}` , 'delete')
}