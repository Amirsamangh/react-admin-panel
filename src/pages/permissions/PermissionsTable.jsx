import React, { useEffect, useState } from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import { getAllPermissionsService } from '../../services/users';

const PermissionsTable = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const dataInfo = [
        {field: 'id' , title:'#'},
        {field: 'title' , title:'عنوان'},
        {field: 'description' , title:'توضیحات'},
        {field: 'category' , title:'عنوان دسته'},
    ]

    const searchParams = {
        title: 'عنوان',
        placeholder: 'قسمتی از عنوان را وارد کنید',
        searchField: 'title',
    }

    const handleGetAllPermissions = async ()=>{
        setLoading(true)
        const res = await getAllPermissionsService()
        setLoading(false)

        if(res.status === 200) {
            setData(res.data.data)
        }
    }

    useEffect(()=>{
        handleGetAllPermissions()
    },[])

    return (
        <>
            <PaginatedTable
                data={data}
                dataInfo={dataInfo}
                searchParams={searchParams}
                numOfPages={9}
                loading={loading}
            />
        </>
    );
}

export default PermissionsTable;
