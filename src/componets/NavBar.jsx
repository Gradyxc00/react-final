import React, {useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import SelectVehicle from './SelectVehicle'
import Button from './Button'
import VehicleSpec from './VehicleSpec'
import VehicleOpt from './VehicleOpt'

export default function NavBar() {
  const [activeComponet, setActiveComponet] = useState(null)

  const handleVehicleSpecClick = () => {
    setActiveComponet('VehicleSpec')
  }

  const handleVehicleOptClick = () => {
    setActiveComponet('VehicleOpt')
  }

  return (
    <>
      <div className='nav-bar'>
        <SelectVehicle/>
        <Button 
          label='Vehicle Specifications' 
          onClick={handleVehicleSpecClick}
        />

        <Button 
          label='Vehicle Options'
          onClick={handleVehicleOptClick}
        />
        {activeComponet === 'vehicleSpec' && <VehicleSpec/>}
        {activeComponet === 'vehicleOpt' && <VehicleOpt/>}
      </div>
    </>
  )
}
