import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import FormikControl from '../../components/form/FormikControl';
import { initialValues, onSubmit, validationSchema } from './core';
import SubmitButton from '../../components/form/SubmitButton';

const AddRole = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const roleToEdit = location.state?.roleToEdit


    return (
        <>
            <ModalsContainer
                className={'show d-block'}
                fullScreen={true}
                id='add_role_modal'
                title= {roleToEdit ? 'ویرایش نقش' : 'افزودن نقش'}
                closeFunction={() => { navigate(-1) }}
            >
                <div className="container">

                    <Formik
                        onSubmit={(values, actions) => onSubmit(values, actions, roleToEdit)}
                        validationSchema={validationSchema}
                        initialValues={initialValues}
                    >
                        <Form className='row justify-content-center'>
                            <FormikControl
                                className='col-md-8'
                                control='input'
                                type='text'
                                name='title'
                                label='عنوان نقش'
                                placeholder='فقط از حروف فارسی و لاتین استفاده کنید'
                            />
                            <FormikControl
                                className='col-md-8'
                                control='input'
                                type='text'
                                name='description'
                                label='توضیحات نقش'
                                placeholder='فقط از حروف فارسی و لاتین استفاده کنید'
                            />
                            <div className="btn_box text-center col-12 mt-4">
                                <SubmitButton />
                            </div>
                        </Form>
                    </Formik>
                </div>
            </ModalsContainer>
        </>
    );
}

export default AddRole;
