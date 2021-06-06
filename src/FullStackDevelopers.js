import React from 'react'

import AppliacantsTable from './ApplicantsTable'

const FullStackDevelopers=(props)=>{

    const{handleStatusChange,handleStatusReject,applicants}=props


    const fullstackdevelopers=applicants.filter((applicant)=>{
        return applicant.jobTitle==='Full Stack Developer'

    })
    return(
        <div>
            <h1>Full Stack Developers-{fullstackdevelopers.length}</h1>
            <h5>List of candidates applird for Full Stack Developer job</h5>
            <AppliacantsTable developers={fullstackdevelopers}
                   handleStatusChange={handleStatusChange}
                   handleReject={handleReject}
                
/>
        </div>
    )
}


export default FullStackDevelopers