import React from 'react'
import logo from "../media/logo-vit.svg"

function Homepage() {
    return (
        <div className='wrapper'>
            <section className='hero'>
                <img src={logo} alt="" />
                <h1>Rasmus Andersson</h1>
                <h2>Wordpress / React</h2>
            </section>
        </div>
    )
}

export default Homepage;