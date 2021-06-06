import React from 'react'

const Modal=({selectedApplicant :applicant,hideModal})=>{
    return (
<div className="modal-dialog-centered position-fixed top-50 start-50 translate-middle">
    
  <div className="modal-dialogue">
  
  <div className="modal-content">
      <div className="modal-header">
          <h2 className="modal-title>{applicant.name} profile</h2>

      </div>
      <div className ="modal-body">
      <table className="table table-striped">
          <tr><th> Contact Number </th><td>{applicant.phone}</td></tr>
          <tr><th>Email</th><td>{applicant.email}</td></tr>
          <tr><th>skills</th>
          {
              applicant.skills.split(',').map(ele=>{
                  return <tr>
                      <td>{ele}</td>
                      </tr>
              })
          }
          </tr>
          <tr><th>Experience</th><td>{applicant.experience}</td></tr>
      </table>
       </div>
       <div className="modal-footer">
           <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick={hideModal}>close</button>
           </div>

   </div>

  </div>

    )
}




export default Modal