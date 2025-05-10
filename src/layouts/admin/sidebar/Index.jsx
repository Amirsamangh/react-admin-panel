import React, { useContext } from "react";
import { AdminContext } from "../../../context/adminLayoutContext";
import Avatar from "./Avatar";
import SidebarGroupTitile from "./SidebarGroupTitile";
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";

const Index = () => {
  const {showSidebar} = useContext(AdminContext);
  const user = useSelector(state=>state.userReducer.data)
  return (
    <section id="sidebar_section">
      <div className={` overflow-scroll mini_sidebar collapsedd bg-dark h-100 ${showSidebar ? 'expanded' : null}`}>
        <div className="p-0 m-0 fa-scroll">

          <Avatar
          name={user.full_name || user.user_name || user.phone}
          imagePath={user.image || "/assets/images/avatar/user6.png"}
          />

          <SidebarItem targetPth='/' title='داشبورد' icon=' fas fa-tachometer-alt' pTitle={"read_"}/>
          {/* <!-- =================================== --> */}


          <SidebarGroupTitile title='فروشگاه' pTitles={['read_categories', 'read_products', 'read_colors', 'read_guarantees', 'read_brands', 'read_discounts']}/>


          <SidebarItem targetPth='/categories' icon='fas fa-stream' title='مدیریت گروه محصول' pTitle={"read_categories"} />
          <SidebarItem targetPth='/products' icon='fas fa-cube' title='مدیریت محصول' pTitle={"read_products"} />
          <SidebarItem targetPth='/colors' icon='fas fa-palette' title='مدیریت رنگ ها' pTitle={"read_colors"} />
          <SidebarItem targetPth='/guaranties' icon='fab fa-pagelines' title='مدیریت گارانتی ها' pTitle={"read_guarantees"} />
          <SidebarItem targetPth='/brands' icon='fas fa-copyright' title='مدیریت برند ها' pTitle={"read_brands"} />
          <SidebarItem targetPth='/discounts' icon='fas fa-percentage' title='مدیریت تخفیف ها' pTitle={"read_discounts"} />

          {/* <!-- =================================== --> */}

          <SidebarGroupTitile title='سفارشات و سبد خرید' pTitles={['read_carts', 'read_orders', 'read_deliveries']}/>

          <SidebarItem targetPth='/carts' icon='fas fa-shopping-basket' title='مدیریت سبد ها' pTitle={"read_carts"} />
          <SidebarItem targetPth='/orders' icon='fas fa-luggage-cart' title='مدیریت سفارشات' pTitle={"read_orders"} />
          <SidebarItem targetPth='/deliverires' icon='fas fa-truck-loading' title='مدیریت نحوه ارسال' pTitle={"read_deliveries"} />
          
          {/* <!-- =================================== --> */}

          <SidebarGroupTitile title='کاربران و همکاران' pTitles={['read_users', 'read_roles', 'read_permissions']}/>

          <SidebarItem targetPth='/users' icon='fas fa-users' title='مشاهده کاربران' pTitle={"read_users"} />
          <SidebarItem targetPth='/roles' icon='fas fa-user-tag' title='نقش ها' pTitle={"read_roles"} />
          <SidebarItem targetPth='/permissions' icon='fas fa-shield-alt' title='مجوز ها' pTitle={"read_permissions"} />
          
          {/* <!-- =================================== --> */}

          <SidebarGroupTitile title='ارتباطات' pTitles={['read_questions', 'read_comments']}/>

          <SidebarItem targetPth='/questions' icon='fas fa-question-circle' title='سوال ها' pTitle={"read_questions"} />
          <SidebarItem targetPth='/comments' icon='fas fa-comment' title='نظرات' pTitle={"read_comments"} />

        </div>
      </div>
    </section>
  );
};

export default Index;