import React from 'react'

function CommencementListElement({info}) {
    return (
        <div>
            <div>
                <div className={`mb-5 d-flex flex-row align-items-center justify-content-center p-3 rounded-3`} style={{ backgroundColor: "#ffcce6" }} >
                    <div className='p-2 flex-wrap'>
                        <h3 className="featurette-heading fw-normal lh-1" style={{ color: '#4d004d' }}><b>{info.title}</b></h3>
                        <p className='pt-2' style={{ color: '#e60000' }} ><b>published {info.Publised}</b></p>
                        <p className='pt-2'>{info.description}</p>
                        <p>{info.Editor}</p>
                        <p>{info.Pages}</p>
                    </div>
                    <div className='flex-wrap'>
                        <img src={info.img} alt="" width="150" height="200" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommencementListElement
