import React from 'react';

const ShowInMenu = ({rowData}) => {
    return (
        <span className={rowData.show_in_menu ? 'text-success' : 'text-danger'}>
            {rowData.show_in_menu ? 'موجود' : 'ناموجود'}
        </span>
    );
}

export default ShowInMenu;
