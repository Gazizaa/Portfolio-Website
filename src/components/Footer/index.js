import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-links">
                <div className="profile-links">
                    <a href="https://github.com/Gazizaa" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'github'] }/>
                    </a>
                    <a href="https://t.me/gaziza_ag" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'telegram'] }/>
                    </a>
                    <a href="https://www.linkedin.com/in/gaziza-agatayeva" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'linkedin'] }/>
                    </a>
                    <a href="mailto:gazizaagatayeva@gmail.com" target="_blank">
                         <FontAwesomeIcon icon={['fas', 'envelope'] }/>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                         <FontAwesomeIcon icon={['fab', 'twitter'] }/>
                    </a>
                </div>
                    <p class="footer-text">© 2021 Created by GAZIZA AGATAYEVA. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
