import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import { Link } from 'react-scroll';

const Footer = () => {

    const [value, setValue] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
        setValue('');
    }

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 550) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <div className='footer'>
            <div className='footer-row'>                
                <div className="footer-links">
                    <div>
                        <a href="https://github.com/Gazizaa" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'github'] }/>
                        </a>
                        <a href="https://t.me/gaziza_ag" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'telegram'] }/>
                        </a>
                        <a href="https://www.linkedin.com/in/gaziza-agatayeva" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'linkedin'] }/>
                        </a>
                        <a href="mailto:gazizaagatayeva@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fas', 'envelope'] }/>
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'twitter'] }/>
                        </a>
                    </div>
                    <div>
                      <p className="footer-text">© 2021 Created by GAZIZA AGATAYEVA. All Rights Reserved.</p>   
                    </div>
                </div>
                 <div className="footer-input">
                     <div>
                        <h4>Newsletter</h4>
                     </div>
                    <div className='footer-p'>
                        <p>Enter your Email to get my news and updates</p>
                    </div>
                    <div>
                        <form className="newsletter-form">
                            <input type="email" 
                            placeholder="Enter Your Email" 
                            required='required' 
                            value={value} 
                            onChange={(e) => setValue(e.target.value)}/>
                            <button type='submit' onClick={handleSubmit} >Submit</button>
                        </form>
                    </div>
                </div>
                <div className='footer-button'>
                    { isVisible &&
                        <Link to="main-section" smooth={true}>
                           <button> 
                                <FontAwesomeIcon icon={ ['fas', 'level-up-alt']} />
                            </button>
                        </Link> 
                    }
                </div>
            </div>  
        </div>
    )
}

export default Footer
