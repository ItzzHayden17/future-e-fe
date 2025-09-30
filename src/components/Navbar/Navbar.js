import './Navbar.css'
import React from 'react'

const Navbar = ({ activePage, onClick }) => {
  return (
    <div className='Navbar source-serif'>
      <div>
        <img src="/assets/white_e_logo.png" alt="Logo" className='logo' />
      </div>
      <div className='nav-links'>
        {activePage === "home" ? null : <h1 onClick={() => onClick("home")}>Home</h1>}
        {activePage === "about-us" ? null : <h1 onClick={() => onClick("about-us")}>About Us</h1>}
        {activePage === "contact-us" ? null : <h1 onClick={() => onClick("contact-us")}>Contact Us</h1>}
        {activePage === "what-we-offer" ? null : <h1 onClick={() => onClick("what-we-offer")}>What we offer</h1>}
        {activePage === "documents" ? null : <h1 onClick={() => onClick("documents")}>Documents</h1>}
      </div>
    </div>
  )
}

export default Navbar
