import React, { useEffect } from "react";
import Hslider from "../../Components/Home/Hslider";

import Boxtipper1 from "../../assets/VehicalProducts/BoxBodytipper/box2.png"
import Boxtipper2 from "../../assets/VehicalProducts/BoxBodytipper/box 1.png"
import Boxtipper3 from "../../assets/VehicalProducts/BoxBodytipper/box5.png"
import Boxtipper4 from "../../assets/VehicalProducts/BoxBodytipper/box7.png"
import Boxtipper5 from "../../assets/VehicalProducts/BoxBodytipper/box8.png"
import Boxtipper6 from "../../assets/VehicalProducts/BoxBodytipper/box3.png"
import Boxtipper7 from "../../assets/VehicalProducts/BoxBodytipper/box4.png"
import Boxtipper8 from "../../assets/VehicalProducts/BoxBodytipper/box6.png"
import Boxtipper9 from "../../assets/VehicalProducts/BoxBodytipper/Boxbody1.jpg"
import "./SubProducts.css";
const BoxTipper = () => {
  const ScrolltoTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  };
useEffect(()=>{
  ScrolltoTop()
})
  const mydatadata = [
    {
      title: "Box Body Tipper",
      data: [
        {
          imgdata: [
            {
              url:Boxtipper1,
            },
            {
              url:Boxtipper5,
            },
            {
              url:Boxtipper8,
            },
            {
              url:Boxtipper9,
            },
            
           
          ],
        },
      ],
      type:"Box Body",
      Capacity:"10.5 Cu Mtr",
      TipperWeight:"2.172 Ton*"

    },
    {
      title: "Box Body Tipper",
      data: [
        {
          imgdata: [
            {
              url:Boxtipper9,
            },
            {
              url:Boxtipper5,
            },
            {
              url:Boxtipper7,
            },
            {
              url:Boxtipper6,
            },
            
           
          ],
        },
      ],
      type:"Box Body",
      Capacity:"16 Cu Mtr",
      TipperWeight:"3.369 Ton*"

    },
    {
      title: "Box Body Tipper",
      data: [
        {
          imgdata: [
            {
              url:Boxtipper3,
            },
            {
              url:Boxtipper6,
            },
            {
              url:Boxtipper5,
            },
            {
              url:Boxtipper7,
            },
            
           
          ],
        },
      ],
      type:"Box Body",
      Capacity:"18 Cu Mtr",
      TipperWeight:"4.596 Ton*"

    },
    {
      title: "Box Body Tipper",
      data: [
        {
          imgdata: [
            {
              url:Boxtipper4,
            },
            {
              url:Boxtipper6,
            },
            {
              url:Boxtipper7,
            },
            {
              url:Boxtipper4,
            },
            
           
          ],
        },
      ],
      type:"Box Body",
      Capacity:"22 Cu Mtr",
      TipperWeight:"4.17 Ton*"

    },

   
  ];

  return (
    <div>
      <section className="text-gray-600 body-font w-full bg-black pt-24 ">
        {mydatadata &&
          mydatadata.map((el) => (
            <div className=" px-4 py-4  mx-auto w-full bg-gradient-to-t from-gray-600 to-black  flex flex-wrap  items-center   ">
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
            


                <p className="flex items-center text-white"><span className="font-semibold text-red-400  p-2">Type  :  </span> <span>{el.type}</span></p>
                <p className="flex items-center text-white"><span className="font-semibold text-red-400 p-2">Capacity   :  </span> <span>{el.Capacity}</span></p>
                <p className="flex items-center text-white"><span className="font-semibold text-red-400 p-2">Tipper Weight  :  </span> <span> {el.TipperWeight}</span></p>
              
                <p class="leading-relaxed text-white xs:text-sm">
                *Weights mentioned are general & may vary from model to model. (Pl check during ordering)
                </p>
              
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default BoxTipper;
