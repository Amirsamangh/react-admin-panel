import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import FormikError from './FormikError';

const Input = ({ className, type, name, label, placeholder }) => {
    return (
        <div className={`col-12 ${className}`}>
            <div className="input-group mb-3 dir_ltr">
                <FastField as='input' type={type} name={name} placeholder={placeholder} className="form-control" />
                <span className="input-group-text w_6rem justify-content-center">{label}</span>
            </div>
            <ErrorMessage name={name} component={FormikError} />
        </div>
    );
}

export default Input;
