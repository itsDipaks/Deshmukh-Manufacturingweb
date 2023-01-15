import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About/About'
import Homepage from '../Pages/Homepage/Homepage'
import ServicePage from '../Pages/ServicePage/ServicePage'

const CombineRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<ServicePage/>}/>
      </Routes>
    </div>
  )
}

export default CombineRoutes