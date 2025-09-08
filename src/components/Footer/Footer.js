import './Footer.css'
import React from 'react'

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className='Footer'>
        <div>{year} Futur-e Insurance Brokers | All Rights Reserved </div>
        <div>FSP : 16445</div>
    </div>
  )
}

export default Footer