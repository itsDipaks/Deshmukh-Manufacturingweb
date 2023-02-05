



import React, { useEffect } from "react";
import Hslider from "../../Components/Home/Hslider";

import Bulkar1 from "../../assets/VehicalProducts/Bulker/rigid-bulker 1.jpg"
import Bulkar2 from "../../assets/VehicalProducts/Bulker/bulker2.jpg"
import Bulkar3 from "../../assets/VehicalProducts/Bulker/Bulker4.jpg"
import Bulkar4 from "../../assets/VehicalProducts/Bulker/Bulker3.jpg"
import "./SubProducts.css";
const BulkerProducts = () => {
  const ScrolltoTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  };
useEffect(()=>{
  ScrolltoTop()
})
  const mydatadata = [
    {
      title: "Rigid Bulker",
      data: [
        {
          imgdata: [
            {
              url:Bulkar3,
            },
            {
              url:Bulkar2,
            },
            {
              url:Bulkar3,
            },
            {
              url:Bulkar4,
            },
            
           
          ],
        },
      ],
      type:"Bulker Body",
      Capacity:"23 Cu Mtr",
      TipperWeight:"31 Ton*"

    },
    {
      title: "Rigid Bulker",
      data: [
        {
          imgdata: [
            {
              url:Bulkar1,
            },
            {
              url:Bulkar1,
            },
            {
              url:Bulkar2,
            },
            {
              url:Bulkar4,
            },
            
           
          ],
        },
      ],
      type:"Bulker Body",
      Capacity:"25 Cu Mtr",
      TipperWeight:"25 Ton*"

    },
    {
      title: "Rigid Bulker",
      data: [
        {
          imgdata: [
            {
              url:Bulkar4,
            },
            {
              url:Bulkar3,
            },
            {
              url:Bulkar1,
            },
            {
              url:Bulkar2,
            },
            
           
          ],
        },
      ],
      type:"Bulker Body",
      Capacity:"25 Cu Mtr",
      TipperWeight:"37 Ton*"

    },
    {
      title: "Rigid Bulker",
      data: [
        {
          imgdata: [
            {
              url:Bulkar2,
            },
            {
              url:Bulkar3,
            },
            {
              url:Bulkar3,
            },
            {
              url:Bulkar1,
            },
            
           
          ],
        },
      ],
      type:"Bulker Body",
      Capacity:"27 Cu Mtr",
      TipperWeight:"4.17 Ton*"

    },

   
  ];

  return (
    <div>
      <section className="text-gray-600 body-font w-full bg-black pt-24 ">
        {mydatadata &&
          mydatadata.map((el) => (
            <div className=" px-4 py-4   mx-auto w-full bg-gradient-to-t from-gray-600 to-black   flex flex-wrap  items-center   ">
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
                <p className="flex items-center text-white"><span className="font-semibold text-red-400 p-2">Gross Vehicle Weight (GVW)  :  </span> <span> {el.TipperWeight}</span></p>
              
                <p class="leading-relaxed text-white xs:text-sm">
                *When coupled with suitable chassis, Weights mentioned are as per RTO Rules & actual may vary from model to model.
                </p>
              
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default BulkerProducts;

;
