import React from 'react';

const PaginatedTable = ({data , dataInfo , additionalFieald}) => {


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
                    {data.map(d => (
                        <tr>
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
        </div>
    );
}

export default PaginatedTable;
