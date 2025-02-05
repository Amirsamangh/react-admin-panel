import React, { useEffect, useState } from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import Addcategory from './AddCategory';
import { getCategoriesService } from '../../services/category';
import { Alert } from '../../utils/alerts';
import ShowInMenu from './tableAddition/showInMenu';
import Actions from './tableAddition/Actions';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { convertDateToLalali } from '../../utils/convertDate';

const CategoryTable = () => {

    const params = useParams();
    const location = useLocation()
    const [data, setData] = useState([]);
    const [forceRender, setForceRender] = useState(0);

    const handleGetCategories = async () => {
        try {
            const res = await getCategoriesService(params.categoryId);
            if (res.status === 200) {
                setData(res.data.data);
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(() => {
        handleGetCategories();
    }, [params , forceRender]);

    const dataInfo = [
        { field: 'id', title: '#' },
        { field: 'title', title: 'عنوان محصول' },
        { field: 'parent_id', title: 'والد' },
    ]


    const additionalFieald = [
        {
            title: 'تاریخ',
            elements: (rowData) => convertDateToLalali(rowData.created_at)
        },
        {
            title: 'نمایش در منو',
            elements: (rowData) => <ShowInMenu rowData={rowData} />
        },
        {
            title: 'عملیات',
            elements: (rowData) => <Actions rowData={rowData} />
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
            {
                data.length ? (
                    <PaginatedTable
                        data={data}
                        dataInfo={dataInfo}
                        additionalFieald={additionalFieald}
                        searchParams={searchParams}
                        numOfPages={8}
                    >
                        <Addcategory setForceRender={setForceRender} />
                    </PaginatedTable>
                ) : (
                    <h5 className="text-center text-danger my-5">هیچ دسته بندی یافت نشد</h5>
                )
            }
        </>
    );
}

export default CategoryTable;
