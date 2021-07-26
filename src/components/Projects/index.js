import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import project1Img from '../../assets/project-1.png';
import project2Img from '../../assets/project-2.png';
import project3Img from '../../assets/project-3.png';
import project4Img from '../../assets/project-4.png';
import project5Img from '../../assets/project-5.png';



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
                    <p>In the application, you can see additional information about the product by clicking on the image. Implemented adding a product to the basket, removing a product from the basket, adjusting the number of products, emptying the basket. Product data is saved in db.json.In the application, you can see additional information about the product by clicking on the image. Implemented adding a product to the basket, removing a product from the basket, adjusting the number of products, emptying the basket. Product data is saved in db.json.</p>
                    <h4>REACT-REACT HOOKS-REDUX-REDUX THUNK-SASS</h4>
                    <button>
                        <FontAwesomeIcon icon={['fas', 'link'] } size="xs"/> 
                        <a target='_blank' href='https://react-store-app-2.herokuapp.com'> VISIT</a>
                    </button>
                    <button className='source-btn'>
                        <FontAwesomeIcon icon={['fab', 'github'] }/>
                        <a target='_blank' href='https://github.com/Gazizaa/Store'> SOURCE</a>
                    </button>
                </div>
            </div>
            <h3>Weather App</h3>
            <div className='project'>
                 <div className='project-p'>
                    <br/>
                    <br/>
                    <p>The weather forecast app is written with ReactJS using React Hooks and the OpenWeather API. The application shows the current date, current weather and weather for the next 4 days. The city of Paris is set by default.</p>
                    <h4>REACT-REACT HOOKS-AXIOS-MOMENT JS</h4>
                    <button>
                        <FontAwesomeIcon icon={['fas', 'link'] } size="xs"/> 
                        <a target='_blank' href='https://gazizaa.github.io/react-weather-app/'> VISIT</a>
                    </button>
                    <button className='source-btn'>
                        <FontAwesomeIcon icon={['fab', 'github'] }/>
                        <a target='_blank' href='https://github.com/Gazizaa/react-weather-app'> SOURCE</a>
                    </button>
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
                    <p>In the application, you can see additional information about the product by clicking on the image. Implemented adding a product to the basket, removing a product from the basket, adjusting the number of products, emptying the basket. Product data is saved in db.json.In the application, you can see additional information about the product by clicking on the image. Implemented adding a product to the basket, removing a product from the basket, adjusting the number of products, emptying the basket. Product data is saved in db.json.</p>
                    <h4>REACT-REDUX-REDUX THUNK-SASS</h4>
                    <button>
                        <FontAwesomeIcon icon={['fas', 'link'] } size="xs"/> 
                        <a target='_blank' href='#'> VISIT</a>
                    </button>
                    <button className='source-btn'>
                        <FontAwesomeIcon icon={['fab', 'github'] }/>
                        <a target='_blank' href='#'> SOURCE</a>
                    </button>
                </div>
            </div>
            <h3>Todo App</h3>
            <div className='project'>
                 <div className='project-p'>
                    <br/>
                    <br/>
                    <p>To do list with ReactJS + React Hooks. The data is saved in db.jsonTo do list with ReactJS + React Hooks. The data is saved in db.json..</p>
                    <h4>REACT-REACT HOOKS-AXIOS-JSON-SERVER</h4>
                    <button>
                        <FontAwesomeIcon icon={['fas', 'link'] } size="xs"/> 
                        <a target='_blank' href='https://react-app-todoo.herokuapp.com'> VISIT</a>
                    </button>
                    <button className='source-btn'>
                        <FontAwesomeIcon icon={['fab', 'github'] }/>
                        <a target='_blank' href='https://github.com/Gazizaa/Todo-app'> SOURCE</a>
                    </button>
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
                    <br/>
                    <br/>
                    <p>Website using the Bootstrap library with a registration and login form.</p>
                    <h4>BOOTSTRAP</h4>
                    <button>
                        <FontAwesomeIcon icon={['fas', 'link'] } size="xs"/> 
                        <a target='_blank' href='https://gazizaa.github.io/bootstrap-project/'> VISIT</a>
                    </button>
                    <button className='source-btn'>
                        <FontAwesomeIcon icon={['fab', 'github'] }/>
                        <a target='_blank' href='https://github.com/Gazizaa/bootstrap-project'> SOURCE</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projects
