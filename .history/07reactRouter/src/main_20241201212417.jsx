import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    chileder:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element:<About />
      }
    ]

  }
]) 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
) 
