import React,{useState} from 'react'
import './ContactForm.css'
import serverUrl from '../../serverUrl';
const ContactForm = () => {


  const emailServer = "http://localhost:8080/submit-form"; 

  const [options, setOptions] = useState({
    type:"",
    name_surname:"",
    cellphone:""
  })


  function handleChange(e) {
    const {name, value} = e.target;
    setOptions({
      ...options,
      [name]: value
    });

    console.log(`Selected ${name}: ${value}`);
    
  }


  function handleSubmit(e) {
  e.preventDefault();

  let isValid = true;

  if (options.type === "") {
    document.getElementById("type").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("type").style.display = "none";
  }

  if (options.name_surname === "") {
    document.getElementById("name_surname").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("name_surname").style.display = "none";
  }

  if (options.cellphone === "") {
    document.getElementById("cellphone").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("cellphone").style.display = "none";
  }

  if (isValid) {
    e.target.submit();  
    console.log(options);
    
  }
}

  return (
    <div className='ContactForm'>
        <h1>Let us call you</h1>
        <form onSubmit={handleSubmit} method='POST' action={emailServer}> 
            <select className='contact-select' onChange={handleChange} name='type'>
            <option value=''>Why are we calling you?</option>
            <option value='car-insurance'>Car insurance</option>
            <option value='house-insurance'>House insurance</option>
            <option value='mobile-insurance'>Mobile insurance</option>
            <option value='medical-insurance'>Medical insurance</option>
            </select>
            <p id="type" className='error-text'>Please choose the product you are interested in</p>
            <input type='text' placeholder='Name and Surname' className='contact-input'name='name_surname' onChange={handleChange}/>
            <p id="name_surname" className='error-text'>Please enter your Name and Surname</p>
            <input type='number' placeholder='Cellphone number' className='contact-input' name='cellphone' onChange={handleChange}/>
            <p id="cellphone" className='error-text'>Please enter your cellphone number</p>
            <button >Call me back</button>
        </form>
    </div>
    
  )
}

export default ContactForm