import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/HAbout';

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
