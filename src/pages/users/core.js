import * as Yup from 'yup'
import { addNewUserService, editUserSevice } from '../../services/users'
import { convertDateToJalali } from '../../utils/convertDate'
import { Alert } from '../../utils/alerts'
import { useNavigate } from 'react-router-dom'


export const initialValues = {
    user_name: '',
    first_name: '',
    last_name: '',
    phone: '',
    national_code: '',
    email: '',
    password: '',
    birth_date: '',
    gender: 1,
    roles_id: [],
}

export const onSubmit = async (values, actions, setData, userId , navigate) => {
    values = { ...values, birth_date: values.birth_date ? convertDateToJalali(values.birth_date, 'jD / jM / jYYYY') : null }

    if (userId) {

    } else {
        const res = await addNewUserService(values)
        if (res.status === 201) {
            Alert('انجام شد' , res.data.message , 'success')
            actions.resetForm()
            setData(old=>[...old , res.data.data])
            navigate('/users')
        }
    }
}

export const validationSchema = Yup.object().shape({
    user_name: Yup.string().required('لطفا این قسمت را پر کنید').matches(/^[u0600-\u06FF\sa-zA-Z0-9@!%&-.?]+$/, 'فقط از حروف فارسی و لاتین و اعداد استفاده شود'),
    first_name: Yup.string().matches(/^[u0600-\u06FF\sa-zA-Z]+$/, 'فقط از حروف فارسی و لاتین استفاده شود'),
    last_name: Yup.string().matches(/^[u0600-\u06FF\sa-zA-Z]+$/, 'فقط از حروف فارسی و لاتین استفاده شود'),
    phone: Yup.number().typeError('لطفا فقط از عدد استفاده کنید').required('لطفا این قسمت را پر کنید'),
    national_code: Yup.number().typeError('لطفا کد ملی خود را به درستی وارد کنید').required('لطفا این قسمت را پر کنید'),
    email: Yup.string().email('لطفا از فرمت صحیح ایمیل استفاده کنید'),
    password: Yup.string().required('لطفا این قسمت را پر کنید').matches(/^[u0600-\u06FF\sa-zA-Z0-9@!%&-._?]+$/).min(8, 'حداقل 8 کاراکتر وارد کنید'),
    birth_date: Yup.string().matches(/^[0-9/\ \s-]+$/, 'فقط از اعداد و خط تیره استفاده شود'),
    gender: Yup.number(),
    roles_id: Yup.array().min(1, 'حد اقل یک مورد را انتخاب کنید'),
})