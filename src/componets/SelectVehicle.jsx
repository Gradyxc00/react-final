import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './SelectVehicle.css'


export default function SelectVehicle({onVehicleSelect}) {
  

  const apiKey = import.meta.env.VITE_API_KEY
  const [carData, setCarData] = useState([])
  const [years, setYears] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');


  const getVehicleInfo = async () => {
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/cars?year=${selectedYear}&make=${selectedMake}&model=${selectedModel}`, { 
        headers: { 'X-Api-Key': apiKey }
      }); 
      console.log(response.data);
      if (response.data && response.data.length > 0) {
        onVehicleSelect(response.data[0])
      }
    } catch (error) {
      console.error('Error getting Vehicle Information:', error);
    }
  };

useEffect (() => {
  fetch('src/assets/Car_Model_List.json')
  .then(response => response.json())
  .then(carData => {
    // console.log(carData)
    setCarData(carData)
    getVehicleYear(carData)
    getVehicleMake(carData)
    getVehicleModel(carData)

   
  })
}, [])


function getVehicleYear(carData) {
  // console.log(carData)
  const carYears = carData.map(carData => (carData.Year))
  // console.log(carYears)

  let filteredYears = [...new Set (carYears)]
    // console.log(filteredYears)

  let sortedYears = filteredYears.sort((a, b) => b - a)
    // console.log(sortedYears)
  
    setYears(sortedYears)
}


function getVehicleMake(carData, selectedYear) {
    // console.log(carData)
  const carMakes = carData
  .filter(carInfo => carInfo.Year === parseInt(selectedYear))
  // console.log(carMakes)
  .map(carInfo => (carInfo.Make))
  // console.log(carMakes)
  
    // console.log(carMakes)
  
  let filteredMakes = [...new Set (carMakes)]
    // console.log(filteredMakes)
  
  let sortedMakes = filteredMakes.sort()
    // console.log(sortedMakes)

    setMakes(sortedMakes)
}


function getVehicleModel(carData, selectedYear, selectedMake) {
  // 
  const carModels = carData
  .filter(carInfo => carInfo.Year === parseInt(selectedYear) && carInfo.Make === selectedMake)
  // console.log(carModels)
  .map(carInfo => (carInfo.Model))
    // console.log(carModels)
  
  let filteredModels = [...new Set (carModels)]
    // console.log(filteredModels)

  let sortedModels = filteredModels.sort()

    setModels(sortedModels)

}
  
  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    setSelectedMake('');
    setSelectedModel('');
    getVehicleMake(carData, year);
  };

  const handleMakeChange = (e) => {
    const make = e.target.value;
    setSelectedMake(make);
    setSelectedModel('');
    getVehicleModel(carData, selectedYear, make);
  };

  const handleModelChange = (e) => {
    const model = e.target.value
    setSelectedModel(model);
    if(model) {
      getVehicleInfo()
    }
  };

  return (
    <div>
      <select value={selectedYear} onChange={handleYearChange}>
        <option value="">Select Year</option>
        {years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>

      <select value={selectedMake} onChange={handleMakeChange} disabled={!selectedYear}>
        <option value="">Select Make</option>
        {makes.map((make) => (
          <option key={make} value={make}>{make}</option>
        ))}
      </select>

      <select value={selectedModel} onChange={handleModelChange} disabled={!selectedMake}>
        <option value="">Select Model</option>
        {models.map((model) => (
          <option key={model} value={model}>{model}</option>
        ))}
      </select>
    </div>
  );
};







  

 

