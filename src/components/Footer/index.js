import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';
import './index.scss';

const Footer = () => {

    function sendEmail(e) {
        e.preventDefault();
    emailjs.sendForm('gmail','template_bz2oocp', e.target, 'user_2vyJrQxHH3VTXDUNUI3Ml')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
        <div className='footer'>
            <div className='footer-row'>                
                <div className='footer-input'>
                    <div>
                        <p>Contact Me</p> 
                        <h6>Lorem knknknk knkkkkkkkkkk <br/>knnnnnnnnnnnnnnnkn knknnnnnnn</h6> 
                    </div>
                     <form onSubmit={sendEmail}>
                        <div>
                            <input type='text' placeholder='Your Name' name='name' required='required' max='20' />
                        </div>
                        <div>
                            <input type="email" placeholder='Your Email' name='email' required='required' max="30"/>
                        </div>
                        <br/>
                        <br/>
                        <div>
                            <textarea name="message" placeholder='Your Message' required='required' />
                        </div>
                        <div className='footer-btn'>
                            <button>Submit</button>
                        </div>
                     </form>
                </div> 
                <div className="footer-links">
                    <div>
                        <h2>Contact Information</h2>
                    </div>
                    <div className='email-div'>
                        <p>Email:</p>
                        <p>gazizaagatayeva@gmail.com</p>
                    </div>
                    <div className='phone-div'>
                        <p>Phone:</p>
                        <p>+7 708 753 72 17 </p>
                    </div>
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
                </div>
            </div>  
            <p className="footer-text">© 2021 Created by GAZIZA AGATAYEVA. All Rights Reserved.</p> 
        </div>
    )
}

export default Footer
