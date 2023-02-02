import React from 'react'
import useFetch from '../hooks/useFetch';


function SingleProject() {

    const { loading, error, data } = useFetch('http://localhost:1338/api/projects?populate=*');
    console.log(data)

    return (
        <div className='wrapper'>
            <section className='hero'>
                <p className="title">Projects</p>
            </section>
        </div >
    )
}

export default SingleProject;