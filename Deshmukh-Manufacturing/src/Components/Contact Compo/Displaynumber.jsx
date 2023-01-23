import React from 'react'
import { IoIosCall } from 'react-icons/io'
const Displaynumber = () => {
  return (
    <>
   <section class="text-gray-600 body-font">
  <div class="container px-2 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap w-1/2 m-auto justify-between">
      <div class="p-1 lg:w-auto w-1/2 md:w-full">
        <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-4 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
           <IoIosCall className='w-44 h-6'/>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shubham Deshmukh</h2>
            <p class="leading-relaxed text-base">+91 8180060462</p>

          </div>
        </div>
      </div>
      <div class="p-1 lg:w-auto md:w-full">
        <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-4 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
          <IoIosCall className='w-44 h-6'/>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Mukesh Deshmukh</h2>
            <p class="leading-relaxed text-base">+91 9923375826</p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Displaynumber