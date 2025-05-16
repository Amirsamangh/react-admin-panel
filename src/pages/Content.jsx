import React, { useContext } from 'react';
import { AdminContext } from '../context/adminLayoutContext';
import Category from './category/Category';
import Product from './product/Product';
import Dashboard from './dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Color from './color/Color';
import Guarantee from './guarantee/Guarantee';
import Discount from './discount/Discount';
import Cart from './cart/Cart';
import Order from './order/Order';
import Delivery from './delivery/Delivery';
import Users from './users/Users';
import Role from './role/Role';
import Permissions from './permissions/Permissions';
import Comments from './comments/Comments';
import Question from './question/Question';
import Logout from './auth/Logout';
import CategoryChildren from './category/CategoryChildren';
import Attrbute from './category/attrs/Attribute';
import Brands from './brand/Brands';
import AddProduct from './product/AddProduct';
import SetAttribute from './product/setAttr/SetAttributes';
import ProductGallery from './product/gallery/ProductGallery';
import AddDiscount from './discount/AddDiscount';
import AddRole from './role/AddRole';
import AddUsers from './users/AddUsers';
import { useSelector } from 'react-redux';
import { useHasPermission } from '../hook/permissionHook';
import PermComponent from '../components/PermComponent';
import AddDelivery from './delivery/AddDelivery';
import AddCart from './cart/AddCart';

const Content = () => {
  const { showSidebar } = useContext(AdminContext)

  const hasCategoryPermission = useHasPermission('read_categories')
  const hasDiscountPermission = useHasPermission("read_discounts")
  const hasUserPermission = useHasPermission("read_users")
  const hasRolePermission = useHasPermission("read_roles")
  const hasDeliveryPermission = useHasPermission("read_deliveries")
  const hasCartPermission = useHasPermission("read_Carts")

  return (
    <section id="content_section"
      className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}>

      <Routes>
        <Route path='/' element={<Dashboard />} />

        {hasCategoryPermission && (
          <Route path='/categories' element={<Category />}>
            <Route path=':categoryId' element={<CategoryChildren />} />
          </Route>
        )}

        <Route path='/categories/:categoryId/attrbutes' element={<PermComponent component={<Attrbute />} pTitle='read_category_attrs' />} />
        <Route path='/products' element={<PermComponent component={<Product />} pTitle='read_products' />} />
        <Route path='/products/add-product' element={<PermComponent component={<AddProduct />} pTitle='create_product' />} />
        <Route path='/products/set-attr' element={<PermComponent component={<SetAttribute />} pTitle='create_product_attr' />} />
        <Route path='/products/gallery' element={<PermComponent component={<ProductGallery />} pTitle='create_product_image' />} />
        <Route path='/colors' element={<PermComponent component={<Color />} pTitle='read_colors' />} />
        <Route path='/guaranties' element={<PermComponent component={<Guarantee />} pTitle='read_guaranties' />} />
        <Route path='/brands' element={<PermComponent component={<Brands />} pTitle='read_brands' />} />

        {hasDiscountPermission && (
          <Route path='/discounts' element={<Discount />}>
            <Route path='/discounts/add-discount-code' element={<PermComponent component={<AddDiscount />} pTitle='create_discount' />} />
          </Route>
        )}

        {hasCartPermission && (
          <Route path='/carts' element={<Cart />}>
            <Route path='add-cart' element={<PermComponent component={<AddCart/>} pTitle='create_cart'/>}/>
          </Route>
        )}

        <Route path='/orders' element={<Order />} />

        {hasDeliveryPermission && (
          <Route path='/deliveries' element={<Delivery />} >
            <Route path='/deliveries/add-delivery' element={<PermComponent component={<AddDelivery/>} pTitle='create_delivery' />} />
          </Route>
        )}

        {hasUserPermission && (
          <Route path='/users' element={<Users />}>
            <Route path='/users/add-user' element={<PermComponent component={<AddUsers />} pTitle='create_user' />} />
          </Route>
        )}

        {hasRolePermission && (
          <Route path='/roles' element={<Role />}>
            <Route path='/roles/add-role' element={<PermComponent component={<AddRole />} pTitle='create_role' />} />
          </Route>
        )}

        <Route path='/permissions' element={<Permissions />} />

        <Route path='/comments' element={<Comments />} />

        <Route path='/questions' element={<Question />} />

        <Route path='/logout' element={<Logout />} />

        <Route path='*' element={<Dashboard />} />

      </Routes>
    </section>
  );
}

export default Content;
