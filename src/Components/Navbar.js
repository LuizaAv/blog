import React from "react";
import "../App.css";


function Navbar() {

    return (
        <div>
            <nav className='navBar'>
                <li className='navbarLi' onClick={event => window.location.href = "/"}>Blog</li>
                <li className='navbarLi'>Create your post</li>
                <li className='navbarLi'>Log In</li>
            </nav>
        </div>
    )
}

export default  Navbar
