import React from 'react'
import './Documents.css'

const Documents = () => {
  return (
    <div>
        <div className='Documents'>
        <a href='assets/documents/ComplaintsPolicy.pdf' download={"ComplaintsPolicy.pdf"}> Complaints Policy</a>
        <a href='assets/documents/PAIAFORM-3Outcomeofrequestandfeespayable.pdf' download={"PAIAFORM-3Outcomeofrequestandfeespayable.pdf"}> Outcome Of Request And Fees Payable</a>
        <a href='assets/documents/PAIAFORM1-Requestforcopyofguide.pdf' download={"PAIAFORM1-Requestforcopyofguide.pdf"}> PAIA form 1 - Request For Copy Of Guide</a>
        <a href='assets/documents/PAIAFORM2-Requestforaccesstorecord.pdf' download={"PAIAFORM2-Requestforaccesstorecord.pdf"}>PAIA form 2 - Request For Access To Record</a>
                <a href='assets/documents/PAIA FORM - 3 Outcome of request and fees payable.pdf' download={"PAIA FORM - 3 Outcome of request and fees payable.pdf"}>PAIA FORM - 3 Outcome of request and fees payable</a>
        <a href='assets/documents/GeneralWebsiteTermsOfService.pdf' download={"GeneralWebsiteTermsOfService.pdf"}> General Website Terms Of Service</a>
        <a href='assets/documents/POPI.pdf' download={"POPI.pdf"}> POPI</a>
        <a href='assets/documents/WebsiteDisclaimer.pdf' download={"WebsiteDisclaimer.pdf"}> Website Disclaimer</a>
    
    </div>
      <div className='policy-note'>
        <b>Conflict of Interest Management Framework and Policy</b>
        <p>
          Futur-E Sportsure (Pty) Ltd has adopted and implemented a Conflict-of-Interest Management Policy that complies with the provisions of the FAIS Act.
          You can email admin@futur-e.co.za to request a copy of the FSP’s Conflict-of-Interest Management Policy
        </p>

        <b>TCF Policy</b>
        <p>
          TCF is a set of principles introduced by the Financial Sector Conduct Authority (FSCA) to aid and underpin existing financial services legislation aimed at the protection of consumers and clients.
        </p>
        <p>
          Futur-e Sportsure (Pty) Ltd values its relationship with its clients and acknowledges that without any clients, it would not have a business.  The TCF principles are embedded in the culture of the FSP, and it continuously strives to enhance the quality of its service offering to clients and through its interaction with contracted product suppliers.
        </p>
      </div>
    </div>
  )
}

export default Documents