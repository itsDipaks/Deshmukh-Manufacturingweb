import React from "react";
import {IoIosCall} from "react-icons/io";
const Displaynumber = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-2 py-4 mx-auto flex flex-wrap">
          <div class="flex flex-wrap w-1/2 xs:w-full m-auto justify-between">
            <a href="tel:+918180060462" data-aos="zoom-out-right">
              {" "}
              <div class="p-1 lg:w-auto w-1/2 xs:w-full md:w-full">
                <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-4 xs:p-2 sm:flex-row ">
                  <div class="w-16 h-16 xs:w-10 xs:h-10 sm:mr-8 sm:mb-0 mb-4  inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
                    <IoIosCall className="w-54 " />
                  </div>
                  <div class="flex-grow xs:ml-2">
                    <h3 class="text-white text-lg title-font font-medium mb-3 xs:mb-1 xs:text-sm">
                      Shubham Deshmukh
                    </h3>
                    <p class="leading-relaxed text-base">+91 8180060462</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="tel:+91 9923375826" data-aos="zoom-out-left">
              {" "}
              <div class="p-1 lg:w-auto w-1/2 xs:w-full md:w-full">
                <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-4 xs:p-2 sm:flex-row ">
                  <div class="w-16 h-16 xs:w-10 xs:h-10 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
                    <IoIosCall className="w-44 " />
                  </div>
                  <div class="flex-grow xs:ml-2">
                    <h3 class="text-white text-lg title-font font-medium mb-3 xs:mb-1 xs:text-sm ">
                      Mukesh Deshmukh
                    </h3>
                    <p class="leading-relaxed text-base">+91 9923375826</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Displaynumber;
