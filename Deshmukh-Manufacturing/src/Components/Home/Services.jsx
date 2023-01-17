import React from "react";
import "./Service.css";
function OurServices() {
  let ServicesData = [
    {
      service_no: 1,
      imag: "https://media.istockphoto.com/id/1445730299/photo/the-cnc-milling-machine-cutting-injection-mold-part-by-solid-ball-end-mill-tool.jpg?b=1&s=170667a&w=0&k=20&c=HExDoMXS89k215RveHqaxkrt7K8jWXTOblZVraQHZ2A=",
      imagtitle: "Carbide Products",
      subtitle: "Manufacturing Tungstan Carbide",
    },
    {
      service_no: 2,
      imag: "https://st2.depositphotos.com/1943809/6114/i/450/depositphotos_61145463-stock-photo-truck-transports-soil-on-the.jpg",
      imagtitle: "Tipper",
      subtitle: "Manufacturing Tipper",
    },
    {
      service_no: 3,
      imag: "https://thumbs.dreamstime.com/b/schmidt-polska-truck-motorway-schmidt-polska-polish-subsidiary-german-karl-schmidt-spedition-more-than-vehicles-123536728.jpg",
      imagtitle: "Buker",
      subtitle: "Manufacturing Bulker",
    },
    {
      service_no: 4,
      imag: "https://thumbs.dreamstime.com/b/measuring-metal-components-4052056.jpg",
      imagtitle: "Fabrication",
      subtitle: "Structural Fabrication",
    },
  ];
  return (
    <div id="services" className=" py-24 mx-auto " >
      <h1  className="text-4xl  antialiased  mb-8 font-semibold">OUR SERVICES</h1>

      <div className="flex gap-2  flex-wrap bg-red-400   mx-auto px-9 ">
        {ServicesData &&
          ServicesData.map((el) => (
            <div key={el.service_no} className="w-1/4  sm:w-2/5 border-2  xl:w-1/4  lg:w-1/4  md:w-2/5 xs:w-4/5 mx-auto">
              <div className="service-img-div">
                <img src={el.imag} alt="carbide" />
                <div className="on-img-div">
                  <h2  className="text-2xl">{el.imagtitle}</h2>
                  <button className="px-2 m-5">View More</button>
                </div>
              </div>

              <h3>{el.subtitle}</h3>
              <div className="service-infobox">


              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default OurServices;
