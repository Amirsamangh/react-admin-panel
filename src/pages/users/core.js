import * as Yup from 'yup'

export const initialValues = {
    user_name: '',
    first_name: '',
    last_name: '',
    phone: '',
    national_code: 0,
    email: '',
    password: '',
    birth_date: '',
    gender: true,
    roles_id: [],
}

export const onSubmit = (values, actions) => { }

export const validationSchema = Yup.object({
    user_name: Yup.string().required('*').matches(/^[u0600-\u06FF\sa-zA-Z0-9@!%&-.?]+$/ , 'فقط از حروف فارسی و لاتین و اعداد استفاده شود'),
    first_name: Yup.string().required('*').matches(/^[u0600-\u06FF\sa-zA-Z]+$/ , 'فقط از حروف فارسی و لاتین استفاده شود'),
    last_name: Yup.string().required('*').matches(/^[u0600-\u06FF\sa-zA-Z]+$/ , 'فقط از حروف فارسی و لاتین استفاده شود'),
    phone: Yup.string().required('*').matches(/^[0-9]+$/ , 'فقط از اعداد استفاده شود'),
    national_code: Yup.number().required('*'),
    email: Yup.string().email().required('*'),
    password: Yup.string().required('*').matches(/^[u0600-\u06FF\sa-zA-Z0-9@!%&-._?]+$/).min(8 , 'حداقل 8 کاراکتر وارد کنید')
})