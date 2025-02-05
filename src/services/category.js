import httpService from "./httpService";


export const getCategoriesService = (id = null)=>{
    return httpService(`/admin/categories${id ? `?parent=${id}` : ''}` , 'get')
} 

export const createNewCategoryService = (data)=>{
    if(data.image) {
        let formData = new FormData();

        formData.append('parent_id')
        formData.append('title')
        formData.append('description')
        formData.append('image')
        formData.append('is_active')
        formData.append('show_in_menu')

        data = formData
    }

    return httpService('/admin/categories' , 'post' , data)
}