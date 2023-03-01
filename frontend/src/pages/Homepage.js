import React, { useLayoutEffect } from 'react'
import logo from "../media/logo-vit.svg"
import { useEffect } from "react"
import { gsap } from "gsap"

function Homepage() {

    useLayoutEffect(() => {
        gsap.fromTo(".hero h1:nth-child(1)", {
            y: 10,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            delay: 0.75

        })

        gsap.fromTo(".hero h1:nth-child(2)", {
            y: 10,
            opacity: 0,
        }, {
            y: 0,
            opacity: 0.2,
            filter: 'blur(3px)',
            delay: 1.5
        })
    })

    return (
        <section className='container'>
            <div className="hero">
                <h1>Rasmus Andersson</h1>
                <h1>Rasmus Andersson</h1>

                <h2>Wordpress / React</h2>
            </div>
        </section>
    )
}

export default Homepage;