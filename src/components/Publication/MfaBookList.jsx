import React from 'react'
import MfaBookListElement from './MfaBookListElement'

const data = [
    {
        title: 'Body of Work: Yale School of Art MFA 2020',
        Publised: "2021",
        description: "Body of Work showcases the collected work of the graduating MFA class of 2020, and marks the fourth installment of Yale School of Art’s all-school MFA book series. Featuring an afterword by Stavros Niarchos Foundation Dean and Professor of Art Marta Kuzma, and written contributions from Steven Rodriguez and Nicholas Weltyk, both Graphic Design ‘20; Carly Sheehan, Painting/Printmaking '20; Angela Chen, Photography '20; and David Roy, Sculpture '20.",
        Editor: "Edited by Willis Kingery, Graphic Design '19; Designed by Bryant Wells, Graphic Design '20; cover illustrations by Timothy Brawner, Painting/Printmaking '20.",
        Pages: "304 pages, ISBN: 978-1-948891-07-3",
        position: "",
        img: 'https://cdn.filestackcontent.com/resize=width:350/output=format:jpg/o19e6GA4SXqa3XeTqYL3'
    },
    {
        title: "Body of Work: Yale School of Art MFA 2019",
        Publised: "2020",
        description: "Featuring a foreword by Stavros Niarchos Foundation Dean and Professor of Art Marta Kuzma, and written contributions from Emma Gregoline, Graphic Design ‘19; Emile Mausner, Painting/Printmaking '19; Genesis Báez, Photography '19; and Alfredo Diaz, Sculpture '19; Body of Work showcases the collected work of the graduating MFA class of 2019, and marks the third installment of Yale School of Art’s all-school MFA book series.",
        Editor: "Edited by Willis Kingery, Graphic Design '19; Edi Dai, Painting/Printmaking '19; and David Knowles, Graphic Design '19.",
        Designer: "Designed by David Knowles, Graphic Design '19; and Willis Kingery, Graphic Design '19.",
        Pages: "256 pages, ISBN: 978-1-948891-02-8",
        position: "order-md-2",
        img: 'https://cdn.filestackcontent.com/resize=width:350/output=format:jpg/g89MS7DRNOPCo0ttyPBW'
    },
    {
        title: "Yale School of Art MFA 2018",
        Publised: "2019",
        description: "Featuring a foreword by Stavros Niarchos Foundation Dean and Professor of Art Marta Kuzma, and written contributions from Bryce Wilner, Graphic Design ‘18; Ernest A. Bryant III, Painting/Printmaking '18; and Ian Page, Sculpture '18; this publication showcases the collected work of the graduating MFA class of 2018, and marks the second installment of Yale School of Art’s all-school MFA book series.",
        Editor: "Edited by Ayham Ghraowi, Graphic Design '17",
        Designer: "Designed by Hrefna Sigurðardóttir, Graphic Design '18; Cover image: Dan Swindel, Photography '18, Untitled (2019).",
        Pages: "256 pages, ISBN: 978-1-948891-00-4.",
        position: "",
        img: 'https://cdn.filestackcontent.com/resize=width:350/output=format:jpg/nmJJV9DnR5mpWAFb3Qwe'
    },
    {
        title: "Yale School of Art MFA 2017",
        Publised: "2018",
        description: "Featuring opening remarks by Stavros Niarchos Foundation Dean and Professor of Art Marta Kuzma, and written contributions from Gerald Sheffield, Painting/ Printmaking ‘17, Lucy Lindsey, Sculpture '17, Chase Booker, Graphic Design '17; this publication showcases the collected work of the graduating MFA class of 2017 and initiated the annual publishing program in the first year of Marta Kuzma’s appointment as Dean.",
        Designer: "Design and editing by Ben Ganz and Ayham Ghraowi, both Graphic Design '17. Publication wrapper by Wes Larios, Painting/Printmaking '17.",
        Pages: "248 pages",
        position: "order-md-2",
        img: 'https://cdn.filestackcontent.com/resize=width:350/output=format:jpg/9wgThHzpQh2J02oGqboW'
    }
]

function MfaBookList() {
    return (
        <div className='container'>
            {
                data.map((e) => {
                    return <MfaBookListElement key={e.title} info={e} />
                })
            }
        </div>
    )
}

export default MfaBookList
