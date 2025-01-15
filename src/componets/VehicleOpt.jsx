import React from 'react'
import SelectVehicle from './SelectVehicle'

export default function VehicleOpt() {
  const [SelectedVehicle, setSelectedVehicle] = React.useState(null)
  
  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle)
  }
  
  return (
    <div>
      <SelectVehicle onVehicleSelect = {handleVehicleSelect}/>
      {SelectedVehicle && (
        <div>
          <h1>Selected Vehicle Options</h1>
          <p>Drive: {SelectedVehicle.drive}</p>
          <p>Fuel Type: {SelectedVehicle.fuel}</p>
        </div>
      )}

    </div>
  )
}
