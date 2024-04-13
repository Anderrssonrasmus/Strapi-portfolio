import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';


function SingleProject() {
    const { id } = useParams();
    const { loading, error, data, data2 } = useFetch('http://localhost:1338/api/projects/' + id + '?populate=Thumbnail2,technologies.Icon', 'http://localhost:1338/api/projects/');
    //const { loading, error, data, data2 } = useFetch('http://localhost:1338/api/projects/' + id + '?populate=Thumbnail2', 'http://localhost:1338/api/projects/');

    console.log(data, data2);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>



    return (
        <div className="container">
            <p className="title"><Link to="/projects" className='title'>Projects</Link> / {data.data.attributes.Title}</p>
            <div className="heading-box">
                <div>
                    <h2 className='heading-title'>{data.data.attributes.Title}</h2>
                    <Link to={data.data.attributes.Link} className="link" target="_blank">Visit page</Link>
                </div>
                <p className='post-content'>{data.data.attributes.Description}</p>
            </div>
            <div className="contentWrapper">
                <img className='projectImage' src={(data.data.attributes.Thumbnail2.data === null) ? "" : "http://localhost:1338" + data.data.attributes.Thumbnail2.data.attributes.url} alt="" />
                <div className="wrapper-inner" data-content={(data.data.attributes.technologies.data.length === 0) ? "empty" : ""}>
                    <p className="title">Technologies used</p>

                    <div className="wrapper-inner-inner technologies">
                        {data.data.attributes.technologies.data.map((tech) => (
                            <div key={tech.id} className="tech" >
                                <img src={(tech.attributes.Icon.data.attributes.url === null) ? "" : "http://localhost:1338" + tech.attributes.Icon.data.attributes.url} alt="" />
                                <div>
                                    <h3>{tech.attributes.Title}</h3>
                                    <p>{tech.attributes.Type}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject;