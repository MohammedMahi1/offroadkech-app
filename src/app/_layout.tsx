import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/ui/nav-bar'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>        
    </div>
  )
}

export default Layout