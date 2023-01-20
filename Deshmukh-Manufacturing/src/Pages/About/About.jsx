import React from "react";
import Aboutintro from "../../Components/AboutCompo/Aboutintro";
import ContactForm from "../../Components/ContactForm";
import MapEmbeded from "../../Components/MapEmbeded";

const About = () => {
  return (
    <>
      {/* ----------About intro section ---------- */}
      <Aboutintro />

      <div className="flex items-center bg-red-100 px-4 xs:flex-col xs:py-14">
        {/* ----------Contact Form section ---------- */}
        <ContactForm />

        {/* ----------Map section ---------- */}
        <div className="text-center  ">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-1 text-black"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            Location
          </h1>
          <span className="inline-block h-1 w-28 rounded bg-red-500 mt-1 mb-8"></span>
          <MapEmbeded className="border-4 " />
        </div>
      </div>
    </>
  );
};

export default About;
