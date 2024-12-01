import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-700 p-4 rounded-2xl text-black">Tailwind Test</h1>

      <Card userName=""/>
      <Card />
    </>
  )
}

export default App
