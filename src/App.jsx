import { useState } from 'react'
import './App.css'
import Header from './componets/Header'
import NavBar from './componets/NavBar'
import { Outlet } from 'react-router-dom'
import Dashboard from './componets/Dashboard'
import SelectVehicle from './componets/SelectVehicle'

function App() {

  return (
    <div className='app-container'>
      <Dashboard/>
    </div>
  )
}

export default App
