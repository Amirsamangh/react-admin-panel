import React, { useEffect } from 'react';
import { setDashboardChart } from '../../utils/dasboardChart';
import Card from './Card';

const Dashboard = () => {

    useEffect(() => {

        const labels = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

        const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];

        setDashboardChart(labels, datapoints);

    }, []);

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
                                <tr>
                                    <td>1</td>
                                    <td>دسته شماره فلان</td>
                                    <td>محصول فلان</td>
                                    <td>پایان یافته</td>
                                    <td>
                                        <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="نادیده گرفتن" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>دسته شماره فلان</td>
                                    <td>محصول فلان</td>
                                    <td>رو به اتمام - 4</td>
                                    <td>
                                        <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="نادیده گرفتن" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>دسته شماره فلان</td>
                                    <td>محصول فلان</td>
                                    <td>پایان یافته</td>
                                    <td>
                                        <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="نادیده گرفتن" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>دسته شماره فلان</td>
                                    <td>محصول فلان</td>
                                    <td>پایان یافته</td>
                                    <td>
                                        <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="نادیده گرفتن" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>دسته شماره فلان</td>
                                    <td>محصول فلان</td>
                                    <td>رو به اتمام - 2</td>
                                    <td>
                                        <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="نادیده گرفتن" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                                    </td>
                                </tr>

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
