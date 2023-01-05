import React from 'react'
import carosoul_1 from './Images/carosoul_1.jpeg'
import carosoul_4 from './Images/carosoul_4.jpeg'
import home_bg_1 from './Images/home_bg_1.jpeg'


function Home() {
    return (
        <div>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div>
                <div className="carousel-inner">                 
                    <div className="carousel-item active">
                        <img src={carosoul_4} alt="" style={{opacity: "0.7"}} />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1 style={{color: "#800000"}}>YALE SCHOOL OF ART</h1>
                                <p style={{fontWeight: "bold", color : "#ff3300"}}>The Yale School of Art is a graduate school that confers MFAs in Graphic Design, Painting/Printmaking, Photography, and Sculpture; and offers undergraduate-level art courses to Yale College students. Our website exists as an ongoing collaborative experiment in digital publishing and information sharing. It functions as a wiki—all members of the School of Art community have the ability to add new, and edit most existing content.</p>
                                <p><a className="btn btn-lg btn-warning" href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carosoul_1} alt="" style={{opacity: "0.7"}}/>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1 style={{color: "#990033"}}>About our community and contents</h1>
                                <p style={{fontWeight: "bold", color: "#ff0066"}}>This website exists as an ongoing collaborative experiment in digital publishing and information sharing. Because this website functions as a wiki, all members of the School of Art community—graduate students, faculty, staff, and alums—have the ability to add new content and pages, and to edit most of the site’s existing content.</p>
                                <p style={{fontWeight: "bold", color: "#ff0066"}}>Content is the property of its various authors. When you contribute to this site, you agree to abide by Yale University academic and network use policy, and to act as a responsible member of our community.</p>
                                <p><a className="btn btn-sm btn-success" href="#">Browse gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Home
