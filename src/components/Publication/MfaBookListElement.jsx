import React from 'react'

function MfaBookListElement({info}) {
    return (
        <div>
            <div className={`mb-5 d-flex flex-row align-items-center justify-content-center p-3 rounded-3`} style={{ backgroundColor: "#e6f2ff" }} >
                <div className='p-2 flex-wrap'>
                    <h3 className="featurette-heading fw-normal lh-1" style={{ color: '#004d00' }} ><b>{info.title}</b></h3>
                    <p className="pt-2 text-primary"><b>published {info.Publised}</b></p>
                    <p className="pt-2">{info.description}</p>
                    <p>{info.Editor}</p>
                    <p>{info.Pages}</p>
                </div>
                <div className='flex-wrap'>
                    <img src={info.img} alt="" width="150" height="200" />
                </div>
            </div>
        </div>
    )
}

export default MfaBookListElement
