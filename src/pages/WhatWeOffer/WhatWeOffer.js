import './WhatWeOffer.css'
import React from 'react'

const WhatWeOffer = () => {
  return (
    <div className='WhatWeOffer'>
       <div className='offerings'>
         <h1>
            Specialised Insurance
        </h1>
        <p>
            •	Industry-specific solutions for unique risks<br/>
            •	Performance guarantees & professional indemnity<br/>
            •	Motor industry-focused cover
        </p>
        <h1>
            Commercial & Agricultural Insurance
        </h1>
        <p>
            •	Tailored cover for business assets & risks<br/>
            •	Contractors, plant & liability insurance<br/>
            •	Cyber liability & directors’/officers’ cover
        </p>
        <h1>
            Personal Insurance
        </h1>
        <p>
            •	Homeowners & household contents cover<br/>
            •	Vehicle, caravan & trailer insurance<br/>
            •	Watercraft & all-risks protection

        </p>
       </div>

       <div className='services'>
        <h1>
            Our services
        </h1>
        <p>
            •	Research on and provide updated values if and where available, with consent from policyholders.<br/>
            •	Conduct post-loss surveys and make risk improvement recommendations.<br/>
            •	Aiding with contact information for building valuation specialists and arranging meetings for our clients.<br/>
            •	Enabling meetings for the client with specialist valuators to establish appropriate values on buildings and high-tech equipment, and other valuables.<br/>
            •	Looking up suppliers and repairers on behalf of clients to assist with the valuation of goods to be insured where this is not provided for by an Insurer.<br/>
            •	Assistance with Risk Management.<br/>
            •	Performing informal site surveys.

        </p>
       </div>
                 <div className='socials'>
            <a href='#'><img src='assets/facebook_icon.png'/></a>
            <a href='#'><img src='assets/instagram_icon.png'/></a>
            <a href='tel:0814385555'><img src='assets/call_icon.png'/></a>
            <a href='mailto:marjeting@futur-e.co.za' ><img src='assets/email_icon.png' className='email-icon'/></a>
          </div>
    </div>
  )
}

export default WhatWeOffer