import React from "react";
import Aboutintro from "../../Components/AboutCompo/Aboutintro";
import ContactForm from "../../Components/ContactForm";
import Listingdata from "../../Components/AboutCompo/Listingdata";
import MapEmbeded from "../../Components/MapEmbeded";
import Content from "../../Components/AboutCompo/Content";

const About = () => {
  const Basicdata = [
    {title: "Nature of Business", info: "Manufacturer"},
    {title: "Company CEO", info: "Mukesh Deshmukh"},
    {title: "Registered Address", info: "K-5,MIDC,Sinnar,dist.Nashik (422113)"},
    {title: "Total Number of Employees", info: "4"},
    {title: "Year of Establishment", info: "2015"},
    {
      title: "Legal Status of Firm",
      info: "Private Limited Company (Ltd./Pvt.Ltd.)",
    },
  ];

  const infrastructure = [
    {title: "Location Type", info: "URBAN"},
    {title: "Building Infrastructure", info: "Permanent"},
    {title: "Size of Premises", info: "1200 square feet"},
    {title: "Space Around", info: "Front porch"},
  ];
  const Statutoryprofile = [
    {title: "Tan No.", info: "NSKA0*****"},
    {title: "Banker", info: "BANK OF BARODA"},
    {title: "GST No.", info: ""},
    {title: "CIN No.", info: ""},
  ];

  const ourTeam = {
    HeadTitle: "Our teams",
    info: "At our organization, we have appointed personnel having deep knowledge and expertise in their respective domain, which contributes constantly in the manufacture of offered equipment’s. These professionals are choosing based on their previous industry experience and their area of expertise. We have performed divisions at team level so that tasks are carried out in a coordinated and trouble free manner",
    subtitle: "Personals that we have in our team are:",
    list: [
      "Quality controllers",
      "Engineers",
      "Manufacturing personnel",
      "Administrative staff",
      "Marketing & sales",
      "Logistic staff",
    ],
  };
  const Whyus = {
    HeadTitle: "Why Us?",
    info: "With our customized approach, we manufacture offered equipment’s as per the universal quality standards. Equipment’s that we offer are developed backed by innovative technologies and new ideas of our well qualified personnel’s. These qualitative principles have helped us to be known as a prominent organization in the market. We ensure that deliveries made at the clients end must be defect free and quality approved, so that we are able to create a long-term relationships with our valuable customers.",
    subtitle: "Points to prefer us are:",
    list: [
      "Hi-tech infrastructure",
      "Timely delivery",
      "Advanced machinery",
      "Cost-effective price range",
      "Ethical business policies",
      "Transparent business dealings",
    ],
  };

  return (
    <>
      {/* ----------About intro section ---------- */}
      <Aboutintro />



      {/* --------- Basic Info----------- */}
      <div className="text-left  mb-14  w-auto ">
        <h1
          className="sm:text-3xl text-2xl font-medium title-font ml-44 xs:text-lg xs:ml-4 mb-5 text-black"
          data-aos-anchor-placement="center-bottom"
          data-aos="fade-right"
        >
          Basic Information
        </h1>
        <Listingdata Data={Basicdata} />
      </div>



      {/* --------- infrastructure Info----------- */}
      <div className="text-left  mb-14  w-auto">
        <h1
          className="sm:text-3xl text-2xl font-medium title-font ml-44 xs:text-lg  xs:ml-4 mb-5 text-black"
          data-aos-anchor-placement="center-bottom"
          data-aos="fade-right"
        >
          Infrastructure
        </h1>
        <Listingdata Data={infrastructure} />
      </div>



      {/* --------- Statutory Profile----------- */}
      <div className="text-left  mb-14  w-auto">
        <h1
          className="sm:text-3xl text-2xl font-medium title-font ml-44  xs:ml-4 xs:text-lg mb-5 text-black"
          data-aos-anchor-placement="center-bottom"
          data-aos="fade-right"
        >
          Statutory Profile
        </h1>
        <Listingdata Data={Statutoryprofile} />
      </div>



      {/* --------- Our team----------- */}
      <div className="text-left  mb-14  w-auto">
        <Content data={ourTeam} />
      </div>



      {/* --------- Why Us----------- */}
      <div className="text-left  mb-14  w-auto">
        <Content data={Whyus} />
      </div>



      {/* ----------Map section ---------- */}
      <div className="text-center   w-auto">
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
    </>
  );
};

export default About;
