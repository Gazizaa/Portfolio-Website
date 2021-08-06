import React from 'react';
import './index.scss';

const Main = () => {
    return (
        <div className="main-section">
                <h1>Hi, I'm Gaziza.</h1>
                <p>Front-end developer.</p>
                    <a href="https://github.com/Gazizaa" target="_blank" rel="noopener noreferrer">
                        <button className='github-btn'>
                            Visit Github
                        </button>
                    </a>
                    <a href="mailto:gazizaagatayeva@gmail.com">
                        <button>
                            Get In touch
                        </button>
                    </a>
        </div>
    )
}

export default Main
