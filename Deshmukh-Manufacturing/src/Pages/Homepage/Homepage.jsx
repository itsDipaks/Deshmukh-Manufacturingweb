import React from "react";
import "./Homepage.css";
import backgraundimag from "../../assets/Backgraundintroimage.jpg";
import ProductSwiper from "../../Components/Home/ProductSwiper";
import OurServices from "../../Components/Home/Services";
import Aboutintro from "../../Components/AboutCompo/Aboutintro";
const Homepage = () => {
  return (
    <div id="homepage">
      <div className="bakgraund-imgdiv">
        <h1>DESHMUKH MANUFACTURING</h1>
        {/* <img src={backgraundimag} alt="backgarund" /> */}
      </div>

      {/* -------------Welcome Section --------------- */}
      <div className="welcome-section">
        <h1>
          WELCOME TO <span>DESHMUKH MANUFACTURING </span> PVT LTD.
        </h1>

        <button>View More</button>
      </div>

   <Aboutintro/>

      {/* -----------------OUR SERVICES------------- */}
      <OurServices />

      {/* -------------------OUR PRODUCTS------------------ */}
      <div>
        <h1 className="text-4xl  antialiased  mb-8 font-semibold">
          Our Products
        </h1>
        {/* <ProductSwiper /> */}
      </div>
    </div>
  );
};

export default Homepage;
