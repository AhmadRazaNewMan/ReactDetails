import React, { useState } from 'react';

const data = [
  { id: 1, q: "q1", a: "answer1" },
  { id: 2, q: "q2", a: "answer2" },
  { id: 3, q: "q3", a: "answer3" }
];

const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [multipleSelection,setMultipleSelelection] = useState(false)
  const[multiple,setMultiple] = useState([])
  const handleToggle = (id)=>{
    let newQuestionList = [...multiple] ;
    const findIndexOfQuestion = newQuestionList.indexOf(id);
     if (findIndexOfQuestion === -1){
         newQuestionList.push(id)
         setMultiple(newQuestionList)
     }
     else{
         newQuestionList.splice(findIndexOfQuestion,1)
         setMultiple(newQuestionList)
       
     }
         

    
  }
  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion===id?null:id);
  };
  return (
    <div>
      Hello world! This is an accordion.
      <button onClick={() => setMultipleSelelection(!multipleSelection)}>Enable multiple Selection</button>
      {data.map((item) => (
        <div key={item.id} style={{ border: "2px solid black" }} onClick={
          multipleSelection?()=>handleToggle(item.id):()=>toggleAccordion(item.id)
        }>
          {item.q}
        {multipleSelection ? multiple.indexOf(item.id)!==-1 ? <p>{item.a}</p>:null : openAccordion === item.id ? <p>{item.a}</p> : null}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
