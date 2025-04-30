import React from 'react';
import PermissionsTable from './PermissionsTable';

const Permissions = () => {
    return (
        <div id="manage_permission_section" className="manage_permission_section main_section">
            <h4 className="text-center my-3">مدیریت مجوز های دسترسی</h4>
            <PermissionsTable />
        </div>
    );
}

export default Permissions;
