import React, { useEffect } from "react";
import Hslider from "../../Components/Home/Hslider";

import Garbage1 from "../../assets/VehicalProducts/GarbagProducts/GARBAGE-HOPPER.png"
import Garbage2 from "../../assets/VehicalProducts/GarbagProducts/GARBAGE-HOPPER3.png"
import "./SubProducts.css";
const GarbagBodyTipper = () => {
  const ScrolltoTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  };
useEffect(()=>{
  ScrolltoTop()
})
  const mydatadata = [
    {
      title: "Garbage Vehicle",
      data: [
        {
          imgdata: [
            {
              url:Garbage1,
            },
            
            
           
          ],
        },
      ],
      type:"Garbage Vehicle",
      Capacity:"1.5 cum",
      TipperWeight:""

    },
    {
      title: "Garbage Vehicle",
      data: [
        {
          imgdata: [
            {
              url:Garbage2,
            },
           
           
          ],
        },
      ],
      type:"Garbage Vehicle",
      Capacity:"2cum",
      TipperWeight:""

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
            


                <p className="flex items-center text-white"><span className="font-semibold text-red-400  p-2">Type  :  </span> <span>{el.type}</span></p>
                <p className="flex items-center text-white"><span className="font-semibold text-red-400 p-2">Capacity   :  </span> <span>{el.Capacity}</span></p>
                <p className="flex items-center text-white"><span className="font-semibold text-red-400 p-2">Vehicale Weight  :  </span> <span> {el.TipperWeight}</span></p>
              
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

export default GarbagBodyTipper;
