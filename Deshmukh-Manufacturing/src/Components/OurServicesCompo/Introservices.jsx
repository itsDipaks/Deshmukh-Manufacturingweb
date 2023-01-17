import React from 'react'

const Introservices = ({data}) => {
  return (
    <div>
        

        <section class="text-gray-600 body-font "  >
  <div class="container px-1 py-5 mx-auto flex flex-wrap">
    <div class="lg:w-full mx-auto h-auto">
      <div class="flex flex-wrap w-full bg-gray-400 py-28 px-10 relative mb-4 border rounded-3xl">
        <img alt="gallery" class="w-full object-cover h-full object-center border rounded-3xl block  opacity-25 absolute inset-0" src={data.introimg}/>
        <div class="text-center relative z-10 w-full">
          <h1 class="text-4xl text-gray-900 font-medium title-font mb-2">{data.title}</h1>
          <p class="leading-relaxed text-grey-400">{data.description}</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      </div>
     
    </div>
    </section>
    </div>
  )
}

export default Introservices