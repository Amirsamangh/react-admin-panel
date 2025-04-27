import React from 'react';

const Actions = () => {
    return (
        <>
            <i
                className="fas fa-edit text-warning mx-1 hoverable_text pointer"
                title="ویرایش کد نخفیف"
                data-bs-toggle='tooltip'
                data-bs-placement='top'
            ></i>
            <i
                className="fas fa-remove text-danger mx-1 hoverable_text pointer"
                title="حذف کد نخفیف"
                data-bs-toggle='tooltip'
                data-bs-placement='top'
            ></i>
        </>
    );
}

export default Actions;
