import React from 'react'
import Navbar from './Navbar'
import exh_bg_2 from './Images/exhibition_2.jpeg'
import Footer from './Footer'

function MainExhibition() {
    return (
        <div style={{ backgroundImage: `url(${exh_bg_2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            
            <Navbar />
            
            <h1 className='text-center m-4' style={{ color: "#660066", fontStyle: "oblique" }}>EXHIBITIONS</h1>
            <div className="row mb-2 d-flex align-items-center justify-content-center flex-wrap">
                <div className="m-3 col-md-5">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{ backgroundColor: "#ffcccc" }}>
                        <div className="col py-3 px-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-danger">NOTICE</strong>
                            <h3 className="mb-2">COVID Update</h3>
                            <p className="card-text mb-2">The School of Art galleries in Green Hall provide a year-round forum for the exhibition of work by students, faculty, and special guests in the four graduate departments of the School and the undergraduate program.</p>
                            <p className="card-text mb-2">During exhibitions, Green Hall Gallery at 1156 Chapel Street is typically open to the public but due to COVID-19, it will remain open only to the Yale community until further notice.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-2 d-flex align-items-center justify-content-center flex-wrap">
                <div className="m-3 col-md-5">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{ backgroundColor: "#eeffe6" }}>
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success">PUBLIC EXHIBITION</strong>
                            <h3 className="mb-1" style={{ color: "#003366" }}>Barbara Earl Thomas: Nine papercuttings for windows in stained glass</h3>
                            <div className="mb-2 text-muted">December 31, 2022, New Heaven</div>
                            <p className="card-text mb-2">in a collaboration with the Yale University President’s Office, Hopper College, and the Yale University Art Gallery</p>
                            <a href="https://soapublicevents.eventcalendarapp.com/u/20061/197357" className="stretched-link">Full information here</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-2 d-flex align-items-center justify-content-center flex-wrap">

                <div className="m-3 col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{ backgroundColor: "#ffffcc" }}>
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2" style={{ color: "#ff8000" }}>SCREENED</strong>
                            <h3 className="mb-1" style={{ color: "#800000" }}>Fall 2022 Undergraduate Exhibition</h3>
                            <div className="mb-2 text-muted">November 28, 2022 – January 10, 2023</div>
                            <p className="card-text mb-2">Curated by Doruk Eliacik, this exhibition features work by undergraduate art majors taking Yale School of Art courses through Yale College: Anasthasia Shilov, Avery Mitchell, Catherine Webb, Diego Miró-Rivera, Doruk Eliacik, Emme Zhou, Hannah Chaves Raman Neves, Linna Yao, Marshall Barg, Rudd Fawcett, Serena Cheng, Rosa Chang, Michelle Li, Lauren Song, Alex Taranto, Thaïs Shepard, John Sedrak, Ellika Edelman, Yuri Bong, Ethan Shim, Charlie Gleberman, Samantha Trimboli, Joyce Wu, Jaylan Granberry, Eric Doddy, and Anna Zhang.</p>
                            <p className="card-text mb-2"><b>Please note that the gallery will be closed for Yale University holiday recess: Friday, December 23 through Monday, January 2, 2023.</b></p>
                        </div>
                    </div>
                </div>

                <div className="m-3 col-md-5">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{ backgroundColor: "#ffffcc" }}>
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2" style={{ color: "#ff8000" }}>SCREENED VISITING</strong>
                            <p className="card-text mb-2">During the Fall 2022 semester, exhibitions in Green Hall Gallery exhibitions are open only to members of the Yale community (current ID holders).</p>
                            <p className="card-text mb-2"><b>Green Hall Gallery hours:</b> Monday–Friday, 10AM-5PM</p>
                            <p className="card-text mb-2">All individuals, regardless of vaccination status, are required to wear masks inside the exhibition spaces. Members of the Yale community will be required to swipe their active Yale ID at the entrance to 1156 Chapel Street to enter the gallery space.</p>
                            <a href="https://yaleschoolofart.eventcalendarapp.com/u/20062/185688" className="stretched-link">Full information here</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row mb-2 d-flex align-items-center justify-content-center flex-wrap">
                <div className="m-3 col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{ backgroundColor: "#f2d9d9" }}>
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-3" style={{ color: "#ff3399" }}>EXHIBITION SCHEDULE</strong>
                            <h3 className="mb-3" style={{ color: "#660066" }}>FALL 2022 IN GREEN HALL GALLERY</h3>
                            <p className="card-text mb-2"><b>2nd Year MFA Show:</b> September 19 - October 5, 2022</p>
                            <p className="card-text mb-2"><b>1st Year MFA Show:</b> October 17 - November 11, 2022</p>
                            <p className="card-text mb-2">Note: Fall Recess October 20-23</p>
                            <p className="card-text mb-2"><b>Undergraduate Show:</b> November 28 - January 10, 2022</p>
                            <p className="card-text mb-2">Note: Thanksgiving Break November 19-27; Winter Break December 21-January 13</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
            
        </div>
    )
}

export default MainExhibition
