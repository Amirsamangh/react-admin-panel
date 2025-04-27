import React, { useEffect, useState } from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import AddBrands from './AddBrands';
import { apiPath } from '../../services/httpService';
import { deleteBrandsService, editBrandsService, getAllBrandsService } from '../../services/brands';
import Actions from './tableAddition/Actions';
import { Alert, Confirm } from '../../utils/alerts';

const BrandTable = () => {
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(false)
    const [brandToEdit , setBrandToEdit] = useState(null)

    const dataInfo = [
        {field: 'id' , title: '#'},
        {field: 'original_name' , title: 'عنوان'},
        {field: 'persian_name' , title: 'عنوان فارسی'},
        {field: 'descriptions' , title: 'توضیحات'},
        {
            field: null ,
            title: "لوگو",
            elements: (rowData) =>
              rowData.logo ? <img src={apiPath+"/"+rowData.logo} width="40" /> : null,
          },
          {
            field: null ,
            title: "عملیات",
            elements: (rowData) => <Actions rowData={rowData} setBrandToEdit={setBrandToEdit} handleDeleteBrand={handleDeleteBrand} />,
          },
    ]

    const searchParams = {
        title: 'جستجو',
        placeholder: 'قسمتی از عنوان را وارد کنید',
        searchField: 'original_name',
    }

    const handleGetAllBrands = async ()=>{
        setLoading(true)
        const res = await getAllBrandsService()
        
        res && setLoading(false) // اگر رس مقدار داشت لودینگ فالس شود
        if(res.status === 200 ) {
            setData(res.data.data)
        }
    }

    useEffect(()=>{
        handleGetAllBrands()
    },[])

    const handleDeleteBrand = async (brand)=>{
        if(await Confirm('حذف یرند' , `آیا از حذف ${brand.original_name} اطمینان دارید؟`)) {
            const res = await deleteBrandsService(brand.id)
            if(res.status === 200) {
                Alert('انجام شد' , res.data.message , 'success')
                setData(lastData=> lastData.filter(d=>d.id != brand.id))
            }
        }
    }
    return (
        <>
            <PaginatedTable
                data={data}
                dataInfo={dataInfo}
                numOfPages={6}
                searchParams={searchParams}
                loading={loading}
            >
                <AddBrands setData={setData} brandToEdit={brandToEdit} setBrandToEdit={setBrandToEdit} />
            </PaginatedTable>
        </>
    );
}

export default BrandTable;
