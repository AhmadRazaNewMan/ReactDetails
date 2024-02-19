import React, { useState } from 'react'

const ValidInput = () => {
  const [input,setInput] = useState("")
  const [errorMessage,setErrorMessage] = useState(null)
  const handleChange = (e)=>{
    const value = e.target.value ;
    setInput(value)
    if(value.length < 5){
        setErrorMessage("Name must be at least 5 characters")
    }else{
        setErrorMessage(null)
    }
    
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(input.length < 5){
        alert("Name must be at least 5 characters")
    }
    else{

    alert(`My name is ${input}`)
    setInput("")
    

  }
  
}
  
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name" >Name:
        <input type="text" value={input} onChange={handleChange} name="name" id="name"/></label><br/><br/>
        {errorMessage && <p className='error' style={{color:"red"}}>{errorMessage}</p>}
        <button type='submit'>Submit</button>
         
      </form>
      
    </div>
  )
}

export default ValidInput
