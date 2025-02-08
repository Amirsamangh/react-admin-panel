import React from 'react';


const AttrActions = ({rowData}) => {
    return (
        <>
            <i
                className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
                title="ویرایش ویژگی"
                data-bs-placement='top'
            ></i>

            <i
                className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
                title="حذف ویژگی"
            ></i>
        </>
    );
}

export default AttrActions;
