import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import FormikError from './FormikError';

const Select = ({options, name, label, className}) => {
  return (
    <div className={`col-12 ${className}`}>
      <div className="input-group mb-3 dir_ltr">
        <FastField as='select' id={name} name={name} type="text" className="form-control" >
        <option>لطفا دسته‌بندی والد را انتخاب کنید</option>

          {options.map(o => (
            <option key={o.id} value={o.id}>{o.value}</option>
          ))}
        </FastField>
        <span className="input-group-text w_6rem justify-content-center">{label}</span>
      </div>

      <ErrorMessage name={name} component={FormikError} />
    </div>

  );
}

export default Select;
