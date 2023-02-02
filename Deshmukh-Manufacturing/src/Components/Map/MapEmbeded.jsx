import React from 'react'

const MapEmbeded = () => {
  return (
    <div  data-aos="fade-up " className='w-1/2 m-auto xs:w-full '>
     <iframe className='shadow-md rounded-lg w-full h-96 xs:w-11/12 m-auto xs:h-80'   id="gmap_canvas" src="https://maps.google.com/maps?q=19%C2%B052'16.5%22N%2073%C2%B058'09.0%22E&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  )
}

export default MapEmbeded
