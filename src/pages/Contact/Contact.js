import React from 'react'
import './Contact.css'
import ContactForm from '../../components/ContactForm/ContactForm'
import Map from '../../components/Map/Map'

const Contact = () => {
  return (
    <div className='Contact'>
        <ContactForm />
       <div className='map-container'>
         <Map />
       </div>
            <div className='socials'>
            <img src='assets/facebook_icon.png'></img>
            <img src='assets/instagram_icon.png'></img>
            <img src='assets/call_icon.png'></img>
            <img src='assets/email_icon.png' className='email-icon'></img>
          </div>

          <div className='copyright'>2025    Futur-e</div>
    </div>
  )
}

export default Contact