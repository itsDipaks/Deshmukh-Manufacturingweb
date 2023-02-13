import React from "react";
import {useState} from "react";
import {IoMdCall} from "react-icons/io";
import {MdEmail} from "react-icons/md";
import {Link} from "react-router-dom";
import logo from "./logopng.png"
import "./Navbar.css";
const TestNavbar = () => {
  const [nvbsrscroll, setnvbarscroll] = useState(false);

  const onscrollbackgraund = () => {
    if (window.scrollY < 5) {
      setnvbarscroll(true);
    } else {
      setnvbarscroll(false);
    }
  };
  window.addEventListener("scroll", onscrollbackgraund);
  return (
    <>
      <div className="flex justify-center  w-full  ">
        <nav
          className={
            nvbsrscroll
              ? "self-center w-full border-b  border-white max-w-full text-red-400 font-semibold fixed bg-transparent top-0 z-10 xs:w-full"
              : "self-center w-full transition-colors duration-200 ease-in-out	border-b border-rose-400 max-w-full  bg-neutral-100 text-black font-semibold  fixed xs:w-full top-0 z-10"
          }
        >
          <div className="flex md:flex-row flex-col py-2  ml-4 justify-between items-center md:items-start">
            <img src={logo} className='w-16 logo' alt="v x" />
            {/* <h1 className=" py-1 text-2xl font-sans text-green-400 font-bold">
              DM
            </h1> */}
            <ul className="py-1 flex justify-between my-1  items-center text-2xl w-2/5 xs:w-full xs:text-sm xs:px-4 md:text-[18px] md:px-2">
              <li className={nvbsrscroll?"underline-offset-4 tracking-widesttext-red-400 bg-rose-400  relative border-white text-black rounded-lg px-2 py-1 md:px-2":"underline-offset-4 tracking-widesttext-white bg-rose-400 relative text-white border-red-400 rounded-lg px-2 py-1 md:px-2"}>
                <Link to="/">
                  <a href="#">Home</a>
                </Link>
              </li>
              <li className={nvbsrscroll?"underline-offset-4 tracking-widesttext-red-400 bg-rose-400  relative border-white text-black rounded-lg px-2 py-1 md:px-2":"underline-offset-4 tracking-widesttext-white bg-rose-400 relative text-white border-red-400 rounded-lg px-2 py-1 md:px-2"}>
                <Link to="/about">
                  {" "}
                  <a href="#">About</a>
                </Link>
              </li>

              <div id="servicelist">
                <li className={nvbsrscroll?"underline-offset-4 tracking-widesttext-red-400 bg-rose-400  relative border-white text-black rounded-lg px-2 py-1 md:px-2":"underline-offset-4 tracking-widesttext-white bg-rose-400 relative text-white border-red-400 rounded-lg px-2 py-1 md:px-2"}>
                  <Link to="/vehicalprod">
                    <a href="#">Products</a>
                  </Link>
                </li>
              </div>

              <li className={nvbsrscroll?"underline-offset-4 tracking-widesttext-red-400 bg-rose-400  relative border-white text-black rounded-lg px-2 py-1 md:px-2":"underline-offset-4 tracking-widesttext-white bg-rose-400 relative text-white border-red-400 rounded-lg px-2 py-1 md:px-2"}>
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
