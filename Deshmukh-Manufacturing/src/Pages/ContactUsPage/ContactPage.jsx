import React from "react";
import Displaynumber from "../../Components/Contact Compo/Displaynumber";
import ContactForm from "../../Components/ContactForm";
import MapEmbeded from "../../Components/MapEmbeded";
import chatwithwhatsapp from "../../assets/Icons/ChatuswhatsappIcon.png";
const ContactPage = () => {
  return (
    <div className="mt-44">
      <div >
        <Displaynumber />
      </div>

      <div>
        <a href="https://wa.me/918600405446?text=I'm%20inquiring%20about%20the%20apartment%20listing">
          <img src={chatwithwhatsapp} className="w-62 m-auto" alt="" />
        </a>
      </div>

      <div id="ContactPage" style={{paddingTop: "120px"}}>
        <ContactForm />
      </div>
      {/* ----------Map section ---------- */}
      <div className="text-center bg-black   w-auto">
        <h1
          className="sm:text-3xl text-2xl font-medium title-font mb-1 text-black"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          Location
        </h1>
        <span className="inline-block h-1 w-44 rounded bg-red-500 mt-1 mb-8"></span>
        <MapEmbeded className="border-4  " />
      </div>
    </div>
  );
};

export default ContactPage;
