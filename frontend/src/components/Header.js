import React from 'react'
import logo from "../media/logo.svg"
import Link from "react-router-dom"

function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
        </header>
    )
}

export default Header;
