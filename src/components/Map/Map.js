import React from 'react'
import './Map.css'

const Map = () => {
  return (
    <div className='Map'>
          <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3591.524008922163!2d28.291173975402284!3d-25.81927297731568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDQ5JzA5LjQiUyAyOMKwMTcnMzcuNSJF!5e0!3m2!1sen!2sza!4v1754506423062!5m2!1sen!2sza" 
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
    </div>
  )
}
export default Map