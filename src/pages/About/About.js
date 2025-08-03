import './About.css'
import Features from '../../components/Features/Features'
import React from 'react'
import TeamMember from '../../components/TeamMember/TeamMember'
const About = () => {
  return (
    <div className='About'>
        <div className='about-futur-e'>
            <img src='assets/black_logo_with_text.png'></img>
            <div className='about-text'>
                <h1>About Futur-e</h1>
                <p>Text text text text text text text text text textText text text text text text text text text textText text text text text text text text text textText text text text text text text text text textText text text text text text text text text textText text text text text text text text text textText text text text text text text text text text</p>
            </div>
        </div>
        <div className='features'>
            <Features image={"/assets/money-icon.png"} title={"Headline"} description={"Text text text text text text te"} />
            <Features image={"/assets/diamond-icon.png"} title={"Headline"} description={"Text text text text text text te"} />
            <Features image={"/assets/change-icon.png"} title={"Headline"} description={"Text text text text text text te"} />
            <Features image={"/assets/id-icon.png"} title={"Headline"} description={"Text text text text text text te"} />
        </div>
        <div className='vision-mission'>
          <div className='vision'>
            <h1>Vision</h1>
            <p>Text text text text text text text text text textText text text text text text text text text textText text text tex</p>
          </div>
          <div className='divide-line'></div>
          <div className='mission'>
            <h1>Mission</h1>
            <p>Text text text text text text text text text textText text text text text text text text text textText text text tex</p>
          </div>
        </div>
        <button>Call me back</button>
        <h1 className='team-header'>Meet the Team</h1>
        <div className='team'>
          <TeamMember img={"/assets/member.png"} name={"Belinda Mokoena"} />
          <TeamMember img={"/assets/member.png"} name={"Belinda Mokoena"} />
          <TeamMember img={"/assets/member.png"} name={"Belinda Mokoena"} />
          <TeamMember img={"/assets/member.png"} name={"Belinda Mokoena"} />
        </div>
            <div className='socials'>
            <img src='assets/facebook_icon.png'></img>
            <img src='assets/instagram_icon.png'></img>
            <img src='assets/call_icon.png'></img>
            <img src='assets/email_icon.png'></img>
          </div>
    </div>
  )
}

export default About