import React from 'react'
import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';

export default function ProjectLarge({ idKey, imgData, date, title }) {

    console.log(idKey)
    return (
        <div key={idKey} className="large-project" >
            <img src={(imgData === null) ? "" : "http://localhost:1338" + imgData.attributes.url} alt="" />
            <div className='text-box'>
                <p><i className="fa-solid fa-calendar-days"></i>{DateTime.now(date).toFormat('LLL. dd, yyyy')}</p>
                <h2>{title}</h2>
            </div>
            <Link to={`/projects/${idKey}`} className="link-circle"><i className="fa-solid fa-arrow-right"></i></Link>
        </div>
    )
}
