import React, { useEffect, useState } from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import AddButtonLink from '../../components/AddButtonLink';
import { Outlet } from 'react-router-dom';
import { deleteDiscountService, getAllDiscountsService } from '../../services/discount';
import Actions from './tableAddition/Actions';
import { Alert, Confirm } from '../../utils/alerts';
import { convertDateToJalali } from '../../utils/convertDate';

const DiscountTable = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const dataInfo = [
        { field: 'id', title: '#' },
        { field: 'title', title: 'عنوان' },
        { field: 'code', title: 'کد تخفیف' },
        { field: 'percent', title: 'درصد تخفیف' },
        {
            field: null,
            title: "تاریخ انقضا",
            elements: (rowData) => convertDateToJalali(rowData.expire_at)
        },
        {
            field: null,
            title: "وضعیت",
            elements: (rowData) => rowData.is_active ? 'فعال' : 'غیرفعال'
        },
        {
            field: null,
            title: "مربوط به",
            elements: (rowData) => rowData.for_all ? 'همه' : 'تعدادی از محصولات'
        },
        {
            field: null,
            title: "عملیات",
            elements: (rowData) => <Actions rowData={rowData} handleDeleteDiscount={handleDeleteDiscount} />
        },

    ]

    const searchParams = {
        title: 'جستجو',
        placeholder: 'قسمتی از عنوان را وارد کنید',
        searchField: 'title',
    }

    const handleGetAllDiscounts = async () => {
        setLoading(true)
        const res = await getAllDiscountsService();
        setLoading(false)

        if (res.status === 200) {
            setData(res.data.data)
        }
    }

    const handleDeleteDiscount = async (discount) => {
        if (await Confirm(discount.title, 'آیا از حذف این کد تخفیف اطمینان دارید؟')) {
            const res = await deleteDiscountService(discount.id)
            if (res.status === 200) {
                Alert('حذف شد', res.data.message, 'success')
                setData(old => old.filter(d => d.id != discount.id))
            }
        }
    }

    useEffect(() => {
        handleGetAllDiscounts();
    }, []);

    return (

        <>
            <PaginatedTable
                data={data}
                numOfPages={8}
                dataInfo={dataInfo}
                searchParams={searchParams}
            >
                <AddButtonLink href={'/discounts/add-discount-code'} />
                <Outlet context={{ setData }} />
            </PaginatedTable>
        </>

    );
}

export default DiscountTable;
