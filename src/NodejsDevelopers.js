import React from 'react'
import AppliacantsTable from './ApplicantsTable'

import ApplicantsTable from './ApplicantsTable'

const NodejsDevelopers=(props)=>{
    const{handleStatusChange,handleReject,applicants}=props

  const nodejsdevelopers=applicants.filter((applicant)=>{
      return applicant.jobTitle==='Node.js Developer'
  })

    return (
        <div>
<h1>Node.js Developers-{nodejsdevelopers.length}</h1>
<h5>List of candidates applied for node.js developer job</h5>
<AppliacantsTable developers={nodejsdevelopers}
                   handleStatusChange={handleStatusChange}
                   handleReject={handleReject}
                
/>
        </div>
    )
}