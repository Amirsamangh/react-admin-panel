import { FastField } from 'formik';
import React from 'react';

const Switch = ({name , label}) => {
    return (
        <div className="form-check form-check-inline mt-2 form-switch pointer">
            <FastField
                type='checkbox'
                className='form-check-input pointer'
                name={name}
                id={name}
            />
            <label htmlFor={name} className='form-check-label pointer select_none'>{label}</label>
        </div>
    );
}

export default Switch;
