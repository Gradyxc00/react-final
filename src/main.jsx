import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './componets/NavBar.jsx'
import SelectVehicle from './componets/SelectVehicle.jsx'
import VehicleSpec from './componets/VehicleSpec.jsx'
import VehicleOpt from './componets/VehicleOpt.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/navBar' element={<NavBar/>}/>
          <Route path='/selectVehicle' element={<SelectVehicle/>}/>
          <Route path='/vehicleSpecs' element={<VehicleSpec/>}/>
          <Route path='vehicleOpt' element={<VehicleOpt/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
