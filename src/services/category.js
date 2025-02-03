import httpService from "./httpService";


export const getCategoriesService = (id = null)=>{
    return httpService(`/admin/categorises${id ? `?parent=${id}` : ''}` , 'get')
} 