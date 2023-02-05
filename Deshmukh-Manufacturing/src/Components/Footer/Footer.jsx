// import { Box, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdCall, MdEmail, MdLocationOn } from 'react-icons/md';
import {IoLogoWhatsapp } from 'react-icons/io';
const Footer = () => {
  return (
    <div id='Fotter'>
      
      <footer className="text-white body-font w-full  bg-gradient-to-t from-slate-800 to-black ">
  <div className=" px-5 py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap xs:w-full xs:px-0 flex-col">
    <div className="w-96 flex-shrink-0 md:mx-0 mx-auto text-center xs:text-left xs:w-full md:text-left">

    <h2 className="title-font font-medium text-red-800 tracking-widest text-sm mb-3 underline xs:ml-36  decoration-solid">CONTACT DETAILS</h2>
    <div className="list-none mb-4 border-1 w-full xs:w-full  ">
          <li className="list-none m-1  " >
           <Link to="/"><p className='flex items-cente xs:w-full xs:pl-14'><MdLocationOn className='text-red-400 w-5 h-8  '/><span className=' ml-4'> K-5,MIDC,Sinnar,Dist.Nashik ,MH(422113)</span></p>  </Link>
          </li>
          <li className="list-none m-1" >
           <Link to="/"><p className='flex items-center  xs:w-full xs:pl-14'><MdEmail className='text-red-400 w-4 h-8'/>  <span className='ml-4'>dmpl1857@gmail.com</span></p>  </Link>
          </li>
          <li className="list-none m-1" >
           <Link to="/"><p className='flex items-center  xs:w-full xs:pl-14'> <MdCall className='text-red-400 w-4 h-8'/>  <span className='ml-4'>+91 8180060462 <span className='text-sm' >- Shubham Deshmukh</span></span></p>  </Link>
          </li>
          <li className="list-none m-1" >
           <Link to="/"><p className='flex items-center  xs:w-full xs:pl-14'> <MdCall className='text-red-400 w-4 h-8'/>  <span className='ml-4'>+91 9923375826 <span className='text-sm'>- Mukesh Deshmukh</span></span></p>  </Link>
          </li>
         
        </div>

    </div>
    <div className="flex-grow flex flex-wrap justify-between md:pl-20 mb-1 md:mt-0 mt-10 xs:mt-2 md:text-center text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
        <h2 className="title-font font-bold   text-red-800 tracking-widest text-sm mb-3 underline decoration-solid ">QUICK LINKS</h2>
        <div className="list-none ">
          <li className="list-none m-2">
          <Link to="/"> <a className="text-white hover:text-gray-800">Home</a></Link>
          </li>
          <li className="list-none m-2">
          <Link to="/about"> <a className="text-white hover:text-gray-800">About</a></Link>
          </li>
          <li className="list-none m-2">
          <Link to="/vehicalprod">  <a className="text-white hover:text-gray-800">Products</a></Link>
          </li>
          <li className="list-none m-2">
          <Link to="/contact">  <a className="text-white hover:text-gray-800">Contact</a></Link>
          </li>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
        <h2 className="title-font font-medium text-red-800 tracking-widest text-sm mb-3 underline decoration-solid">PRODUCTS</h2>
        <div className="list-none mb-5 ">
          <li className="list-none m-3" >
           <Link to="/rocktipper"> <a className="text-white hover:text-red-800 text-white">Rock Tipper</a></Link>
          </li>
          <li className="list-none m-3">
          <Link to="/boxtipper"> <a className="text-white hover:text-gray-800">Box Tipper</a></Link>
          </li>
          <li className="list-none m-3">
          <Link to="/bulkerproduct"> <a className="text-white hover:text-gray-800">Bulker</a></Link>
          </li>
          <li className="list-none m-3">
          <Link to="/garbagebody"> <a className="text-white hover:text-gray-800">Garbage Vehicle</a></Link>
          </li>
          {/* <li className="list-none m-3">
          <Link to="/carbide">  <a className="text-white hover:text-gray-800"> Tungsten-Carbide</a></Link>
          </li> */}
          {/* <li className="list-none m-3 mb-4">
          <Link to="/fabrication">  <a className="text-white hover:text-gray-800">Fabrication</a></Link>
          </li> */}
        </div>
      </div>




      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium  text-red-800 tracking-widest text-sm mb-3 underline decoration-solid">CONTACT US ON</h2>
        <div className=" mb-5 flex xs:w-11/12 xs:m-auto justify-between mt-14">
          <a href=""> <MdEmail className='h-6  w-full'/></a>
          <a href="https://wa.me/918180060462"> <IoLogoWhatsapp className='h-6  w-full'/></a>
          <a href="tel:+918180060462">  <MdCall className='h-6  w-full'/></a>
     
       {/* <IoLogoWhatsapp className='h-6  w-1/2'/>
       <MdCall className='h-6  w-1/2'/> */}
        </div>
       
      </div>
    </div>
  </div>




  <div className="bg-gray-800 ">
    <div className="container mx-auto py-2 px-5 xxs:px-1 flex flex-wrap flex-col xs:flex-row">
      <p className="text-gray-500 text-xm text-center sm:text-left text-white">@ Develope and created by Dipak Pawar
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1" target="_blank">@DevelopWithDipak</a>
      </p>
    
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer