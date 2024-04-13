import React from 'react'
import pfp from "../media/pfp.png";

export default function About() {
    return (
        <>
            <div className='titleCard'>
                <h1>Rasmus<br />Andersson</h1>
                <span>Designer</span>
                <span>Developer</span>
            </div>
            <div className="biography">
                <img src={pfp} alt="" />
                <p>Grew up in Sundsvall, Sweden.</p>
                <p>Big interest in everything tech, whether it is programming, computers, keyboards or the design of generally anything.</p>
                <p>Developer journey started in 2017 when attending NTI in Sundsvall, learning the basics of development in Java and the web including HTML, css/sass, JavaScript and webservers.</p>
                <p>Hobbies include music, videogames and anything tech.</p>
                <p>This is me!</p>
            </div>
        </>
    )
}
