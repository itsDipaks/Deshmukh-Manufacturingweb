import React, { useEffect } from "react";
import Hslider from "../../Components/Home/Hslider";
import rocktipper1 from "../../assets/VehicalProducts/Rockbody/Rockbody1.jpg"
import rocktipper2 from "../../assets/VehicalProducts/Rockbody/rockbody2.png"
import rocktipper3 from "../../assets/VehicalProducts/Rockbody/Rockbody3.jpg"
import rocktipper4 from "../../assets/VehicalProducts/Rockbody/Rockbody4.jpg"

import Boxtipper1 from "../../assets/VehicalProducts/BoxBodytipper/Boxbody1.jpg"
import Boxtipper2 from "../../assets/VehicalProducts/BoxBodytipper/Boxbody2.jpg"
import Boxtipper3 from "../../assets/VehicalProducts/BoxBodytipper/Boxbody3.jpg"
import Boxtipper4 from "../../assets/VehicalProducts/BoxBodytipper/Boxbody4.jpg"
import "./SubProducts.css";
const TipperProducts = () => {
  const ScrolltoTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  };
useEffect(()=>{
  ScrolltoTop()
})
  const mydatadata = [
    {
      title: "Rock Body Tipper",
      data: [
        {
          imgdata: [
            {
              url:rocktipper1,
            },
            {
              url:rocktipper2,
            },
            {
              url:rocktipper3,
            },
            {
              url:rocktipper4,
            },
            
           
          ],
        },
      ],
    },
    {
      title: "Box Body Tipper",
      data: [
        {
          imgdata: [
            {
              url:Boxtipper1,
            },
            {
              url:Boxtipper2,
            },
            {
              url:Boxtipper3,
            },
            {
              url:Boxtipper4,
            },
          ],
        },
      ],
    }
   
  ];

  return (
    <div>
      <section className="text-gray-600 body-font w-full bg-black pt-24 ">
        {mydatadata &&
          mydatadata.map((el) => (
            <div className=" px-1 py-1 mx-auto w-full bg-gradient-to-t from-gray-600 to-black  flex flex-wrap items-center   ">
              <div className="lg:w-1/2 xs:w-full w-full mb-5 lg:mb-0 rounded-lg overflow-hidden my-1  " data-aos="fade-right">
                <Hslider
                  senddata={el.data}
                  className="object-cover object-center h-full xs:h-1/2 w-full xs:w-1/2 "
                />
              </div>
              <div class="w-1/2 px-4 xs:w-full" >
                <h2 class="text-2xl font-medium  text-white xs:text-xl title-font mb-2">
                  {el.title}
                </h2>
                {/* <p class="leading-relaxed text-white xs:text-sm">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p> */}

                <p className="flex items-center text-white"><span className="font-semibold text-red-400  p-2">Material :  </span> <span> </span></p>
                <p className="flex items-center text-white"><span className="font-semibold text-red-400 p-2">Size Aprox  :  </span> <span></span></p>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default TipperProducts;
