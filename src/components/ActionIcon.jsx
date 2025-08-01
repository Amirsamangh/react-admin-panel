import React from 'react';
import { useHasPermission } from '../hook/permissionHook';

const ActionIcon = ({ icon, pTitle, ...props }) => {

    const hasPerm = useHasPermission(pTitle);

    return hasPerm && (
        <i
            className={`mx-1 hoverable_text pointer has-tooltip ${icon}`}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            {...props}
        ></i>
    );
};

export default ActionIcon;
