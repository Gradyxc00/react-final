import React, { useState } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Button from './Button'
import VehicleSpec from './VehicleSpec'
import VehicleOpt from './VehicleOpt'



const Dashboard = () => {

  const [activeComponent, setActiveComponent] = useState(null)
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  
  const handleVehicleSpecClick = () => {
    setActiveComponent('VehicleSpec')
  }

  const handleVehicleOptClick = () => {
    console.log('setting componet')
    setActiveComponent('VehicleOpt')
  }

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle)
  }

  return (
    <div>
      
      <div className='banner'>
        <Header />
      </div>

      <div className='dashboard-header'>
        <NavBar
            onVehicleSpecClick={handleVehicleSpecClick}
            onVehicleOptClick={handleVehicleOptClick}
            onVehicleSelect={handleVehicleSelect}
        />

      {/* what is the body content of my app */}


      <div className='dashboard-body'>
        {activeComponent === 'VehicleSpec' && <VehicleSpec selectedVehicle={selectedVehicle} />}
        {activeComponent === 'VehicleOpt' && <VehicleOpt selectedVehicle={selectedVehicle}/>}
        {/* <VehicleOpt selectedVehicle={selectedVehicle} /> */}
      </div>

      </div>

      {/* <Footer /> */}




    </div>
  )
}

export default Dashboard