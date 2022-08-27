import React from "react";
import logo from "./img/logo.jpg"
import tenzie_UI from "./img/tenzie_UI.jpg"
import pollbuddy_UI from "./img/pollbuddy_UI.jpg"


const Main = () => {
    return (
        <div className="main">
            <div className="intro">
                <div className="main-words">
                    <h2>Hello, I'm Ruo Wen Ren</h2>
                    <h4>Software engineer and student majoring in computer science at RPI. Feel free to check out some my personal projects below.</h4>
                </div>
                <img className="main-photo" src={logo} alt="logo"/>
            </div>

            <div className="my-projects">
                <h2 class="my-projects-title">My Projects</h2>
                <div className="all-projects">
                    <a className="project-item" href="https://rren8957.github.io/tenzies-game/" target="_blank" rel="noreferrer noopener">
                        <img className="project-UI" src={tenzie_UI} alt="logo"/>                    
                    </a>
                    <a className="project-item" href="https://pollbuddy.app/" target="_blank" rel="noreferrer noopener">
                        <img className="project-UI" src={pollbuddy_UI} alt="logo"/>                    
                    </a>
            </div>
            </div>
        </div>
        
    )
}

export default Main