import React from 'react'
import Navbar from './Navbar'
import apply_bg from './Images/applyPage_bg.webp'
import Footer from './Footer'

function MainApplication() {
    return (
        <div style={{ backgroundImage: `url(${apply_bg})`, opacity: "0.9", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <Navbar />
            <div className='container d-flex flex-column align-items-center justify-content-center' >
                <h1 className='p-2 m-4 rounded-3' style={{ fontStyle: "oblique", color: "#33adff" }}>APPLY TO THE SCHOOL</h1>
                <div className="p-3 mb-4 rounded-3 flex-wrap shadow-lg" style={{ backgroundColor: "#ffffcc" }}>
                    <div className="container-fluid py-3">
                        <h4 className="" style={{ color: "#003300" }}>The Yale School of Art is a graduate school that confers Master of Fine Arts Degrees in Graphic Design, Painting/Printmaking, Photography, and Sculpture</h4>
                        <p className="">For information on applications to the MFA program, please click the “Graduate Admission” link below.</p>
                        <p>The undergraduate admissions process is handled entirely through <a href="https://admissions.yale.edu/">Yale College</a> Please refer all undergraduate admissions questions to the <a href="https://admissions.yale.edu/contact-us"> Yale College Undergraduate Admissions Office.</a></p>
                    </div>
                </div>
                <div className="p-3 mb-4 rounded-3 flex-wrap shadow-lg" style={{ backgroundColor: "#e6f7ff" }}>
                    <div className="container-fluid py-3">
                        <p><b>Fall 2023 Application for Admission is Live</b> Deadline: January 9, 2023 at 11:59pm EST</p>
                        <a href="https://apply.art.yale.edu/apply/">Start Submitting Your 2023 Application here </a>
                        <p>The SoA wiki admission pages provide extensive information about applying to Yale’s MFA program. Use this as your resource while preparing an application.</p>
                        <p>Questions that are not easily answered via these pages may be directed to our office, either via email art.admissions@yale.edu or phone (during business hours), with the understanding that <b>Yale does not provide personalized portfolio review or advisement about the content of applicant submissions.</b></p>
                        <p>Application status and receipt of documents can be checked within the status portal at the application link above, after an application has been submitted.</p>
                        <p><b>Applicants SHOULD NOT CONTACT Yale School of Art faculty and/or current students seeking program information, application and/or portfolio advisement.</b> Please respect the personal/private spaces (such as email, social media, direct message, etc.) and time of our community by utilizing the wiki and, when necessary, directing your inquiries appropriately to those whose job it is to assist you.</p>
                        <p>Thank You</p>
                    </div>
                </div>
                <div className='d-flex flex-wrap align-items-center justify-content-center'>
                    <div className="p-3 mb-4 rounded-3 d-flex align-items-center justify-content-center shadow-lg  m-2" style={{ backgroundColor: "#ffccff", height: "300px", width: "300px" }}>
                        <h1><a href="" style={{ textDecoration: "none" }}>Graduate Admission</a></h1>
                    </div>
                    <div className="p-3 mb-4 rounded-3 d-flex align-items-center justify-content-center shadow-lg m-2" style={{ backgroundColor: "#ffccff", height: "300px", width: "300px" }}>
                        <h1><a href="" style={{ textDecoration: "none" }}>Tuition, Fees, & Financing Your Education</a></h1>
                    </div>
                    <div className="p-3 mb-4 rounded-3 d-flex align-items-center justify-content-center shadow-lg m-2" style={{ backgroundColor: "#ffccff", height: "300px", width: "300px" }}>
                        <h1><a href="" style={{ textDecoration: "none" }}>Graduate Study Areas</a></h1>
                    </div>
                    <div className="p-3 mb-4 rounded-3 d-flex align-items-center justify-content-center shadow-lg  m-2" style={{ backgroundColor: "#ffccff", height: "300px", width: "300px" }}>
                        <h1><a href="" style={{ textDecoration: "none" }}>Courses</a></h1>
                    </div>
                    <div className="p-3 mb-4 rounded-3 d-flex align-items-center justify-content-center shadow-lg  m-2" style={{ backgroundColor: "#ffccff", height: "300px", width: "300px" }}>
                        <h1><a href="" style={{ textDecoration: "none" }}>Housing</a></h1>
                    </div>
                    <div className="p-3 mb-4 rounded-3 d-flex align-items-center justify-content-center shadow-lg  m-2" style={{ backgroundColor: "#ffccff", height: "300px", width: "300px" }}>
                        <h1><a href="" style={{ textDecoration: "none" }}>Brochures and Documentation</a></h1>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MainApplication
