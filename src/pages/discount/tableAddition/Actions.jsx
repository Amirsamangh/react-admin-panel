import React from 'react';
import { useNavigate } from 'react-router-dom';

const Actions = ({rowData , handleDeleteDiscount}) => {
    const navigate = useNavigate()
    return (
        <>
            <i
                className="fas fa-edit text-warning mx-1 hoverable_text pointer"
                title="ویرایش کد نخفیف"
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                onClick={()=>navigate('/discounts/add-discount-code' , {state:{discountToEdit: rowData}})}
            ></i>
            <i
                className="fas fa-remove text-danger mx-1 hoverable_text pointer"
                title="حذف کد نخفیف"
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                onClick={()=>handleDeleteDiscount(rowData)}
            ></i>
        </>
    );
}

export default Actions;
