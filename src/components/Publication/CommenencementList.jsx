import React from 'react'
import CommencementListElement from './CommencementListElement'

const data = [
    {
        title: "Now Dig This by Greg Tate",
        Publised: "2021",
        description: "Now Dig This marks the continuation of Yale School of Art Commencement—a series that publishes the speeches by speakers invited by the Dean on the occasion of the commencement of students receiving their MFA degrees from graphic design, painting/printmaking, photography, and sculpture. Our guest speaker in May 2021 was Greg Tate.    The class of 2021 representative student speaker was Amina Ross, Sculpture ‘21, featuring a preamble by Stavros Niarchos Foundation Dean and Professor of Art Marta Kuzma.",
        Editor: "Edited by Willis Kingery, Graphic Design '19.",
        Designer: "Designed by Bianca Ibarlucea, Graphic Design '21.",
        Pages: "74 pages, ISBN: 978-1-948891-09-7",
        img: 'https://cdn.filestackcontent.com/resize=width:350/output=format:jpg/bUyzePu4QU63hxqhxwti'
    },
    {
        title: "Art Dwells in the Present by Gregg Bordowitz",
        Publised: "2020",
        description: "Featuring a preamble by Stavros Niarchos Foundation Dean and Professor of Art Marta Kuzma, Art Dwells in The Present marks the continuation of Yale School of Art Commencement—a series that publishes the speeches by speakers invited by the Dean on the occasion of the commencement of students receiving their MFA degrees from graphic design, painting/printmaking, photography, and sculpture. Our guest speaker in May 2020 was Gregg Bordowitz.",
        Editor: "Fragmental editing by Angie Keefer, BA ‘99, and Willis Kingery",
        Designer: "Graphic Design '19. Designed by Jinu Hong, Graphic Design '20, and Tuan Quoc Pham, Graphic Design '20.",
        Pages: "30 pages, ISBN: 978-1-948891-06-6",
        img: 'https://cdn.filestackcontent.com/resize=width:350/output=format:jpg/HTu36ZNZRsq8JZxAjMIZ'
    },
    {
        title: "Sermon of the Nonresponse by Fred Moten",
        Publised: "2018",
        description: "Featuring a preamble by Stavros Niarchos Foundation Dean and Professor of Art Marta Kuzma, Sermon of the Nonresponse marked the inauguration of Yale School of Art Commencement—a series that publishes the speeches by speakers invited by the Dean on the occasion of the commencement of students receiving their MFA degrees from graphic design, painting/printmaking, photography, and sculpture.Our guest speaker in May 2018 was Fred Moten.",
        Editor: "Edited by Ayham Ghraowi, Graphic Design ‘17.",
        Designer: "Designed by Bryce Wilner, Graphic Design '18.",
        Pages: "30 pages, ISBN: 978-1-948891-04-2",
        img: 'https://cdn.filestackcontent.com/resize=width:350/output=format:jpg/NwC4agXQtHmqVGMAJuhw'
    },
]


function CommenencementList() {
    return (
        <div className='container'>
            {
                data.map((e) => {
                    return <CommencementListElement key={e.title} info={e} />
                })
            }
        </div>
    )
}

export default CommenencementList
