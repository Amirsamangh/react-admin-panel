import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../../pages/auth/Login';
import { useIsLogin } from '../../hook/authhook';

const AuthLayout = () => {

    const [loading, isLogin] = useIsLogin();

    return (


        <div className='limiter'>
            {
                loading ? (
                    <h1 className="text-center waiting_center">
                        لطفا صبر کنید
                    </h1>
                ) : !isLogin ? (
                    <div>
                        <Routes>
                            <Route path='/auth/login' element={<Login />} />
                        </Routes>
                    </div>
                ) : (
                    <Navigate to={'/'} />
                )
            }
        </div>


        // <div className='limiter'>
        //     <div className='container-login100'>

        //     </div>
        // </div>
    );
}

export default AuthLayout;
