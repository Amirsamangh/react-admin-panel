import httpService from "./httpService"

export const getCategoryAttrService = (categoryId)=>{
    return httpService(`/admin/categories/${categoryId}/attributes` , 'get')
}