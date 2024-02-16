import React, { useState } from 'react'

const MultipleFormInput = () => {
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

const handleChange = (e)=>{
    const {name,value} = e.target ;
    setFormData(prev=>{
        return{
            ...prev,
            [name]:value
        }
    })
}



    const handleSubmit  =(e)=>{
        e.preventDefault()
        alert(`My name is ${formData.name} and my email is ${formData.email} and my message is ${formData.message}`)
    }
  return (
    <div>
        <form  onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder='Enter your name' id="name" name="name" value={formData.name} onChange={handleChange}/>
            <br />
            <label htmlFor="name">email:</label>
            <input type="email" id="name" placeholder='Enter your email' name="email" value={formData.email} onChange={handleChange}/>
            <br />
            <label htmlFor="name">Message:</label>
           <textarea name="message" id="message" cols="10" rows="10" placeholder='Enter your message' value={formData.message} onChange={handleChange}></textarea>
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default MultipleFormInput
