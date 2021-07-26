import React, { useState } from 'react';
import './index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faTelegram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

library.add(faBars, faTimes, faLink, faGithub, faEnvelope, faTelegram, faLinkedin, faTwitter)

const Header = () => {

    const [btnVisible, setBtnVisible] = useState(false);
     const toggleNav = () => {
        setBtnVisible(!btnVisible)
    };
    
    return (
        <header className='header'>
            <p className="logo">GAZIZA AGATAYEVA</p>
            <nav className={`navbar ${btnVisible && "showHeight"}`}>
                <a>Contact</a>
                <a>Projects</a>
                <a>About Me</a>  
            </nav>
            <button className='burger-btn' onClick={toggleNav}>
               <FontAwesomeIcon icon={ btnVisible ? ['fas', 'times'] : ['fas', 'bars'] } />
            </button>
        </header>
    )
}

export default Header
