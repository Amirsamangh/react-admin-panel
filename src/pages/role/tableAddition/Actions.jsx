import React from 'react';
import { useNavigate } from 'react-router-dom';

const Actions = ({rowData , handleDeleteRole}) => {
    const navigate = useNavigate()
    return (
        <>
            <i
                className="fas fa-edit text-warning mx-1 hoverable_text pointer"
                title="ویرایش نقش"
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                onClick={()=>navigate('/roles/add-role' , {state:{roleToEdit:rowData}})}
            ></i>
            <i
                className="fas fa-remove text-danger mx-1 hoverable_text pointer"
                title="حذف نقش"
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                onClick={()=>handleDeleteRole(rowData)}
            ></i>
        </>
    );
}

export default Actions;
