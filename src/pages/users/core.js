import * as Yup from 'yup'

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

export const onSubmit = (values, actions , setData , userIdToEdit) => {}

export const validationSchema = Yup.object().shape({
    user_name: Yup.string().required('لطفا این قسمت را پر کنید').matches(/^[u0600-\u06FF\sa-zA-Z0-9@!%&-.?]+$/ , 'فقط از حروف فارسی و لاتین و اعداد استفاده شود'),
    first_name: Yup.string().matches(/^[u0600-\u06FF\sa-zA-Z]+$/ , 'فقط از حروف فارسی و لاتین استفاده شود'),
    last_name: Yup.string().matches(/^[u0600-\u06FF\sa-zA-Z]+$/ , 'فقط از حروف فارسی و لاتین استفاده شود'),
    phone: Yup.number().required('لطفا این قسمت را پر کنید'),
    national_code: Yup.number().required('لطفا این قسمت را پر کنید'),
    email: Yup.string().email('لطفا از فرمت صحیح ایمیل استفاده کنید'),
    password: Yup.string().required('لطفا این قسمت را پر کنید').matches(/^[u0600-\u06FF\sa-zA-Z0-9@!%&-._?]+$/).min(8 , 'حداقل 8 کاراکتر وارد کنید'),
    birth_date: Yup.string().matches(/^[0-9/\ \s-]+$/ , 'فقط از اعداد و خط تیره استفاده شود'),
    gender: Yup.number(),
    roles_id: Yup.array().min(1 , 'حد اقل یک مورد را انتخاب کنید'),
})