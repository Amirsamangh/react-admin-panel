
import React from 'react';
import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import AuthFormikControl from '../../components/authForm/AuthFormikControl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../../utils/alerts';
import httpService from '../../services/httpService.js';
import { loginService } from '../../services/auth.js';


const initialValues = {
    phone: "",
    password: "",
    remember: false,

};
const onSubmit = async (values , submitMethods , navigate) => {
    try {
        const res = await loginService(values)
        if ( res.status == 200 ) {            
            localStorage.setItem('loginToken' , JSON.stringify(res.data));
            navigate('/')
        } else {
            Alert ( "متاسفم ..!" ,  res.data.message ,  "error" )
        }
        submitMethods.setSubmitting(false)
    } catch {
        submitMethods.setSubmitting(false)
        Alert('متاسفم ..!' , 'متاسفانه مشکلی از سمت سرور رخ داده' , 'error')
        console.log(onSubmit);
        
    }
};
const validationSchema = Yup.object({
    phone: Yup.number().required('لطفا این قسمت را پر کنید'),
    password: Yup
        .string()
        .required('لطفا این قسمت را پر کنید')
        .matches(/^[a-zA-Z0-9@!$&?]+$/, 'فقط از حروف و اعداد استفاده کنید'),
    remember: Yup.boolean()
})

const Login = () => {
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values , submitMethods)=>onSubmit(values, submitMethods, navigate)}
            validationSchema={validationSchema}
        >
            {
                formik => {
                    return (
                        <div className="wrap-login100">
                            <Form className="login100-form validate-form pos-relative d-flex flex-column align-items-center justify-content-center">
                                <span className="login100-form-title text-white user-select-none">
                                    ورود اعضا
                                </span>

                                <AuthFormikControl
                                    formik={formik}
                                    control="input"
                                    type="text"
                                    name="phone"
                                    icon="fa fa-mobile"
                                    label="شماره تماس"
                                />

                                <AuthFormikControl
                                    formik={formik}
                                    control="input"
                                    type="password"
                                    name="password"
                                    icon="fa fa-lock"
                                    label="رمز عبور"
                                />

                                <AuthFormikControl
                                    formik={formik}
                                    control="switch"
                                    type="checkbox"
                                    name="remember"
                                    id='remember'
                                    label="مرا به خاطر بسپار"
                                />

                                {/* <div className="form-check form-switch pointer">
                                    <FastField 
                                        type="checkbox" 
                                        className='form-check-input pointer'
                                        name='remember'
                                        id='remember'
                                    />
                                    <label htmlFor='remember' className='form-check-label pointer select_none'>مرا به خاطر بسپار</label>
                                </div> */}

                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn" disabled={formik.isSubmitting}>
                                        {formik.isSubmitting ? 'صبر کنید ...' : 'ورود'}
                                    </button>
                                </div>

                            </Form>
                            <div className="login100-pic js-tilt" data-tilt>
                                <img src="/auth/images/img-01.png" alt="IMG" />
                            </div>
                        </div>
                    )
                }
            }
        </Formik>
    );
}

export default Login;
