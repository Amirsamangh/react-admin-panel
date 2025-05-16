import React from 'react';
import CartTable from './CartTable';
import AddCart from './AddCart';

const Cart = () => {
    return (
        <div id="manage_cart_section" className="manage_cart_section main_section">
            <h4 className="text-center my-3">مدیریت سبد خرید</h4>
            <CartTable />
        </div>
    );
}

export default Cart;
