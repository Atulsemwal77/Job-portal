import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <p>footer</p>
    </>

  )
}

export default App