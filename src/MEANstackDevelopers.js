import React from 'react'

import AppliacantsTable from './ApplicantsTable'

const MEANStackDevelopers=(props)=>{

    const{handleStatusChange,handleStatusReject,applicants}=props


    const meanstackdevelopers=applicants.filter((applicant)=>{
        return applicant.jobTitle==='MEAN stack Developer'

    })
    return(
        <div>
            <h1>MEAN Stack Developers-{meanstackdevelopers.length}</h1>
            <h5>List of candidates applird for MEAN Stack Developer job</h5>
            <AppliacantsTable developers={meanstackdevelopers}
                   handleStatusChange={handleStatusChange}
                   handleReject={handleReject}
                
/>
        </div>
    )
}


export default MEANStackDevelopers