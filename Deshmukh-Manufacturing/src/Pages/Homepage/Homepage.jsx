import React from "react";
import "./Homepage.css";
import WelcomeSection from "../../Components/Home/WelcomeSection";
import Services from "../../Components/Home/Services";
import ProductSwiper from "../../Components/Home/ProductSwiper";
import Homeintro from "../../Components/Home/Homeintro";
// import Hslider from "../../Components/Home/Hslider";
const Homepage = () => {
  return (
    <div id="homepage">
{/* <Homeintro/> */}
{/* <Hslider/> */}

      <WelcomeSection/>

      {/* -----------------OUR SERVICES------------- */}
      <Services />

      {/* -------------------OUR PRODUCTS------------------ */}
      <div class="container px-5 py-14 mx-auto">
        <h1 className="text-4xl  antialiased xs:w-full mb-8 font-semibold">
          Our Products
        </h1>
        <div className="m-8">
        <ProductSwiper />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
