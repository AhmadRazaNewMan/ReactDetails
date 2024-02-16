import React, { useState } from "react";

const Form = () => {

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form action="">
        <label>
          Input Value:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <p>Input Value: {inputValue}</p>
      </form>
    </div>
  );
};

export default Form;
