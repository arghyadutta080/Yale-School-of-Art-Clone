import React from 'react'

function NewsListItem({ info }) {
    return (
        <div className="col mb-3 curved-3" >
            <div className="card shadow-sm" style={{  }}>
                {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                <img src={info.Image} alt="" width="100%" height="300" className='curved-5'/>
                <div className="card-body d-flex align-items-center flex-column justify-content-center curved-3" height='100' style={{ backgroundColor: '#ffccff', border: '1px solid #330033' }}>
                    <h4 className="card-text" style={{ color: '#00004d' }}><b>{info.Date}</b></h4>
                    <p className="card-text"><b>{info.Descriptione}</b></p>
                </div>
            </div>
        </div>
    )
}

export default NewsListItem
