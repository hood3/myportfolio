import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import ContactMe from '../papers/ContactMe';


const HireMe = () => {   

    return( 
        <div>
        <div className="backbtn">
        <Link className="cta-btn cta-btn--hero" to='/'>Portfolio</Link>         
        </div>     
        <div className="prices">         
            <h1>Website Design and Development</h1><br/><h2>Whether you are a start-up or an enterprise business,
                my expertise in web development will turn your ideas into an online success.</h2><br/>           
            <p>
                <ul className='priceList'>
                <h3>Front End Development</h3>
                    <li>
                        Front-end architecture and design services to build top-class
                        solutions to meet your business needs.</li>
                        <li>React</li>
                        <li>Angular</li>
                        <h3>Back End Development</h3>
                    <li>
                        My back-end development services is about building a product
                        that works seamlessly, meets market needs and creating an enjoyable user experience that
                        earns your clients loyalty.
                    </li>
                    <li>Any database of your choosing.</li> 
                    <h3>E-commerce</h3>
                    <li>
                        Custom designed & developed eCommerce websites.                   
                    </li>
                    <li>
                        Cutomer Log-in Area.
                    </li>
                    <li>
                        Product Catalog Design.
                    </li>
                    <li>
                        Product Detail Page Design
                    </li>
                    <li>
                       Full Shopping Cart Integration.
                    </li>
                    <li>
                        Easy Product Search.
                    </li>
                    <li>
                        Product Rating & Reviews.
                    </li>
                </ul>                
            </p>           
            <div>            
            <p className="pri"> Fill out form for a free Quote</p>                       
            </div>              
            </div>  
            </div>   
    );
  };
    
  export default HireMe;