import React from 'react'

function SoaListItem({data}) {
    return (
        <div className='mb-3 rounded-3'>
            <div className="list-group-item py-3 lh-sm" style={{ backgroundColor: "#ffe6e6" }}>
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1" style={{color: "#800000"}}>{data.title}</strong>
                    <small className="text-muted">{data.date}</small>
                </div>
                <div className="col-10 mb-1 small">{data.description}</div>
            </div>
        </div>
    )
}

export default SoaListItem
