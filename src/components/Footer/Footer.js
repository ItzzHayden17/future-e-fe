import './Footer.css'
import React from 'react'

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className='Footer'>
        `{year} Futur-e Insurance Brokers | All Rights Reserved`
    </div>
  )
}

export default Footer