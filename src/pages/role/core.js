import * as Yup from 'yup'
import { addNewRoleService } from '../../services/users'
import { Alert } from '../../utils/alerts'

export const initialValues = {}

export const validationSchema = Yup.object({

})

export const onSubmit = (values , actions , roleToEdit) =>{
    if(roleToEdit) {

    } else {
        const res = addNewRoleService(values)
        if(res.status === 201) {
            Alert('موفق' , res.data.message , 'success')
            actions.resetForm()
        }
    }
}