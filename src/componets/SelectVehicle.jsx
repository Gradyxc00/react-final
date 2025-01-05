import React, {useState, useEffect} from 'react'
import './SelectVehicle.css'
// import Select from 'react-select'



export default function SelectVehicle(props) {

  const pre_ele = document.createElement('pre')  
  console.log(pre_ele)

  const year_input = document.querySelector('#year_input')
  const make_input = document.querySelector('#make_input')
  const model_input = document.querySelector('#model_input')

    fetch('vite-project/src/assets/Car_Model_List.json')
    .then(response => response.json())
    .then(car_data => 
        // console.log(car_data)
        getCarYears(car_data))

    

      
  return (
      // select vehicle year
    <div className='select-vehicle-grid'>
      <div className="year_selecter">
            <label for="year_input">Year</label>
            <select name="" id="year_input">Year
                <optgroup class="opt_group_year">
                    
                </optgroup>
            
        </select>
        </div>
    {/* select vehicle make */}
        <div className="make_selecter">
        <label for="">Make</label>
            <select  name="" id="make_input">Make
                <optgroup className='opt_group_make'>
                   
                </optgroup>
            </select>
        </div>

      {/* select vehicle model */}
      <div className="model_selecter">
        <label for="">Model</label>
            <select name="" id="model_input">Model
                <optgroup class="opt_group_model">

                </optgroup>


            </select>
    </div>
        


    </div>
  )
}

