import React from 'react'

const Listingdata = (values) => {
    const info=values.Data
  return (
    <div>
<div>
    {info && info.map((el)=>
     <div data-aos="fade-up" className='flex w-9/12  m-auto mt-2 box-border border-2 xs:w-11/12' >
     <p className='w-1/2 text-rose-600  p-2 xs:text-sm'>{el.title}</p>
     <p className='w-1/2 border-l-2  p-2 xs:text-sm'>{el.info}</p>
 </div>
    )}
   
    
</div>



    </div>
  )
}

export default Listingdata