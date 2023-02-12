import React from "react";
import backimg from "./back2.jpg";
import "./introImage.css";
const Introservices = () => {
  return (
    <>
      <section class="text-gray-600 body-font" data-aos="fade-up">
        <div class=" px-2 pt-14 pb-14 xs:pt-20 mx-auto flex flex-col">
          <div class="lg:w-4/6 xs:w-full mx-auto">
            <div class="rounded-lg h-64 overflow-hidden xs:h-44 relative">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={backimg}
              />
              <h2 className="text-black font-bold border-red-400 absolute px-4 xs:text-xl xs:left-1/4 xs:top-1/2 rounded-lg border-2 top-1/3 left-1/3 text-4xl">
                Our Products
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introservices;
