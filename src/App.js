import React from 'react';
import './myStyle.scss';
import favicon from './assets/favicon.png';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Endportfolio from './components/Endportfolio';

function App() {
  return (
    <div id="myportfolio">
      <div className="App">       
      <header className="App-header">  
      <h1 className="hood">
        <subtitle><img  className="pic" src={favicon} alt="this is my icon" />Byron Hood <br/>
        Systems Administrator\Full-Stack Web Developer</subtitle>  <br/><nav id="info">
        <a id="aboutScroll" href="#about">ABOUT</a><a id="projectsScroll" href="#project">
          PROJECTS</a><a id="contactScroll" href="#contact">CONTACT</a> </nav>            
      </h1>         
      </header>       
      <div>
        <About />
      </div>  
      <div>
        <Projects />
      </div>   
      <div>
        <Contact />
      </div>      
      <div>
        <Endportfolio />
      </div> 
      </div>      
    </div>
    
  );
}

export default App;
