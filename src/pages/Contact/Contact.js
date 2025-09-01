import React from 'react'
import './Contact.css'
import ContactForm from '../../components/ContactForm/ContactForm'
import Map from '../../components/Map/Map'

const Contact = () => {
  return (
    <div className='Contact'>
              
        <div className='contact-details'>
          <ContactForm />
          <div className='contact-info'>
            <h1>Or get in touch with us.</h1>
            <a href='tel:0814385555'><img src='assets/call_icon.png'/>0814385555</a>
            <a href='mailto:marketing@futur-e.co.za'><img src='assets/email_icon.png' className='email-icon'/>marketing@futur-e.co.za</a>
          </div>

        </div>

       <div className='map-container'>
         <Map />
       </div>
          <div className='socials'>
            <a href='#'><img src='assets/facebook_icon.png'/></a>
            <a href='#'><img src='assets/instagram_icon.png'/></a>
            <a href='tel:0814385555'><img src='assets/call_icon.png'/></a>
            <a href='mailto:marjeting@futur-e.co.za' ><img src='assets/email_icon.png' className='email-icon'/></a>
          </div>
    </div>
  )
}

export default Contact