import React from "react";
import Aboutintro from "../../Components/AboutCompo/Aboutintro";
import Listingdata from "../../Components/AboutCompo/Listingdata";
import Content from "../../Components/AboutCompo/Content";
import TestNavbar from "../../Components/TestNavbar";

const About = () => {
  const Basicdata = [
    {title: "Nature of Business", info: "Manufacturer"},
    {title: "Director", info: "Mukesh Deshmukh"},
    {title: "Registered Address", info: "K-5,MIDC,Sinnar,dist.Nashik (422113)"},
    {title: "Total Number of Employees", info: "12"},
    {title: "Year of Establishment", info: "2007"},
    {
      title: "Legal Status of Firm",
      info: "Private Limited Company",
    },
  ];

  const infrastructure = [
    {title: "Location Type", info: "Industrial Area"},
    {title: "Building Infrastructure", info: "Permanent"},
    {title: "Size of Premises", info: "10500 square feet"},
    {title: "Space Around", info: "Left porch"},
  ];
  const Statutoryprofile = [
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
    <div>
      {/* ----------About intro section ---------- */}
      <Aboutintro />
      {/* --------- Basic Info----------- */}
      <div className="text-left  mb-14  w-auto ">
        <h1
          className="sm:text-3xl text-2xl font-medium title-font ml-44 mt-14 xs:text-lg xs:ml-4 mb-5 text-black"
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
    </div>
  );
};

export default About;
