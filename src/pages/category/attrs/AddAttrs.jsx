import React from 'react';
import { Form , Formik } from 'formik';
import SubmitButton from '../../../components/form/SubmitButton';
import FormikControl from '../../../components/form/FormikControl';
import { initialValues, onSubmit, validationSchema } from './core';

const AddAttrs = ({reinitialValues , location , setData , attrToEdit , setAttrToEdit }) => {
    return (
        <Formik
        initialValues={reinitialValues || initialValues}
        onSubmit={(values, actions) =>
            onSubmit(values, actions, location.state.categoryData.id, setData, attrToEdit, setAttrToEdit)}
        validationSchema={validationSchema}
        enableReinitialize
    >
        <Form>
            <div className={`row my-3 ${attrToEdit ? 'alert-danger shadow rounded' : ''} justify-content-center  is_inline`}>
                
                <FormikControl
                    control='input'
                    className='col-md-6 col-lg-4 my-1'
                    type='text'
                    name='unit'
                    label='واحد'
                    placeholder='واحد ویژگی جدید'
                />
                
                <FormikControl
                    control='input'
                    className='col-md-6 col-lg-4 my-1'
                    type='text'
                    name='title'
                    label='عنوان'
                    placeholder='عنوان ویژگی جدید'
                />

                <div className="col-8 col-lg-2 my-1 ">
                    <FormikControl
                        control='switch'
                        name='in_filter'
                        label='نمایش در فیلتر'
                    />
                </div>
                <div className="col-4 col-lg-2 d-flex justify-content-center align-items-start my-1 btn-group btn-group-sm dir_ltr">
                    <SubmitButton />
                    {attrToEdit ? (
                        <button className='btn btn-secondary btn-sm me-2' type='button' onClick={() => setAttrToEdit(null)}>انصراف</button>
                    ) : null}
                </div>
            </div>
        </Form>
    </Formik>

    );
}

export default AddAttrs;
