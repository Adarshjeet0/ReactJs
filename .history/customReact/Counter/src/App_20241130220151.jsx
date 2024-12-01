import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(16)
  // let counter = 5;
  const addValue = ()=>{
    counter = counter+1
    if(counter>20){
      counter = 20;
    }
    setCounter(counter)
    // console.log("Value added ", counter);

  }
  const removeValue = ()=>{
    counter = cocunter -1;
    if(counter<0){
      counter = 0;
    }
    setCounter(counter)
    // console.log("Value added ", counter);

  }
  return (
    <>
      
      <h1>Adarsh learning React</h1>
      <h2>Count {counter}</h2>
      <button onClick={addValue}>Add {counter}</button>
      <br />
      <button onClick={removeValue}>Remove {counter}</button>
    </>
  )
}

export default App
