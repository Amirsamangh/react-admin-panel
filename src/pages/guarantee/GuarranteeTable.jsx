import React, { useEffect, useState } from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import { deleteGuaranteeService, getAllGuaranteesService } from '../../services/guarantee';
import AddGuarantee from './AddGuarantee';
import { Alert, Confirm } from '../../utils/alerts';
import Actions from './tableAddition/Actions';

const GuarranteeTable = () => {
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(false)
    const [guaranteeToEdit , setGuaranteeToEdit] = useState(null)

    const dataInfo = [
        {field : 'id'  , title : '#'},
        {field : 'title'  , title : 'عنوان'},
        {field : 'descriptions'  , title : 'توضیحات'},
        {field : 'length'  , title : 'مدت گارانتی'},
        {field : 'length_unit'  , title : 'واحد'},
        {
            field: null ,
            title: 'عملیات',
            elements: (rowData)=> <Actions rowData={rowData} setGuaranteeToEdit={setGuaranteeToEdit} handleDeleteGuarantee={handleDeleteGuarantee} />
        },
    ]

    const searchParams = {
        title: 'جستجو',
        placeholder: 'قسمتی از عنوان را وارد کنید',
        searchField: 'title',
    }

    const handleGetAllGuarantees = async ()=>{
        setLoading(true)
        try {
            const res = await getAllGuaranteesService()
            
            if(res.status === 200) {
                setData(res.data.data)
            }
        } catch (error) {
            Alert( 'مشکل' , error.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        handleGetAllGuarantees()
    }, []);

    const handleDeleteGuarantee = async (guarantee)=>{
        if(await Confirm('حذف گارانتی' , `آیا از حذف ${guarantee.title} اطمینان دارید؟`)) {
            const res = await deleteGuaranteeService(guarantee.id)
            if(res.status === 200) {
                Alert('انجام شد' , res.data.message , 'success')
                setData(lastData=> lastData.filter(d=>d.id != guarantee.id))
            }
        }
    }


    return (
        <>
        <PaginatedTable
            data={data}
            dataInfo={dataInfo}
            numOfPages={8}
            searchParams={searchParams}
            loading={loading}
        >
            <AddGuarantee setData={setData} guaranteeToEdit={guaranteeToEdit}  setGuaranteeToEdit={setGuaranteeToEdit} />
        </PaginatedTable>
        </>
    );
}

export default GuarranteeTable;
