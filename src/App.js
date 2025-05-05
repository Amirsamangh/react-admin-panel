import React from 'react';
import AdminLayout from './layouts/admin/AdminLayout';
import AuthLayout from './layouts/auth/AuthLayout';
import { useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  const location = useLocation();
  return (
    <Provider store={store} >
      <div>
        {
          location.pathname.includes('/auth') ? (
            <AuthLayout />
          ) : (
            <AdminLayout />
          )
        }
      </div>
    </Provider>
  );
}

export default App;
