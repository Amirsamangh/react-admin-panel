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
import Attrbute from './category/attrs/Attrbute';
import Brands from './brand/Brands';
import AddProduct from './product/AddProduct';
import SetAttribute from './product/setAttr/SetAttributes';

const Content = () => {

    const { showSidebar } = useContext(AdminContext)

    return (
        <section id="content_section"
          className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              
              <Route path='/categories' element={<Category/>}>
                <Route path=':categoryId' element={<CategoryChildren/>}/>
              </Route>
              <Route path='/categories/:categoryId/attrbutes' element={<Attrbute/>}/>
              
              <Route path='/products' element={<Product/>}/>
              <Route path='/products/add-product' element={<AddProduct/>}/>
              <Route path='/products/set-attr' element={<SetAttribute/>}/>
              
              <Route path='/colors' element={<Color/>}/>
              <Route path='/guaranties' element={<Guarantee/>}/>
              <Route path='/brands' element={<Brands/>}/>
              <Route path='/discounts' element={<Discount/>}/>
              <Route path='/carts' element={<Cart/>}/>
              <Route path='/orders' element={<Order/>}/>
              <Route path='/deliverires' element={<Delivery/>}/>
              <Route path='/users' element={<Users/>}/>
              <Route path='/roles' element={<Role/>}/>
              <Route path='/permissions' element={<Permissions/>}/>
              <Route path='/comments' element={<Comments/>}/>
              <Route path='/questions' element={<Question/>}/>
              <Route path='/logout' element={<Logout/>}/>



              <Route path='*' element={<Dashboard/>}/>
            </Routes>
        </section>
    );
}

export default Content;
