import React from 'react'

function HomeHeader() {
    return (
        <div style={{backgroundColor: "#ffe680"}}>
            <div className="container" >
                <header className="d-flex justify-content-center py-2" >
                    <ul className="nav nav-pills d-flex justify-content-evenly" style={{fontWeight: "bold"}}>
                        <li className="nav-item"><a href="#" className="nav-link">HAPPENING AT SOA</a></li>
                        <li className="nav-item"><a href="#community" className="nav-link">COMMUNITY BULLETIN BOARD</a></li>
                        <li className="nav-item"><a href="#calenderNews" className="nav-link">CALENDARS & NEWSLETTERS</a></li>
                    </ul>
                </header>
            </div>
        </div>
    )
}

export default HomeHeader
