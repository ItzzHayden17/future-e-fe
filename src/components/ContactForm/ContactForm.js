import React,{useState} from 'react'
import './ContactForm.css'
import serverUrl from '../../serverUrl';
const ContactForm = () => {


  const emailServer = `${serverUrl}/submit-form`; 

  const [options, setOptions] = useState({
    type:"",
    name_surname:"",
    cellphone:"",
    email:""
  })

  const [sentSucessfully,setSentSucessfully] = useState(false);
  const [loading,setLoading] = useState(false)


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

  if (options.cellphone === "" && options.email === "") {
    document.getElementById("cellphone").style.display = "block";
    document.getElementById("email").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("cellphone").style.display = "none";
    document.getElementById("email").style.display = "none";
  }

if (isValid) {
  setLoading(true)
  const formData = new URLSearchParams(new FormData(e.target));

  fetch(e.target.action, {
    method: e.target.method,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formData.toString()
  })
    .then(res => res.text())
    .then(data => {
      console.log('Form submitted successfully:', data);
      setLoading(false)
      setSentSucessfully(true);
    })
    .catch(err => console.error(err));
}

}

  return (
    <div className='ContactForm'>
      {loading ? <>
      <div className='loader'><img src='assets/loading_icon.gif'></img></div>
      </>:
      <>
      {sentSucessfully && <div className='sent'> Thank you!</div> }
        <h1>Let us call you</h1>
        <form id="form" onSubmit={handleSubmit} method='POST' action={emailServer} >
          
            <select className='contact-select' onChange={handleChange} name='type'>
            <option value=''>Why are we calling you?</option>
            <option value='personal-insurance'>Personal insurance</option>
            <option value='commercial-insurance'>Commercial insurance</option>
            </select>
            <p id="type" className='error-text'>Please choose the product you are interested in</p>
            <input type='text' placeholder='Name and Surname' className='contact-input'name='name_surname' onChange={handleChange}/>
            <p id="name_surname" className='error-text'>Please enter your Name and Surname</p>
            <input type='number' placeholder='Cellphone number' className='contact-input' name='cellphone' onChange={handleChange}/>
            <p id="cellphone" className='error-text'>Please enter your cellphone number or email address</p>
            <input type='text' placeholder='Email address' className='contact-input' name='email' onChange={handleChange}/>
            <p id="email" className='error-text'>Please enter your email address or cellphone number</p>
            <button >Call me back</button>
        </form>
      </>}
      
    </div>
    
  )
}

export default ContactForm