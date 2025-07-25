import React, { useEffect, useState } from 'react';
import ModalsContainer from '../../components/ModalsContainer';
import { Formik, Form } from 'formik';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import FormikControl from '../../components/form/FormikControl';
import { initialValues, onSubmit, validationSchema } from './core';
import SubmitButton from '../../components/form/SubmitButton';
import { getAllRolesService, getSingleUserService } from '../../services/users';
import { convertDateToJalali } from '../../utils/convertDate';

const AddUsers = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const userId = location.state?.userId
    const { setData } = useOutletContext()
    const [userToEdit, setUserToEdit] = useState(null)
    const [allRoles, setAllRoles] = useState([])
    const [selectedRoles, setSelectedRoles] = useState([])
    const [reInitialValues, setReInitialValues] = useState(null)

    const handleGetAllRoles = async () => {
        const res = await getAllRolesService()
        if (res.status === 200) {
            setAllRoles(res.data.data.map(r => { return { id: r.id, value: r.title } }))
        }
    }

    const handleGetUserData = async () => {
        const res = await getSingleUserService(userId)
        if (res.status === 200) {
            setUserToEdit(res.data.data)
        }
    }

    useEffect(() => {
        handleGetAllRoles()
        if (userId) {
            handleGetUserData()
        }
    }, [])

    useEffect(() => {
        if (userToEdit) {
            setSelectedRoles(userToEdit.roles.map(r => { return { id: r.id, value: r.title } }))
            const roles_id = userToEdit.roles.map(p => p.id)
            setReInitialValues({
                birth_date: userToEdit.birth_date ? convertDateToJalali(userToEdit.birth_date , 'jD / jM / jYYYY') : '' ,
                roles_id,
                password: '',
                user_name: userToEdit.user_name || '',
                first_name: userToEdit.first_name || '',
                last_name: userToEdit.last_name || '',
                phone: userToEdit.phone || '',
                email: userToEdit.email || '',
                gender: userToEdit.gender || 1,
                isEditing: true,
            })
        }
    }, [userToEdit])

    return (
        <>
            <ModalsContainer
                className={`d-block show`}
                fullScreen={true}
                id='add_user_modal'
                title={userToEdit ? 'ویرایش کاربر' : 'افزودن کاربر'}
                closeFunction={() => navigate(-1)}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <Formik
                            initialValues={reInitialValues || initialValues}
                            onSubmit={(values, actions) => onSubmit(values, actions, setData, userId , navigate)}
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
                                                type='text'
                                                name='national_code'
                                                label='کد ملی'
                                                placeholder='فقط از اعداد استفاده شود'
                                            />
                                            <FormikControl
                                                className='col-md-8'
                                                control='input'
                                                type='text'
                                                name='phone'
                                                label='شماره موبایل'
                                                placeholder='فقط از اعداد استفاده شود'
                                            />
                                            <FormikControl
                                                className='col-md-8'
                                                control='input'
                                                type='text'
                                                name='email'
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
                                                initialDate={userToEdit ? userToEdit.birth_date : undefined}
                                                yearsLimit={{ from: 100, to: 0 }}
                                            />
                                            <FormikControl
                                                className="col-md-6 col-lg-8"
                                                control="select"
                                                options={[{id:1 , value: "مرد"} ,{id:0 , value: "زن"}]}
                                                name="gender"
                                                label="جنسیت"
                                            />
                                            <FormikControl
                                                label='نقش ها'
                                                className='col-md-6 col-lg-8'
                                                control='searchableSelect'
                                                options={allRoles}
                                                name='roles_id'
                                                firstItem='لطفا نقش های مورد نظر را وارد کنید'
                                                resultType='array'
                                                initialItems={selectedRoles}
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
