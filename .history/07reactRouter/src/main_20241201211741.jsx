import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom';
import App from './App.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout

  }
]) 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider/>
  </StrictMode>,
) 