import React from "react";
import "./Homepage.css";
import backgraundimag from "../../assets/Backgraundintroimage.jpg";
import ProductSwiper from "../../Components/Home/ProductSwiper";
import OurServices from "../../Components/Home/Services";
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
        <p>
          DESHMUKH MANUFACTURIN has been manufacturing premium quality carbide
          products, through current advancements and imaginative creation
          measures. With ceaseless R & D exercises HTC produces a wide scope of
          phenomenal carbide items, both standard and customized as per clients'
          various requirements. Item quality and cycle productivity are
          constantly checked as per the strictest global principles.
        </p>
        <button>View More</button>
      </div>


{/* -----------------OUR SERVICES------------- */}
<OurServices/>


{/* -------------------OUR PRODUCTS------------------ */}
<div className="products-div">

  <h1>Our Products</h1>
<ProductSwiper/>
</div>



    </div>
  );
};

export default Homepage;
