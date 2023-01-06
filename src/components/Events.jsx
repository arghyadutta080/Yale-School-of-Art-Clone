import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import event_bg from './Images/news_bg2.jpeg'

function Events() {
    return (
        <div>
            <div style={{ backgroundImage: `url(${event_bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

                <Navbar />

                <h1 className='text-center m-4' style={{ color: "#ffff00", fontStyle: "oblique" }}>PUBLIC EVENTS</h1>

                <div className="row mb-2 d-flex align-items-center justify-content-center flex-wrap">
                    <div className="mt-4 mb-1 col-md-7">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{ backgroundColor: "#ffffcc" }}>
                            <div className="col p-4 d-flex flex-column position-static">
                <h3 className='text-center mb-3' style={{ color: "#660066", fontStyle: "oblique" }}>HOSTED BY THE YALE SCHOOL OF ART</h3>
                                {/* <strong className="d-inline-block mb-2" style={{ color: "#ff8000" }}>SCREENED</strong> */}
                                {/* <h3 className="mb-1" style={{ color: "#800000" }}>Fall 2022 Undergraduate Exhibition</h3> */}
                                {/* <div className="mb-2 text-muted">November 28, 2022 – January 10, 2023</div> */}
                                <p className="card-text mb-2">Welcome to the School of Art’s public events calendar, initiated in the summer of 2020. To stay updated on new events as they’re confirmed, all members of the public are invited to subscribe this calendar to their own calendaring software by clicking the “Subscribe” button in calender.</p>
                                <p className="card-text mb-2"><b>Simplified calendar view</b> available at <a href="https://soapublicevents.eventcalendarapp.com/">here</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-2 d-flex align-items-center justify-content-center flex-wrap">
                    <div className="m-3 mb-4 col-md-4">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{ backgroundColor: "#ffffcc" }}>
                            <div className="col p-4 d-flex flex-column position-static">
                                {/* <strong className="d-inline-block mb-2" style={{ color: "#ff8000" }}>SCREENED VISITING</strong> */}
                                <p className="card-text mb-2">For events open to the Yale community, view our Yale Calendar listings at <a href="https://calendar.yale.edu/cal/main/showEventList.rdo">here</a></p>
                                <p className="card-text mb-2">For a calendar of exhibitions and public events hosted by the Yale School of Art are also posted on <a href="https://www.facebook.com/YaleSchoolofArt/events/">Our Facebook</a></p>

                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        </div>
    )
}

export default Events
