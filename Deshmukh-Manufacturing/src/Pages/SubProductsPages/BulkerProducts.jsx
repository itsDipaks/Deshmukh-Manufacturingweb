import React from "react";
import Hslider from "../../Components/Home/Hslider";
import OurServicesSlider from "../../Components/OurServicesCompo/OurServicesSlider";
import bulker1 from "../../assets/VehicalProducts/Bulker//bulker1.jpg"
import bulker2 from "../../assets/VehicalProducts/Bulker//bulker2.jpg"
import bulker3 from "../../assets/VehicalProducts/Bulker//bulker3.jpg"
import bulker4 from "../../assets/VehicalProducts/Bulker//bulker4.jpg"
import bulker5 from "../../assets/VehicalProducts/Bulker//bulker5.jpg"
import "./SubProducts.css";
const BulkerProducts = () => {
  const mydatadata = [

    {
        title: "Bulker",
        data: [
          {
            
            imgdata: [
              {
                url:bulker1,
              },
              {
                url:bulker2,
              },
              {
                url:bulker3,
              },
              {
                url:bulker4,
              },
              {
                url:bulker5,
              },
             
            ],
          },
        ],
      },
  ];

  return (
    <div>
         <section className="text-gray-600 body-font w-full  pt-20 bg-black">
        {mydatadata &&
          mydatadata.map((el) => (
            <div className=" px-1 py-2 mx-auto w-full bg-gradient-to-t from-gray-600 to-black  flex flex-wrap items-center  m-4 ">
              <div className="lg:w-1/2 xs:w-full w-full mb-5 lg:mb-0 rounded-lg overflow-hidden my-1  " data-aos="fade-right">
                <Hslider
                  senddata={el.data}
                  className="object-cover object-center h-full xs:h-1/2 w-full xs:w-1/2 "
                />
              </div>
              <div class="w-1/2 px-4 xs:w-full" >
                <h2 class="text-2xl font-medium  text-red-400 xs:text-xl title-font mb-2">
                  {el.title}
                </h2>
                <p class="leading-relaxed text-white xs:text-sm">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>

                <p className="flex items-center text-white"><span className="font-semibold text-red-400  p-2">Material :  </span> <span>Vehicle products </span></p>
                <p className="flex items-center text-white"><span className="font-semibold text-red-400 p-2">Size Aprox  :  </span> <span>Vehicle products </span></p>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default BulkerProducts;
