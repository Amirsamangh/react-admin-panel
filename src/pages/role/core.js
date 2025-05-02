import * as Yup from 'yup'
import { addNewRoleService, editRolePermissionsService, editRoleService } from '../../services/users'
import { Alert } from '../../utils/alerts'

export const initialValues = {
    title: '',
    description: '',
    permissions_id: [],
}

export const onSubmit = async (values, actions, setData, roleIdToEdit, editType) => {
    if (roleIdToEdit) {
        if (editType === 'role') {
            const res = await editRoleService(roleIdToEdit , values)
            if(res.status === 200) {
                Alert('انجام شد' , res.data.message , 'success')
                setData(lastData=>{
                    let newData = [...lastData]
                    let index = newData.findIndex(d=> d.id == roleIdToEdit)
                    newData[index] = res.data.data
                    
                    return newData
                })
            }
        } else if (editType === 'permissions') {
            const res = await editRolePermissionsService(roleIdToEdit , values)
            if(res.status === 200) {
                Alert('انجام شد' , res.data.message , 'success')
                setData(lastData=>{
                    let newData = [...lastData]
                    let index = newData.findIndex(d=> d.id == roleIdToEdit)
                    newData[index] = res.data.data
                    
                    return newData
                })
            }
        }
    } else {
        const res = await addNewRoleService(values)
        if (res.status === 201) {
            Alert('موفق', res.data.message, 'success')
            actions.resetForm()
            setData(old => [...old, res.data.data])
        }
    }
}

export const validationSchema = Yup.object().shape({
    title: Yup.string().when('editPermissions', {
        is: true,
        then: null,
        otherwise: t => t.required("لطفا این قسمت را پر کنید")
            .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-_.$?&]+$/, "فقط از حروف و اعداد استفاده شود"),
    }),
    description: Yup.string().when('editPermissions', {
        is: true,
        then: null,
        otherwise: d => d.required("لطفا این قسمت را پر کنید")
            .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-_.$?&]+$/, "فقط از حروف و اعداد استفاده شود"),
    }),
    permissions_id: Yup.array().min(1, "حد اقل یک مورد انتخاب کنید")
})