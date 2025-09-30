import React from 'react'
import './Documents.css'

const Documents = () => {
  return (
    <div className='Documents'>
        <a href='assets/documents/ComplaintsPolicy.pdf' download={"ComplaintsPolicy.pdf"}> Complaints Policy</a>
        <a href='assets/documents/OutcomeOfRequestAndFeesPayable.pdf' download={"OutcomeOfRequestAndFeesPayable.pdf"}> OutcomeOfRequestAndFeesPayable</a>
        <a href='assets/documents/RequestForCopyOfGuide.pdf' download={"RequestForCopyOfGuide.pdf"}> RequestForCopyOfGuide</a>
        <a href='assets/documents/RequestForAccessToRecord.pdf' download={"RequestForAccessToRecord.pdf"}> RequestForAccessToRecord</a>
        <a href='assets/documents/GeneralWebsiteTermsOfService.pdf' download={"GeneralWebsiteTermsOfService.pdf"}> GeneralWebsiteTermsOfService</a>
        <a href='assets/documents/PAIANotice31August2025.pdf' download={"PAIANotice31August2025.pdf"}> PAIANotice31August2025</a>
        <a href='assets/documents/PAIA-REQUEST-FORM.pdf' download={"PAIA-REQUEST-FORM.pdf"}> PAIA-REQUEST-FORM</a>
        <a href='assets/documents/POPI.pdf' download={"POPI.pdf"}> POPI</a>
        <a href='assets/documents/WebsiteDisclaimer.pdf' download={"WebsiteDisclaimer.pdf"}> WebsiteDisclaimer</a>

    </div>
  )
}

export default Documents