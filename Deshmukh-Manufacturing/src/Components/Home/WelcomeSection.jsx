import React from "react";
import { Link } from "react-router-dom";

const WelcomeSection = () => {
  return (
    <div>
      <section class="text-gray-600 body-font"  data-aos="fade-up">
        <div class="container px-5 py-14 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h2 class="text-xs text-black tracking-widest font-medium title-font mb-1">
              MANUFACTURING
            </h2>
            <h1 class="xs:text-2xl sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900">
              Welcome To{" "}
              <span className="text-red-400"> Deshmukh Manufacturing</span>
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              <span className="text-red-800"> DESHMUKH MANUFACTURIN</span>{" "}
              Private Limited. (DMPL), are in the business of fabricating custom
              equipments for Automobile and construction sector industries, like
              Material handling, And Also in Tungsten Carbide Industry We have a
              satisfied customer base spread all over India. Backed by more than
              a 17 years of experience, we offer comprehensive fabrication and
              Engineering services by providing custom & tailor made equipments.
            </p>
           <button class="flex mx-auto mt-4 text-whitebg-transparent border-1 py-1 px-8 focus:outline-none hover:bg-red-500 rounded text-lg"> <Link to="/about">Know More </Link></button>
          </div> 
          
        </div>
      </section>
    </div>
  );
};

export default WelcomeSection;
