import React, { useEffect } from 'react';
import { setDashboardChart } from '../../utils/dasboardChart';
import Card from './Card';
import ProductTable from './ProductTable';

const Dashboard = () => {

    // useEffect(() => {

    //     const labels = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

    //     const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];

    //     setDashboardChart(labels, datapoints);

    // }, []);

    return (
        <div>
            <div id="dashboard_section" className="dashboard_section main_section">

                <div className="row">

                    <Card
                    currentValue={7}
                    title='سبد خرید امروز'
                    desc='سبد های خرید مانده ی امروز'
                    icon='fas fa-shopping-basket'
                    lastWeekValue={13}
                    lastMonthValue={18}
                    ></Card>

                    <Card
                    currentValue={5}
                    title='سفارشات مانده امروز'
                    desc='سفارشات معلق و فاقد پرداختی'
                    icon='fas fa-dolly'
                    lastWeekValue={9}
                    lastMonthValue={16}
                    ></Card>

                    <Card
                    currentValue={45}
                    title='سفارشات امروز'
                    desc='سفارشات کامل و دارای پرداختی'
                    icon='fas fa-luggage-cart'
                    lastWeekValue={263}
                    lastMonthValue={1038}
                    ></Card>

                    <Card
                    currentValue={1500000}
                    title='درآمد امروز'
                    desc='جمع مبالغ پرداختی (تومان)'
                    icon='fas fa-money-check-alt'
                    lastWeekValue={6380000}
                    lastMonthValue={22480000}
                    ></Card>

                </div>


                <div className="row">

                    <div className="col-12 col-lg-6">

                        <p className="text-center mt-3 text-dark">محصولات رو به اتمام</p>

                        <table className="table table-responsive text-center table-hover table-bordered no_shadow_back_table font_08">
                            <thead className="table-secondary">
                                <tr>
                                    <th>#</th>
                                    <th>دسته</th>
                                    <th>عنوان</th>
                                    <th>وضعیت</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>

                                <ProductTable
                                id= {1}
                                chart='دسته شماره یک'
                                product= 'محصول اول'
                                finished= "پایان یافته"
                                icon= 'fas fa-times'
                                />
   
                                <ProductTable
                                id= {2}
                                chart='دسته شماره یک'
                                product= 'محصول دوم'
                                finished= "پایان یافته"
                                icon= 'fas fa-times'
                                />

                                <ProductTable
                                id= {3}
                                chart='دسته شماره یک'
                                product= 'محصول سوم'
                                finished= "تنها 1 عدد در انبار"
                                icon= 'fas fa-times'
                                />

                                <ProductTable
                                id= {4}
                                chart='دسته شماره دو'
                                product= 'محصول چهارم'
                                finished= "پایان یافته"
                                icon= 'fas fa-times'
                                />

                                <ProductTable
                                id= {5}
                                chart='دسته شماره دو'
                                product= 'محصول پنجم'
                                finished= "پایان یافته"
                                icon= 'fas fa-times'
                                />

                                <ProductTable
                                id= {6}
                                chart='دسته شماره سه'
                                product= 'محصول ششم'
                                finished= "تنها 2 عدد در انبار"
                                icon= 'fas fa-times'
                                />

                            </tbody>
                        </table>

                    </div>


                    <div className="col-12 col-lg-6">
                        <canvas id="myChart" height="195"></canvas>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;
