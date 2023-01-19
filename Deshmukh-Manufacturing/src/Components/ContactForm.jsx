import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <section className="text-gray-400  body-font relative">
  <div className="container px-1 py-8 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">Contact Us</h1>
      <span className="inline-block h-1 w-32 xs:w-24  rounded bg-red-500 ml-96 xs:ml-28 mb-8 text-center"></span>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-400">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-200 bg-opacity-40 rounded border border-gray-900  focus:bg-gray-300 focus:border-black-500   focus:outline-none  text-base outline-none text-gray-100 py-1 px-3 leading-8 focus:outline-none transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-200 bg-opacity-40 rounded border border-gray-700  focus:bg-gray-300  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-400">Subject</label>
            <textarea type="text" id="text" name="subject" className="w-full bg-gray-200 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-300  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-gray-400">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-200 bg-opacity-40 rounded border border-gray-700  focus:bg-gray-300  h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
      /
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default ContactForm