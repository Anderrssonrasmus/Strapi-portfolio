import React from 'react'
import logo from "../media/logo-vit.svg"
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
                    <a href="https://www.linkedin.com/in/rasmus-andersson-raz/" target="_blank">
                        <i class="fa-regular fa-file-pdf"></i>
                        <h2>Projects</h2>
                    </a>
                    <a href="https://www.instagram.com/anderrssonrasmus/" target="_blank">
                        <i className="fab fa-instagram"></i>
                        <h2>About</h2>
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rasmus022.ra@gmail.com" target="_blank">
                        <i className="far fa-envelope"></i>
                        <h2>Contact</h2>
                    </a>
                </div>
            </section>

        </div>
    )
}

export default Header;
