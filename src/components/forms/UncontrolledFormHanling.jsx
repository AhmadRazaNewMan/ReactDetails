import React, { useRef } from 'react'

const UncontrolledFormHanling = () => {
    const inputRef = useRef();
    const selectRef = useRef();
    const checkboxRef = useRef();
const handleSubmit = (e)=>{
    
    e.preventDefault()
    console.log(inputRef.current.value)
    console.log(selectRef.current.value)
    console.log(checkboxRef.current.checked)
}
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">
            <p>Name:</p>
            <input type="text" ref={inputRef} />
        </label>
        <label htmlFor="options">
            <p>What is your foovrite Color:</p>
            <select name="options" id="options" ref={selectRef}>
                <option value="red" className="value">Red</option>
                <option value="Green" className="value">Green</option>
                <option value="blue" className="value">Blue</option>
            </select>
        </label>
        <label htmlFor="checkbox">
            <p>Do you Like React ? </p>
            <input type="checkbox" ref={checkboxRef} />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UncontrolledFormHanling
