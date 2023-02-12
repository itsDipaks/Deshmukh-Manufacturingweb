import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About/About'
import ContactPage from '../Pages/ContactUsPage/ContactPage'
import Homepage from '../Pages/Homepage/Homepage'
import VehicalProducts from '../Pages/Productspage/VehicalProducts'
import BoxTipper from '../Pages/SubProductsPages/BoxTipper'
import BulkerProducts from '../Pages/SubProductsPages/BulkerProducts'
import GarbagBodyTipper from '../Pages/SubProductsPages/Garbagebody'
import RockTipper from '../Pages/SubProductsPages/RockTipper'
import TipperProducts from '../Pages/SubProductsPages/TipperProducts'
// import ServicePage from '../Pages/SubProductsPages/TipperProducts'

const CombineRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/services' element={<ServicePage/>}/> */}
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/vehicalprod' element={<VehicalProducts/>}/>

        {/* ----Sub Products--------- */}
        
        <Route path='/boxtipper' element={<BoxTipper/>}/>
        <Route path='/rocktipper' element={<RockTipper/>}/>
        <Route path='/garbagebody' element={<GarbagBodyTipper/>}/>


        <Route path='/Tipperproduct' element={<TipperProducts/>}/>
        <Route path='/bulkerproduct' element={<BulkerProducts/>}/>
      </Routes>
    </div>
  )
}

export default CombineRoutes