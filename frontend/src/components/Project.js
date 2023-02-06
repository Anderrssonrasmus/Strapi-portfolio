import React from 'react'
import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';

export default function Project({ idKey, imgData, title, content, date }) {
    return (
        <div key={idKey} className="project">
            <img src={(imgData === null) ? "" : "http://localhost:1338" + imgData.attributes.url} alt="" />
            <div className="text-box">
                <h2>{title}</h2>
                <p>{content.substring(0, 200)}...</p>
            </div>
            <div className="interaction-bar">
                <p><i className="fa-solid fa-calendar-days"></i>{DateTime.now(date).toFormat('LLL. dd, yyyy')}</p>
                <Link to={`/projects/${idKey}`} className="link">Read more</Link>
            </div>
        </div>
    )
}
