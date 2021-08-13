import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import project1Img from '../../assets/project-1.png';
import project2Img from '../../assets/project-2.png';
import project3Img from '../../assets/project-3.png';
import project4Img from '../../assets/project-4.png';
import project5Img from '../../assets/project-5.png';
import project6Img from '../../assets/project-6.png';

const Projects = () => {
    return (
        <div className='projects-section'>
            <h2>My Projects</h2>
            <h3>Virtual Store</h3>
            <div className='project'>
                <div className='project-img'>
                    <img src={project1Img} alt='project-img'/>
                </div>
                <div className='project-p'>
                    <p>In the application, you can see additional information about the product by clicking on the image. Implemented adding a product to the basket, removing a product from the basket, adjusting the number of products, emptying the basket. Product data is saved in db.json.</p>
                    <h4>REACT-REACT HOOKS-REDUX-REDUX THUNK-SASS</h4>
                    <a target='_blank' href='https://react-store-app-2.herokuapp.com' rel="noopener noreferrer">
                        <button>
                            <FontAwesomeIcon icon={['fas', 'link'] } size="xs" className='icon'/>  
                            VISIT
                        </button>
                    </a>
                    <a target='_blank' href='https://github.com/Gazizaa/Store' rel="noopener noreferrer">   
                        <button className='source-btn'>
                            <FontAwesomeIcon icon={['fab', 'github'] } className='icon' />
                            SOURCE
                        </button>
                    </a> 
                </div>
            </div>
            <h3>Weather App</h3>
            <div className='project'>
                 <div className='project-p'>
                    <p>The weather forecast app is written with ReactJS using React Hooks and the OpenWeather API. The application shows the current date, current weather and weather for the next 4 days. The city of Paris is set by default.</p>
                    <h4>REACT-REACT HOOKS-AXIOS-MOMENT JS</h4>
                    <a target='_blank' href='https://gazizaa.github.io/react-weather-app/' rel="noopener noreferrer">
                        <button>
                            <FontAwesomeIcon icon={['fas', 'link'] } size="xs" className='icon'/> 
                            VISIT
                        </button>
                    </a>
                    <a target='_blank' href='https://github.com/Gazizaa/react-weather-app' rel="noopener noreferrer">
                        <button className='source-btn'>
                            <FontAwesomeIcon icon={['fab', 'github'] } className='icon' />
                            SOURCE
                        </button>
                    </a>
                </div>
                <div className='project-img'>
                    <img src={project2Img} alt='project-img'/>
                </div>
            </div>
             <h3>Portfolio Website</h3>
            <div className='project'>
                <div className='project-img'>
                    <img src={project3Img} alt='project-img'/>
                </div>
                <div className='project-p'>
                    <p>This is website you're now watching.The portfolio site is implemented using ReactJS and SASS. Links to all my projects are provided. You can also download my resume.</p>
                    <h4>REACTJS-SASS</h4>
                    <a target='_blank' href='https://gazizaa.github.io/' rel="noopener noreferrer">
                        <button>
                            <FontAwesomeIcon icon={['fas', 'link'] } size="xs" className='icon' /> 
                            VISIT
                        </button>
                    </a>
                    <a target='_blank' href='https://github.com/Gazizaa/gazizaa.github.io' rel="noopener noreferrer"> 
                        <button className='source-btn'>
                            <FontAwesomeIcon icon={['fab', 'github'] } className='icon' />
                            SOURCE
                        </button>
                    </a>
                </div>
            </div>
            <h3>Todo App</h3>
            <div className='project'>
                 <div className='project-p'>
                    <p>To do list with ReactJS + React Hooks. The application has the ability to add and remove tasks. The data is saved in db.json.</p>
                    <h4>REACT-REACT HOOKS-AXIOS-JSON-SERVER</h4>
                    <a target='_blank' href='https://react-app-todoo.herokuapp.com' rel="noopener noreferrer">
                        <button>
                            <FontAwesomeIcon icon={['fas', 'link'] } size="xs" className='icon'/> 
                            VISIT
                        </button>
                    </a>
                    <a target='_blank' href='https://github.com/Gazizaa/Todo-app' rel="noopener noreferrer">
                        <button className='source-btn'>
                            <FontAwesomeIcon icon={['fab', 'github'] } className='icon'/>
                            SOURCE
                        </button>
                    </a>
                </div>
                <div className='project-img'>
                    <img src={project4Img} alt='project-img'/>
                </div>
            </div>
             <h3>Bootstrap Project</h3>
            <div className='project'>
                <div className='project-img'>
                    <img src={project5Img} alt='project-img'/>
                </div>
                <div className='project-p'>
                    <p>Website using the Bootstrap library with a registration and login form.</p>
                    <h4>BOOTSTRAP</h4>
                    <a target='_blank' href='https://gazizaa.github.io/bootstrap-project/' rel="noopener noreferrer">
                        <button>
                            <FontAwesomeIcon icon={['fas', 'link'] } size="xs" className='icon'/> 
                            VISIT
                        </button>
                    </a>
                    <a target='_blank' href='https://github.com/Gazizaa/bootstrap-project' rel="noopener noreferrer">
                        <button className='source-btn'>
                            <FontAwesomeIcon icon={['fab', 'github'] } className='icon'/>
                            SOURCE
                        </button>
                    </a>
                </div>
            </div>
             <h3>Digital Clock</h3>
            <div className='project'>
                 <div className='project-p'>
                    <p>Digital Clock with JavaScript. Work with Date Object in JavaScript.</p>
                    <h4>HTML-CSS-JAVASCRIPT</h4>
                    <a target='_blank' href='https://gazizaa.github.io/digital-clock-js/' rel="noopener noreferrer">
                        <button>
                            <FontAwesomeIcon icon={['fas', 'link'] } size="xs" className='icon'/> 
                            VISIT
                        </button>
                    </a>
                    <a target='_blank' href='https://github.com/Gazizaa/digital-clock-js' rel="noopener noreferrer"> 
                        <button className='source-btn'>
                            <FontAwesomeIcon icon={['fab', 'github'] } className='icon'/>
                            SOURCE
                        </button>
                    </a>
                </div>
                <div className='project-img'>
                    <img src={project6Img} alt='project-img'/>
                </div>
            </div>
        </div>
    )
}

export default Projects
