import React from 'react';
import DiscountTable from './DiscountTable';
import AddDiscount from './AddDiscount';

const Discount = () => {
    return (
        <div id="manage_discount_section" className="manage_discount_section main_section">
            <h4 className="text-center my-3">مدیریت کد های تخفیف</h4>
            <DiscountTable />
        </div>
    );
}

export default Discount;
