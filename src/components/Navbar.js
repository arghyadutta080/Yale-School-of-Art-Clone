import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" aria-label="Ninth navbar example" style={{backgroundColor: "#00959e"}}>
                <div className="container">
                    <a className="navbar-brand" href="#" style={{color: "yellow", fontWeight: "bold"}}>YALE SCHOOL</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample07XL">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="#">About</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="#">Application</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="#">Exhibition</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="#">Publlication</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="#">News</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="#">Events</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
