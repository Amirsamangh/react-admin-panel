import React from 'react';


const AttrActions = ({rowData , attrToEdit , setAttrToEdit , handleDeleteCategoryAttr}) => {
    return (
        <div className={`text-center ${attrToEdit && attrToEdit.id === rowData.id ? 'alert-danger shadow rounded' : ''}`}>
            <i
                className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip "
                title="ویرایش ویژگی"
                data-bs-placement='top'
                onClick={()=>setAttrToEdit(rowData)}
            ></i>

            <i
                className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
                title="حذف ویژگی"
                onClick={()=>handleDeleteCategoryAttr(rowData)}
            ></i>
        </div>
    );
}

export default AttrActions;
