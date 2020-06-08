import React from 'react';
import '../myStyle.scss';
import resume from '../assets/resume.jpg';
import { Link } from 'react-router-dom';


const TarynPaper = () => {
    return(
        <div>
            <div className="backbtn">
            <Link class="cta-btn cta-btn--hero" to='/'>Portfolio</Link>        
            </div>
            <img  className="resume" src={resume} alt="this is my resume" />
        </div>      
    );
  };
  
  export default TarynPaper;