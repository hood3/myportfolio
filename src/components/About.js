import React from 'react';
import { Row, Col } from 'react-bootstrap';
import portpic from '../assets/portpic.png';
import '../myStyle.scss';
import skill from '../assets/skill.png';
import { Link } from 'react-router-dom';

const About = () => {
    return( 
        <section id="about"> 
        <div className="container"><br/><br/> 
        <h2 className="aboutMe"> About Me </h2><br/><br/>
        <Row >            
            <Col className="colum" md={6} sm={12}> 
            <div className="about-wrapper__image">
                <img src={portpic} alt="myport" class="img-fluid rounded shadow-lg"/> 
            </div>                  
            </Col>
            <Col className="colum" md={6} sm={12}>
                <div className="about-wrapper__info">
                    <p className="about-wrapper__info-text">
                        I have always sought opportunities that are challenging and meaningful. 
                        My professional path has taken some twists and turns – from the aviation business where,
                        self-employed, I built a Clientele, formed a team, handled all concerns, and worked on site, 
                        to the oil and gas industry where I became lead MWD Engineer within two years.
                        Having found a keen interest in computers, I enrolled at Oklahoma Northeastern State University
                        to gain more computer knowledge, and obtain a Master of Science Degree in Computer Science. 
                        Because of my obsessive attention to detail, my unequivocal desire to create,
                        and my mission-driven work ethic to learn new technology each day, I enjoy web developing. Fast load times and 
                        lag-free interaction are high priorities. REACT is a favorite to use whenever possible for front-end 
                        development so my layouts will be dynamic and will fit any device’s screen, large or small.
                        I am committed to my passion to continue learning, to help others, and to try to solve problems.
                        Coordinating projects with team members in college and previous employments has been profuse.Therefore,
                        I am eager for an opportunity to make an impact at a fast-growing, high-expectation company.                         
                    </p>  
                    <span class="d-flex mt-3">  
                    <Link class="cta-btn cta-btn--hero" to='/resume'>View Resume</Link>    
                    </span>                                       
                </div>          
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
            <p class="about-wrapper__info-text"><br/>My Skills:<br/>  
            <div className="skillset">                 
                    <img
                    className="img-fluid rounded shadow-lg"
                    height="500px"
                    width="500px"
                    src={skill}
                    alt="computerlogo"/><br/>    
                    </div>               
            </p>  
            </Col>
        </Row>  
        <br/><br/><br/>
    </div>
    </section>    
    );
};

  export default About;