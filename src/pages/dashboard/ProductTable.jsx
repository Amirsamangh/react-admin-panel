import React from 'react';

const ProductTable = ({id, chart, product, finished , icon}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{chart}</td>
            <td>{product}</td>
            <td>{finished}</td>
            <td>
                <i className={`${icon} text-danger mx-1 hoverable_text pointer has_tooltip`} title="نادیده گرفتن" data-bs-toggle="tooltip" data-bs-placement="top"></i>
            </td>
        </tr>
    );
}

export default ProductTable;
