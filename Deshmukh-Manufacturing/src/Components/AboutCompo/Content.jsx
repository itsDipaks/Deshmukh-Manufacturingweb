import { list } from "postcss";
import React from "react";

const Content = (data) => {
    console.log(data.data)
    const {HeadTitle,info,list,subtitle}=data.data
  return (
    <>
      <div className="w-4/5 m-auto mb-14 xs:w-11/12 border p-4 drop-shadow-lg" >
        <h1 className="text-center p-4 border-b-2 text-2xl font-bold  xs:font-bold" data-aos="fade-up">{HeadTitle}</h1>
        <h2 className="xs:text-sm text-lg mt-4	" data-aos="fade-up">{info}</h2>
        <h3 className="ml-14 p-4 xs:ml-0 xs:p-2 font-semibold text-lg 	xs:text-sm"  data-aos="fade-up">{subtitle}</h3>
<ul>
{list.map((el)=><li className="p-2 ml-14 xs:p-1 text-lg xs:text-sm xs:ml-1	"data-aos="fade-up">*{el}</li>
        )}
</ul>
        
      </div>
    </>
  );
};

export default Content;
