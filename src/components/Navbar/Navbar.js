import './Navbar.css'
import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar source-serif'>
        <img src="/assets/white_e_logo.png" alt="Logo" className='logo' />
        {/* <h1>Home</h1> */}
        <h1>About Us</h1>
        <h1>Contact Us</h1>
        <h1></h1>
    </div>
  )
}

export default Navbar