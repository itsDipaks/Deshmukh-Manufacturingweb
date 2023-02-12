import React, { useEffect } from "react";
import Hslider from "../../Components/Home/Hslider";

import Rocktipper1 from "../../assets/VehicalProducts/Rockbody/3.png"
import Rocktipper2 from "../../assets/VehicalProducts/Rockbody/1.png"
import Rocktipper3 from "../../assets/VehicalProducts/Rockbody/Rockbody5.png"
import "./SubProducts.css";
const RockTipper = () => {
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
              url:Rocktipper1,
            },
           
           
          ],
        },
      ],
      type:"Rock Body",
      Capacity:"10  Cu Mtr",
      TipperWeight:"4.95 Ton*"

    },
    {
      title: "Rock Body Tipper",
      data: [
        {
          imgdata: [
            {
              url:Rocktipper2,
            },
            
           
          ],
        },
      ],
      type:"Rock Body",
      Capacity:"14 Cu Mtr",
      TipperWeight:"4.75 Ton*"

    },
    {
      title: "Rock Body Tipper",
      data: [
        {
          imgdata: [
            {
              url:Rocktipper3,
            },
            
          ],
        },
      ],
      type:"Rock Body",
      Capacity:"16 Cu Mtr",
      TipperWeight:"5.68 Ton*"

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
              <div class="w-1/2 pb-4 xs:w-full" >
                <h2 class="text-2xl font-medium  text-white xs:text-xl title-font mb-2">
                  {el.title}
                </h2>
            


                <p data-aos="fade-up" className="flex items-center text-white"><span className="font-semibold text-red-400  p-2">Type  :  </span> <span>{el.type}</span></p>
                <p data-aos="fade-up" className="flex items-center text-white"><span className="font-semibold text-red-400 p-2">Capacity   :  </span> <span>{el.Capacity}</span></p>
                {/* <p data-aos="fade-up" className="flex items-center text-white"><span className="font-semibold text-red-400 p-2">Tipper Weight  :  </span> <span> {el.TipperWeight}</span></p> */}
              
                <p data-aos="fade-up" class="leading-relaxed text-white xs:text-sm">
                *Weights are generaly & may vary from model to model. (Pl check during ordering)
                </p>
              
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default RockTipper;
