import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='ContactForm'>
        <h1>Let us call you</h1>
        <form>
            <select className='contact-select'>
            <option value=''>Why are we calling you?</option>
            </select>
            <p className='error-text'>Please choose the product you are interested in</p>
            <input type='text' placeholder='Name and Surname' className='contact-input'/>
            <p className='error-text'>Please enter your Name and Surname</p>
            <input type='text' placeholder='Cellphone number' className='contact-input'/>
            <p className='error-text'>Please enter your cellphone number</p>
            <button>Call me back</button>
        </form>
    </div>
    
  )
}

export default ContactForm