import React, { useState } from 'react'

const DropDown = () => {
    const [selectedOption, setSelectedOption] = useState('option-1');
    const handleToggle = (e)=>{
        setSelectedOption(e.target.value)
    }
  return (
    <div>
        <label htmlFor="dropdown">Choose an option:</label>
        <select name="dropdownsection" id="dropdown" value={setSelectedOption} onChange={handleToggle}>
            <option value="option-1">Option-1</option>
            <option value="option-2">Option-2</option>
            <option value="option-3">Option-3</option>

        </select> <br />
        <p>Selected option: {selectedOption}</p>
      
    </div>
  )
}

export default DropDown
