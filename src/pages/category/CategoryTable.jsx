import React, { useEffect, useState } from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import Addcategory from './AddCategory';
import { deleteCategoryService, getCategoriesService } from '../../services/category';
import ShowInMenu from './tableAddition/showInMenu';
import Actions from './tableAddition/Actions';
import { Outlet, useParams } from 'react-router-dom';
import { convertDateToJalali } from '../../utils/convertDate';
import { Alert, Confirm } from '../../utils/alerts';
import { useHasPermission } from '../../hook/permissionHook';

const CategoryTable = () => {

    const params = useParams();
    const [data, setData] = useState([]);
    const [forceRender, setForceRender] = useState(0);
    const [loading, setLoading] = useState(false);

    const hasPerm = useHasPermission('create_category');

    const handleGetCategories = async () => {
        setLoading(true)
        try {
            const res = await getCategoriesService(params.categoryId);
            if (res.status === 200) {
                setData(res.data.data);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    };

    const handleDeleteCategory = async (rowData)=>{
        if(await Confirm('حذف دسته بندی' , `آیا از حذف دسته ${rowData.title} اطمینان دارید`)) {
            try {
                const res = await deleteCategoryService(rowData.id);
                console.log(res);
                
                if (res.status === 200) {
                    Alert ('انجام شد' , res.data.message , 'success')
                    setData(data.filter(d=>d.id != rowData.id))
                }
                
            } catch (error) {
                console.log(error);
                
            }
        }
    }

    useEffect(() => {
        handleGetCategories();
    }, [params, forceRender]);

    const dataInfo = [
        { field: 'id', title: '#' },
        { field: 'title', title: 'عنوان محصول' },
        { field: 'parent_id', title: 'والد' },
        {
            field: null,
            title: 'تاریخ',
            elements: (rowData) => convertDateToJalali(rowData.created_at)
        },
        {
            field: null,
            title: 'نمایش در منو',
            elements: (rowData) => <ShowInMenu rowData={rowData} />
        },
        {
            field: null,
            title: 'عملیات',
            elements: (rowData) => <Actions rowData={rowData} handleDeleteCategory={handleDeleteCategory} />
        }
    ]

    const searchParams = {
        title: 'جستجو',
        placeholder: 'قسمتی از عنوان را وارد کنید',
        searchField: 'title',
    }
    return (
        <>
            <Outlet />
            <PaginatedTable
                data={data}
                dataInfo={dataInfo}
                searchParams={searchParams}
                numOfPages={8}
                loading={loading}
            >
                {hasPerm && <Addcategory setForceRender={setForceRender} />}
            </PaginatedTable>
        </>
    );
}

export default CategoryTable;
