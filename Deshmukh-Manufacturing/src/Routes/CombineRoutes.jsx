import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About/About'
import ContactPage from '../Pages/ContactUsPage/ContactPage'
import Homepage from '../Pages/Homepage/Homepage'
import Bulker from '../Pages/Productspage/Bulker'
import Tipper from '../Pages/Productspage/Tipper'
import ServicePage from '../Pages/ServicePage/ServicePage'

const CombineRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<ServicePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/tipper' element={<Tipper/>}/>
        <Route path='/bulker' element={<Bulker/>}/>
        <Route path='/carbide' element={<Bulker/>}/>
        <Route path='/fabrication' element={<Bulker/>}/>
      </Routes>
    </div>
  )
}

export default CombineRoutes