import React from "react";
import Hslider from "../../Components/Home/Hslider";
import OurServicesSlider from "../../Components/OurServicesCompo/OurServicesSlider";
import bulker1 from "../../assets/VehicalProducts/Bulker//bulker1.jpg"
import bulker2 from "../../assets/VehicalProducts/Bulker//bulker2.jpg"
import bulker3 from "../../assets/VehicalProducts/Bulker//bulker3.jpg"
import bulker4 from "../../assets/VehicalProducts/Bulker//bulker4.jpg"
import bulker5 from "../../assets/VehicalProducts/Bulker//bulker5.jpg"

import rocktipper1 from "../../assets/VehicalProducts/Rockbody/Rockbody1.jpg"
import rocktipper2 from "../../assets/VehicalProducts/Rockbody/rockbody2.png"
import rocktipper3 from "../../assets/VehicalProducts/Rockbody/Rockbody3.jpg"
import rocktipper4 from "../../assets/VehicalProducts/Rockbody/Rockbody4.jpg"

import Boxtipper1 from "../../assets/VehicalProducts/BoxBodytipper/Boxbody1.jpg"
import Boxtipper2 from "../../assets/VehicalProducts/BoxBodytipper/Boxbody2.jpg"
import Boxtipper3 from "../../assets/VehicalProducts/BoxBodytipper/Boxbody3.jpg"
import Boxtipper4 from "../../assets/VehicalProducts/BoxBodytipper/Boxbody4.jpg"
import "./ServicesPage.css";
const ServicePage = () => {
  const mydatadata = [
    {
      title: "Rock Body Bulker",
      data: [
        {
          imgdata: [
            {
              url: "http://htcarb.com/assets/img/BurnishingBush.jpg",
            },
            {
              url: "http://htcarb.com/assets/img/HeadingPallets.jpg",
            },
            {
              url: "http://htcarb.com/assets/img/TC_Bush.jpg",
            },
            {
              url: "http://htcarb.com/assets/img/TC_Flat.jpg",
            },
          ],
        },
      ],
    },
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
      <section className="text-gray-600 body-font   ">
        {mydatadata &&
          mydatadata.map((el) => (
            <div className="container px-1 py-0 mx-auto flex flex-wrap items-center m-4">
              <div className="lg:w-1/2 xs:w-full w-full mb-5 lg:mb-0 rounded-lg overflow-hidden my-1  ">
                <Hslider
                  senddata={el.data}
                  className="object-cover object-center h-full w-full xs:w-full "
                />
              </div>
              <div class="w-1/2 px-4">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  {el.title}
                </h2>
                <p class="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a class="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default ServicePage;
