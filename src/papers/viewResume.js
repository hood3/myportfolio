import React from 'react';
import '../App.css';
import Resume from '../assets/Resume.png';
import { Link } from 'react-router-dom';

const viewResume = () => {
    return(
        <div>
            <div className="backbtn">
            <Link class="cta-btn cta-btn--hero" to='/'>Portfolio</Link>   
            </div>
            <img  className="resume" src={Resume} alt="this is my resume" />
        </div>      
    );
  };
  
  export default viewResume;