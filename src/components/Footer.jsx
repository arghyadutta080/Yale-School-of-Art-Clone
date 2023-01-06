import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="bg-dark mb-0">
            <footer>
                <ul className="nav justify-content-center border-bottom p-1">
                    <li className="nav-item"><Link className="nav-link px-2 text-white" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link px-2 text-white" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link px-2 text-white" to="/apply">Application</Link></li>
                    <li className="nav-item"><Link className="nav-link px-2 text-white" to="/exhibition">Exhibition</Link></li>
                    <li className="nav-item"><Link className="nav-link px-2 text-white" to="/publication">Publication</Link></li>
                    <li className="nav-item"><Link className="nav-link px-2 text-white" to="/news">News</Link></li>
                    <li className="nav-item"><Link className="nav-link px-2 text-white" to="/events">Events</Link></li>
                </ul>
                <p className="text-center text-white p-2">© 2021 Yale School of Art, Inc</p>
            </footer>
        </div>
    )
}

export default Footer
