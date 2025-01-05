import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import SelectVehicle from './SelectVehicle'

export default function NavBar(props) {
  return (
    <>
      <div className='nav-bar'>
        <SelectVehicle/>
        <NavLink to={'/vehicleSpecs'}>Vehicle Specs</NavLink>
        <NavLink to={'/vehicleOpt'}>Vehicle Options</NavLink>
      </div>
    </>
  )
}
