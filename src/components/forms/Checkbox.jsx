import React, { useState } from 'react'

const Checkbox = () => {
    const  [isChecked ,setIsChecked] = useState(false)
    const handleToggle = ()=>{
        setIsChecked(prev=>!prev)
        
    }
    
  return (
    <div>
        <label htmlFor="color">blue</label>
        <input type="checkbox" name='checkbox' onChange={handleToggle} value={isChecked}  checked ={isChecked}/> <br />
        {isChecked && <p>Blue is selected</p>}

      
    </div>
  )
}

export default Checkbox
