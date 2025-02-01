import React from 'react';
import { useLocation } from 'react-router-dom';
import PrevPageButton from '../../components/PrevPageButton';

const CategoryChildren = () => {
    const location = useLocation();
    return (
            <div className='d-flex justify-content-between py-3'>
                <h5 className='text-center'>
                    <span>زیرگروه : </span>
                    <span className='text-danger'>{location.state.parentData.title}</span>
                </h5> 

                <PrevPageButton/>
            </div>
    );
}

export default CategoryChildren;
