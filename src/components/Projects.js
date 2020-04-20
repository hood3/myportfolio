import React from 'react';
import '../myStyle.scss';
import { Row, Col } from 'react-bootstrap';
import projectlogo from '../assets/projectlogo.png';
import me from '../assets/me.png';
import facial from '../assets/facial.png';
import dogheader from '../assets/dogheader.gif';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const Projects = () => {
    return(
        <section id="project">
        <div className="container">
            <br/><br/>
            <h2 className="aboutMe">Projects</h2>
            <br/><br/><br/>
            <Row >  
                <Col lg={6} sm={12} > 
                <div className="about-wrapper__info_project">
                    <p className="about-wrapper__info-text">
                        <h2>English Quiz App</h2>
                        English Quiz App I made for my Capstone Project in Professional Development in
                        Computer Science class. It was designed and developed using the MERN stack theme.
                        It is a useful app for people having trouble with the English language. 
                        This application's front-end and back-end are hosted on Heroku. 
                        <br/><br/>                
                        <a className="cta-btn cta-btn--hero" href='https://tarynsdoghouse.com'>See Live</a> 
                        <a className="cta-btn cta-btn--hero margin-right" 
                        href='https://github.com/hood3/capstone_app'>Source Code</a> 
                        <br/><br/>                        
                        <Link class="cta-btn cta-btn--hero" to='/CapPaper'>Documentation</Link>   
                    </p>
                </div>  
                </Col>
                    <Col lg={6} sm={12}>
                        <Tilt options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}>                              
                              <div data-tilt className="thumbnail rounded">
                              <img src={projectlogo} alt="myproject" class="img-fluid rounded shadow-lg"
                             />  
                              </div>
                              </Tilt>
                              </Col>
                              </Row>
                              <br/><br/><br/><br/>  
                              <Row>            
            <Col lg={6} sm={12} > 
            <div className="about-wrapper__info_project">
                <p className="about-wrapper__info-text">
                <h2>Taryn's Doghouse App</h2>
                    Website I made for a family member who is considering going into the dog day care business. 
                    I developed this web site using MEAN stack development. This application's front-end and back-end 
                    are hosted on Heroku. I also used this as a project for my Web Application class
                    at Northeastern University, so there is documentation available to look at.  
                    <br/><br/>           
                    <a class="cta-btn cta-btn--hero" href='https://tarynsdoghouse.com'>See Live</a>                                 
                    <a class="cta-btn cta-btn--hero margin-right" 
                    href='https://github.com/hood3?tab=repositories'>Source Code</a> 
                    <br/><br/>             
                    <Link class="cta-btn cta-btn--hero" to='/TarynPaper'>Documentation</Link>      
                </p>
            </div>  
            </Col>  
            <Col lg={6} sm={12}>
            <Tilt           options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                            <div data-tilt className="thumbnail rounded">
                              <img src={dogheader} alt="myproject" class="img-fluid rounded shadow-lg"
                              height="650" width="650"/>    
                            </div>
                            </Tilt>
            </Col>
        </Row><br/><br/><br/><br/>
        <Row >            
            <Col lg={6} sm={12} > 
            <div className="about-wrapper__info_project">
                <p className="about-wrapper__info-text">
                <h2>Facial Recognition App</h2>
                    Facial recognition app I developed for a school project using HTML5, CSS3, JavaScript
                    and REACT.js for the front-end. I used Node.js, Express.js for the server-side of the back-end. 
                    PostgreSQL was used for the back-end database. This app uses image recognition software from
                    Claraifi API. This application's front-end and back-end are hosted on Heroku. This app is a
                    Udemy project.   
                    <br/><br/>  
                    <a class="cta-btn cta-btn--hero" href='https://facial-image-recognition.herokuapp.com'> 
                    See Live
                    </a>                                 
                    <a class="cta-btn cta-btn--hero margin-right" href='https://github.com/hood3/FacialRecognitionApp'> 
                    Source Code
                    </a>
                </p>                 
            </div>  
            </Col>  
            <Col lg={6} sm={12}>
            <Tilt           options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                            <div data-tilt className="thumbnail rounded">
                              <img src={facial} alt="myproject" class="img-fluid rounded shadow-lg"/>    
                            </div>
                            </Tilt>
            </Col>
        </Row><br/><br/><br/><br/>
        <Row >            
            <Col lg={6} sm={12} > 
            <div className="about-wrapper__info_project">
                <p className="about-wrapper__info-text">
                <h2>Byron Hood Digital Portfolio</h2>
                    My digital portfolio which you are viewing now. I developed this for a school project 
                    in Technical Writing class, using React for the front-end, and Node.js, Express.js, 
                    and MongoDb for the back-end. The front end is hosted on Netlify, and the back-end is hosted on Heroku. 
                    <br/><br/>                  
                    <a class="cta-btn cta-btn--hero" href='https://github.com/hood3/portfolio'> 
                    Source Code
                    </a>
                </p>                 
            </div>  
            </Col>  
            <Col lg={6} sm={12}>
            <Tilt           options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                            <div data-tilt className="thumbnail rounded">
                              <img src={me} alt="myproject" class="img-fluid rounded shadow-lg"/>    
                            </div>
                            </Tilt>
            </Col>
        </Row>
        <br/><br/><br/>
        </div>
        </section>
    );
  };
  
  export default Projects;