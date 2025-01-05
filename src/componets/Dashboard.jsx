import React from 'react'
import Header from './Header'
import NavBar from './NavBar'

const Dashboard = () => {
  return (
    <div>
      
      <div className='banner'>
        <Header />
      </div>

      <div className='dashboard-header'>
        <NavBar/>

      {/* what is the body content of my app */}
      <div className='dashboard-body'>

          </div>

      </div>

      {/* <Footer /> */}




    </div>
  )
}

export default Dashboard