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
          imagePath="/assets/images/avatar/user6.png"
          />

          <SidebarItem targetPth='/' title='داشبورد' icon=' fas fa-tachometer-alt'/>
          {/* <!-- =================================== --> */}


          <SidebarGroupTitile title='فروشگاه'/>


          <SidebarItem targetPth='/categories' icon='fas fa-stream' title='مدیریت گروه محصول' />
          <SidebarItem targetPth='/products' icon='fas fa-cube' title='مدیریت محصول' />
          <SidebarItem targetPth='/colors' icon='fas fa-palette' title='مدیریت رنگ ها' />
          <SidebarItem targetPth='/guaranties' icon='fab fa-pagelines' title='مدیریت گارانتی ها' />
          <SidebarItem targetPth='/brands' icon='fas fa-copyright' title='مدیریت برند ها' />
          <SidebarItem targetPth='/discounts' icon='fas fa-percentage' title='مدیریت تخفیف ها' />

          {/* <!-- =================================== --> */}

          <SidebarGroupTitile title='سفارشات و سبد خرید'/>

          <SidebarItem targetPth='/carts' icon='fas fa-shopping-basket' title='مدیریت سبد ها' />
          <SidebarItem targetPth='/orders' icon='fas fa-luggage-cart' title='مدیریت سفارشات' />
          <SidebarItem targetPth='/deliverires' icon='fas fa-truck-loading' title='مدیریت نحوه ارسال' />
          
          {/* <!-- =================================== --> */}

          <SidebarGroupTitile title='کاربران و همکاران'/>

          <SidebarItem targetPth='/users' icon='fas fa-users' title='مشاهده کاربران' />
          <SidebarItem targetPth='/roles' icon='fas fa-user-tag' title='نقش ها' />
          <SidebarItem targetPth='/permissions' icon='fas fa-shield-alt' title='مجوز ها' />
          
          {/* <!-- =================================== --> */}

          <SidebarGroupTitile title='ارتباطات'/>

          <SidebarItem targetPth='/questions' icon='fas fa-question-circle' title='سوال ها' />
          <SidebarItem targetPth='/comments' icon='fas fa-comment' title='نظرات' />

        </div>
      </div>
    </section>
  );
};

export default Index;