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
          className='outline-none px-4' style={{backgroundColor: "red"}}
          >Red</button>
          <button
          className='outline-none px-4' style={{backgroundColor: red}}
          >Red</button>
          <button
          className='outline-none px-4' style={{backgroundColor: red}}
          >Red</button>
          
          
          
        </div>
      </div>
    </>
  )
}

export default App
