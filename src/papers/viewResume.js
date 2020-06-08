import React, {Component} from 'react';
import '../myStyle.scss';
import Resume from '../assets/Resume.jpg';
import { Link } from 'react-router-dom';
import Scroll from'../components/Scroll';

class viewResume extends Component {
    render() {
        return(
            <div>
                <div className="backbtn">
                    <Link class="cta-btn cta-btn--hero" to='/'>Portfolio</Link> 
                </div>
                <Scroll>
                <img  className="resume" src={Resume} alt="this is my resume" height="2000px" width="1400px" />
                </Scroll>
            </div>      
    );
  };
}
  
  export default viewResume;