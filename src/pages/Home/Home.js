import './Home.css'

const Home = (props) => {


  return (
    <div className='Home'>
        <div className='home-content'>
          <div className='intro inter'>At Futur-E Insurance Brokers, our clients are more than policies – they’re long-term partners. We’re here to protect what matters most to you.</div>
          <div className='intro-text inter'>
            Established in 2001, Futur-E Insurance Brokers is a licensed financial services provider with the FSCA, serving clients nationwide. We specialise in personal,
            commercial, and niche insurance solutions, with a strong presence in the motor
            industry and long-standing relationships with leading insurers.
            Built on trust, honesty, and integrity, our mission is to provide cost-effective, tailored
            insurance solutions that protect what matters most to our clients. With dedicated
            service, expert advice, and fast claims turnaround, we ensure peace of mind for both
            individuals and businesses.
            </div>
          <div className='buttons'>
            <button onClick={props.handleAboutButton} className='secondary'>Read more</button>
            <button className='primary' onClick={props.handleContactButton}>Contact Us</button> 
          </div>
          
          

             <img src='assets/car_gear.png' alt='Banner Left' className='mobile_image'></img>

          <div className='socials'>
            <a href='#'><img src='assets/facebook_icon.png'/></a>
            <a href='#'><img src='assets/instagram_icon.png'/></a>
            <a href='tel:0129975575'><img src='assets/call_icon.png'/></a>
            <a href='mailto:marketing@futur-e.co.za' ><img src='assets/email_icon.png' className='email-icon'/></a>
          </div>
        </div>
        <div className='image-banner'>
          <img src="assets/red_car.png"></img>
        </div>
    </div>
  )
}

export default Home