import React, { useEffect, useState } from 'react';
import ModalsContainer from '../../components/ModalsContainer';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { Form, Formik } from 'formik';
import FormikControl from '../../components/form/FormikControl';
import { initialValues, onSubmit, validationSchema } from './core';
import SubmitButton from '../../components/form/SubmitButton';
import { getAllPermissionsService } from '../../services/users';

const AddRole = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const roleToEdit = location.state?.roleToEdit
    const { setData } = useOutletContext()


    const [permissions, setPermissions] = useState([])

    const handleGetAllPermissions = async () => {
        const res = await getAllPermissionsService()
        if (res.status === 200) {
            setPermissions(res.data.data.map(p => { return { id: p.id, title: p.title } }))
        }
    }

    useEffect(() => {
        handleGetAllPermissions()
    }, [])


    return (
        <>
            <ModalsContainer
                className={'show d-block'}
                fullScreen={true}
                id='add_role_modal'
                title={roleToEdit ? 'ویرایش نقش' : 'افزودن نقش'}
                closeFunction={() => { navigate(-1) }}
            >
                <div className="container">

                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, actions) => onSubmit(values, actions, setData)}
                        validationSchema={validationSchema}
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
                            <FormikControl
                                className='col-md-8'
                                control='checkBox'
                                name='permissions_id'
                                label='دسترسی ها'
                                options={permissions}
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
