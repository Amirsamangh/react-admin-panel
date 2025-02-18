import React from 'react';
import AddGuarantee from './AddGuarantee';
import GuarranteeTable from './GuarranteeTable';

const Guarantee = () => {
    return (
        <div id="manage_guarantee_section" className="manage_guarantee_section main_section">
            <h4 className='text-center my-3'>مدیریت گارانتی ها</h4>
            <GuarranteeTable/>
        </div>
    );
}

export default Guarantee;
