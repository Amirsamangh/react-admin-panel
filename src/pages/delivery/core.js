import { addNewDeliveryService, updateDeliveryService } from "../../services/deliveries"
import { Alert } from "../../utils/alerts"
import * as Yup from 'yup'

export const initialValues = {
    title: '',
    amount: '',
    time: 1,
    time_unit: 'روز',
}

export const onSubmit = async (values, actions, setData, deliveryToEdit, navigate) => {

    if (deliveryToEdit) {
        const res = await updateDeliveryService(deliveryToEdit.id, values)
        if (res.status === 200) {
            Alert('انجام شد', res.data.message, 'success')
            setData(lastData => {
                let newData = [...lastData]
                let index = newData.findIndex(d => d.id == deliveryToEdit.id)
                newData[index] = res.data.data

                return newData;
            })
        }
    } else {
        const res = await addNewDeliveryService(values)
        if (res.status === 201) {
            setData(lastData => [...lastData, res.data.data])
        }
    }

    actions.resetForm()
    navigate('/deliverires')

}

export const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required('لطفا این قسمت را پر کنید')
        .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/, 'فقط از حروف و اعداد استفاده شود'),

    amount: Yup.number().typeError('فقط عدد وارد کنید').required('لطفا این قسمت را پر کنید'),
    time: Yup.number().typeError('فقط عدد وارد کنید').required('لطفا این قسمت را پر کنید'),
    time_unit: Yup.string()
        .required('لطفا این قسمت را پر کنید')
        .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/, 'فقط از حروف و اعداد استفاده شود'),
})