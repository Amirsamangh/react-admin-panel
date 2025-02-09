import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PaginatedTable from '../../../components/PaginatedTable';
import ShowInFilter from './ShowInFilter';
import AttrActions from './AttrActions';
import PrevPageButton from '../../../components/PrevPageButton';
import { addCategoryAttrService, editCategoryAttrService, getCategoryAttrService } from '../../../services/categoryAttr';
import { Alert } from '../../../utils/alerts';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../../components/form/FormikControl';
import SubmitButton from '../../../components/form/SubmitButton';

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
            title: 'نمایش در فیلتر',
            elements: (rowData) => <ShowInFilter rowData={rowData} />
        },
        {
            title: 'عملیات',
            elements: (rowData) => <AttrActions rowData={rowData} setAttrToEdit={setAttrToEdit} attrToEdit={attrToEdit} />
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

    useEffect(() => {
        if (attrToEdit) setReinitialValues({
            title: attrToEdit.title,
            unit: attrToEdit.unit,
            in_filter: attrToEdit.in_filter ? true : false,
        })
        else setReinitialValues(null)
    }, [attrToEdit])

    const onSubmit = async (values, actions, catId, setData, attrToEdit, setAttrToEdit) => {
        try {
          values = {
            ...values,
            in_filter: values.in_filter ? 1 : 0
          }
          if (attrToEdit) {
            const attrId = attrToEdit.id
            const res = await editCategoryAttrService(attrId, values);
            console.log(res);
            if (res.status === 200) {
              setData(oldData=>{
                const newData = [...oldData]
                const index = newData.findIndex(d=>d.id === attrToEdit.id)
                newData[index] = res.data.data
                return newData
              });
              Alert('انجام شد', res.data.message, 'success');
              setAttrToEdit(null)
            }
          }else{
            const res = await addCategoryAttrService(catId, values);
            if (res.status === 201) {
              Alert('انجام شد', res.data.message, 'success');
              setData(oldData=>[...oldData, res.data.data])
            }
          }
        } catch (error) {
          console.log(error.message);
        }
      };


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
                        initialValues={reinitialValues || initialValues}
                        onSubmit={(values, actions) =>
                            onSubmit(values, actions, location.state.categoryData.id, setData, attrToEdit, setAttrToEdit)}
                        validationSchema={validationSchema}
                        enableReinitialize
                    >
                        <Form>
                            <div className={`row my-3 ${attrToEdit ? 'alert-danger shadow rounded' : ''} justify-content-center  is_inline`}>
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
                                <div className="col-4 col-lg-2 d-flex justify-content-center align-items-start my-1 btn-group btn-group-sm dir_ltr">
                                    <SubmitButton />
                                    {attrToEdit ? (
                                        <button className='btn btn-secondary btn-sm me-2' type='button' onClick={() => setAttrToEdit(null)}>انصراف</button>
                                    ) : null}
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
