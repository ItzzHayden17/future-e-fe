import React from 'react'
import './Features.css'
const Features = (props) => {
  return (
    <div className='Features'>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
  )
}

export default Features