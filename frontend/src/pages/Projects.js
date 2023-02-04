import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';


export default function Projects() {

    const { loading, error, data, data2 } = useFetch('http://localhost:1338/api/projects?populate=*&sort=DateFinished:desc&pagination[limit]=2', 'http://localhost:1338/api/projects?populate=*&sort=DateFinished:desc&pagination[start]=2');

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    { console.log(data2.data) }


    return (
        <div>
            <div className='wrapper'>
                <p className="title">Latest Projects</p>
                <div className="recent-projects">
                    {data.data.map((project) => (
                        <div key={project.id} className="large-project" >
                            <img src={(project.attributes.Thumbnail2.data === null) ? "" : "http://localhost:1338" + project.attributes.Thumbnail2.data.attributes.url} alt="" />
                            <div className='text-box'>
                                <p><i className="fa-solid fa-calendar-days"></i>{DateTime.now(project.attributes.DateFinished).toFormat('LLL. dd, yyyy')}</p>
                                <h2>{project.attributes.Title}</h2>
                            </div>
                            <Link to={`/projects/${project.id}`} className="link-circle"><i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    ))}
                </div>
                <div className="wrapper-inner" data-content={(data2.data.length === 0) ? "empty" : ""}>
                    <p className="title">Older Projects</p>
                    <div className="wrapper-inner-inner">
                        {data2.data.map((project) => (
                            <div key={project.id} className="project">
                                <img src={(project.attributes.Thumbnail2.data === null) ? "" : "http://localhost:1338" + project.attributes.Thumbnail2.data.attributes.url} alt="" />
                                <div className="text-box">
                                    <h2>{project.attributes.Title}</h2>
                                    <p>{project.attributes.Description.substring(0, 200)}...</p>
                                </div>
                                <div className="interaction-bar">
                                    <p><i className="fa-solid fa-calendar-days"></i>{DateTime.now(project.attributes.DateFinished).toFormat('LLL. dd, yyyy')}</p>
                                    <Link to={`/projects/${project.id}`} className="link">Read more</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </div >
    )
}
