import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen m-0 p-0 flex justify-center" style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 bg-white rounded-xl px-3 py-2 gap-4' > 
          <button
          className='outline-none px-4 rounded-lg' style={{backgroundColor: "red"}}
          >Red</button>
          <button
          className='outline-none px-4 rounded-lg' style={{backgroundColor: "green"}}
          >Red</button>
          <button
          className='outline-none px-4 rounded-lg' style={{backgroundColor: "blue"}}
          >Red</button>
          <button
          className='outline-none px-4 rounded-lg' style={{backgroundColor: "yellow"}}
          >Red</button>
          <button
          className='outline-none px-4 rounded-lg text-white' style={{backgroundColor: "black"}}
          >Red</button>
          <button
          className='outline-1 px-4 rounded-lg' style={{backgroundColor: "white"}}
          >Red</button>
          <button
          className='outline-none px-4 rounded-lg' style={{backgroundColor: "grey"}}
          >Red</button>
          <button
          className='outline-none px-4 rounded-lg' style={{backgroundColor: "olive"}}
          >Red</button>
          
          
          
        </div>
      </div>
    </>
  )
}

export default App
