import React from 'react';
import '../App.css';
import Quiz01 from '../assets/Quiz01.jpg';
import Quiz02 from '../assets/Quiz02.jpg';
import Quiz03 from '../assets/Quiz03.jpg';
import Quiz04 from '../assets/Quiz04.jpg';
import Quiz05 from '../assets/Quiz05.jpg';
import Quiz06 from '../assets/Quiz06.jpg';
import Quiz07 from '../assets/Quiz07.jpg';
import Quiz08 from '../assets/Quiz08.jpg';
import Quiz09 from '../assets/Quiz09.jpg';
import Quiz10 from '../assets/Quiz10.jpg';
import Quiz11 from '../assets/Quiz11.jpg';
import Quiz12 from '../assets/Quiz12.jpg';
import Quiz13 from '../assets/Quiz13.jpg';
import Quiz14 from '../assets/Quiz14.jpg';
import Quiz15 from '../assets/Quiz15.jpg';
import Quiz16 from '../assets/Quiz16.jpg';
import Quiz17 from '../assets/Quiz17.jpg';
import Quiz18 from '../assets/Quiz18.jpg';
import Quiz19 from '../assets/Quiz19.jpg';
import { Link } from 'react-router-dom';

const CapPaper = () => {
    return(
        <div>
            <div className="backbtn">
            <Link class="cta-btn cta-btn--hero" to='/'>Portfolio</Link>   
            </div>
            <img  className="page1" src={Quiz01} alt="paper1" />
            <img  className="page2" src={Quiz02} alt="paper2" />
            <img  className="page3" src={Quiz03} alt="paper3" />
            <img  className="page4" src={Quiz04} alt="paper4" />
            <img  className="page5" src={Quiz05} alt="paper5" />
            <img  className="page6" src={Quiz06} alt="paper6" />
            <img  className="page7" src={Quiz07} alt="paper7" />
            <img  className="page8" src={Quiz08} alt="paper8" />
            <img  className="page9" src={Quiz09} alt="paper9" />
            <img  className="page10" src={Quiz10} alt="paper10" />
            <img  className="page11" src={Quiz11} alt="paper11" />
            <img  className="page11" src={Quiz12} alt="paper11" />
            <img  className="page11" src={Quiz13} alt="paper11" />
            <img  className="page11" src={Quiz14} alt="paper11" />
            <img  className="page11" src={Quiz15} alt="paper11" />
            <img  className="page11" src={Quiz16} alt="paper11" />
            <img  className="page11" src={Quiz17} alt="paper11" />
            <img  className="page11" src={Quiz18} alt="paper11" />
            <img  className="page11" src={Quiz19} alt="paper11" />
        </div>      
    );
  };
  
  export default CapPaper;