import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Outlet} from './react'
function Layout() {
  return (
    <>
      <Header/>
      <Footer/>
    </>
  )
}

export default Layout