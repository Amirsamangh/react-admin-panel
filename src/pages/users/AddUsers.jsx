import React, { useState } from 'react';
import ModalsContainer from '../../components/ModalsContainer';
import { Formik, Form } from 'formik';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import FormikControl from '../../components/form/FormikControl';
import { initialValues, onSubmit, validationSchema } from './core';
import SubmitButton from '../../components/form/SubmitButton';

const AddUsers = () => {
    const navigate = useNavigate()
    const [reInitialValues, setReInitialValues] = useState(null)
    const location = useLocation()
    const userIdToEdit = location.state?.userIdToEdit
    const { setData } = useOutletContext()
    return (
        <>
            <ModalsContainer
                className={`d-block show`}
                fullScreen={true}
                id='add_user_modal'
                title='افزودن کاربر'
                closeFunction={() => navigate(-1)}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <Formik
                            initialValues={reInitialValues || initialValues}
                            onSubmit={(values, actions) => onSubmit(values, actions, setData, userIdToEdit)}
                            validationSchema={validationSchema}
                            enableReinitialize
                        >
                            {
                                formik => {
                                    return (
                                        <Form>
                                            <FormikControl
                                                className='col-md-8'
                                                control='input'
                                                type='text'
                                                name='user_name'
                                                label='نام کاربری'
                                                placeholder='فقط از حروف استفاده شود'
                                            />
                                            <FormikControl
                                                className='col-md-8'
                                                control='input'
                                                type='text'
                                                name='first_name'
                                                label='نام'
                                                placeholder='فقط از حروف استفاده شود'
                                            />
                                            <FormikControl
                                                className='col-md-8'
                                                control='input'
                                                type='text'
                                                name='last_name'
                                                label='نام خانوادگی'
                                                placeholder='فقط از حروف استفاده شود'
                                            />
                                            <FormikControl
                                                className='col-md-8'
                                                control='input'
                                                type='number'
                                                name='national_code'
                                                label='کد ملی'
                                                placeholder='فقط از اعداد استفاده شود'
                                            />
                                            <FormikControl
                                                className='col-md-8'
                                                control='input'
                                                type='number'
                                                name='phone'
                                                label='شماره موبایل'
                                                placeholder='فقط از اعداد استفاده شود'
                                            />
                                            <FormikControl
                                                className='col-md-8'
                                                control='input'
                                                type='text'
                                                name='phone'
                                                label='ایمیل'
                                                placeholder='فقط فرمت ایمیل (email@yourhost.com)'
                                            />
                                            <FormikControl
                                                className='col-md-8'
                                                control='input'
                                                type='password'
                                                name='password'
                                                label='کلمه عبور'
                                                placeholder='فقط از حروف فارسی و لاتین استفاده کنید'
                                            />
                                            <FormikControl
                                                className='col-md-8'
                                                control='date'
                                                formik={formik}
                                                name='birth_date'
                                                label='تاریخ تولد'
                                                initialDate={undefined}
                                                yearsLimit={{ from: 100, to: 0 }}
                                            />
                                            <FormikControl
                                                className='col-md-6 col-lg-8'
                                                control='select'
                                                name='gender'
                                                label='جنسیت'
                                                options={[{ id: 1, value: 'مرد' }, { id: 0, value: 'زن' }]}
                                            />
                                            <FormikControl
                                                label='نقش ها'
                                                className='col-md-6 col-lg-8'
                                                control='searchableSelect'
                                                options={[{ id: 1, value: 'تست 1' }]}
                                                name='roles_id'
                                                firstItem='لطفا نقش های مورد نظر را وارد کنید'
                                                resultType='array'
                                                initialItems={[]}
                                            />
                                            <div className="btn_box text-center col-12 mt-4">
                                                <SubmitButton />
                                            </div>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>

                    </div>
                </div>
            </ModalsContainer>

        </>
    );
}

export default AddUsers;
