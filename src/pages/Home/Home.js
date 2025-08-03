import './Home.css'
import React from 'react'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import Navbar from '../../components/Navbar/Navbar'
import ContactForm from '../../components/ContactForm/ContactForm'

const Home = () => {
  return (
    <div className='Home'>
        <div className='home-content'>
          <div className='intro inter'>Text text text,<br/>text text,<br/>text</div>
          <div className='intro-text inter'>Text text text text text text text text <br/>text text Text text text text text text</div>
          <div>
            <button className='secondary'>Read more</button>
            <button className='primary'>Contact Us</button> 
          </div>
          <div className='socials'>
            <img src='assets/facebook_icon.png'></img>
            <img src='assets/instagram_icon.png'></img>
            <img src='assets/call_icon.png'></img>
            <img src='assets/email_icon.png'></img>
          </div>
          <div className='copyright'>2025    Futur-e</div>
        </div>
        <div className='image-banner'>
          <img src="assets/homepage_banner_right.png"></img>
        </div>
    </div>
  )
}

export default Home