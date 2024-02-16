import {useState} from 'react'

const Counter = () => {
    const [counter,setCounter]  = useState(0)
    const increment = () => setCounter(counter + 1)
    const decrement = ()=>{
      if(counter > 0){
        setCounter(counter - 1)
      }
      else{
        alert("Counter can't be less than 0")
      }
    }
  
  return (
    <div>
      <h1>Number Incrementer and decrementer using useState</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
