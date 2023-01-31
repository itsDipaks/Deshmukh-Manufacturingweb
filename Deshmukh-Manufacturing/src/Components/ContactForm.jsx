import React from 'react'
import{ useRef, useState} from "react"
// import emailjs from "@emailjs/browser";
const ContactForm = () => {

  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
console.log(done)
    // emailjs
    //   .sendForm(
    //     "service_d6skwip",
    //     "template_t6fybbl",
    //     form.current,
    //     "K6vjPwff8BmnBxL1h"
    //   )
    //   .then(
    //     (result) => {
    //       setDone(true);

    //       form.reset();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
      }

  return (
    <div>
      <section className="text-gray-400  body-font relative"  data-aos="fade-up">
  <div className="container px-1 py-8 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">Contact Us</h1>
      {/* <span className="inline-block h-1 w-32 xs:w-24  rounded bg-red-500  xs:ml-28 mb-8 text-center"></span> */}
      <p className=" lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <form ref={form} onSubmit={sendEmail}>
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
          <button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type='submit'>Button</button>
        </div>
      /
      </div>
      </form>
    </div>
  </div>
</section>
    </div>





  )
}

export default ContactForm


// import React, { useRef, useState} from "react";
// import "./contact.css";
// import emailjs from "@emailjs/browser";
// import {
//   AiFillGithub,
//   AiFillLinkedin,
//   AiOutlineHome,
//   AiOutlineMobile,
// } from "react-icons/ai";
// // import gif from "../../img/contactpage.gif";

// // import linkdin from "../../img//"
// const Contact = () => {
//   const form = useRef();
//   const [done, setDone] = useState(false);
//   const sendEmail = (e) => {
//     e.preventDefault();
// console.log(done)
//     emailjs
//       .sendForm(
//         "service_d6skwip",
//         "template_t6fybbl",
//         form.current,
//         "K6vjPwff8BmnBxL1h"
//       )
//       .then(
//         (result) => {
//           setDone(true);

//           form.reset();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div className="contact-form1" id="Contact">
//       <div className="title_div">
//         <h1>Get in Touch</h1>
//         <h5>Submit the form below to get in touch with me</h5>
//       </div>
//       <div className="contact_data">
//         <div className="followme">
//           <div className="icondiv">
//             <AiFillLinkedin />
//             <a href="https://www.linkedin.com/in/dipak-pawar-550776221/" target="#">Linkdin/itsDipaks</a>
//           </div>
//           <div className="icondiv">
//             <AiFillGithub />
//             <a href="https://github.com/itsDipaks"  target="#">Github/itsdipak</a>
//           </div>
//           <div className="icondiv">
//             <AiOutlineMobile />
//             <a href="d">8600405446</a>
//           </div>
//           <div className="icondiv">
//             <AiOutlineHome />
//             <p>Sinner,Nashik Maharshtra </p>
//           </div>
//         </div>

//         <div className="formdiv">
//           <form ref={form} onSubmit={sendEmail}>
//             <input
//               type="text"
//               name="user_name"
//               className="user"
//               placeholder="Name"
//             />
//             <input
//               type="email"
//               name="user_email"
//               className="user"
//               placeholder="Email"
//             />
//             <textarea name="message" className="user" placeholder="Message" />
//             <input type="submit" value="Send" className="button1" />

//             {/* <span>{done && "Thanks for Contacting me"}</span> */}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
