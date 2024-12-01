import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(16)
  // let counter = 5;
  const addValue = ()=>{
    set
    console.log("Value added ", counter);

  }
  return (
    <>
      
      <h1>Adarsh learning React</h1>
      <h2>Count {counter}</h2>
      <button onClick={addValue}>Add {counter}</button>
      <br />
      <button>Remove {counter}</button>
    </>
  )
}

export default App
