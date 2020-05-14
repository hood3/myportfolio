import '../myStyle.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

const HireMe = () => {  
    const [values,setValues] = useState ({//State object values with method setValues
        name:'',
        email:'',
        WebsiteType:'',
        buttonText:'Send'//Button text will change during events
      });

      const {name,email,WebsiteType,buttonText} = values; // Destructured to save typing

      const handleChange = name => event => {   //Function to grab input values on change
        setValues({ ...values, [name]: event.target.value });//and set the state with values
    };

    const clickSubmit = event => { //Events from button being clicked
        event.preventDefault(); //Keep page from reloading
        setValues({ ...values, buttonText: 'Sending' }); // Change button value while submitting
    };
    const quoteForm = () => (//Method containing the Registration form
        <form>
            <div className="form-group">
                <label className="text-black-150 font-weight-bold">Name</label>
                <input onChange={handleChange('name')} value={name} type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-black-150 font-weight-bold">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-black-150 font-weight-bold">Website Type</label>
                <input onChange={handleChange('WebsiteType')} value={WebsiteType} type="text" className="form-control" />
            </div>
            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>
      );

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
            {quoteForm()}                          
            </div>              
            </div>  
            </div>   
    );
  };
    
  export default HireMe;