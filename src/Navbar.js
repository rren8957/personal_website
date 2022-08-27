import React from "react";
import { FaBars } from 'react-icons/fa';
import logo from "./img/logo.jpg"

const Navbar = () => {
    const [toggleBar, setToggleBar] = React.useState(false);

    const barLinks = (
        <div className="links">
            <ul className="bar-links">
                <li>
                    <a href='https://github.com/' target="_blank" rel="noreferrer noopener">Resume</a>
                </li>
                <li>
                    <a href='https://github.com/' target="_blank" rel="noreferrer noopener">Github</a>
                </li>
                <li>
                    <a href='mailto:ruonren@gmail.com' >Contact</a>
                </li>
            </ul>
        </div>
    ) 
    return ( 
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img className="nav-icon" src={logo} alt="logo"/>                    <button className="nav-bar"
                            onClick={() => setToggleBar(!toggleBar)}>
                        <FaBars />
                    </button>
                </div>
                {toggleBar && barLinks}
                <ul className="social-icons"></ul>
            </div>
        </nav>
    )
}

export default Navbar