import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import cv from '../../assets/CV-Front-End_Agatayeva_Gaziza.pdf';

const AboutMe = () => {
    return (
        <div className='aboutme-container'>
            <h2>About Me</h2>
            <div className='container-row'>
                <div className='cv-col'>
                    <p>Hello. My name is Gaziza. I'm a Junior Frontend Developer. <br/> This website was created to show my web projects. <br/> Below you can see my projects that represent me the most.</p>
                    <p>My current stack of languages/technologies is:</p>
                    <p>  
                        <FontAwesomeIcon icon={ ['fab', 'html5']} /> HTML--  
                        <FontAwesomeIcon icon={ ["fab", "css3-alt"]} /> CSS--
                        <FontAwesomeIcon icon={ ["fab", "js"]} /> JS-- 
                        <FontAwesomeIcon icon={ ["fab", "react"]} /> REACT--
                        <img src="https://img.icons8.com/ios/50/000000/redux.png" alt='icon' style={{'width': '18px'}}/> REDUX--
                        <FontAwesomeIcon icon={ ["fab", "sass"]} /> SASS--
                        <FontAwesomeIcon icon={ ["fab", "bootstrap"]} /> BOOTSTRAP--
                        <FontAwesomeIcon icon={ ["fab", "figma"]} /> FIGMA
                    </p>
                    <a href={cv} download target="_blank" rel="noopener noreferrer">
                        <button>Download CV</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
