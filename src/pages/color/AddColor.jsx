import React, { useEffect, useState } from 'react';
import ModalsContainer from '../../components/ModalsContainer';
import { FastField, Form, Formik } from 'formik';
import FormikControl from '../../components/form/FormikControl';
import { initialValues, onSubmit, validationSchema } from './core';
import SubmitButton from '../../components/form/SubmitButton';

const AddColor = ({ setData, colorToEdit, setColorToEdit }) => {
    const [reInitValues, setReInitValues] = useState(null)
    const [colorPickerValue, setColorPickerValue] = useState('#000')

    useEffect(() => {
        if (colorToEdit) {
            setColorPickerValue(colorToEdit.code)
            setReInitValues({
                title: colorToEdit.title,
                code: colorToEdit.code,
            })
        } else {
            setColorPickerValue('#000')
            setReInitValues(null)
        }
    }, [colorToEdit]);

    const handleChangeColorCodeField = (e, form) => {
        setColorPickerValue(e.target.value)
        form.setFieldValue('code', e.target.value)
    }

    return (
        <>

            <button
                className="btn btn-success d-flex justify-content-center align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#add_color_modal"
                onClick={() => setColorToEdit(null)}
            >
                <i className="fas fa-plus text-light"></i>
            </button>

            <ModalsContainer
                fullScreen={false}
                id='add_color_modal'
                title={colorToEdit ? 'ویرایش رنگ' : 'افزودن رنگ'}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <Formik
                            onSubmit={(values, actions) => onSubmit(values, actions, setData, colorToEdit)}
                            initialValues={reInitValues || initialValues}
                            validationSchema={validationSchema}
                            enableReinitialize
                        >
                            <Form>
                                <FormikControl
                                    control='input'
                                    type='text'
                                    name='title'
                                    label='عنوان رنگ'
                                    placeholder='فقط از اعداد و حروف استفاده کنید'
                                />

                                <FastField>
                                    {
                                        ({ form }) => {
                                            return (
                                                <div className='col-12 d-flex align-items-center justify-content-center'>
                                                    <label htmlFor="exampleColorInput">انتخاب رنگ</label>
                                                    <input
                                                        className='form-control form-control-color mx-3'
                                                        type="color"
                                                        id='code'
                                                        name='code'
                                                        title='انتخاب رنگ'
                                                        value={colorPickerValue}
                                                        onChange={(e) => handleChangeColorCodeField(e, form)}
                                                    />
                                                </div>
                                            );
                                        }}
                                </FastField>

                                <div className="btn_box text-center col-12 mt-4">
                                    <SubmitButton />
                                </div>
                            </Form>
                        </Formik>

                    </div>
                </div>
            </ModalsContainer>
        </>

    );
}

export default AddColor;
