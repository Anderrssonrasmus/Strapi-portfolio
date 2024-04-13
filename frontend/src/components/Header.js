import React from 'react'
//import logo from "../media/logo-vit.svg"
import logo from "../media/Rlogo.svg"
import { Link, useLocation } from "react-router-dom"
import Design from "../media/about.svg"

function Header() {

    const pathname = useLocation().pathname;
    console.log(pathname);

    return (
        <div className='site-header'>
            <nav className="sidebar">
                <Link to="/projects" className="logo">
                    <img src={logo} />
                    <h1>Rasmus Andersson</h1>
                </Link>
                <div className="list-items">
                    <Link to="/projects" className={pathname === "/projects" ? "currentPage" : pathname === "/" ? "currentPage" : ""}>
                        <i className="fa-regular fa-file-pdf"></i>
                        <h2>Projects</h2>
                    </Link>

                    <Link to="/about" className={pathname === "/about" ? "currentPage" : ""}>
                        <i className="fa-regular fa-user"></i>
                        <h2>About</h2>
                    </Link>
                    <Link to="/contact" className={pathname === "/contact" ? "currentPage" : ""}>
                        <i className="fa-regular fa-envelope-open"></i>
                        <h2>Contact</h2>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header;