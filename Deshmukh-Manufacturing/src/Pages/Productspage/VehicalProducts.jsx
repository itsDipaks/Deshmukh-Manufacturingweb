import React, { useState } from 'react'
import Introservices from '../../Components/Page-OurServicesCompo/Introservices'
import boxbody from "../../assets/VehicalProducts/Boxbody.png"
import rocktipper from "../../assets/VehicalProducts/Rockbody/7.png"
import bulker from "../../assets/VehicalProducts/Bulker/bulkarback.jpg"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import StandardFeture from '../../Components/Page-OurServicesCompo/StandardFeture'
import ContactToGet from '../../Components/QueteToContact/ContactToGet'
import garbag from "../../assets/VehicalProducts/GarbagProducts/GARBAGE-HOPPER4.png"
const VehicalProducts = () => {
    // const passdata = {
    //     introimg:pageintroimg
    //     ,title: 'Vehical Body',
    //     description: 'Your component library for ...',
    //   };
    const ScrolltoTop = () => {
      window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    };
  useEffect(()=>{
    ScrolltoTop()
  })
      const productsinfo=[
        {id:1,
        productname:"Box Body Tipper",
        productimg:boxbody,
        productdescription:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        ,Linkto:"/boxtipper"
      },
        {
          id:2,
        productname:"Rock Body Tipper",
        productimg:rocktipper,
        productdescription:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        ,Linkto:"/rocktipper"
      },
        {
          id:3,
        productname:"Garbage Truck Body",
        productimg:garbag,
        productdescription:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        ,Linkto:"/garbagebody"
      },
        {
          id:3,
        productname:"Bulker Body",
        productimg:bulker,
        productdescription:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
      ,Linkto:"/bulkerproduct"
      },
        
    ]

  return (
    <div >
<div className='bg-black pt-14 xs:pt-14 xs:p-2'>

<Introservices  />
</div>
        <section className="text-gray-600 body-font  bg-white">
  <div className=" px-1 py-4 mx-auto ">
    <div className="flex flex-wrap -m-4 xs:m-0">
    {productsinfo  && productsinfo.map((el)=>
    <div className="p-4 md:w-1/3 xs:w-full ">
     <div className="h-full border-2  bg-gradient-to-t from-slate-800 to-black  text-grey-400 border-opacity-60 rounded-lg overflow-hidden p-8 "  data-aos="fade-up">
       <img className="lg:h-48 md:h-full w-full object-cover object-center rounded-2xl" src={el.productimg} alt="blog"/>
       <div className="p-6">
         <h1 className="title-font text-2xl font-serif text-white mb-5 mt-5 xs:text-xl tracking-wide font-semibold text-center">{el.productname}</h1>
         {/* <p className="leading-relaxed mb-3">{el.productdescription}</p> */}
         <button className='p-1  text-sm m-auto ml-24 bg-red-400 text-black xs:w-1/2 xs:ml-14 xs:ml-0'> <Link to={el.Linkto} >View Products</Link> </button>
       </div> 
     </div>
   </div>
    )} 

    </div>
  </div>


</section>


<div className="w-full">

  <StandardFeture />
</div>


<div>

  <ContactToGet/>
</div>
    </div>
  )
}

export default VehicalProducts