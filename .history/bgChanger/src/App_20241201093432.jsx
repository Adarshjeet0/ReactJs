import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen m-0 p-0 flex justify-center" style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 bg-white rounded-xl p-2 gap-4' > 
          <div className='flex justify-center  gap-3 bg-red-500 rounded-xl px-2 ' >Red</div>
          <div className='flex justify-center  gap-3 bg-red-500 rounded-xl px-2 w-12' >Red</div>
          <div className='flex justify-center  gap-3 bg-red-500 rounded-xl px-2 w-12' >Red</div>
          
          
        </div>
      </div>
    </>
  )
}

export default App
