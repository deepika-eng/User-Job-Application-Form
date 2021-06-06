import React,{useState} from 'react'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'

function Form(props){
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[contact,setContact]=useState('')
    const[jobTitle,setJobTitle]=useState('')
    const[experience,setExperience]=useState('')
    const[skills,setSkills]=useState('')
    const[formErrors,setFormErrors]=useState({})


     const errors={}
         
        const handleChange=(e)=>{
            if(e.target.name==="name"){
                setName(e.target.value)
            }else if(e.target.name==="email"){
                setEmail(e.target.name)
            }else if(e.target.name==="contact"){
                setContact(e.target.value)
            }else if(e.target.name==="jobTitle"){
                setJobTitle(e.target.value)
            }else if(e.target.name==="experience"){
                setExperience(e.target.value)
            }else if(e.target.name==="skills"){
                setSkills(e.target.value)
            }
            
        }

         const runValidations=()=>{
             //name
             if(name.trim().length ===0){
                 errors.name='name cannot be blank'
             }
             //email
              if(email.trim().length===0){
                  errors.email='email cannot be blank'
              }
         }
       const handleSubmit=(e)=>{
           e.preventDefault()

           runValidations()
           if(Object.keys(errors).length===0){
               setFormErrors({})
               const formData={
                   id:uuidv4(),
                name:name,
                email:email,
                contact:contact,
                skills:skills,
                jobTitle: jobTitle,
                experience: experience
            }
              console.log(formData)
            axios.post('http://dct-application-form.herokuapp.com/users/application-form',formData)

            .then((response)=>{
                setName('')
                setEmail('')
                setContact('')
                setSkills('')
                setJobTitle('')
                setExperience('')
                alert('Application form submitted successfully')
            })

                   .catch((err)=>{
                       alert(err.message)
                   })
           }
         



       }
    return (
        <div>
         <form onSubmit={handleSubmit}>
             <label>  Full name  </label>
             <input  type="text" value={name} name="name" placeholder="name"onChange={handleChange}/>
                  {formErrors.name && <span>{formErrors.name}</span>} <br/>
             <label>  Email address  </label>
             <input type="text" value={email} name="email" placeholder="example@gmail.com" onChange={handleChange}/>
                {formErrors.email && <span>{formErrors.email}</span>}       <br/>
             <label>  Contact number  </label>
             <input type="text" value={contact} name="contact" placeholder="+91 9003533372"  onChange={handleChange}/>
                {formErrors.phone && <span>{formErrors.phone}</span>} <br/>
             <label>  Applying for Job:  </label> 
             <select value={jobTitle} name="jobTitle" onChange={handleChange}>
                 <option value=""> select job</option>
                 <option value="Front-End Developer">Front-End Developer</option>
                 <option value="Node.js Developer">Node.js Developer</option>
                 <option value="MEAN Stack Developer">MEAN Stack Developer</option>
                 <option value="FULL Stack Developer">FULL Stack Developer</option>

             </select> <br/>
             <label>  Experience  </label> 
             <input type="text" value={experience} name="experience" placeholder="experiencr(2 yerars,3 months)" onChange={handleChange}/> <br/>
             <label >  Technical skills  </label>
             <textarea value={skills} name="skills" placeholder="Technical skills(eg:html,react)" onChange={handleChange}></textarea> <br/> <br/>
             <input type="submit" value="send Apllication"/>
         </form>
        </div>
    )
}


export default Form