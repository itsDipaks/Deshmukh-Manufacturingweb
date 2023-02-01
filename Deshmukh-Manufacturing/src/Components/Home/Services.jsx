import React from "react";
import {Link, NavLink} from "react-router-dom";
import "./Service.css";
// import tipperbody from "../../assets/VehicalProducts/Boxbody.png"
import tipper from "../../assets/VehicalProducts/Tipperbackgraund.jpg"
function Services() {
  let ServicesData = [
    {
      service_no: 1,
      imag: tipper,
      imagtitle: "Tipper",
      heading: "Tipper",
      link: "/vehicalprod",
      description:
        "Tungsten carbide is the number one choice in manufacturing for lathe machines and automatic machines. Basic Carbide provides less stock on you preforms which greatly reduces machine cycle times.",
      subtitle: "Product 1",
    },
    {
      service_no: 2,
      imag: "https://media.istockphoto.com/id/1445730299/photo/the-cnc-milling-machine-cutting-injection-mold-part-by-solid-ball-end-mill-tool.jpg?b=1&s=170667a&w=0&k=20&c=HExDoMXS89k215RveHqaxkrt7K8jWXTOblZVraQHZ2A=",
      imagtitle: "SPM",
      heading: "SPM",
      link: "/vehicalprod",
      description:
        "Tungsten carbide is the number one choice in manufacturing for lathe machines and automatic machines. Basic Carbide provides less stock on you preforms which greatly reduces machine cycle times.",
      subtitle: "Product 1",
    },
    // {
    //   service_no: 3,
    //   imag: "https://st2.depositphotos.com/1943809/6114/i/450/depositphotos_61145463-stock-photo-truck-transports-soil-on-the.jpg",
    //   imagtitle: "Tungsten Carbide",
    //   heading: "Tungsten Carbide",
    //   link: "/vehicalprod",
    //   description:
    //     "Tungsten carbide is the number one choice in manufacturing for lathe machines and automatic machines. Basic Carbide provides less stock on you preforms which greatly reduces machine cycle times.",
    //   subtitle: "Product 2",
    // },
  ];
  return (
    <>
 
     
     
      <div className="flex gap-8  flex-wrap  w-full mx-auto px-2 ">
        {ServicesData &&
          ServicesData.map((el) => (
            <div data-aoS="fade-up"
              key={el.service_no}
              className="w-2/3  sm:w-2/3 border-2 shadow-2xl rounded-3xl xl:w-2/5 lg:w-2/5  md:w-2/5 xs:w-11/12 mx-auto bg-white  shadow-lg"
            >
              <NavLink to={el.link}>
                <div className="service-img-div">
                  <img src={el.imag} alt="carbide" />
                  <div className="on-img-div">
                    <h2 className="text-4xl xs:text-2xl font-serif">{el.imagtitle}</h2>
                    <button className="px-4 py-2 m-5 xs:px-1 xs:py-1">View More</button>
                  </div>
                </div>
              </NavLink>
              {/* <NavLink to={el.link}>
                <div className="service-infobox text-start box-border px-6 mb-4">
                  <h2 class="tracking-widest text-indigo-500 text-sm mt-4 font-medium title-font">
                    {el.subtitle}
                  </h2>
                  <h2 class="text-lg text-gray-900 font-medium title-font m-2">
                    {el.heading}
                  </h2>
                  <p class="leading-relaxed text-base">{el.description}</p>
                </div>
              </NavLink> */}
            </div>
          ))}
      </div>
    </>
  );
}

export default Services;
