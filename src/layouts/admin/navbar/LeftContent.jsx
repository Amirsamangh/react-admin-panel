import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Leftcontent = () => {


  const user = useSelector(state=>state.userReducer.data)
  
  return (
    <div className="left_content d-flex flex-row-reverse">
      <i
        className="fas fa-grip-vertical fa-2x me-3 pointer"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ></i>
      <ul
        className="dropdown-menu mini_menu"
        aria-labelledby="dropdownMenuButton1"
      >
        <li className="my-2">
          <a className="dropdown-item d-block text-center">{user.full_name || user.user_name || user.phone}</a>
        </li>
        <li className="my-2 d-flex justify-content-center align-items-center px-2">
          <i className="fas fa-tachometer-alt"></i>
          <Link to={"/"} className="dropdown-item" href="#">
            داشبورد
          </Link>
        </li>
        <li className="my-2 d-flex justify-content-center align-items-center px-2">
          <i className="fas fa-paper-plane"></i>
          <a className="dropdown-item" href="#">
            تیکت ها
          </a>
        </li>
        <li className="my-2 d-flex justify-content-center align-items-center px-2">
          <i className="fas fa-envelope"></i>
          <a className="dropdown-item" href="#">
            پیام ها
          </a>
        </li>
        <hr />
        <li className="d-flex justify-content-center align-items-center px-2">
          <i className="fas fa-power-off"></i>
          <Link to={"/logout"} className="dropdown-item">
            خروج
          </Link >
        </li>
      </ul>
      <i className="far fa-bell fa-2x mx-3 pointer position-relative">
        <span className="alarm_count">4</span>
      </i>
      <i className="fas fa-search fa-2x mx-3 pointer"></i>
    </div>
  );
};

export default Leftcontent;