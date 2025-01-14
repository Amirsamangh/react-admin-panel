import React, { useContext } from "react";
import { AdminContext } from "../../../context/adminLayoutContext";
import Avatar from "./Avatar";
import SidebarGroupTitile from "./SidebarGroupTitile";
import SidebarItem from "./SidebarItem";

const Index = () => {
  const {showSidebar} = useContext(AdminContext);
  return (
    <section id="sidebar_section" className="">
      <div className={` overflow-scroll mini_sidebar collapsedd bg-dark h-100 ${showSidebar ? 'expanded' : null}`}>
        <div className="p-0 m-0 fa-scroll">

          <Avatar
          name='امیرسامان'
          imagePath="/assets/images/avatar/user4.jpg"
          />

          <SidebarItem title='داشبورد' icon=' fas fa-tachometer-alt'/>
          {/* <!-- =================================== --> */}


          <SidebarGroupTitile title='فروشگاه'/>


          <SidebarItem icon='fas fa-stream' title='مدیریت گروه محصول' />
          <SidebarItem icon='fas fa-cube' title='مدیریت محصول' />
          <SidebarItem icon='fas fa-copyright' title='مدیریت برند ها' />
          <SidebarItem icon='fas fa-pagelines' title='مدیریت گارانتی ها' />
          <SidebarItem icon='fas fa-palette' title='مدیریت رنگ ها' />
          <SidebarItem icon='fas fa-percentage' title='مدیریت تخفیف ها' />

          {/* <!-- =================================== --> */}

          <SidebarGroupTitile title='سفارشات و سبد خرید'/>

          <SidebarItem icon='fas fa-shopping-basket' title='مدیریت سبد ها' />
          <SidebarItem icon='fas fa-luggage-cart' title='مدیریت سفارشات' />
          <SidebarItem icon='fas fa-truck-loading' title='مدیریت نحوه ارسال' />
          
          {/* <!-- =================================== --> */}

          <SidebarGroupTitile title='کاربران و همکاران'/>

          <SidebarItem icon='fas fa-users' title='مشاهده کاربران' />
          <SidebarItem icon='fas fa-user-tag' title='نقش ها' />
          <SidebarItem icon='fas fa-shield-alt' title='مجوز ها' />
          
          {/* <!-- =================================== --> */}

          <SidebarGroupTitile title='ارتباطات'/>

          <SidebarItem icon='fas fa-question-circle' title='سوال ها' />
          <SidebarItem icon='fas fa-comment' title='نظرات' />

        </div>
      </div>
    </section>
  );
};

export default Index;