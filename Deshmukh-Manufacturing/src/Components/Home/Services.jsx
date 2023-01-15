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
    <div id="services">
      <h1>OUR SERVICES</h1>

      <div className="service-box">
        {ServicesData &&
          ServicesData.map((el) => (
            <div key={el.service_no} className="service-card">
              <div className="service-img-div">
                <img src={el.imag} alt="carbide" />
                <div className="on-img-div">
                  <h2>{el.imagtitle}</h2>
                  <button>View More</button>
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
