import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';


export default function Projects() {

    const { loading, error, data } = useFetch('http://localhost:1338/api/projects?populate=*');

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return (
        <div>
            <div className='wrapper'>
                <section className='hero'>

                    <p className="title">Projects</p>
                    {data.data.map((project) => (
                        <div key={project.id} className="project" >
                            <h2>{project.attributes.Title}</h2>
                            <p>{project.attributes.Description.substring(0, 200)}...</p>


                            {(project.attributes.Thumbnail.data === null) ? "" : console.log(project.attributes.Thumbnail.data.attributes.url)}

                            <p>{(project.attributes.Thumbnail.data === null) ? "" : project.attributes.Thumbnail.data.attributes.url}</p>
                            <img src={(project.attributes.Thumbnail.data === null) ? "" : "http://localhost:1338" + project.attributes.Thumbnail.data.attributes.url} alt="" />
                            <Link to={`/projects/${project.id}`}>Read more</Link>
                        </div>
                    ))}
                </section>
            </div >
        </div >
    )
}
