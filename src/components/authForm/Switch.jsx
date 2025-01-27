import { FastField } from 'formik';
import React from 'react';

const Switch = ({type , name , id , label}) => {
    return (
        <div className="form-check form-switch pointer">
            <FastField
                type={type}
                className='form-check-input pointer'
                name={name}
                id={id}
                placeholder={label}
            />
            <label htmlFor={id} className='form-check-label pointer select_none'>{label}</label>
        </div>
    );
}

export default Switch;
