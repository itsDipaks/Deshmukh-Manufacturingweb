import React from 'react'
import Aboutintro from '../../Components/AboutCompo/Aboutintro'
import ContactForm from '../../Components/ContactForm'
import MapEmbeded from '../../Components/MapEmbeded'

const About = () => {
  return (
    <>
<Aboutintro/>


{/* ----------Contact section ---------- */}
    <div className='flex items-center bg-red-100 px-4 xs:flex-col xs:py-14' >

    <ContactForm/>


    <div className='text-center  '>
      <h1 className='sm:text-3xl text-2xl font-medium title-font mb-1 text-black'>Location</h1>
      <span className="inline-block h-1 w-28 rounded bg-red-500 mt-1 mb-8"></span>
    <MapEmbeded className="border-4 "/>
    </div>

    </div>
    
    </>
  )
}

export default About