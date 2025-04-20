import * as Yup from "yup";
import { Alert } from "../../../utils/alerts";
import { addProductAttrsService } from "../../../services/product";
  
  export const onSubmit = async (values, actions, productId) => {
    let data = {}
    for (const key in values) {
        if (values[key]) data = {...data, [key]:{value: values[key]}}
    }
    console.log(data);
    const res = await addProductAttrsService(productId, data)
    if (res.status === 200) {
        Alert('انجام شد', res.data.message, 'success');
    }
  };