import React from 'react'

export default function VehicleOpt({selectedVehicle}) {
  console.log('VehicleOpt component rendered', selectedVehicle);
  
  return (
    <div className='vehicle-opt-styling'>
      {selectedVehicle && (
        <div>
          <h1>Selected Vehicle Options</h1>
          <p>Vehicle Type: {selectedVehicle.class}</p>
          <p>Drive: {selectedVehicle.drive}</p>
          <p>Fuel Type: {selectedVehicle.fuel_type}</p>
          <p>Cylinders: {selectedVehicle.cylinders}</p> 
        </div>
      )}

    </div>
  )
}
