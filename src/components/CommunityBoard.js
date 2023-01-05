import React from 'react'
import home_bg_1 from './Images/home_bg_1.jpeg'

function CommunityBoard() {
    const myStyle = {
        backgroundImage: `url(${home_bg_1})`,
        opacity: "0.9",
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        borderBottom: '2px solid black'
    }
    return (
        <div style={myStyle} id="community">
            <div className='container d-flex flex-column align-items-center justify-content-center'>
                <h1 className='p-4' style={{fontStyle: "oblique", color: "#000033"}}>COMMUNITY BULLETIN BOARD</h1>
                <div className="p-3 mb-4 rounded-3 flex-wrap shadow-lg" style={{ backgroundColor: "#fff2e6"}}>
                    <div className="container-fluid py-3">
                        <h1 className="" style={{color: "#800000"}}>FACULTY/ALUMNI: Post your art apprenticeship or internship opportunities for undergraduates</h1>
                        <p className="">The Yale Arts Apprenticeship Program is an initiative that connects Yale undergraduates, particularly those on financial aid, with professional arts practitioners of any discipline. As an option within Yale’s Summer Experience Award (SEA) funding model, the Arts Apprenticeship must fulfill the same basic requirements. Additional details, as well as those specific to the Arts Apprenticeship are included below. Yale faculty, alumni, or other arts practitioners interested in featuring positions through the program should contact Yale’s Creative Careers advisor. Which Opportunities are Eligible? Must be at least 30 hours/week, for at least 8-weeks over the summer months. Those 8-weeks do not have to be continuous if the mentoring Arts Practitioner agrees on a different schedule. The time commitment need not all be in direct contact with the Arts Practitioner. Independent projects, tasks, research, etc. can comprise much of the experience, as long as the Arts Practitioner is checking in regularly with the student to provide oversight and career-based context. The opportunity cannot be with a for-profit organization. The engagement for an Arts Apprenticeship should be directly with an individual Arts Practitioner and not with a company. The only exception to this would be if the company overseeing the apprenticeship were a registered non-profit organization. For more information: https://ocs.yale.edu/channels/arts-apprenticeship/ To post a job, contact: https://ocs.yale.edu/staff-list/#derek-i-webster</p>
                    </div>
                </div>
                <div className="p-3 mb-4 rounded-3 flex-wrap shadow-lg" style={{ backgroundColor: "#fff2e6" }}>
                    <div className="container-fluid py-3">
                        <h1 className="" style={{color: "#800000"}}>MAPPING PUBLIC ART IN NEW HAVEN</h1>
                        <p className="">Hey everyone! I’ve been mapping public art in New Haven as part of my nonprofit project ArtAround and I’d love to invite you to join me, or just check it out and see what you think.</p>
                        <a href="https://artaround.org/">Art Around Home Page</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunityBoard
