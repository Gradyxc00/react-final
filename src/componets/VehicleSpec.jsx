import React from 'react'
import SelectVehicle from './SelectVehicle'

export default function VehicleSpec({selectedVehicle}) {
  return (
    <div>
      {selectedVehicle && (
        <div>
          <h1>Selected Vehicle Specifications</h1>
          <p>City Miles Per Gallon: {selectedVehicle.city_mpg}</p>
          <p>Highway Miles Per Gallon: {selectedVehicle.highway_mpg}</p>
          <p>Combination Miles Per Gallon: {selectedVehicle.combination_mpg}</p>
          <p></p>
        </div>
      )}

    </div>
  )
}
