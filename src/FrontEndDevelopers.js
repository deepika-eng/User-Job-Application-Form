import React from 'react'
 import AppliacantsTable from './ApplicantsTable'


const FrontEndDevelopers=(props)=>{

    const{handleStatusChange,handleStatusReject,applicants}=props


    const frontenddevelopers=applicants.filter((applicant)=>{
        return applicant.jobTitle==='Front-End Developer'

    })
    return(
        <div>
            <h1>Front-End Developers-{frontenddevelopers.length}</h1>
            <h5>List of candidates applird for Front-End Developer job</h5>
            <AppliacantsTable developers={frontenddevelopers}
                   handleStatusChange={handleStatusChange}
                   handleReject={handleReject}
                
/>
        </div>
    )
}


export default FrontEndDevelopers