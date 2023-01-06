import React from 'react'
import NewsListItem from './NewsListItem'
import noPreview from '../Images/nopreview.jpeg'

const newsData = [
    {
        Date: 'DECEMBER 16, 2022',
        Descriptione: "BARBARA EARL THOMAS & CHRISTOPHER PAUL JORDAN IN CONVERSATION",
        Image: 'https://cdn.filestackcontent.com/resize=width:350/output=format:jpg/n2F5Bm2R2OEU2EGbNvCg',
    },
    {
        Date: 'NOVEMBER 30, 2022',
        Descriptione: "NEWS FROM NEW HAVEN: NOVEMBER 2022",
        Image: 'https://cdn.filestackcontent.com/resize=width:700/output=format:jpg/yke1Ou9WRwajmYHD5ext',
    },
    {
        Date: 'NOVEMBER 29, 2022',
        Descriptione: "YALE COLLABORATION BRINGS LUKMAN ÀLÀDÉ FÁKẸ́YE TO THE SCHOOL OF ART",
        Image: 'https://cdn.filestackcontent.com/resize=width:350/output=format:jpg/qcylziYT4CT2lr5V5GMb',
    },
    {
        Date: 'NOVEMBER 21, 2022',
        Descriptione: "SCHOOL OF ART SEEKS DIRECTOR AND TENURE-TRACK FACULTY MEMBER IN PAINTING/PRINTMAKING",
        Image: noPreview
    },
    {
        Date: 'NOVEMBER 10, 2022',
        Descriptione: "BARBARA EARL THOMAS: NINE PAPERCUTTINGS FOR WINDOWS IN STAINED GLASS",
        Image: 'https://cdn.filestackcontent.com/resize=width:350/output=format:jpg/bWcjWX8gSD2afTniiAdQ',
    },
    {
        Date: 'OCTOBER 31, 2022',
        Descriptione: "NEWS FROM NEW HAVEN: OCTOBER 2022",
        Image: 'https://cdn.filestackcontent.com/resize=width:700/output=format:jpg/W738t4msSH6x5IoBPQTn',
    },
    {
        Date: 'OCTOBER 26, 2022',
        Descriptione: "SCHOOL OF ART SEEKS DIRECTOR OF SUSTAINABLE EQUITY AND INCLUSION",
        Image: noPreview
    },
    {
        Date: 'OCTOBER 26, 2022',
        Descriptione: "RINA BANERJEE APPOINTED INAUGURAL POST-COLONIAL CRITIC AT THE YALE SCHOOL OF ART",
        Image: 'https://cdn.filestackcontent.com/resize=width:350/output=format:jpg/RF9PMPuGQ2SLhJHqQClT',
    },
    {
        Date: 'SEPTEMBER 30, 2022',
        Descriptione: "NEWS FROM NEW HAVEN: SEPTEMBER 2022",
        Image: 'https://cdn.filestackcontent.com/resize=width:700/output=format:jpg/6CoCxDIbSfimLXq5xXtq',
    },
    {
        Date: 'SEPTEMBER 29, 2022',
        Descriptione: "NEW HAVEN ARTISTS AWARDED 2022–23 CLIMATE ENGAGEMENT THROUGH ART IN CITIES FELLOWSHIPS",
        Image: 'https://cdn.filestackcontent.com/resize=width:350/output=format:jpg/6sMIOYikQEyAL4QxdSrc',
    },
    {
        Date: 'SEPTEMBER 26, 2022',
        Descriptione: "ANNOUNCING THE INAUGURAL 2022–2023 YALE SCHOOL OF ART / CCAM / BLENDED REALITY LAB POSTGRADUATE FELLOWSHIP",
        Image: 'https://cdn.filestackcontent.com/resize=width:350/output=format:jpg/PMeq9zy7Qoe9UzuY7DST',
    },
    {
        Date: 'SEPTEMBER 20, 2022',
        Descriptione: "NEW ASSISTANT DIRECTORS OF GRADUATE STUDY: MARIA DE LOS ANGELES APPOINTED IN PAINTING/PRINTMAKING AND SANDRA BURNS APPOINTED IN SCULPTURE",
        Image: 'https://cdn.filestackcontent.com/resize=width:350/output=format:jpg/8upF4I75RnGzgpbfUYwp',
    },
    {
        Date: 'SEPTEMBER 6, 2022',
        Descriptione: "SCHOOL OF ART SEEKS IT SUPPORT TECHNICIAN",
        Image: noPreview
    },
    {
        Date: 'SEPTEMBER 1, 2022',
        Descriptione: "SCHOOL OF ART SEEKS SENIOR ADMINISTRATIVE ASSISTANT",
        Image: noPreview
    },
    {
        Date: 'JULY 5, 2022',
        Descriptione: "SCHOOL OF ART SEEKS FACILITIES MANAGER",
        Image: noPreview
    },
    {
        Date: 'JUNE 15, 2022',
        Descriptione: "DIVERSITY, EQUITY, INCLUSION, & BELONGING UNIT PLAN FOR THE YALE SCHOOL OF ART",
        Image: noPreview
    },
    {
        Date: 'JUNE 13, 2022',
        Descriptione: "NONTSIKELELO MUTITI APPOINTED DIRECTOR OF GRADUATE STUDIES IN GRAPHIC DESIGN",
        Image: noPreview
    },
    {
        Date: 'JUNE 6, 2022',
        Descriptione: "NEWS FROM NEW HAVEN: JUNE 2022",
        Image: 'https://cdn.filestackcontent.com/resize=width:700/output=format:jpg/4gPTO4TNSney8wmhWS6Q',
    },
    {
        Date: 'MAY 23, 2022',
        Descriptione: "CONGRATULATIONS TO THE CLASS OF 2022!",
        Image: 'https://cdn.filestackcontent.com/resize=width:350/output=format:jpg/zAE8E70TC2npZfBsvMC8',
    },
    {
        Date: 'APRIL 30, 2022',
        Descriptione: "NEWS FROM NEW HAVEN: APRIL 2022",
        Image: 'https://cdn.filestackcontent.com/resize=width:700/output=format:jpg/BSvfLJvSTZufG6DRCEEZ',
    },
    {
        Date: 'APRIL 26, 2022',
        Descriptione: "ANOKA FARUQEE APPOINTED ASSOCIATE DEAN AT THE YALE SCHOOL OF ART",
        Image: noPreview
    },
    {
        Date: 'APRIL 9, 2022',
        Descriptione: "SEVEN YALE SCHOOL OF ART ALUMS NAMED 2022 GUGGENHEIM FELLOWS",
        Image: noPreview
    },
    {
        Date: 'MARCH 31, 2022',
        Descriptione: "NEWS FROM NEW HAVEN: MARCH 2022",
        Image: 'https://cdn.filestackcontent.com/resize=width:700/output=format:jpg/LbYlgEYxRzyK5IKGe9yJ',
    },
    {
        Date: 'FEBRUARY 28, 2022',
        Descriptione: "NEWS FROM NEW HAVEN: FEBRUARY 2022",
        Image: 'https://cdn.filestackcontent.com/resize=width:700/output=format:jpg/j5PytFWSlOYjc7yZmqAr',
    },
    {
        Date: 'FEBRUARY 9, 2022',
        Descriptione: "YALE SCHOOL OF ART ALUMNI AND FACULTY TO PARTICIPATE IN PRESTIGIOUS VENICE BIENNALE",
        Image: 'https://cdn.filestackcontent.com/resize=width:700/output=format:jpg/7yoEUGsZSTOKp4ZU5M1Q',
    },
    {
        Date: 'JANUARY 31, 2022',
        Descriptione: "NEWS FROM NEW HAVEN: JANUARY 2022",
        Image: 'https://cdn.filestackcontent.com/resize=width:700/output=format:jpg/u9b9odbFThS6Knj1zde0',
    },
    {
        Date: 'JANUARY 20, 2022',
        Descriptione: "CELEBRATING THE SUCCESS OF YALE SCHOOL OF ART ALUMS AT MIAMI ART FAIRS",
        Image: 'https://cdn.filestackcontent.com/resize=width:700/output=format:jpg/KJ2eKynKSoOQCFp9jO3z',
    },
]

function NewsList() {
    return (
        <div>
            <div className="album">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            newsData.map((e) => {
                                return <NewsListItem key={e.Descriptione} info={e}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsList
