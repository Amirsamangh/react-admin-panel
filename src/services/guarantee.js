import httpService from "./httpService"

export const getAllGuaranteesService = () => {
    return httpService('/admin/guarantees', 'get')
}

export const addNewGuaranteeService = (data) => {
    return httpService('/admin/guarantees', 'post', data)
}

export const editGuaranteeService = (id , data)=>{
    return httpService(`/admin/guarantees/${id}` , 'put' , data)
}

export const deleteGuaranteeService = (id) => {
    return httpService(`/admin/guarantees/${id}`, 'delete')
}