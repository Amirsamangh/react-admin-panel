import React, { useEffect, useState } from 'react';
import ModalsContainer from '../../components/ModalsContainer';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { Form, Formik } from 'formik';
import FormikControl from '../../components/form/FormikControl';
import { initialValues, onSubmit, validationSchema } from './core';
import SubmitButton from '../../components/form/SubmitButton';
import { getAllPermissionsService, getSingleRoleService } from '../../services/users';

const AddRole = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const roleIdToEdit = location.state?.roleToEdit
    const editType = location.state?.editType
    const { setData } = useOutletContext()
    const [permissions, setPermissions] = useState([])
    const [roleToEdit , setRoleToEdit] = useState(null)
    const [reInitialValues, setReInitialValues] = useState(null)

    const handleGetAllPermissions = async () => {
        const res = await getAllPermissionsService()
        if (res.status === 200) {
            setPermissions(res.data.data.map(p => { return { id: p.id, title: p.title } }))
        }
    }

    const handleGetRoleToEditData = async ()=>{
        const res = await getSingleRoleService(roleIdToEdit)
        if(res.status === 200) {
            const role = res.data.data
            setRoleToEdit(role)

            editType === 'role' ? setReInitialValues({
                title: role.title,
                description: role.description,
            }) : setReInitialValues({
                permissions_id: role.permissions.map(p=>''+p.id),
                editPermissions: true,
            })
        }
    }

    useEffect(() => {
        editType !== 'role' && handleGetAllPermissions();
        roleIdToEdit && handleGetRoleToEditData();
    }, [])


    return (
        <>
            <ModalsContainer
                className={'show d-block'}
                fullScreen={editType === 'role' ? false : true}
                id='add_role_modal'
                title={
                    editType === 'role'
                        ? 'ویرایش نقش'
                        : editType === 'permissions'
                            ? 'ویرایش مجوز های دسترسی' + ': ' + roleToEdit?.title || ''
                            : 'افزودن نقش'
                }
                closeFunction={() => { navigate(-1) }}
            >
                <div className="container">

                    <Formik
                        initialValues={reInitialValues || initialValues}
                        onSubmit={(values, actions) => onSubmit(values, actions, setData , roleIdToEdit , editType)}
                        validationSchema={validationSchema}
                        enableReinitialize
                    >
                        <Form className='row justify-content-center'>

                            {editType !== 'permissions' ? (
                                <>
                                    <FormikControl
                                        className={editType === 'role' ? '' : 'col-md-8'}
                                        control='input'
                                        type='text'
                                        name='title'
                                        label='عنوان نقش'
                                        placeholder='فقط از حروف فارسی و لاتین استفاده کنید'
                                    />
                                    <FormikControl
                                        className={editType === 'role' ? '' : 'col-md-8'}
                                        control='input'
                                        type='text'
                                        name='description'
                                        label='توضیحات نقش'
                                        placeholder='فقط از حروف فارسی و لاتین استفاده کنید'
                                    />
                                </>
                            ) : null}

                            {editType !== 'role' ? (
                                <FormikControl
                                    className='col-md-8'
                                    control='checkBox'
                                    name='permissions_id'
                                    label='دسترسی ها'
                                    options={permissions}
                                />
                            ) : null}

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
