import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="icon-links">
            <li>
                <a href='https://www.linkedin.com/in/ruo-wen-ren-b664251b7/' target="_blank" rel="noreferrer noopener">{<FaGithub />}</a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/ruo-wen-ren-b664251b7/' target="_blank" rel="noreferrer noopener">{<FaLinkedin />}</a>
            </li>
        </div>
    )
    
}

export default Footer