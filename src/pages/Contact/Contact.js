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
    </div>
  )
}

export default Contact