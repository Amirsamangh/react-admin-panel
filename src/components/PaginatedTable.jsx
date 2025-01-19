import React, { useEffect, useState } from 'react';

let numOfPages = 2

const PaginatedTable = ({ data, dataInfo, additionalFieald }) => {

    const [tableData, setTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState([]);
    const [pageConut, setPageConut] = useState(1);

    useEffect(() => {
        let pCount = Math.ceil(data.length / numOfPages);
        setPageConut(pCount);
        let pArr = []
        for (let i = 1; i <= pCount; i++) pArr = [...pArr, i]
        setPages(pArr)
    }, []);

    useEffect(() => {
        let start = (numOfPages * currentPage) - numOfPages
        let end = (numOfPages * currentPage)
        setTableData(data.slice(start, end))
    }, [currentPage]);

    return (
        <div>
            <table className="table table-responsive text-center table-hover table-bordered">
                <thead className="table-secondary">
                    <tr>
                        {dataInfo.map(i => (
                            <th key={i.field}>{i.title}</th>
                        ))}
                        {
                            additionalFieald ? (
                                <th>{additionalFieald.title}</th>
                            ) : null
                        }
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(d => (
                        <tr key={d.id}>
                            {dataInfo.map(i => (
                                <td key={i.field + '_' + d.id}>{d[i.field]}</td>
                            ))}
                            {
                                additionalFieald ? (
                                    <td>{additionalFieald.elements(d.id)}</td>
                                ) : null
                            }
                        </tr>
                    ))}
                </tbody>
            </table>

            <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                <ul className="pagination dir_ltr">


                    <li className="page-item">
                        <span className={`page-link pointer ${currentPage === 1 ? 'disabaled' : ''}`} href="/" aria-label="Previous" onClick={() => setCurrentPage(currentPage - 1)}>
                            <span aria-hidden="true">&raquo;</span>
                        </span>
                    </li>

                    {pages.map(page => (

                        <li key={page} className="page-item pointer"><span className={`page-link ${currentPage === page ? 'alert-primary' : ''}`} onClick={() => setCurrentPage(page)}>{page}</span></li>

                    ))}


                    <li className="page-item">
                        <span className={`page-link pointer ${currentPage === pageConut ? 'disabaled' : ''}`} href="/" aria-label="Next" onClick={() => setCurrentPage(currentPage + 1)}>
                            <span aria-hidden="true">&laquo;</span>
                        </span>
                    </li>


                </ul>
            </nav>

        </div>
    );
}

export default PaginatedTable;
