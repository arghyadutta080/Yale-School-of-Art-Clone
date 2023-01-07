import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import event_bg from './Images/news_bg2.jpeg'

function Events() {
    return (
        <div>
            <div style={{ backgroundImage: `url(${event_bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', opacity: '5.0' }}>

                <Navbar />

                <h2 className='text-center m-5' style={{ color: "#ffff1a", fontStyle: "oblique" }}><b>PUBLIC EVENTS</b></h2>

                <div className="row mb-5 d-flex align-items-center justify-content-center flex-wrap">
                    <div className="mt-4 mb-1 col-md-7">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{ backgroundColor: "#ffff99" }}>
                            <div className="col p-4 d-flex flex-column position-static">
                                <h4 className='text-center mb-3' style={{ color: "#660066", fontStyle: "oblique" }}>HOSTED BY THE YALE SCHOOL OF ART</h4>
                                <p className="card-text mb-2">Welcome to the School of Art’s public events calendar, initiated in the summer of 2020. To stay updated on new events as they’re confirmed, all members of the public are invited to subscribe this calendar to their own calendaring software by clicking the “Subscribe” button in calender.</p>
                                <p className="card-text mb-2"><b style={{ color: '#800000' }}>Simplified calendar view</b> available at <a href="https://soapublicevents.eventcalendarapp.com/">here.</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 d-flex align-items-center justify-content-center flex-wrap">
                    <div className="m-3 mb-4 col-md-4">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{ backgroundColor: "#ffb3b3" }}>
                            <div className="col p-4 d-flex flex-column position-static">
                                <p className="card-text mb-2">For events open to the Yale community, view our Yale Calendar listings at <a href="https://calendar.yale.edu/cal/main/showEventList.rdo">here.</a></p>
                                <p className="card-text mb-2">For a calendar of exhibitions and public events hosted by the Yale School of Art are also posted on <a href="https://www.facebook.com/YaleSchoolofArt/events/">Our Facebook.</a></p>
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
