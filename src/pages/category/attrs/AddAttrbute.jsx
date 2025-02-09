import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PaginatedTable from '../../../components/PaginatedTable';
import ShowInFilter from './ShowInFilter';
import AttrActions from './AttrActions';
import PrevPageButton from '../../../components/PrevPageButton';
import { addCategoryAttrService, getCategoryAttrService } from '../../../services/categoryAttr';
import { Alert } from '../../../utils/alerts';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../../components/form/FormikControl';
import SubmitButton from '../../../components/form/submitButton';

const AddAttrbute = () => {

    const location = useLocation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const dataInfo = [
        { field: 'id', title: '#' },
        { field: 'unit', title: 'واحد' },
        { field: 'title', title: 'عنوان محصول' },
    ]
    const additionalFieald = [
        {
            title: 'نمایش در فیلتر',
            elements: (rowData) => <ShowInFilter rowData={rowData} />
        },
        {
            title: 'عملیات',
            elements: (rowData) => <AttrActions rowData={rowData} />
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
    useEffect(() => {
        handleGetCategoryAttr();
    }, [])
    

    const initialValues = {
        title: '',
        unit: '',
        in_filter: true
    }

    const onSubmit = async (values, actions , catId , setData ) => {
        try {
            values = {
                ...values ,
                in_filter: values.in_filter ? 1 : 0
            }
            const res = await addCategoryAttrService(catId , values)
            if(res.status === 201) {
                Alert('انجام شد' , res.data.message , 'success')
                setData(oldData=>[...oldData , res.data.data])
            }
        } catch (error) {
            console.log(error.message);
            
        } finally {
            actions.setSubmitting(false)
        }
    }

    const validationSchema = Yup.object({
        title: Yup.string().required('لطفا این قسمت را پر کنید').matches(/^[u0600-\u06FF\sa-zA-Z0-9!@$%&?]+$/, 'فقط از حروف و اعداد استفاده شود'),
        unit: Yup.string().required('لطفا این قسمت را پر کنید').matches(/^[u0600-\u06FF]/, 'فقط از حروف استفاده شود'),
        in_filter: Yup.boolean(),
    })
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
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, actions) => { onSubmit(values, actions , location.state.categoryData.id , setData , setLoading) }}
                        validationSchema={validationSchema}
                    >
                        <Form>


                            <div className="row my-3">
                                <FormikControl
                                    control='input'
                                    className='col-md-6 col-lg-4 my-1'
                                    type='text'
                                    name='title'
                                    label='عنوان'
                                    placeholder='عنوان ویژگی جدید'
                                />
                                <FormikControl
                                    control='input'
                                    className='col-md-6 col-lg-4 my-1'
                                    type='text'
                                    name='unit'
                                    label='واحد'
                                    placeholder='واحد ویژگی جدید'
                                />
                                <div className="col-8 col-lg-2 my-1 ">
                                    <FormikControl
                                        control='switch'
                                        name='in_filter'
                                        label='نمایش در فیلتر'
                                    />
                                </div>
                                <div className="col-4 col-lg-2 d-flex justify-content-center align-items-start my-1">
                                    <SubmitButton />
                                </div>
                            </div>
                        </Form>
                    </Formik>
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
