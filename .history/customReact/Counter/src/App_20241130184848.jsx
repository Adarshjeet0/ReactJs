import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter = 5;
  return (
    <>
      
      <h1>Adarsh learning React</h1>
      <h2>Count {counter}</h2>
      <button onClick>Add</button>
      <br />
      <button>Remove</button>
    </>
  )
}

export default App
