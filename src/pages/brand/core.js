import { addNewBrandsService } from "../../services/brands"
import { Alert } from "../../utils/alerts"
import * as Yup from 'yup';


export const initialValues = {
    original_name: '',
    persian_name: '',
    descriptions: '',
    logo: null,
};

export const onSubmit = async (values , actions , setData)=>{
    const res = await addNewBrandsService(values);
    if(res.status === 201) {
        Alert('انجام شد' , res.data.message , 'success')
        setData(lastData=>[...lastData , res.data.data])
    }
    actions.resetForm();
};

export const validationSchema = Yup.object({
    original_name: Yup.string().required('لطفا این قسمت را پر کنید').matches(/^[u0600-\u06FF\sa-zA-Z0-9!@$%&?]+$/, 'فقط از حروف لاتین و اعداد استفاده شود'),
    persian_name: Yup.string().matches(/^[u0600-\u06FF\s@$%&?]+$/, 'فقط از حروف فارسی و اعداد استفاده شود'),
    descriptions: Yup.string().matches(/^[u0600-\u06FF\sa-zA-Z0-9!@$%&?]+$/, 'فقط از حروف و اعداد استفاده شود'),
    logo: Yup.mixed().nullable()
            .test("filesize", "حجم فایل نمیتواند بیشتر 500 کیلوبایت باشد", (value) =>
                !value ? true : value.size <= 500 * 1024
            )
            .test("format", "فرمت فایل باید jpg باشد", (value) =>
                !value ? true : value.type === "image/jpeg" || "image/jpg" || "image/png"
            ),
});

