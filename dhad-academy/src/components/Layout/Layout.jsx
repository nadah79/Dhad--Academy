import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../Top-btn/ScrollToTop'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <ScrollToTop/>
    <Footer/>
      
    </>
  )
}

export default Layout
