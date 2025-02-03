import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import FormikError from './FormikError';

const Textarea = ({ className, name, placeholder, label }) => {
    return (
        <div className={`col-12 ${className}`}>
            <div className="input-group mb-3 dir_ltr">
                <FastField className="form-control" as='textarea' name={name} placeholder={placeholder} />
                <span className="input-group-text w_6rem justify-content-center"> {label} </span>
            </div>
            <ErrorMessage name={name} component={FormikError} />
        </div>
    );
}

export default Textarea;
