import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrevPageButton = ({className}) => {
    const navigate = useNavigate();
    return (
        <div>
            <button className={`btn btn-secondary ${className}`} onClick={()=>{navigate(-1)}}>برگشت</button>
        </div>
    );
}

export default PrevPageButton;
