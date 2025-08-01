import * as Yup from 'yup';
import { addCategoryAttrService, editCategoryAttrService } from '../../../services/categoryAttr';
import { Alert } from '../../../utils/alerts';


export const initialValues = {
    title: '',
    unit: '',
    in_filter: true
}


export const onSubmit = async (values, actions, catId, setData, attrToEdit, setAttrToEdit) => {
    try {
        values = {
            ...values,
            in_filter: values.in_filter ? 1 : 0
        }
        if (attrToEdit) {
            const attrId = attrToEdit.id
            const res = await editCategoryAttrService(attrId, values);
            console.log(res);
            if (res.status === 200) {
                setData(oldData => {
                    const newData = [...oldData]
                    const index = newData.findIndex(d => d.id === attrToEdit.id)
                    newData[index] = res.data.data
                    return newData
                });
                Alert('انجام شد', res.data.message, 'success');
                setAttrToEdit(null)
                actions.resetForm()

            }
        } else {
            const res = await addCategoryAttrService(catId, values);
            if (res.status === 201) {
                Alert('انجام شد', res.data.message, 'success');
                setData(oldData => [...oldData, res.data.data])
                actions.resetForm()
            }
        }
    } catch (error) {
        console.log(error.message);
    }
};


export const validationSchema = Yup.object({
    title: Yup.string().required('لطفا این قسمت را پر کنید').matches(/^[u0600-\u06FF\sa-zA-Z0-9!@$%&?]+$/, 'فقط از حروف و اعداد استفاده شود'),
    unit: Yup.string().required('لطفا این قسمت را پر کنید').matches(/^[u0600-\u06FF]/, 'فقط از حروف استفاده شود'),
    in_filter: Yup.boolean(),
})
