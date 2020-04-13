import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const HireMe = () => {   

    return( 
        <div>
        <div className="backbtn">
        <Link className="cta-btn cta-btn--hero" to='/'>Portfolio</Link>         
        </div>     
        <div className="prices">                  
            <br/><br/><br/><br/>
            <h1>Website design price list:</h1><br/>           
            <p>
                <ul className='priceList'>
                    <li>
                        Setup: $160
                    </li>
                    <li>
                        Design and building: $5,000
                    </li>
                    <li>
                        Content creation: $500                        
                    </li>
                    <li>
                        Client training: $600
                    </li>
                    <li>
                        Maintenance: $500
                    </li>
                    <li>
                        Total: $6,760
                    </li>
                </ul>                
            </p>           
            <div>       
            <p className="pri">Standad E-commerce web design:</p>
            <ul className="priceList">
                <li>
                    Simple Bare Basic E-commerce site: $3,000 - $5,000
                </li>
                <li>
                    Medium Size (medium is defined as at least a thousand visitors per month): $8,000 - $12,000
                </li>
                <li>
                    Enterprise ( extremely high traffic/monthly): $16,000 - $25,000
                </li>
            </ul>  
            <p className="pri"> Fill out form for a free Quote</p>                       
            </div>              
            </div>  
            </div>   
    );
  };
    
  export default HireMe;