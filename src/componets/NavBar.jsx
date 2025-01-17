import React, {useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Button from './Button'
import SelectVehicle from './SelectVehicle'
import VehicleSpec from './VehicleSpec'
import VehicleOpt from './VehicleOpt'


export default function NavBar({onVehicleSpecClick, onVehicleOptClick, onVehicleSelect}) {
  


  return (
    <>
      <div className='nav-bar'>
      <SelectVehicle onVehicleSelect={onVehicleSelect}/>
        <Button 
          label='Vehicle Specifications' 
          onClick={onVehicleSpecClick}
        />

        <Button 
          label='Vehicle Options'
          onClick={() => {
            // console.log('Vehicle Options button clicked');
            onVehicleOptClick();
          }}
        />
  
      </div>
    </>
  )
}
