import React from 'react';

const ShowInFilter = ({rowData}) => {
    return (
        <span className={rowData.in_filter ? 'text-success' : 'text-danger'}>
            {rowData.in_filter ? 'موجود' : 'ناموجود'}
        </span>
    );
}

export default ShowInFilter;
