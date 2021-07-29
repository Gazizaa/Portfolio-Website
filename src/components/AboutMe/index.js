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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint asperiores quas laudantium excepturi hic quos consectetur quisquam aut! Ratione temporibus aspernatur vitae fugiat aperiam cum saepe voluptatibus atque facilis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint asperiores quas laudantium excepturi hic quos consectetur quisquam aut! Ratione temporibus aspernatur vitae fugiat aperiam cum saepe voluptatibus atque facilis.</p>
                    <p>  
                        <FontAwesomeIcon icon={ ['fab', 'html5']} /> HTML--  
                        <FontAwesomeIcon icon={ ["fab", "css3-alt"]} /> CSS--
                        <FontAwesomeIcon icon={ ["fab", "js"]} /> JS-- 
                        <FontAwesomeIcon icon={ ["fab", "react"]} /> REACT--
                        <img src="https://img.icons8.com/ios/50/000000/redux.png" style={{'width': '18px'}}/> REDUX--
                        <img src="https://img.icons8.com/ios/50/000000/redux.png" style={{'width': '18px'}}/> REDUX_THUNK--
                        <FontAwesomeIcon icon={ ["fab", "sass"]} /> SASS--
                        <FontAwesomeIcon icon={ ["fab", "bootstrap"]} /> BOOTSTRAP--
                        <FontAwesomeIcon icon={ ["fab", "figma"]} /> FIGMA
                    </p>
                    <button><a href={cv} download target="_blank">Download CV</a></button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
