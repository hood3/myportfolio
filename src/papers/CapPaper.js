import React, {Component} from 'react';
import '../myStyle.scss';
import Quiz1 from '../assets/Quiz1.jpg';
import Quiz2 from '../assets/Quiz2.jpg';
import Quiz3 from '../assets/Quiz3.jpg';
import Quiz4 from '../assets/Quiz4.jpg';
import Quiz5 from '../assets/Quiz5.jpg';
import Quiz6 from '../assets/Quiz6.jpg';
import Quiz7 from '../assets/Quiz7.jpg';
import Quiz8 from '../assets/Quiz8.jpg';
import Quiz9 from '../assets/Quiz9.jpg';
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
import Quiz20 from '../assets/Quiz20.jpg';
import Quiz21 from '../assets/Quiz21.jpg';
import Quiz22 from '../assets/Quiz22.jpg';
import Quiz23 from '../assets/Quiz23.jpg';
import Quiz24 from '../assets/Quiz24.jpg';
import Quiz25 from '../assets/Quiz25.jpg';
import Quiz26 from '../assets/Quiz26.jpg';
import Quiz27 from '../assets/Quiz27.jpg';
import { Link } from 'react-router-dom';
import Scroll from'../components/Scroll';

class CapPaper extends Component {
    render() {
    return(
        <div>
            <div className="backbtn">
            <Link class="cta-btn cta-btn--hero" to='/'>Portfolio</Link>   
            </div>
            <Scroll>
            <img  className="page" src={Quiz1} alt="paper1" height="2000px" width="1400px" />
            <img  className="page" src={Quiz2} alt="paper2" height="2000px" width="1400px" />
            <img  className="page" src={Quiz3} alt="paper3" height="2000px" width="1400px" />
            <img  className="page" src={Quiz4} alt="paper4" height="2000px" width="1400px" />
            <img  className="page" src={Quiz5} alt="paper5" height="2000px" width="1400px" />
            <img  className="page" src={Quiz6} alt="paper6" height="2000px" width="1400px" />
            <img  className="page" src={Quiz7} alt="paper7" height="2000px" width="1400px" />
            <img  className="page" src={Quiz8} alt="paper8" height="2000px" width="1400px" />
            <img  className="page" src={Quiz9} alt="paper9" height="2000px" width="1400px" />
            <img  className="page" src={Quiz10} alt="paper10" height="2000px" width="1400px" />
            <img  className="page" src={Quiz11} alt="paper11" height="2000px" width="1400px" />
            <img  className="page" src={Quiz12} alt="paper12" height="2000px" width="1400px" />
            <img  className="page" src={Quiz13} alt="paper13" height="2000px" width="1400px" />
            <img  className="page" src={Quiz14} alt="paper14" height="2000px" width="1400px" />
            <img  className="page" src={Quiz15} alt="paper15" height="2000px" width="1400px" />
            <img  className="page" src={Quiz16} alt="paper16" height="2000px" width="1400px" />
            <img  className="page" src={Quiz17} alt="paper17" height="2000px" width="1400px" />
            <img  className="page" src={Quiz18} alt="paper18" height="2000px" width="1400px" />
            <img  className="page" src={Quiz19} alt="paper19" height="2000px" width="1400px" />
            <img  className="page" src={Quiz20} alt="paper20" height="2000px" width="1400px" />
            <img  className="page" src={Quiz21} alt="paper21" height="2000px" width="1400px" />
            <img  className="page" src={Quiz22} alt="paper22" height="2000px" width="1400px" />
            <img  className="page" src={Quiz23} alt="paper23" height="2000px" width="1400px" />
            <img  className="page" src={Quiz24} alt="paper24" height="2000px" width="1400px" />
            <img  className="page" src={Quiz25} alt="paper25" height="2000px" width="1400px" />
            <img  className="page" src={Quiz26} alt="paper26" height="2000px" width="1400px" />
            <img  className="page" src={Quiz27} alt="paper27" height="2000px" width="1400px" />
            </Scroll>
        </div>      
    );
  };
}
  
  export default CapPaper;