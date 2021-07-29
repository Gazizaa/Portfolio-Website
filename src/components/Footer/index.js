import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const Footer = () => {

    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
        setValue('');
    }

    return (
        <div className='footer'>
            <div className='footer-row'>                
                <div className="footer-links">
                    <div>
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
            </div>  
        </div>
    )
}

export default Footer
