import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AddButtonLink from "../../components/AddButtonLink";
import PaginatedDataTable from "../../components/PaginatedDataTable";
import { Alert, Confirm } from "../../utils/alerts";
import AddProduct from "./AddProduct";
import Actions from "./tableAddition/Actions";
import { deleteProductService, getProductsService } from "../../services/product";

const TableProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchChar, setSearchChar] = useState("")
  const [currentPage, setCurrentPage] = useState(1) // صفحه حال حاضر
  const [countOnPage, setCountOnPage] = useState(10) // تعداد محصول در هر صفحه
  const [pageCount, setPageCount] = useState(0) // تعداد کل صفحات

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    {
      field: null,
      title: "گروه محصول",
      elements: (rowData) => rowData.categories[0]?.title,
    },

    {
      field: null,
      title: 'توضیحات محصول',
      elements: (rowData) => <span dangerouslySetInnerHTML={{ __html: rowData.descriptions }}></span>
    },

    { field: "price", title: "قیمت" },
    { field: "stock", title: "موجودی" },
    {
      field: null,
      title: "عملیات",
      elements: (rowData) => <Actions rowData={rowData} handleDeleteProduct={handleDeleteProduct} />,
    },
  ];
  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
  };

  const handleGetProducts = async (page, count, char) => {
    setLoading(true)
    const res = await getProductsService(page, count, char)
    res && setLoading(false)
    if (res.status === 200) {
      setData(res.data.data)
      setPageCount(res.data.last_page)
    }
  }

  const handleSearch = (char) => {
    setSearchChar(char)
    handleGetProducts(1, countOnPage, char)
  }

  const handleDeleteProduct = async (product) => {
    if (await Confirm("حذف محصول", `آیا از حذف ${product.title} اطمینان دارید؟`)) {
      const res = await deleteProductService(product.id);
      if (res.status === 200) {
        Alert("انجام شد", res.data.message, "success");
        handleGetProducts(currentPage, countOnPage, searchChar)
      }
    }
  }

  useEffect(() => {
    handleGetProducts(currentPage, countOnPage, searchChar)
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
      <AddButtonLink href={"/products/add-product"} />
    </PaginatedDataTable>
  );
};

export default TableProduct;