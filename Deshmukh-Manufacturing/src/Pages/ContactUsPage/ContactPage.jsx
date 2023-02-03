import React, { useEffect } from "react";
import Displaynumber from "../../Components/Contact Compo/Displaynumber";
import WhatsappEmailDisplay from "../../Components/Contact Compo/WhatsappEmailDisplay";
import ContactForm from "../../Components/C-form/ContactForm";
import MapEmbeded from "../../Components/Map/MapEmbeded";
const ContactPage = () => {
  const ScrolltoTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  };
useEffect(()=>{
  ScrolltoTop()
})
  return (
    <div className=" ">
      <div className="h-auto pt-36 pb-32  flex-col align-middle justifiy-center bg-gradient-to-t from-slate-800 to-black">
        <Displaynumber />
        <WhatsappEmailDisplay />
      </div>
      <div id="ContactPage" className="shadow-2xl" style={{paddingTop: "100px"}}>
        <ContactForm />
      </div>
      {/* ----------Map section ---------- */}
      <div className="text-center mb-14 mt-28 w-auto">
        <h1
          className="sm:text-3xl text-2xl font-medium title-font mb-1 text-black"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          Location
        </h1>
        <span className="inline-block h-1 w-44 rounded bg-red-500 mt-1 mb-8" ></span>
        <MapEmbeded className="border-4  " />
      </div>
    </div>
  );
};

export default ContactPage;
