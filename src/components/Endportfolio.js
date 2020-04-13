import React from 'react';
import '../App.css';
import linkin from '../assets/linkin.png';
import git from '../assets/git.jpg';
import mytop from '../assets/mytop.png';

const Endportfolio = () => {
    return(
        <section id="end">
            <div className="container">
                <div>
                    <p>
                        <a href="#myportfolio"><img src={mytop} alt="mytop" height="60" width="60"/></a>
                    </p>
                    <p>
                        <a href="https://www.linkedin.com/in/byron-hood"><img src={linkin} alt="mylinkin" 
                        height="60" width="60"/></a>
                        <a href="https://github.com/hood3?tab=repositories" className="logo"><img src={git}
                         alt="mygithub" height="60" width="60"/></a>  
                    </p>   
                    <p className="f-text"><br/>© 2020 - Portfolio developed by Byron Hood</p>  
                </div>                
            </div>  
        </section>  
    );
  };
  
  export default Endportfolio;