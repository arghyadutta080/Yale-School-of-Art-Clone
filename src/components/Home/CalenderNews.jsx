import React from 'react'
import carosoul_4 from '../Images/carosoul_4.jpeg'

function CalenderNews() {
    const myStyle = {
        backgroundImage: `url(${carosoul_4})`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        opacity: "0.9" 
    }
    return (
        <div style={myStyle} id="calenderNews">
            <h1 className='p-4 text-center' style={{ fontStyle: "oblique", color: "#00004d" }}>CALENDARS & NEWSLETTERS</h1>
            <div className='container d-flex flex-wrap flex-row align-items-center justify-content-center'>
                <div className="p-3 mb-4 rounded-3 flex-wrap shadow mx-2" style={{ backgroundColor: "#eeffe6" }}>
                    <div className="container-fluid py-3">
                        <h4 className="" style={{ color: "#003366" }}>NEW CALENDARS BEGINNING SUMMER 2020</h4>
                        <a href="">Public Calendar</a>
                        <p>Containing those events open to the public.</p>
                        <a href="">School of Art in the World</a>
                        <p>Containing events and exhibitions hosted by, led by, or featuring members of the School of Art community.</p>
                        <a href="">Community Calendar</a>
                        <p>Containing those events open only to the SoA community.</p>
                    </div>
                </div>
                <div className="p-3 mb-4 rounded-3 flex-wrap shadow mx-2" style={{ backgroundColor: "#eeffe6" }}>
                    <div className="container-fluid py-3">
                        <h4 className="" style={{ color: "#003366" }}>MAPPING PUBLIC ART IN NEW HAVEN</h4>
                        <b><a href="">Get news from the Yale School of Art in your inbox: Sign up for our newsletters</a></b>
                        <p>We publish two newsletters during the academic year:</p>
                        <p><b>News From New Haven — </b> A public monthly newsletter about news and events happening on campus.</p>
                        <p><b>Week at SoA — </b> A weekly community-only email listing SoA events as well as public and university events in New Haven.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalenderNews
