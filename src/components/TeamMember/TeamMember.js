import React from 'react'
import './TeamMember.css'
const TeamMember = (props) => {
  return (
    <div className='TeamMember'>
        <img src={props.img}></img>
        <h2>{props.name}</h2>
    </div>
  )
}

export default TeamMember