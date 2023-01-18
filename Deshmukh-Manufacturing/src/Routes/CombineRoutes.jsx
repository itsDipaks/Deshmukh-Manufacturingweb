import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About/About'
import ContactPage from '../Pages/ContactUsPage/ContactPage'
import Homepage from '../Pages/Homepage/Homepage'
import CarbideProducts from '../Pages/Productspage/CarbideProducts'
import VehicalProducts from '../Pages/Productspage/VehicalProducts'
import ServicePage from '../Pages/ServicePage/ServicePage'

const CombineRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<ServicePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/vehicalprod' element={<VehicalProducts/>}/>
        <Route path='/carbideproducts' element={<CarbideProducts/>}/>
      </Routes>
    </div>
  )
}

export default CombineRoutes