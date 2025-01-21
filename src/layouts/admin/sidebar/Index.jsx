import React, { useContext } from "react";
import { AdminContext } from "../../../context/adminLayoutContext";
import Avatar from "./Avatar";
import SidebarGroupTitile from "./SidebarGroupTitile";
import SidebarItem from "./SidebarItem";

const Index = () => {
  const {showSidebar} = useContext(AdminContext);
  return (
    <section id="sidebar_section">
      <div className={` overflow-scroll mini_sidebar collapsedd bg-dark h-100 ${showSidebar ? 'expanded' : null}`}>
        <div className="p-0 m-0 fa-scroll">

          <Avatar
          name='امیرسامان'
          imagePath="/assets/images/avatar/user4.jpg"
          />

          <SidebarItem targetPth='/' title='داشبورد' icon=' fas fa-tachometer-alt'/>
          {/* <!-- =================================== --> */}


          <SidebarGroupTitile title='فروشگاه'/>


          <SidebarItem targetPth='/categories' icon='fas fa-stream' title='مدیریت گروه محصول' />
          <SidebarItem targetPth='/products' icon='fas fa-cube' title='مدیریت محصول' />
          <SidebarItem targetPth='/test' icon='fas fa-copyright' title='مدیریت برند ها' />
          <SidebarItem targetPth='/test' icon='fas fa-pagelines' title='مدیریت گارانتی ها' />
          <SidebarItem targetPth='/test' icon='fas fa-palette' title='مدیریت رنگ ها' />
          <SidebarItem targetPth='/test' icon='fas fa-percentage' title='مدیریت تخفیف ها' />

          {/* <!-- =================================== --> */}

          <SidebarGroupTitile title='سفارشات و سبد خرید'/>

          <SidebarItem targetPth='/test' icon='fas fa-shopping-basket' title='مدیریت سبد ها' />
          <SidebarItem targetPth='/test' icon='fas fa-luggage-cart' title='مدیریت سفارشات' />
          <SidebarItem targetPth='/test' icon='fas fa-truck-loading' title='مدیریت نحوه ارسال' />
          
          {/* <!-- =================================== --> */}

          <SidebarGroupTitile title='کاربران و همکاران'/>

          <SidebarItem targetPth='/test' icon='fas fa-users' title='مشاهده کاربران' />
          <SidebarItem targetPth='/test' icon='fas fa-user-tag' title='نقش ها' />
          <SidebarItem targetPth='/test' icon='fas fa-shield-alt' title='مجوز ها' />
          
          {/* <!-- =================================== --> */}

          <SidebarGroupTitile title='ارتباطات'/>

          <SidebarItem targetPth='/test' icon='fas fa-question-circle' title='سوال ها' />
          <SidebarItem targetPth='/test' icon='fas fa-comment' title='نظرات' />

        </div>
      </div>
    </section>
  );
};

export default Index;