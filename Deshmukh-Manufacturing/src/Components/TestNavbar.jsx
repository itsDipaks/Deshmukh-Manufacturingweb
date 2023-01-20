import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const TestNavbar = () => {
  return (
    <div>
      <div className="flex justify-center bg-neutral-800 text-white  ">
        <nav className="self-center w-full max-w-7xl   ">
          <div className="flex md:flex-row flex-col  justify-between items-center md:items-start">
            <h1 className=" py-4 text-2xl font-sans font-bold px-10">
            DM
            </h1>
            <ul className="flex justify-center my-4  items-center text-2xl md:text-[18px] md:px-10">
              <li className="hover:underline  underline-offset-4 decoration-1 decoration-white py-2 rounded-lg px-2 md:px-5">
              <Link to="/"><a href="#">Home</a></Link> 
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
              <Link to="/about">  <a href="#">About</a></Link> 
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
              <Link to="/services"><a href="#">Services</a></Link> 
              </li>
              <div className="ml-14 text-sm xs:hidden">
              <p className="flex items-center"> <span><IoMdCall/></span><span className="ml-4">+91 8600405446</span></p>
              <p className="flex items-center"> <span><MdEmail/></span><span  className="ml-4">deshmukhManufacturing@gmail.com</span></p>
              </div>
            </ul>

           
            
          </div>
        </nav>
      </div>
     
    </div>
  );
};

export default TestNavbar;
