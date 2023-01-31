import React from "react";
import { useState } from "react";
import {IoMdCall} from "react-icons/io";
import {MdEmail} from "react-icons/md";
import {Link} from "react-router-dom";
import "./Navbar.css";
const TestNavbar = () => {
  const [nvbsrscroll,setnvbarscroll]=useState(false)

  const onscrollbackgraund=()=>{
    if(window.scrollY<5){
      setnvbarscroll(true)
    }else{
      setnvbarscroll(false)
    }
  }
  window.addEventListener("scroll",onscrollbackgraund)
  return (
    <>
      <div className="flex justify-center w-full  text-black ">
        <nav className= {nvbsrscroll?"self-center w-full max-w-full text-white  font-bold fixed bg-transparent top-0 z-10 "
        :"self-center w-full transition-colors duration-200 ease-in-out	 max-w-full  bg-gradient-to-t from-gray-900 to-gray-600 text-white font-bold  fixed  top-0 z-10"}>
          <div className="flex md:flex-row flex-col border-b  justify-between items-center md:items-start">
            <h1 className=" py-1 text-2xl font-sans font-bold">DM</h1>
            <ul className="py-1 flex justify-between my-1  items-center text-2xl w-1/3 xs:w-full xs:text-lg xs:px-4 md:text-[18px] md:px-2">
              <li className="underline-offset-4 decoration-2 backdrop-blur-sm border-box border relative decoration-white  rounded-lg px-2 md:px-2" >
                <Link to="/">
                  <a href="#">Home</a>
                </Link> 
              </li>
              <li className="hover:border-red border-box border relative backdrop-blur-sm  underline-offset-4 decoration-2 decoration-white  rounded-lg px-1 md:px-2">
                <Link to="/about">
                  {" "}
                  <a href="#">About</a>
                </Link>
              </li>

              {/* -------------Service Dropdawon------------- */}
              {/* <div id="servicelist">
                <li className="  underline-offset-4 decoration-2 relative decoration-white py-2 rounded-lg px-2 md:px-5">
                  <Link to="/services">
                    <a href="#">Services</a>
                  </Link>
                </li> */}

                {/* -----menue box------- */}
                {/* <div
                  id="listblock"
                  className="absolute  w-auto top-14  text-center "
                >
                  <ul>
                    <Link to="/vehicalprod">
                      <li className="lists">Tipper</li>
                    </Link>
                    <Link to="/vehicalprod">
                      <li className="lists" id="smpitem">
                        SPM
                      </li>
                    </Link> */}
                    {/* <div className="spmdiv">
                      <ul>
                        <li>Spacial Puspose Machine</li>
                        <li>Material Handeling Equipments</li>
                        <li>Conveur System</li>
                      </ul>
                    </div> */}
                    {/* <Link to="/vehicalprod">
                      <li className="lists">Tunsten Carbide</li>
                    </Link>
                  </ul>
                </div>
              </div> */}

              <div id="servicelist">
                <li className="underline-offset-6 decoration-2 border-box border backdrop-blur-sm relative decoration-white  rounded-lg px-2 md:px-2">
                  <Link to="/vehicalprod">
                    <a href="#">Products</a>
                  </Link>
                </li>

                {/* -----menue box------- */}
                <div
                  id="listblock"
                  className="absolute  w-auto top-10  text-center "
                >
                  <ul >
                    <Link to="/vehicalprod">
                      {" "}
                      <li className="lists">Box Tipper</li>
                    </Link>
                    <Link to="/vehicalprod">
                      {" "}
                      <li className="lists">Rock Tipper</li>
                    </Link>
                    <Link to="/vehicalprod">
                      {" "}
                      <li className="lists">Garbage Body</li>
                    </Link>
                    <Link to="/vehicalprod">
                      {" "}
                      <li className="lists">Bulker</li>
                    </Link>
                    <Link to="/vehicalprod">
                      {" "}
                      <li className="lists">RMC</li>
                    </Link>
                 
                  </ul>
                </div>
              </div>

              {/* ----------Product Box --------- */}

              {/* <div className="servicelist">
                <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                  <Link to="/services">
                    <a href="#">Products</a>
                  </Link>
                </li>

                <div
                  id="listblock"
                  className="absolute  w-auto top-14  text-center "
                >
                  <ul>
                    <li>Box Tipper</li>
                    <li>Rock Tipper</li>
                    <li>RMC</li>
                    <li>Bulker</li>
                    <li>Tanker</li>
                  </ul>
                </div>
              </div> */}
              <li className="underline-offset-4 decoration-2 border-box border relative backdrop-blur-sm decoration-white  rounded-lg px-2 md:px-2">
                <Link to="/contact">
                  <a href="#">Contact Us</a>
                </Link>
              </li>
              <div className="ml-14 text-sm xs:hidden">
                {/* <p className="flex items-center"> <span><IoMdCall/></span><span className="ml-4">Shubham Deshmukh</span></p>
              <p className="flex items-center"> <span><IoMdCall/></span><span className="ml-4">+91 8180060462</span></p>
              <p className="flex items-center"> <span><MdEmail/></span><span  className="ml-4">dmpl1857@gmail.com</span></p> */}
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default TestNavbar;
