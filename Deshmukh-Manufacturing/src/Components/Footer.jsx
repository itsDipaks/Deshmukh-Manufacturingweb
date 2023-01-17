// import { Box, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div id='Fotter'>
      
      <footer className="text-gray-600 body-font bg-black">
  <div className="container px-5 py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-96 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      {/* <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Tailblocks</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p> */}
    </div>
    <div className="flex-grow flex flex-wrap justify-between md:pl-20 mb-1 md:mt-0 mt-10 md:text-center text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
        <h2 className="title-font font-bold  text-gray-900 tracking-widest text-sm mb-3 underline decoration-solid">QUICK LINKS</h2>
        <div className="list-none ">
          <li className="list-none m-2">
          <Link to="/"> <a className="text-gray-600 hover:text-gray-800">Home</a></Link>
          </li>
          <li className="list-none m-2">
          <Link to="/about"> <a className="text-gray-600 hover:text-gray-800">About</a></Link>
          </li>
          <li className="list-none m-2">
          <Link to="/services">  <a className="text-gray-600 hover:text-gray-800">Services</a></Link>
          </li>
          {/* <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li> */}
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SERVICES</h2>
        <div className="list-none mb-5">
          <li className="list-none m-3" >
           <Link to="/tipper"> <a className="text-gray-600 hover:text-red-800">Tipper</a></Link>
          </li>
          <li className="list-none m-3">
          <Link to="/bulker"> <a className="text-gray-600 hover:text-gray-800">Bulker</a></Link>
          </li>
          <li className="list-none m-3">
          <Link to="/carbide">  <a className="text-gray-600 hover:text-gray-800"> Tungsten-Carbide</a></Link>
          </li>
          <li className="list-none m-3 mb-4">
          <Link to="/fabrication">  <a className="text-gray-600 hover:text-gray-800">Fabrication</a></Link>
          </li>
        </div>
      </div>




      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">FOLLOW US</h2>
        <span className="flex  sm:ml-auto sm:mt-0 mt-2 justify-between sm:justify-start border-4">
       
      </span>
      </div>
    </div>
  </div>




  <div className="bg-gray-100">
    <div className="container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">@ Develope and created by Dipak Pawar
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@DevelopWithDipak</a>
      </p>
    
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer