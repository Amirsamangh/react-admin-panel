import React, { useEffect, useState } from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import AddButtonLink from '../../components/AddButtonLink';
import { Outlet } from 'react-router-dom';
import Actions from './tableAddition/Actions'
import { getAllRolesService } from '../../services/users';

const RoleTable = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const dataInfo = [
        { field: 'id', title: '#' },
        { field: 'title', title: 'عنوان' },
        { field: 'description', title: 'توضیحات' },
        {
            field: null,
            title: "عملیات",
            elements: (rowData)=> ( <Actions rowData={rowData} handleDeleteRole={handleDeleteRole} /> )
        }
    ]

    const searchParams = {
        title: 'عنوان',
        placeholder: 'قسمتی از عنوان را وارد کنید',
        searchField: 'title',
    }

    const handleGetAllRoles = async ()=>{
        setLoading(true)
        const res = await getAllRolesService();
        setLoading(false)

        if(res.status === 200) {
            setData(res.data.data)
        }
    }

    const handleDeleteRole = ()=>{}

    useEffect(()=>{
        handleGetAllRoles()
    },[])

    return (
            <PaginatedTable
                data={data}
                dataInfo={dataInfo}
                numOfPages={9}
                searchParams={searchParams}
                loading={loading}
            >
                <AddButtonLink href={'/roles/add-role'} />
                <Outlet context={{setData}} />
            </PaginatedTable>
    );
}

export default RoleTable;
