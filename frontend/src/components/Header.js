import React from 'react'
//import logo from "../media/logo-vit.svg"
import logo from "../media/Rlogo.svg"
import { Link } from "react-router-dom"
import Design from "../media/about.svg"

function Header() {
    return (
        <div className='site-header'>
            <section className="sidebar">
                <Link to="/" className="logo">
                    <img src={logo} />
                    <h1>Rasmus Andersson</h1>
                </Link>
                <div className="list-items">
                    <Link to="/projects">
                        <i className="fa-regular fa-file-pdf"></i>
                        <h2>Projects</h2>
                    </Link>

                    <Link to="/about">
                        <i className="fa-regular fa-user"></i>
                        <h2>About</h2>
                    </Link>
                    <Link to="/">
                        <i className="fa-regular fa-envelope-open"></i>
                        <h2>Contact</h2>
                    </Link>
                </div>
            </section>

        </div>
    )
}

export default Header;
