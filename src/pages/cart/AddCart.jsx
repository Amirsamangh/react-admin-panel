import React, { useEffect, useState } from 'react';
import ModalsContainer from '../../components/ModalsContainer';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from './core';
import FormikControl from '../../components/form/FormikControl';
import { getAllProductTitlesService, getOneProductService } from '../../services/product';
import { addNewCartService } from '../../services/carts';
import { Alert } from '../../utils/alerts';
import FormikError from '../../components/form/FormikError';
import { numberWithCommas } from '../../utils/numbers';
import Select from 'react-select/base';

const AddCart = () => {
    const navigate = useNavigate()
    const { handleGetCarts } = useOutletContext()
    const [allProducts, setAllProducts] = useState([])
    const [currentProduct, setCurrentProduct] = useState(null)
    const [colors, setColors] = useState([])
    const [guarantees, setGuarantees] = useState([])
    const [selectedProducts, setSelectedProducts] = useState([])
    const [selectedProductsInfo, setSelectedProductsInfo] = useState([])

    const handleGetAllProductTitles = async () => {
        const res = getAllProductTitlesService()
        console.log(res);

        res.status === 200 && setAllProducts(res.data.data.map(p => ({ value: p.title, label: p.id })))
    }

    const handleChangeSelectedProduct = async (e, formik) => {
        formik.setFieldValue('product_id', e)
        const res = await getOneProductService(e)
        if (res.status === 200) {
            const product = res.data.data
            setCurrentProduct(product)
            setColors(product.colors.map(c => ({ value: c.title, label: c.id })))
            setGuarantees(product.guarantees.map(g => ({ value: g.title, label: g.id })))
        }
    }

    const handleConfirmAddCart = async (formik) => {
        const res = await addNewCartService({
            user_id: formik.values.user_id,
            products: selectedProducts
        })

        if (res.status === 201) {
            Alert('انجام شد', res.data.message, 'success')
            handleGetCarts()
            navigate(-1)
        }
    }

    const handleDeleteProduct = (id) => {
        const index = selectedProductsInfo.findIndex(p => p.id == id)
        setSelectedProducts(old => old.splice(index, 1))
        setSelectedProductsInfo(old => old.filter(o => o.id != id))
    }

    useEffect(() => {
        handleGetAllProductTitles()
    }, [])
    return (
        <>

            <ModalsContainer
                className='d-block show'
                fullScreen={true}
                id='edit_cart_modal'
                title='جزئیات سبد خرید'
                closeFunction={() => navigate(-1)}
            >

                <div className="container">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, actions) => onSubmit(values, actions, setSelectedProducts, setSelectedProductsInfo, currentProduct)}
                        validationSchema={validationSchema}
                        enableReinitialize
                    >
                        {
                            formik => {
                                return (
                                    <Form>
                                        <div className="row my-3 justify-content-center">
                                            <div className="col-12 col-md-4 col-lg-2 my-1">
                                                <Field type="text" name="user_id" className="form-control" placeholder="آی دی مشتری" disabled={selectedProducts.length > 0} />
                                                <br />
                                                <ErrorMessage name='user_id' component={FormikError} />
                                            </div>

                                            <div className='col-12 col-md-4 col-lg-3 my-1'>
                                                <Select
                                                    value={selectedProducts}
                                                    onChange={(e) => handleChangeSelectedProduct(e, formik)}
                                                    options={allProducts}
                                                    placeholder='محصول'
                                                    isSearchable={true}
                                                onMenuOpen={()=> setAllProducts(allProducts)}
                                                />
                                            </div>

                                            {/* <div className="col-12 col-md-4 col-lg-3 my-1">
                                                <SelectSearch options={allProducts} search={true} placeholder="محصول"
                                                    onChange={(e) => handleChangeSelectedProduct(e, formik)} />
                                                <br />
                                                <ErrorMessage name='product_id' component={FormikError} />
                                            </div> */}

                                            {/* <div className="col-12 col-md-4 col-lg-2 my-1">
                                                <SelectSearch options={colors} placeholder="رنگ" onChange={(e) => formik.setFieldValue('color_id', e)} />
                                                <br />
                                                <ErrorMessage name='color_id' component={FormikError} />
                                            </div> */}
                                            {/* 
                                            <div className="col-12 col-md-4 col-lg-2 my-1">
                                                <SelectSearch options={guarantees} placeholder="گارانتی" onChange={(e) => formik.setFieldValue('guarantee_id', e)} />
                                                <br />
                                                <ErrorMessage name='guarantee_id' component={FormikError} />
                                            </div> */}

                                            <div className="col-12 col-md-4 col-lg-2 my-1">
                                                <Field type="number" name="count" className="form-control" placeholder="تعداد" />
                                                <br />
                                                <ErrorMessage name='count' component={FormikError} />
                                            </div>

                                            <div className="col-4 col-lg-1 d-flex justify-content-center align-items-center my-1">
                                                <i className="fas fa-check text-light bg-success rounded-circle p-2 mx-1 hoverable_text hoverable pointer has_tooltip hoverable_text" title="ثبت فرم" data-bs-toggle="tooltip" data-bs-placement="top" onClick={() => formik.submitForm()}></i>
                                            </div>
                                            <hr className="mt-3" />
                                        </div>
                                        <div className="row justify-content-center">
                                            {
                                                selectedProductsInfo.map(product => (
                                                    <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                                                        <div className="input-group my-3 dir_ltr">
                                                            <span className="input-group-text text-end font_08 w-100 text_truncate">
                                                                <i className="fas fa-times text-danger hoverable_text pointer mx-1 has_tooltip" title="حذف محصول از سبد" data-bs-placement="top" onClick={() => handleDeleteProduct(product.id)}></i>
                                                                {product.productName}
                                                                (قیمت واحد: {numberWithCommas(product.price)})
                                                                (گارانتی: {product.guarantee})
                                                                ({product.count} عدد)
                                                                <i className="fas fa-circle mx-1" style={{ color: product.color }}></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            <div className='col-12'></div>
                                            {selectedProductsInfo.length > 0 ? (
                                                <>
                                                    <div className="col-6">
                                                        <div className="input-group my-3 dir_ltr">
                                                            <span className="input-group-text justify-content-center w-75" >{numberWithCommas(selectedProductsInfo.map(p => p.count * p.price).reduce((a, b) => a + b))}</span>
                                                            <span className="input-group-text w-25 text-center"> جمع کل </span>
                                                        </div>
                                                    </div>
                                                    <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                                                        <button type='button' className="btn btn-primary" onClick={() => handleConfirmAddCart(formik)}>ذخیره</button>
                                                    </div>
                                                </>
                                            ) : (<h6 className='text-center text-primary'>محصولات خود را مشخص کنید</h6>)
                                            }
                                        </div>
                                    </Form>
                                )
                            }
                        }
                    </Formik>
                    {/* <div className="row my-3 justify-content-center">
                        <div className="col-12 col-md-4 col-lg-3 my-1">
                            <input type="text" className="form-control" list="customer_list" placeholder="نام مشتری" />
                            <datalist id="customer_list">
                                <option value="مشتری شماره 1" />
                                <option value="مشتری شماره 2" />
                            </datalist>
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" className="form-control" list="product_list" placeholder="عنوان محصول" />
                            <datalist id="product_list">
                                <option value="محصول شماره 1" />
                                <option value="محصول شماره 2" />
                            </datalist>
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <select className="form-control">
                                <option value="">انتخاب رنگ</option>
                                <option value="1">رنگ شماره 1</option>
                                <option value="2">رنگ شماره 2</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <select className="form-control">
                                <option value="">انتخاب گارانتی</option>
                                <option value="1">گارانتی شماره 1</option>
                                <option value="2">گارانتی شماره 2</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 my-1">
                            <input type="number" className="form-control" placeholder="تعداد" />
                        </div>
                        <div className="col-4 col-lg-1 d-flex justify-content-center align-items-center my-1">
                            <i className="fas fa-check text-light bg-success rounded-circle p-2 mx-1 hoverable_text hoverable pointer has_tooltip hoverable_text" title="ثبت ویژگی" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                        </div>
                        <hr className="mt-3" />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group my-3 dir_ltr">
                                <span className="input-group-text justify-content-center w_15" >عدد</span>
                                <input type="number" className="form-control text-center w_15" placeholder="" value="50" />
                                <span className="input-group-text text-end w_70 font_08 d-flex align-items-center text_truncate">
                                    <i className="fas fa-times text-danger hoverable_text pointer mx-1 has_tooltip" title="حذف محصول از سبد" data-bs-placement="top"></i>
                                    محصول شماره 1
                                    ( 100هزار تومان)
                                    ( گارانتی فلان)
                                    <i className="fas fa-circle mx-1" style={{ color: "#000" }}></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group my-3 dir_ltr">
                                <span className="input-group-text justify-content-center w_15" >عدد</span>
                                <input type="number" className="form-control text-center w_15" placeholder="" value="5" />
                                <span className="input-group-text text-end w_70 font_08 d-flex align-items-center text_truncate">
                                    <i className="fas fa-times text-danger hoverable_text pointer mx-1 has_tooltip" title="حذف محصول از سبد" data-bs-placement="top"></i>
                                    محصول ویژه و مورد خاص شماره 2
                                    ( 100هزار تومان)
                                    ( گارانتی فلان)
                                    <i className="fas fa-circle mx-1" style={{ color: "rgb(236, 16, 16)" }}></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="input-group my-3 dir_ltr">
                                <span className="input-group-text justify-content-center w-75" >200,000 تومان</span>
                                <span className="input-group-text w-25 text-center"> جمع کل </span>
                            </div>
                        </div>
                        <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                            <button className="btn btn-primary ">ذخیره</button>
                        </div>
                    </div> */}
                </div>
            </ModalsContainer>
        </>
    );
}

export default AddCart;
