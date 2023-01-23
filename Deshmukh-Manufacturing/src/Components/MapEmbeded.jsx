import React from 'react'

const MapEmbeded = () => {
  return (
    <div  data-aos="fade-up " className='w-1/4 m-auto'>
     <iframe className='shadow-md rounded-lg' width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=19.871257762685353,%2073.96915845468467&t=k&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  )
}

export default MapEmbeded