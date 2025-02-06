import React from 'react';
import CategoryTable from './CategoryTable';
import AddAttribute from './AddAttributes';
import CategoryContextContainer from '../../context/categoryContext';

const Category = () => {
    return (
        <CategoryContextContainer>
            <div id="manage_product_category" className="manage_product_category main_section">
                <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>
                <CategoryTable />
                <AddAttribute />
            </div>
        </CategoryContextContainer>

    );
}

export default Category;
