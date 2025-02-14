import httpService from "./httpService"

export const getAllBrandsService = () => {
    return httpService('/admin/brands', 'get')
};

export const addNewBrandsService = (data) => {
    if(data.logo) {
        let formData = new FormData();
        formData.append('original_name' , data.original_name);
        formData.append('persian_name' , data.persian_name);
        formData.append('descriptions' , data.descriptions);
        formData.append('logo' , data.logo);
        data = formData;
    }
    return httpService('/admin/brands' , 'post' , data)
};