import * as Yup from 'yup'
import { addNewGuaranteeService, editGuaranteeService } from '../../services/guarantee'
import { Alert } from '../../utils/alerts'

export const initialValues = {
    title: '',
    descriptions: '',
    length: '',
    length_unit: '',
}

export const validationSchema = Yup.object({
    title: Yup.string().required('لطفا عنوان را وارد کنید').matches(/^[u0600-\u06FF\sa-zA-Z0-9!@$%&?]+$/, 'فقط از حروف و اعداد استفاده شود'),
    descriptions: Yup.string().matches(/^[u0600-\u06FF\sa-zA-Z0-9!@$%&?]+$/, 'فقط از حروف و اعداد استفاده شود'),
    length: Yup.number(),
    length_unit: Yup.string().matches(/^[u0600-\u06FF\sa-zA-Z0-9!@$%&?]+$/, 'فقط از اعداد و حروف استفاده شود'),
})

export const onSubmit = async (values, actions, setData, guaranteeToEdit) => {

    if(guaranteeToEdit) {
        const res = await editGuaranteeService(guaranteeToEdit.id , values)
        if(res.status === 200) {
            Alert('موفق' , res.data.message , 'success')
            setData(lastData=>{
                let newData = [...lastData];
                let index = newData.findIndex(d=>d.id === guaranteeToEdit.id);
                newData[index] = res.data.data;
                return newData;
            });
        }
    } else {
        const res = await addNewGuaranteeService(values)
        if(res.status === 201) {
            Alert('موفق' , res.data.message , 'success')
            setData(lastData=> [...lastData , res.data.data])
        }
        actions.resetForm();
    }
}