import React,{useState} from 'react'
import Modal from './Modal'


const AppliacantsTable=(props)=>{
    const{developers,handleStatusChange,handleStatusReject}=props

    const[showModal,setShowModal]=useState(false)
    const[selectApplicant,setSelectApplicant]=useState({})

    const handleClick=(ele)=>{
        setShowModal(true)
        setSelectApplicant(ele)
    }

    const hodeModal=()=>{
        setShowModal(false)
    }
    return (
        <div calssName="row">
         <table calssName="table table-light table-striped">
             <thead className="table-secondary">
                 <tr>
                     <th>Name</th>
                     <th>Technical SKills</th>
                     <th>Experience</th>
                     <th>Applied Date</th>
                     <th>update Application Status</th>
                 </tr>
             </thead>
             <tbody>
                 {developers.map(ele=>{
                     return <tr key={ele._id}>
                         <td>{ele.name}</td>
                         <td>{ele.skills}</td>
                         <td>{ele.experience}</td>
                         <td>{ele.createdAt.slice(0,10)}</td>
                         <td><button onClick={()=>handleStatusChange(ele)} className="btn btn-info bt-sm">view details</button></td>
                         <td>
                             {
                                 ele.status==='applied'?(
                                     <div><button onClick={()=>handleStatusChange(ele)} className="btn btn-success">shortlist</button>
                                     <button onClick={()=>handleStatusReject(ele)} className="btn btn-danger">Reject</button></div>
                                 ):(
                                     ele.status==='shortlisted'?
                                     <button className="btn btn-success">shortlisted</button>
                                     :<button className="btn btn-danger">Rejected</button>
                                 )
                             }
                         </td>
                            
                     </tr>

                 })
                 }
                {
                    showModal && <Modal  hideModal={hideModal} selectedApplicant={selectedApplicant}/>
                }
                     
                 
             </tbody>
         </table>
        </div>
    )
}





export default AppliacantsTable