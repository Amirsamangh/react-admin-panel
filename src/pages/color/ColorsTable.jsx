import React, { useState } from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import Actions from './tableAddition/Actions';
import { deleteColorService, getAllcolorsService } from '../../services/colors';
import { useEffect } from 'react';
import AddColor from './AddColor';
import { Alert, Confirm } from '../../utils/alerts';

const ColorsTable = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [colorToEdit , setColorToEdit] = useState(null)

    const dataInfo = [
        { field: 'id', title: '#' },
        { field: 'title', title: 'عنوان' },
        { field: 'code', title: 'کد رنگ' },
    ]

    const additionalFieald = [
        {
            title: "رنگ",
            elements: (rowData) => <div className="w-100 h-100 d-block rounded-3" style={{ background: rowData.code, color: rowData.code }}>...</div>,
          },
          {
            title: "عملیات",
            elements: (rowData) => (
              <Actions rowData={rowData} setColorToEdit={setColorToEdit} handleDeleteColor={handleDeleteColor}/>
            ),
          },
    ]

    const searchParams = {
        title: 'جستجو',
        placeholder: 'قسمتی از عنوان را وارد کنید',
        searchField: 'title',
    }

    const handleGetAllColors = async () => {
        setLoading(true)
        const res = await getAllcolorsService()
        res && setLoading(false)
        if(res.status === 200) {
            setData(res.data.data)
        }
    }

    const handleDeleteColor = async (color)=>{
        if(await Confirm('حذف رنگ' , `آیا از حذف رنگ ${color.title} اطمینان دارید؟`)) {
            const res = await deleteColorService(color.id)
            if(res.status === 200) {
                Alert('انجام شد' , res.data.message , 'success')
                setData(lastData=> lastData.filter(d=> d.id != color.id));
            }
        }
    };
    
    useEffect(()=>{
        handleGetAllColors()
    },[])

    return (

        <>
            <PaginatedTable
                data={data}
                dataInfo={dataInfo}
                additionalFieald={additionalFieald}
                numOfPages={8}
                searchParams={searchParams}
                loading={loading}
            >
                <AddColor setData={setData} colorToEdit={colorToEdit}  setColorToEdit={setColorToEdit} />
            </PaginatedTable>
        </>
    );
}

export default ColorsTable;
