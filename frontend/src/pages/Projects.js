import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';


export default function Projects() {

    const { loading, error, data } = useFetch('http://localhost:1338/api/projects?populate=*');

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return (
        <div>
            <div className='wrapper'>
                <section className='hero'>

                    <p className="title">Latest Projects</p>
                    <div className="recent-projects">
                        {data.data.map((project) => (
                            <div key={project.id} className="large-project" >
                                <img src={(project.attributes.Thumbnail.data === null) ? "" : "http://localhost:1338" + project.attributes.Thumbnail.data.attributes.url} alt="" />
                                <div className='text-box'>
                                    <p><i className="fa-solid fa-calendar-days"></i>{DateTime.now(project.attributes.DateFinished).toFormat('LLL. dd, yyyy')}</p>
                                    <h2>{project.attributes.Title}</h2>
                                </div>
                                <Link to={`/projects/${project.id}`} className="link"><i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        ))}
                    </div>
                    <div className="wrapper-inner">
                        <p className="title">Older Projects</p>
                        <div className="older-projects">
                            {data.data.map((project) => (
                                <div key={project.id} className="project" >
                                    <img src={(project.attributes.Thumbnail.data === null) ? "" : "http://localhost:1338" + project.attributes.Thumbnail.data.attributes.url} alt="" />
                                    <div className="text-box">
                                        <h2>{project.attributes.Title}</h2>
                                        <p>{project.attributes.Description}...</p>
                                    </div>
                                    <div className="interaction-bar">
                                        <p><i className="fa-solid fa-calendar-days"></i>{DateTime.now(project.attributes.DateFinished).toFormat('LLL. dd, yyyy')}</p>
                                        <Link to={`/projects/${project.id}`} className="link">Read more</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div >
        </div >
    )
}
