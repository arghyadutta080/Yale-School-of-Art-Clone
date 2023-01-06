import React, { useState } from 'react'
import SoaListItem from './SoaListItem'

function SoaList() {

    const current = [
        {
            title: 'Undergraduate Exhibition: SCREENED',
            date: "November 28, 2022 - January 10, 2023",
            location: '1156 Chapel St., New Haven, CT',
            description: 'Curated by Doruk Eliacik, this exhibition features work by undergraduate art majors taking Yale School of Art courses through Yale College: Anasthasia Shilov, Avery Mitchell, Catherine Webb, Diego Miró-Rivera, Doruk Eliacik, Emme Zhou, Hannah Chaves Raman Neves, Linna Yao, Marshall Barg, Rudd Fawcett, Serena Cheng, Rosa Chang, Michelle Li, Lauren Song, and Alex Taranto. '
        },
        {
            title: "Kathryn-kay Johnson's Marquand Chapel Installation",
            date: "December 8, 2022 - January 9, 2023",
            time: "Open Monday - Saturday, 8:30am-9:45pm",
            location: "Marquand Chapel at Yale Divinity School, 409 Prospect St.",
            description: "Kathryn-kay Johnson (Graphic Design MFA, 2022) recently completed an eight-panel installation of fifteen-foot-tall velvet tapestries for Yale’s historic Marquand Chapel. The installation is on view now until January 9th, Monday - Saturday, 8:30am-9:45pm. ",
        },
        {
            title: "Andrew Carnduff Ritchie Lecture: Hilton Als on Njideka Akunyili Crosby",
            date: "Thursday, January 5, 2023",
            time: "4:00 PM",
            location: "Yale Center for British Art ",
            description: "Pulitzer Prize–winning author Hilton Als has curated a series of three focused exhibitions at the Yale Center for British Art (YCBA), each devoted to the work of a contemporary woman artist and developed in collaboration with that artist. The third and final show in the series focuses on Njideka Akunyili Crosby, M.F.A. 2011, and is on view through January 22, 2023. Join Als for a discussion of Crosby’s work and their curatorial collaboration. Previous exhibitions featured works by Celia Paul (2018) and Lynette Yiadom-Boakye (2019). Jointly sponsored by YCBA and the Yale University Art Gallery.",

        },
        {
            title: "Closing date for submission of online applications for admission in September 2023",
            date: "Monday, January 9",
            description: "Monday, January 9 is the closing date for submission of online applications for admission to the Yale School of Art's MFA program in September 2023.",

        },
        {
            title: "Spring-term registration for all students",
            date: "Thursday, January 12",
            description: "Registration for all students for the Spring 2023 semester.",

        },
        {
            title: 'Martin Luther King, Jr. Day; offices closed',
            date: "Monday, January 16",

            description: 'Martin Luther King, Jr. Day and Yale School of Art offices will be closed.'
        },
    ]

    const previous = [
        {
            title: 'Urban Research Round Robin',
            host: 'Hosted by Elihu Rubin, Associate Professor of Architecture, Urbanism, and American Studies',
            date: "Wednesday, December 14",
            time: "4:30PM-7:30PM (stop by anytime!)",
            location: 'New Haven Free Public Library, Community Program Room (133 Elm St.)',
            description: "The School of Art community is invited to attend the 'Urban Research Round Robin,' a public event happening Wednesday, 12/14, 4.30pm-7.30pm (stop by anytime) in the Community Room at the New Haven Free Public Library.  Professor Rubin and their students will be sharing a set of participatory, New Haven-based research projects in a 'final review' imagined as a public consultation, ''science fair''-style, to edit the projects, collect new information, etc. Refreshments provided!"
        },
        {
            title: "Critiques and examinations begin",
            date: "Thursday, December 15",
            time: "9am",
            description: "Critiques and examinations begin at 9AM",
        },
        {
            title: "Works on the Floor Symposium",
            host: "Hosted by the Yale Center for British Art",
            date: "Friday, December 16, 2022",
            time: "9am",
            location: "8:50 am–4 pm",
            description: "Quantock Wood Circle (1981) by Richard Long is a floor sculpture consisting of 285 weathered and broken pine branches collected by the artist from the Quantock Hills in Somerset, near his hometown of Bristol, England. Following the artist’s instructions, the sticks are placed in any combination in a circle on the floor, rendering each display unique. Since the 1960s, Long has created ephemeral artworks based upon his walks in the English countryside and abroad. Often embedded in the landscape, these site-specific works blur the boundaries between sculpture, photography, and performance.In Quantock Wood Circle, materials collected while walking are brought into the museum, activating the floor and raising questions about our relationship with space, place, and nature.The installation of this sculpture at the Yale Center for British Art (YCBA) will be marked by a symposium, Works on the Floor. The removal of sculpture from the plinth was a defining moment in postwar Western art, allowing for a more direct encounter between object and viewer. British sculptor Anthony Caro (Long’s tutor) pioneered this approach in the early 1960s, creating welded-steel objects that extend from the floor into the viewer’s space. Equally radical was the decision of subsequent generations of sculptors, including Long, to lay sculpture flat on the floor, a move that redefined the relationship between subject and object by giving the viewer an omniscient viewpoint from above.Taking Long’s work as a provocation, this symposium will explore how artists from around the world have exploited the floor to interrogate ideas of embodied viewership, identity, land, and modern sculpture. In doing so, the event aims to offer new frameworks for understanding the conceptual decision to place works on the floor.",
        },
        {
            title: "Laser Lab closed",
            date: "December 20th through January 1st ",
            description: "The Laser Lab on the basement floor of 36 Edgewood Ave. will be closed December 20th through January 1st for winter recess.",
        },
        {
            title: "Ayi Kwei Armah’s “The Beautyful Ones Are Not Yet Born” (1968), an Inspiration",
            host: "Hosted by the Yale Center for British Art",
            date: "Friday, January 20, 2023",
            time: "12–1 PM",
            location: "Stephanie Newell, George M. Bodman Professor of English, Yale University",
            description: "Stephanie Newell will discuss the classic Ghanaian novel that inspired Njideka Akunyili Crosby’s ongoing series The Beautyful Ones, represented in the YCBA's current exhibition of her work. Newell will describe the history and context of Ayi Kweh Armah’s novel of Ghanaian independence, and explore some of its themes. In this visceral novel, filled with dirt and bodily fluids, Armah vividly conjures the stench of political corruption. Through sarcasm and comic exaggeration, he confronts Africa’s political class and asks if and when the continent’s ideals will begin to flower. The talk will present scenes from the novel and invite comparisons with Akunyili Crosby’s series.",
        },
        {
            title: 'Critiques and examinations end, 5:30 PM; Winter recess begins',
            date: "Wednesday, December 21",
            description: 'Critiques and examinations end at 5:30 PM; Winter recess begins'
        },
    ]

    const next = [
        {
            title: 'Last day to add a course with permission of registrar',
            date: "Tuesday, January 31",
            description: 'Last day to add a course with permission of registrar.',
        },
        {
            title: "Visiting Artist Lecture in Photography: Koyoltzintli",
            date: "Wednesday, November 9",
            time: "3pm",
            location: "The Pool (Room G10), 1156 Chapel Street",
            description: "Koyoltzintli continues the Visiting Artist Lectures in Photography with a talk on Wednesday afternoon. Hosted by Pat Garcia, Photography MFA '24. ",
        },
        {
            title: "Expanded Faculty Meeting with the Department of History of Art [FACULTY ONLY]",
            date: "Tuesday, February 14, 2023",
            time: "4:00 PM",
            location: "Conference Room of the Loria Building (Loria 251) on the 2nd floor",
            description: "School of Art faculty are invited to join the expanded faculty meetings of the Department of History of Art this academic year. These meetings that take place each semester bring together the faculty with members of the Yale University Art Gallery, Yale Center for British Art, Arts Library, School of Art, and School of Architecture. It is an occasion for members of our broad community to find out what is happening in other units (particularly to introduce new members of staff and discuss key exhibitions and lectures).It is also an opportunity to update our extended roster of faculty, post-docs, lecturers, affiliated faculty and colleagues across campus about what is happening in the department. It is a time to share information and concerns, as well as maintain and create the many personal bonds that comprise the foundation of our community. ",
        },
        {
            title: "Midterm; Last day to withdraw from a Spring full-term course without the course appearing on the transcript",
            date: "Friday, March 10",
            description: "Midterm; Last day to withdraw from a Spring full-term course without the course appearing on the transcript.(Spring recess begins also officially begins today at 5:30 PM)",
        },
        {
            title: "Spring Recess",
            date: "Friday, March 10 at 5:30PM — Monday, March 27 at 8:20 AM",
            description: "Spring recess for the Spring 2023 semester officially begins at 5:30PM on Friday, March 10, with classes resuming at 8:20 AM on Monday, March 27.",
        },
        {
            title: 'Spring-term classes end, 5:30 PM; Reading period begins',
            date: "Friday, April 28",
            description: 'Spring-term classes end at 5:30 PM; Reading period begins for the Spring 2023 semester'
        },
        {
            title: 'Last day to withdraw from a course with permission of instructor and registrar',
            date: "Friday, April 28",
            description: 'Last day to withdraw from a Spring 2023 course with permission of instructor and registrar',
        },
        {
            title: "Critiques and examinations begin, 9 AM",
            date: "Friday, May 5",
            time: "9 AM",
            description: "Spring-term critiques and examinations begin",
        },
        {
            title: "Critiques and examinations end, 5:30 PM; Summer recess begins",
            date: "Wednesday, May 10",
            description: "Critiques and examinations end, 5:30 PM; Summer recess begins",
        },
        {
            title: 'University Commencement',
            date: "2023 Commencement is scheduled for Monday, May 22, 2023. ",
            description: 'More information about School of Art proceedings TBA.'
        },
    ]

    const [data, setData] = useState(current)

    const currentData = () => {
        setData(current)
    }

    const previousData = () => {
        setData(previous)
    }

    const nextData = () => {
        setData(next)
    }

    return (
        <div className='d-flex flex-column align-items-center justify-content-center flex-column flex-wrap'>
            <div className="d-flex flex-column align-items-center justify-content-center flex-column flex-wrap flex-shrink-0 container mb-2">
                <div href="/" className="d-flex align-items-center flex-shrink-0 p-3">
                    <h3 className="" style={{ color: "#e62e00" }}><b>ON THE CALENDAR :</b></h3>
                </div>
                <div className="list-group scrollarea">
                    {
                        data.map((e) => {
                            return <SoaListItem key={e.title} data={e} />
                        })
                    }
                </div>
            </div>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger p-3 mx-4 rounded-3 mb-5" onClick={previousData}>Previous Events</button>
                <button type="button" className="btn btn-warning p-3 mx-4 rounded-3 mb-5" onClick={currentData}>Current Events</button>
                <button type="button" className="btn btn-success p-3 mx-4 rounded-3 mb-5" onClick={nextData}>More Events</button>
            </div>
        </div>
    )
}

export default SoaList
