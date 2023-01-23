import React from "react";
import "./Homepage.css";
import WelcomeSection from "../../Components/Home/WelcomeSection";
import Services from "../../Components/Home/Services";
import ProductSwiper from "../../Components/Home/ProductSwiper";
import Homeintro from "../../Components/Home/Homeintro";
import AutoSlider from "../../Components/AutoSlider";
// import Hslider from "../../Components/Home/Hslider";
const Homepage = () => {
  return (
    <div id="homepage">
      <Homeintro />

      {/* -------------------Our Info------------------ */}

      <WelcomeSection />

      {/* -----------------OUR SERVICES------------- */}
      <div id="services" className=" py-24 mx-auto  bg-neutral-800">
        <h1
          className="text-4xl  antialiased   font-semibold   text-white"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          OUR SERVICES
        </h1>
        <span className="inline-block h-1 w-28 rounded bg-red-500 mt-8 mb-20"    data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"></span>
        <Services />
      </div>

      {/* -------------------OUR PRODUCTS------------------ */}
      {/* <div class="container px-5 py-24 mx-auto">
      <h1
          className="text-4xl  antialiased   font-semibold  "
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          Our Products
        </h1>
        <span className="inline-block h-1 w-28 rounded bg-red-500 mt-8 mb-20"    data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"></span>
        <ProductSwiper />
      </div> */}

      {/* -------------------OUR Products slider------------------ */}
      <div id="services" className=" py-4 mx-auto ">
      <h1
          className="text-4xl  antialiased   font-semibold "
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          Our Products
        </h1>
        <span className="inline-block h-1 w-28 rounded bg-red-500 mt-8 mb-20"    data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"></span>
        <AutoSlider />
      </div>
    </div>
  );
};

export default Homepage;
