import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen m-0 p-0 flex justify-center" style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 bg-white rounded-xl px-3 py-2 gap-4 shadow-2xl' > 
          <button
          className='outline-none px-4 rounded-lg shadow-xl' style={{backgroundColor: "red"}}
          >Red</button>
          <button
          className='outline-none px-4 rounded-lg shadow-xl' style={{backgroundColor: "green"}}
          >Green</button>
          <button
          className='outline-none px-4 rounded-lg shadow-xl' style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          className='outline-none px-4 rounded-lg shadow-xl' style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button
          className='outline-none px-4 rounded-lg shadow-xl text-white' style={{backgroundColor: "black"}}
          >Black</button>
          <button
          className='outline px-4 rounded-lg shadow-xl' style={{backgroundColor: "white"}}
          >White</button>
          <button
          className='outline-none px-4 rounded-lg shadow-xl' style={{backgroundColor: "grey"}}
          >Grey</button>
          <button
          className='outline-none px-4 rounded-lg shadow-xl' style={{backgroundColor: "olive"}}
          >Olive</button>
          
          
          
        </div>
      </div>
    </>
  )
}

export default App