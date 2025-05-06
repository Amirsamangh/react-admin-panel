import React, { useContext, useEffect, useState } from "react";
import AdminContextContainer, { AdminContext } from "../../context/adminLayoutContext";
import Category from "../../pages/category/Category";
import Content from "../../pages/Content";
import Dashboard from "../../pages/dashboard/Dashboard";
import { toggleSidebar } from "../../utils/initialDoms";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useIsLogin } from "../../hook/authhook";
import { useDispatch, useSelector } from "react-redux";
import { getUserActionRedux } from "../../redux/user/userActions";

const AdminLayout = () => {
  const [loading, isLogin] = useIsLogin();

  return (
    <AdminContextContainer>
      {
        loading ? (
          <h1 className="text-center waiting_center">
            لطفا صبر کنید
          </h1>
        ) : isLogin ? (
          <div>
            <Content />
            <Navbar />
            <Sidebar />
          </div>
        ) : (
          <Navigate to={'/auth/login'} />
        )
      }
    </AdminContextContainer>
  );
};

export default AdminLayout;