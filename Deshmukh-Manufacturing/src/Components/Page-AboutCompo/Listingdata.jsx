import React from "react";

const Listingdata = (values) => {
  const info = values.Data;
  return (
    <div>
      <div>
        {info &&
          info.map((el) => (
            <div key={el.id}
              data-aos="fade-up"
              className="flex w-9/12  m-auto mt-2 box-border border-2  xs:w-11/12 bg-gray-200"
            >
              <p className="w-4/12 text-rose-600 font-bold p-2 xs:text-sm">
                {el.title}
              </p>
              <p className="w-3/5 border-l-2  pl-8 border-black font-bold py-2 xs:text-sm">
                {el.info}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Listingdata;
