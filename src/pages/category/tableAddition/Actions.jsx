import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CategoryContext } from '../../../context/categoryContext';
import ActionIcon from '../../../components/ActionIcon';

const Actions = ({ rowData, handleDeleteCategory }) => {

    const navigate = useNavigate()
    const params = useParams()
    const { setEditId } = useContext(CategoryContext)

    return (
        <>

            {!params.categoryId ? (
                <ActionIcon icon="fas fa-project-diagram text-info" pTitle="زیرمجموعه" data-bs-toggle="tooltip" data-bs-placement="top" onClick={() => {
                    navigate(`/categories/${rowData.id}`, {
                        state: {
                            parentData: rowData
                        }
                    })
                }}
                />
            ) : null}

            <ActionIcon icon="fas fa-edit text-warning" pTitle="ویرایش دسته" data-bs-toggle="modal" data-bs-placement="top" data-bs-target='#add_product_category_modal'
                onClick={() => setEditId(rowData.id)}
            />

            {params.categoryId ? (
                <ActionIcon icon="fas fa-receipt text-success" pTitle="افزودن ویژگی" onClick={() => {
                    navigate(`/categories/${rowData.id}/attrbutes`, {
                        state: {
                            categoryData: rowData
                        }
                    })
                }}
                />
            ) : null}
            <ActionIcon icon="fas fa-times text-danger" pTitle="حذف دسته" onClick={() => handleDeleteCategory(rowData)} />
        </>
    );
}

export default Actions;
