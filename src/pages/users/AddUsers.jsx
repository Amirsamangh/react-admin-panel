import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';

const AddUsers = () => {
    return (
        <>
            <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_user_modal">
                <i className="fas fa-plus text-light"></i>
            </button>

            <ModalsContainer
                fullScreen={true}
                id='add_user_modal'
                title='افزودن کاربر'
            >
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-6 col-lg-8">
                            <div class="input-group my-1 dir_ltr">
                                <input type="text" class="form-control" placeholder="فقط از حروف استفاده شود" />
                                <span class="input-group-text w_8rem justify-content-center">نام</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-8">
                            <div class="input-group my-1 dir_ltr">
                                <input type="text" class="form-control" placeholder="فقط از حروف استفاده شود" />
                                <span class="input-group-text w_8rem justify-content-center">نام خانوادگی</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-8">
                            <div class="input-group my-1 dir_ltr">
                                <input type="number" class="form-control" placeholder="فقط از عدد استفاده شود" />
                                <span class="input-group-text w_8rem justify-content-center">کد ملی</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-8">
                            <div class="input-group my-1 dir_ltr">
                                <input type="number" class="form-control" placeholder="فقط از عدد استفاده شود" />
                                <span class="input-group-text w_8rem justify-content-center">شماره موبایل</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-8">
                            <div class="input-group my-1 dir_ltr">
                                <input type="text" class="form-control" placeholder="فقط فرمت ایمیل (email@yourhost.com)" />
                                <span class="input-group-text w_8rem justify-content-center">ایمیل</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-8">
                            <div class="input-group my-1 dir_ltr">
                                <span class="input-group-text justify-content-center pointer">
                                    <i class="fas fa-eye"></i>
                                </span>
                                <input type="password" class="form-control" placeholder="حد اقل 8 کارکتر" />
                                <span class="input-group-text w_8rem justify-content-center">رمز عبور</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-8 row px-0 my-3">
                            <label>تاریخ تولد:</label>
                            <div class="col-12 col-md-4">
                                <div class="input-group my-1 dir_ltr">
                                    <select class="form-control" >
                                        <option value="">انتخاب کنید</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <span class="input-group-text w_8rem justify-content-center">روز</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="input-group my-1 dir_ltr">
                                    <select class="form-control" >
                                        <option value="">انتخاب کنید</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <span class="input-group-text w_8rem justify-content-center">ماه</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="input-group my-1 dir_ltr">
                                    <select class="form-control" >
                                        <option value="">انتخاب کنید</option>
                                        <option value="1">1368</option>
                                        <option value="1">1300</option>
                                        <option value="2">1301</option>
                                        <option value="3">1302</option>
                                    </select>
                                    <span class="input-group-text w_8rem justify-content-center">سال</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-8 row px-0 my-3">
                            <label>تاریخ ثبت موبایل:</label>
                            <div class="col-12 col-md-4">
                                <div class="input-group my-1 dir_ltr">
                                    <select class="form-control" >
                                        <option value="">انتخاب کنید</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <span class="input-group-text w_8rem justify-content-center">روز</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="input-group my-1 dir_ltr">
                                    <select class="form-control" >
                                        <option value="">انتخاب کنید</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <span class="input-group-text w_8rem justify-content-center">ماه</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="input-group my-1 dir_ltr">
                                    <select class="form-control" >
                                        <option value="">انتخاب کنید</option>
                                        <option value="1">1400</option>
                                        <option value="1">1399</option>
                                        <option value="2">1398</option>
                                        <option value="3">1397</option>
                                    </select>
                                    <span class="input-group-text w_8rem justify-content-center">سال</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-8">
                            <div class="input-group my-1 dir_ltr">
                                <select class="form-control" >
                                    <option value="1">مرد</option>
                                    <option value="1">زن</option>
                                    <option value="2">نامشخص</option>
                                </select>
                                <span class="input-group-text w_8rem justify-content-center">جنسیت</span>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-8 row px-0 mt-3">
                            <label>آدرس:</label>
                            <div class="col-12 col-md-4">
                                <div class="input-group my-1 dir_ltr">
                                    <input type="text" class="form-control" placeholder="" />
                                    <span class="input-group-text w_8rem justify-content-center">کشور</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="input-group my-1 dir_ltr">
                                    <input type="text" class="form-control" placeholder="" />
                                    <span class="input-group-text w_8rem justify-content-center">استان</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="input-group my-1 dir_ltr">
                                    <input type="text" class="form-control" placeholder="" />
                                    <span class="input-group-text w_8rem justify-content-center">شهر</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-8 mb-3">
                            <div class="input-group my-1 dir_ltr">
                                <input type="text" class="form-control" placeholder="خیابان - کوچه و ..." />
                                <span class="input-group-text w_8rem justify-content-center">ادامه آدرس</span>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-8">
                            <div class="input-group my-1 dir_ltr">
                                <input type="text" class="form-control" placeholder="مثلا @qasem" />
                                <span class="input-group-text w_8rem justify-content-center">اینستاگرام</span>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-8">
                            <div class="input-group my-1 dir_ltr">
                                <input type="text" class="form-control" placeholder="مثلا @qasem" />
                                <span class="input-group-text w_8rem justify-content-center">تلگرام</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-8">
                            <div class="input-group my-1 dir_ltr">
                                <input type="file" class="form-control" placeholder="تصویر" />
                                <span class="input-group-text justify-content-center">تصویر</span>
                            </div>
                        </div>


                        <div class="col-12 col-md-6 col-lg-8 col-md-6 col-lg-8 my-1">
                            <div class="input-group mb-2 dir_ltr">
                                <input type="text" class="form-control" placeholder="قسمتی از نقش مورد نظر را وارد کنید" list="roleLists" />
                                <span class="input-group-text w_8rem justify-content-center">نقش ها</span>
                                <datalist id="roleLists">
                                    <option value="نقش شماره 1" />
                                    <option value="نقش شماره 2" />
                                    <option value="نقش شماره 3" />
                                </datalist>
                            </div>
                            <div class="col-12 col-md-6 col-lg-8">
                                <span class="chips_elem">
                                    <i class="fas fa-times text-danger"></i>
                                    نقش 1
                                </span>
                                <span class="chips_elem">
                                    <i class="fas fa-times text-danger"></i>
                                    نقش 2
                                </span>
                            </div>
                        </div>
                        <div class="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                            <button class="btn btn-primary ">ذخیره</button>
                        </div>
                    </div>
                </div>
            </ModalsContainer>

        </>
    );
}

export default AddUsers;
