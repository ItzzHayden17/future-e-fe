import './Navbar.css'
import React, { use } from 'react'
import { useState } from 'react'
const Navbar = (props) => {

  function handleClick(page) {
    props.onClick(page);
  }

  return (
    

    <div className='Navbar source-serif'>
        <img src="/assets/white_e_logo.png" alt="Logo" className='logo' />
        <h1 onClick={() => handleClick("home")}>Home</h1>
        <h1 onClick={() => handleClick("about-us")}>About Us</h1>
        <h1 onClick={() => handleClick("contact-us")}>Contact Us</h1>
        <h1></h1>
    </div>
  )
}

export default Navbar