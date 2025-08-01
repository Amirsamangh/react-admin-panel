import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHasPermission } from '../../../hook/permissionHook';
const SidebarItem = ({ title, icon, targetPth, pTitle }) => {

    const hasPerm = useHasPermission(pTitle)
    return hasPerm && (
        <NavLink to={targetPth} className="py-1 text-start pe-4 sidebar_menu_item mt-2 sidebar_item">
            <i className={`ms-3 icon ${icon} text-light`}></i>
            <span className="hiddenable no_wrap font_08">{title}</span>
        </NavLink>
    )
}

export default SidebarItem;
