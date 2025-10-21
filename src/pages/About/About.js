import './About.css'
import Features from '../../components/Features/Features'
import TeamMember from '../../components/TeamMember/TeamMember'
const About = (props) => {
  return (
    <div className='About'>
        <div className='about-futur-e'>
            <img src='assets/black_logo_with_text.png'></img>
            <div className='about-text'>
                <h1>About Futur-E</h1>
                <p>
                  Founded in 2001, Futur-E Insurance Brokers has grown into a trusted name in the short-term insurance industry. Part of Futur-e Insurance Brokers’ success comes from our dedicated and loyal staff, many of whom have been with the company for a number of years. Their commitment ensures consistency, personal service, and long-term client relationships.We have also built strong, longstanding partnerships with leading insurers in the marketplace, allowing us to offer clients reliable and competitive insurance solutions.Our head office is based in Pretoria East, but our services extend far beyond—we proudly serve clients nationwide across South Africa.
                <h3>Our Strengths</h3><br/>
                •	Experienced Leadership – decades of expertise in the insurance industry.<br/>
                •	Loyal Team – dedicated staff who have been with the company for many years.<br/>
                •	Trusted Partnerships – long-standing relationships with leading insurers.<br/>
                •	Nationwide Reach – while our head office is in Pretoria East, we proudly serve clients across South Africa.<br/><br/>

                  At Futur-E Insurance Brokers, we combine experience, personal service, and integrity to deliver tailored insurance solutions that protect what matters most to our clients.<br/>
                  <h2>Meet Our Founder – Leon Niemann</h2><br/>
                  <h3>Managing Director, Futur-E Insurance Brokers</h3><br/>
                  With more than 36 years in the insurance industry, Leon Niemann brings a wealth of knowledge and leadership to Futur-E.<br/><br/>
                •	Started his career at Santam Insurance Ltd.<br/>
                •	Joined First Link (previously First Bowring) in 1992.<br/>
                •	Promoted to manage his own branch by 1998.<br/>
                •	Founded Futur-E Insurance Brokers in 2001.<br/><br/>
                Leon’s vision has always been to provide clients with personalised, trustworthy, and cost-effective insurance solutions. His hands-on leadership style, together with a dedicated and loyal team, has positioned Futur-E as a respected brokerage serving clients across South Africa.

                </p>
            </div>
        </div>
        <div className='features'>
            <Features image={"/assets/money-icon.png"} title={"Trust "} description={"Always acting in your best interest."} />
            <Features image={"/assets/diamond-icon.png"} title={"Honesty "} description={"Clear, transparent advice and communication."} />
            <Features image={"/assets/change-icon.png"} title={"Integrity "} description={"Doing the right thing, every time."} />
            <Features image={"/assets/id-icon.png"} title={"Personal Service "} description={"Tailored solutions and dedicated support."} />
        </div>
        <div className='vision-mission'>
          <div className='vision'>
            <h1>Vision</h1>
            <p>
              •	To ensure that our constantly growing client base only enjoy the best products and service for their specific needs<br/>
              •	To ensure that our loyal and qualified staff remains motivated by creating a healthy working environment<br/>
              •	We value our longstanding healthy relationships with insurers<br/>
              •	With honesty and integrity we treat our clients fairly

            </p>
          </div>
          <div className='divide-line'></div>
          <div className='mission'>
            <h1>Mission</h1>
            <p>
              To provide comprehensive cost effective Short-term Insurance Cover with added benefits on a personalized basis to companies and individuals.  We are confident that our advice to our clients will allow them to make the best possible decisions for their business or personal insurance.
            </p>
          </div>
        </div>
        <button className='primary' onClick={props.handleContactButton}>Call me Back</button> 
        {/* <h1 className='team-header'>Meet the Team</h1>
        <div className='team'>
          <TeamMember img={"/assets/member.png"} name={"Belinda Mokoena"} />
          <TeamMember img={"/assets/member.png"} name={"Belinda Mokoena"} />
          <TeamMember img={"/assets/member.png"} name={"Belinda Mokoena"} />
          <TeamMember img={"/assets/member.png"} name={"Belinda Mokoena"} />
        </div>
          <div className='socials'>
            <a href='#'><img src='assets/facebook_icon.png'/></a>
            <a href='#'><img src='assets/instagram_icon.png'/></a>
            <a href='tel:0129975575'><img src='assets/call_icon.png'/></a>
            <a href='mailto:marketing@futur-e.co.za' ><img src='assets/email_icon.png' className='email-icon'/></a>
          </div> */}
    </div>
  )
}

export default About