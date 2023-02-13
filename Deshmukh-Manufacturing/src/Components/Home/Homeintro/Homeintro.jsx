import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Homeintro.css";
function Homeintro() {
  return (
    <>
      <div className="introbox  top-0 "data-aos="zoom-out"></div>
      <p className="absolute text-white top-52 left-1/4 text-9xl sm:text-2xl xs:text-xl xs:left-8 xs:top-48" data-aos="zoom-in">
        Welcome To
      </p>
      <h1 className=" absolute text-white top-72 left-1/4  font-bold xs:text-4xl xs:left-8 font-serif xs:top-60 text-6xl " id="title-name">
        <span> D</span>
        <span>M</span> &nbsp; <span>T</span>{" "}
        <span>I </span> <span>P</span> <span>P</span> <span>E</span>{" "}
        <span>R</span>{" "}
      </h1>
      {/* <p className="third-line">Private Limited</p> */}
      <button className="absolute top-96 px-6 py-2 left-1/2 xs:top-80 text-white xs:left-1/3">
       <Link to="/vehicalprod"> Explore </Link>
      </button>
      {/* <svg className="absolute bottom-0 top-80 w-full " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffffff" fill-opacity="1" d="M0,64L60,96C120,128,240,192,360,229.3C480,267,600,277,720,245.3C840,213,960,139,1080,101.3C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg> */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,32L120,80C240,128,480,224,720,240C960,256,1200,192,1320,160L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg> */}
    </>
  );
}

export default Homeintro;
