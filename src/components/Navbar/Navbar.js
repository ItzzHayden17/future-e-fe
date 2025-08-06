import './Navbar.css'
import React, { use } from 'react'
import { useState } from 'react'

const Navbar = (props) => {

  const [activePage, setActivePage] = useState("home");

  function handleClick(page) {
    props.onClick(page);
    setActivePage(page);
  }

  return (
    

    <div className='Navbar source-serif'>
      <div>
        <img src="/assets/white_e_logo.png" alt="Logo" className='logo' />
      </div>
      <div className='nav-links'>
        {activePage === "home" ? <></> : <h1 onClick={() => handleClick("home")}>Home</h1>}
        {activePage === "about-us" ? <></> : <h1 onClick={() => handleClick("about-us")}>About Us</h1>}
        {activePage === "contact-us" ? <></> : <h1 onClick={() => handleClick("contact-us")}>Contact Us</h1>}

        
        
        <h1></h1>
        </div>
    </div>
  )
}

export default Navbar