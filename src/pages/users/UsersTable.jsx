import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AddButtonLink from "../../components/AddButtonLink";
import PaginatedDataTable from "../../components/PaginatedDataTable";
import { Alert, Confirm } from "../../utils/alerts";
import Actions from "./tableAddition/Actions";
import { deleteUserService, getAllUsersService } from "../../services/users";

const UsersTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchChar, setSearchChar] = useState("")
    const [currentPage, setCurrentPage] = useState(1) // صفحه حال حاضر
    const [countOnPage, setCountOnPage] = useState(10) // تعداد محصول در هر صفحه
    const [pageCount, setPageCount] = useState(0) // تعداد کل صفحات

    const dataInfo = [
        { field: "id", title: "#" },
        { field: "user_name", title: "نام کاربری" },
        {
            field: null,
            title: "نام",
            elements: (rowData) => `${rowData.first_name || ''} ${rowData.last_name || ''}`
        },
        { field: "last_name", title: "نام خانوادگی" },
        { field: "phone", title: "شماره موبایل" },
        { field: "email", title: "ایمیل" },
        {
            field: null,
            title: "جنسیت",
            elements: (rowData) => rowData.gender === 1 ? 'آقا' : 'خانم'
        },
        {
            field: null,
            title: "عملیات",
            elements: (rowData) => <Actions rowData={rowData} handleDeleteUser={handleDeleteUser} />,
        },
    ];
    const searchParams = {
        title: "جستجو",
        placeholder: "قسمتی از شماره موبایل یا ایمیل را وارد کنید",
    };

    const handleGetUsers = async (page, count, char) => {
        setLoading(true)
        const res = await getAllUsersService(page, count, char)
        res && setLoading(false)
        if (res.status === 200) {
            setData(res.data.data.data)
            setPageCount(res.data.last_page)
        }
    }

    const handleSearch = (char) => {
        setSearchChar(char)
        handleGetUsers(1, countOnPage, char)
    }

    const handleDeleteUser = async (user) => {
        if (await Confirm(user.phone, `آیا از حذف این کاربر اطمینان دارید؟`)) {
            const res = await deleteUserService(user.id);
            if (res.status === 200) {
                Alert("انجام شد", res.data.message, "success");
                handleGetUsers(currentPage, countOnPage, searchChar)
            }
        }
    }

    useEffect(() => {
        handleGetUsers(currentPage, countOnPage, searchChar)
    }, [currentPage])

    return (
        <PaginatedDataTable
            tableData={data}
            dataInfo={dataInfo}
            searchParams={searchParams}
            loading={loading}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageCount={pageCount}
            handleSearch={handleSearch}
        >
            <AddButtonLink href={'/users/add-user'} />
        </PaginatedDataTable>
    );
};

export default UsersTable;