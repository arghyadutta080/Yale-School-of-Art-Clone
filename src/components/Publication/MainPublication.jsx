import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import CommenencementList from './CommenencementList'
import MfaBookList from './MfaBookList'
import publication_bg from '../Images/exhibition_1.jpeg'

function MainPublication() {
    return (
        <div style={{ backgroundImage: `url(${publication_bg})`, opacity: "0.9", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            
            <Navbar />
            
            <div className='container d-flex flex-column align-items-center justify-content-center' >
                <h1 className='p-2 mt-4 mb-2 rounded-3' style={{ fontStyle: "oblique", color: "#ff9900" }}>PRINT PUBLICATIONS</h1>
                <div className="row mb-2 d-flex align-items-center justify-content-center flex-wrap">
                    <div className="m-3 col-md-9">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{ backgroundColor: "#ffcccc" }}>
                            <div className="col py-3 px-4 d-flex flex-column position-static">
                                <h3 className="mb-2" style={{ color: '#990000' }}><b>ALL-SCHOOL MFA BOOK SERIES (2017–PRESENT)</b></h3>
                                <p className="card-text mb-2">This series of printed publications was initiated in 2017 and features the work of each recently graduated MFA class.</p>
                                <p className="card-text mb-2">Often distributed for free at public School of Art events, these publications are also made available through the <a href="https://library.yale.edu/">Yale University Library System.</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <MfaBookList/>
            
            <div className='container d-flex flex-column align-items-center justify-content-center' >
                <h1 className='p-2 mt-4 mb-2 rounded-3' style={{ fontStyle: "oblique", color: "#33adff" }}>YALE SCHOOL OF ART COMMENCEMENT</h1>
                <div className="row mb-2 d-flex align-items-center justify-content-center flex-wrap">
                    <div className="m-3 col-md-9">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{ backgroundColor: "#ffeb99" }}>
                            <div className="col py-3 px-4 d-flex flex-column position-static">
                                <p className="card-text mb-2">This booklet series publishes the speeches by speakers invited by the Dean on the occasion of the commencement of students receiving their MFA degrees from graphic design, painting/printmaking, photography, and sculpture.</p>
                                <p className="card-text mb-2">Published bi-annually and launched with Fred Moten’s 2018 commencement address, the series is intended to provide a reflection on the two years that defined the recently graduated class.</p>
                                <p className="card-text mb-2">Efforts are currently being undertaken to make these publications publicly accessible.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <CommenencementList/>
            <Footer />
        
        </div>
    )
}

export default MainPublication
