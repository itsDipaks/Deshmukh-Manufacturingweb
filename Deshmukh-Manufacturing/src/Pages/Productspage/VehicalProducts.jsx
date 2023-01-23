import React from 'react'
import Introservices from '../../Components/OurServicesCompo/Introservices'
import boxbody from "../../assets/VehicalProducts/Boxbody.png"
import rocktipper from "../../assets/VehicalProducts/Rocktipper.png"
import bulker from "../../assets/VehicalProducts/Rigidbulker.jpg"
import pageintroimg from "../../assets/VehicalProducts/Vehicalintroimage.jpg"
import { Link } from 'react-router-dom'
import SingleProduct from '../../Routes/SingleProduct'
import ProductModel from '../../Components/ProductModel'
const VehicalProducts = () => {
    const passdata = {
        introimg:pageintroimg
        ,title: 'Vehical Body',
        description: 'Your component library for ...',
      };

      const productsinfo=[
        {id:1,
        productname:"Box Body Tipper",
        productimg:boxbody,
        productdescription:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
      },
        {
          id:2,
        productname:"Rock Body Tipper",
        productimg:rocktipper,
        productdescription:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
      },
        {
          id:3,
        productname:"Bulker Body",
        productimg:bulker,
        productdescription:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
      },
        {
          id:4,
        productname:"Tranker Body",
        productimg:bulker,
        productdescription:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
      },
        {
          id:5,
        productname:"Transit Mixer Body",
        productimg:bulker,
        Capacity:"",
        SurfaceTreatment:"",
        Material:"",
        VehicleTypeModel:"",
        productdescription:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
      },
    ]
  return (
    <div>

<Introservices data={passdata} />

        <section className="text-gray-600 body-font bg-black">
  <div className="container px-5 py-14 mx-auto">
    <div className="flex flex-wrap -m-4">
    {productsinfo  && productsinfo.map((el)=>
     <div className="p-4 md:w-1/3">
     <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden  bg-white"  data-aos="fade-up">
       <img className="lg:h-48 md:h-full w-full object-cover object-center" src={el.productimg} alt="blog"/>
       <div className="p-6">
         <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{el.productname}</h1>
         <p className="leading-relaxed mb-3">{el.productdescription}</p>
         <Link to={`/vehicalprod/${el.id}`}><button>View Products</button></Link>
         <ProductModel/>
       </div>
     </div>
   </div>

    )} 

    </div>
  </div>
</section>
    </div>
  )
}

export default VehicalProducts