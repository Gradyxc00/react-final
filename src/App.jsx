import { useState } from 'react'
import './App.css'
import Header from './componets/Header'
import NavBar from './componets/NavBar'
import { Outlet } from 'react-router-dom'
import Dashboard from './componets/Dashboard'

function App() {

  return (
    <>
      <Dashboard/>
    </>
  )
}

export default App
