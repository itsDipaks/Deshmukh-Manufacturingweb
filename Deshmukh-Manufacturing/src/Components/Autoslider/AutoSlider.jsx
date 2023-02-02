import React from 'react'
import "./AutoSlider.css"
import Rocktippr from "../assets/VehicalProducts/Rockbody/rockbody2.png"
import boxtipper from "../assets/VehicalProducts/BoxBodytipper/Boxbody2.jpg"
import Bulker from "../assets/VehicalProducts/Bulker/Bulker3.jpg"
import Transitmixer from "../assets/VehicalProducts/AutoSliderproducts/Transitmixier.webp"
import tanker from "../assets/VehicalProducts/AutoSliderproducts/Tanker.webp"

const AutoSlider = () => {
  return (
    <div className='slider'>
        <div className='slider-track' data-aos="fade-up">
            <div className='slide '>
                <img  src={Rocktippr} alt="" />
                <p>Rock Body Tipper</p>
            </div>
           
            <div className='slide'>
                <img src={boxtipper} alt="" />

                <p>Box Body Tipper</p>
            </div>
            <div className='slide'>
                <img src={Bulker} alt="" />
                <p>Bulker</p>
            </div>
            <div className='slide'>
                <img src={Transitmixer} alt="" />
                <p>RMC Transit Mixer</p>
            </div>
            <div className='slide'>
                <img src={tanker} alt="" />
                <p>Water Tankers</p>
            </div>
            <div className='slide '>
                <img  src={Rocktippr} alt="" />
                <p>Rock Body Tipper</p>
            </div>
           
            <div className='slide'>
                <img src={boxtipper} alt="" />

                <p>Box Body Tipper</p>
            </div>
            <div className='slide'>
                <img src={Bulker} alt="" />
                <p>Bulker</p>
            </div>
            <div className='slide'>
                <img src={Transitmixer} alt="" />
                <p>RMC Transit Mixer</p>
            </div>
            <div className='slide'>
                <img src={tanker} alt="" />
                <p>Water Tankers</p>
            </div>
            <div className='slide '>
                <img  src={Rocktippr} alt="" />
                <p>Rock Body Tipper</p>
            </div>
           
            <div className='slide'>
                <img src={boxtipper} alt="" />

                <p>Box Body Tipper</p>
            </div>
            <div className='slide'>
                <img src={Bulker} alt="" />
                <p>Bulker</p>
            </div>
            <div className='slide'>
                <img src={Transitmixer} alt="" />
                <p>RMC Transit Mixer</p>
            </div>
            <div className='slide'>
                <img src={tanker} alt="" />
                <p>Water Tankers</p>
            </div>
          
        </div>
    </div>
  )
}

export default AutoSlider