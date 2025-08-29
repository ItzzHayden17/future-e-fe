import './Home.css'
import React from 'react'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import Navbar from '../../components/Navbar/Navbar'
import ContactForm from '../../components/ContactForm/ContactForm'

const Home = () => {
  return (
    <div className='Home'>
        <div className='home-content'>
          <div className='intro inter'>At Futur-E Insurance Brokers, our clients are more than policies – they’re long-term
partners. We’re here to protect what matters most to you.</div>
          <div className='intro-text inter'></div>
            Established in 2001, Futur-E Insurance Brokers is a licensed financial services provider with the FSCA, serving clients nationwide. We specialise in personal,
            commercial, and niche insurance solutions, with a strong presence in the motor
            industry and long-standing relationships with leading insurers.
            Built on trust, honesty, and integrity, our mission is to provide cost-effective, tailored
            insurance solutions that protect what matters most to our clients. With dedicated
            service, expert advice, and fast claims turnaround, we ensure peace of mind for both
            individuals and businesses.
          <div>
            <button className='secondary'>Read more</button>
            <button className='primary'>Contact Us</button> 
          </div>

             <img src='assets/car_gear.png' alt='Banner Left' className='mobile_image'></img>

          <div className='socials'>
            <img src='assets/facebook_icon.png'></img>
            <img src='assets/instagram_icon.png'></img>
            <img src='assets/call_icon.png'></img>
            <img src='assets/email_icon.png' className='email-icon'></img>
          </div>
        </div>
        <div className='image-banner'>
          <img src="assets/homepage_banner_right.png"></img>
        </div>
    </div>
  )
}

export default Home