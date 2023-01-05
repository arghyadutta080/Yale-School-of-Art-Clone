import React from 'react'
import { Link } from 'react-router-dom'

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
                            <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/apply">Application</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/exhibition">Exhibition</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="#">Publlication</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="#">News</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="#">Events</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
