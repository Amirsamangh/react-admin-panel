import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PaginatedTable from '../../../components/PaginatedTable';
import ShowInFilter from './ShowInFilter';
import AttrActions from './AttrActions';
import PrevPageButton from '../../../components/PrevPageButton';
import { deleteCategoryAttrService , getCategoryAttrService } from '../../../services/categoryAttr';
import { Alert, Confirm } from '../../../utils/alerts';
import AddAttrs from './AddAttrs';

const AddAttrbute = () => {

    const location = useLocation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [attrToEdit, setAttrToEdit] = useState(null)
    const [reinitialValues, setReinitialValues] = useState(null)

    const dataInfo = [
        { field: 'id', title: '#' },
        { field: 'unit', title: 'واحد' },
        { field: 'title', title: 'عنوان محصول' },
    ]
    const additionalFieald = [
        {
            title: 'عملیات',
            elements: (rowData) => <AttrActions rowData={rowData} setAttrToEdit={setAttrToEdit} attrToEdit={attrToEdit} handleDeleteCategoryAttr={handleDeleteCategoryAttr} />
        },
        {
            title: 'نمایش در فیلتر',
            elements: (rowData) => <ShowInFilter rowData={rowData} />
        },
        
    ]
    const searchParams = {
        title: 'جستجو',
        placeholder: 'قسمتی از عنوان را وارد کنید',
        searchField: 'title',
    }

    const handleGetCategoryAttr = async () => {
        setLoading(true);
        try {
            const res = await getCategoryAttrService(location.state.categoryData.id)
            console.log(res);

            if (res.status === 200) {
                setData(res.data.data)
            }
        } catch (error) {
            console.log(error);
            Alert('', error.message)

        } finally {
            setLoading(false);
        }
    }

    const handleDeleteCategoryAttr = async (attr) => {
        if (await Confirm(`حذف ویژگی ${attr.title}`, 'آیا از حذف رکورد اطمینان دارید؟')) {
            try {
                const res = await deleteCategoryAttrService(attr.id);
                console.log(res);
                if (res.status === 200) {
                    Alert('', res.data.message, 'success')
                    setData(lastData => [...lastData].filter(d => d.id != attr.id))
                }
            } catch (error) {
                Alert('خطا', error.message, 'danger')
            }
        }
    }
    useEffect(() => {
        handleGetCategoryAttr();
    }, [])


    useEffect(() => {
        if (attrToEdit) setReinitialValues({
            title: attrToEdit.title,
            unit: attrToEdit.unit,
            in_filter: attrToEdit.in_filter ? true : false,
        })
        else setReinitialValues(null)
    }, [attrToEdit])

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-around align-items-center">
                    <div className="row my-3">
                        <div className='d-flex flex-col justify-content-center'>
                            <h3>مدیریت ویژگی ها</h3>
                            <h5 className='text-danger'>{location.state.categoryData.title}</h5>
                        </div>
                    </div>
                    <AddAttrs 
                    reinitialValues={reinitialValues}
                    location={location}
                    setData={setData}
                    attrToEdit={attrToEdit}
                    setAttrToEdit={setAttrToEdit}
                    />
                    <hr />
                    <PaginatedTable
                        data={data}
                        dataInfo={dataInfo}
                        additionalFieald={additionalFieald}
                        numOfPages={5}
                        searchParams={searchParams}
                        loading={loading}
                    >
                        <PrevPageButton />
                    </PaginatedTable>


                </div>
            </div>
        </>
    );
}

export default AddAttrbute;
