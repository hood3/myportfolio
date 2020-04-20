import React, { useState } from 'react';
import "../myStyle.scss";
import qs from 'qs';

const Customer = () => {
    const [values,setValues] = useState ({  
     name:'',   
     email:'',
     phone:'',
     webType:'',
     webInfo:'',
     buttonText:'Submit'
   });
  
   const {name,email,phone,webType,webInfo,buttonText} = values; // Destructured to save typing
  
   const handleChange = name => event => {   
     setValues({ ...values, [name]: event.target.value });
  };
  const clickSubmit = event => { //Events from button being clicked
    event.preventDefault(); //Keep page from reloading
    setValues({ ...values, buttonText: 'Submitting' }); // change button value while submitting
    fetch( window.location.href + "/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: qs.stringify(contactForm)
      })
    };
        
   const contactForm = () => (
    <form className="contact" netlify>  
        <div className="form-group">
            <label className="text-black-150 font-weight-bold">Name</label>
            <input onChange={handleChange('name')} value={name} type="text" className="form-control" Required/>
        </div>   
        <div className="form-group">
            <label className="text-black-150 font-weight-bold">Email</label>
            <input onChange={handleChange('email')} value={email} type="email" className="form-control" Required/>
        </div>
        <div className="form-group">
            <label className="text-black-150 font-weight-bold">Phone</label>
            <input onChange={handleChange('phone')} value={phone} type="text" className="form-control" Required/>
        </div>
        <div className="form-group">
            <label className="text-black-150 font-weight-bold">Web Type</label>
            <input onChange={handleChange('webType')} value={webType} type="text" className="form-control" Required/>
        </div>   
        <div className="form-group">
            <label className="text-black-150 font-weight-bold">Web Information</label>
            <textareea onChange={handleChange('webInfo')} value={webInfo} type="textarea" className="form-control" required/>
        </div>   
        <div>
            <button className="btn btn-primary" onClick={clickSubmit}>
                {buttonText}
            </button>
        </div>
    </form>
   );

   return (
    <div className="container">      
      <div className="header">Get a Qoute <br/>Existing user's may skip registering, and go straight to sign in.
      <br/>SignIn</div>
      <div className="content">
        <div className="image">         
        </div>
        {contactForm()}
        <br/>
                  
        </div>
      </div>      
  );
}

export default Customer;