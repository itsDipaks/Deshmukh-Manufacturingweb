import React, { useEffect } from "react";
import Hslider from "../../Components/Home/Hslider";

import Boxtipper2 from "../../assets/VehicalProducts/BoxBodytipper/box2.png"
import Boxtipper1 from "../../assets/VehicalProducts/BoxBodytipper/box1.png"
import Boxtipper5 from "../../assets/VehicalProducts/BoxBodytipper/box5.png"
import Boxtipper3 from "../../assets/VehicalProducts/BoxBodytipper/box3.jpg"
import Boxtipper7 from "../../assets/VehicalProducts/BoxBodytipper/box7.png"
import Boxtipper6 from "../../assets/VehicalProducts/BoxBodytipper/box6.png"
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
         
            
           
          ],
        },
      ],
      type:"Box Body",
      Capacity:"5.5 Cu Mtr",
      TipperWeight:"2.172 Ton*"

    },
    {
      title: "Box Body Tipper",
      data: [
        {
          imgdata: [
            {
              url:Boxtipper2,
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
              url:Boxtipper3,
            },
        
           
          ],
        },
      ],
      type:"Box Body",
      Capacity:"14 Cu Mtr",
      TipperWeight:"3.369 Ton*"

    },
    {
      title: "Box Body Tipper",
      data: [
        {
          imgdata: [
            {
              url:Boxtipper5,
            },
           
           
          ],
        },
      ],
      type:"Box Body",
      Capacity:"16 Cu Mtr",
      TipperWeight:"4.596 Ton*"

    },
    {
      title: "Box Body Tipper",
      data: [
        {
          imgdata: [
            {
              url:Boxtipper6,
            },
            
           
          ],
        },
      ],
      type:"Box Body",
      Capacity:"18 Cu Mtr",
      TipperWeight:"4.17 Ton*"

    },
    {
      title: "Box Body Tipper",
      data: [
        {
          imgdata: [
            {
              url:Boxtipper7,
            },
            
           
          ],
        },
      ],
      type:"Box Body",
      Capacity:"20 Cu Mtr",
      TipperWeight:"4.17 Ton*"

    },

   
  ];

  return (
    <div>
      <div className="bg-black h-16 xs:h-24"></div>
      <section className="text-gray-600 body-font w-full  pt-0 ">
        {mydatadata &&
          mydatadata.map((el) => (
            <div className=" px-4   mx-auto w-11/12 bg-gradient-to-t from-gray-600 to-black  flex flex-wrap rounded-2xl items-center  m-14 ">
              <div className="lg:w-1/2 xs:w-full w-full mb-5 lg:mb-0 rounded-lg overflow-hidden my-1  " data-aos="fade-right">
                <Hslider
                  senddata={el.data}
                  className="object-cover object-center h-full xs:h-1/2 w-full xs:w-1/2 "
                />
              </div>
              <div class="w-1/2  pb-4 xs:w-full" >
                <h2 class="text-2xl font-medium  text-white xs:text-xl title-font mb-2">
                  {el.title}
                </h2>
            


                <p className="flex items-center text-white"><span className="font-semibold text-red-400  p-2">Type  :  </span> <span>{el.type}</span></p>
                <p className="flex items-center text-white"><span className="font-semibold text-red-400 p-2">Capacity   :  </span> <span>{el.Capacity}</span></p>
                {/* <p className="flex items-center text-white"><span className="font-semibold text-red-400 p-2">Tipper Weight  :  </span> <span> {el.TipperWeight}</span></p> */}
              
                <p class="leading-relaxed text-white xs:text-sm">
                *Weights are generaly & may vary from model to model. (Pl check during ordering)
                </p>
              
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default BoxTipper;
