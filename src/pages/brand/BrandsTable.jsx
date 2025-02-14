import React, { useEffect, useState } from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import AddBrands from './AddBrands';
import { apiPath } from '../../services/httpService';
import { getAllBrandsService } from '../../services/brands';
import Actions from './tableAddition/Actions';

const BrandTable = () => {
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(false)

    const dataInfo = [
        {field: 'id' , title: '#'},
        {field: 'original_name' , title: 'عنوان'},
        {field: 'persian_name' , title: 'عنوان فارسی'},
        {field: 'descriptions' , title: 'توضیحات'},
    ]

    const additionalFieald = [
        {
          title: "لوگو",
          elements: (rowData) =>
            rowData.logo ? <img src={apiPath+"/"+rowData.logo} width="40" /> : null,
        },
        {
          title: "عملیات",
          elements: (rowData) => <Actions rowData={rowData} />,
        },
      ];

    const searchParams = {
        title: 'جستجو',
        placeholder: 'قسمتی از عنوان را وارد کنید',
        searchField: 'original_name',
    }

    const handleGetAllBrands = async ()=>{
        setLoading(true)
        const res = await getAllBrandsService()
        console.log(res);
        
        res && setLoading(false) // اگر رس مقدار داشت لودینگ فالس شود
        if(res.status === 200 ) {
            setData(res.data.data)
        }
    }

    useEffect(()=>{
        handleGetAllBrands()
    },[])
    return (
        <>
            <PaginatedTable
                data={data}
                dataInfo={dataInfo}
                additionalFieald={additionalFieald}
                numOfPages={6}
                searchParams={searchParams}
                loading={loading}
            >
                <AddBrands setData={setData}/>
            </PaginatedTable>
        </>
    );
}

export default BrandTable;
