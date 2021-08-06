import React, { useState } from 'react';
import './index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faLink, faEnvelope, faLevelUpAlt } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faTelegram, faLinkedin, faTwitter, faHtml5, faCss3Alt, faJs, faReact, faSass, faBootstrap, faFigma} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

library.add(faBars, faTimes, faLink, faGithub, faEnvelope, faTelegram, faLinkedin, faTwitter, faHtml5, 
    faCss3Alt, faJs, faReact, faSass, faBootstrap, faFigma, faLevelUpAlt)

const Header = () => {

    const [btnVisible, setBtnVisible] = useState(false);
     const toggleNav = () => {
        setBtnVisible(!btnVisible)
    };
    
    return (
        <header className='header'>
            <p className="logo">GAZIZA AGATAYEVA</p>
            <nav className={`navbar ${btnVisible && "showHeight"}`}>
                <Link to="footer" smooth={true}>Contact</Link>
                <Link to="projects-section" smooth={true}>Projects</Link>
                <Link to="aboutme-container" smooth={true}>About Me</Link> 
            </nav>
            <button className='burger-btn' onClick={toggleNav}>
               <FontAwesomeIcon icon={ btnVisible ? ['fas', 'times'] : ['fas', 'bars'] } />
            </button>
        </header>
    )
}

export default Header
