import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';


function SingleProject() {
    const { id } = useParams();
    const { loading, error, data } = useFetch('http://localhost:1338/api/projects/' + id);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    console.log(data)

    return (
        <div className='wrapper'>
            <section className='hero'>

                <p className="title"><Link to="/projects" className='title'>Projects</Link> / {data.data.attributes.Title}</p>
            </section>
        </div >
    )
}

export default SingleProject;