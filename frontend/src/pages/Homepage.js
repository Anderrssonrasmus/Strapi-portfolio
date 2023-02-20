import React, { useLayoutEffect } from 'react'
import logo from "../media/logo-vit.svg"
import  { useEffect } from "react"
import { gsap } from "gsap"

function Homepage() {

    useLayoutEffect(() => {
        gsap.fromTo(".hero", {
            y: 10, 
            opacity: 0,
       }, {
            y: 0,
            opacity: 1,
            delay: 0.75

       })
    })

    return (
        <section className='container'>
            <div className="hero">
                <h1>Rasmus Andersson</h1>
                <h2>Wordpress / React</h2>
            </div>
            <div className="textBox">
                <h2>I build digital products.</h2>
                <p></p>
            </div>
        </section>
    )
}

export default Homepage;