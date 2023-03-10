import React from "react";
import "./quete.css";
const ContactToGet = () => {
  return (
    <div className="mb-14 xs:mb-4 relative">
      <div className="backgraundimg"></div>
      <div className="absolute top-24 left-1/4 xs:left-4 xs:top-1/3 z-10">
        <h1 className="text-white text-4xl xs:text-2xl" data-aos="zoom-in-up">
          Contact Us Now to Get Quote
        </h1>
        <button
          className="px-4 py-1 text-white absolute xs:px-2 xs:py-1 top-18 xs:top-18"
          data-aos="zoom-in-up"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactToGet;
