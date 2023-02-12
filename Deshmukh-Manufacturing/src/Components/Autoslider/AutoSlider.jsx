import React from 'react'
import "./AutoSlider.css"
import Rocktippr from "../../assets/VehicalProducts/Rockbody/rockbody2.png"
import Rocktippr2 from "../../assets/VehicalProducts/Rockbody/Rockbody3.jpg"
import Rocktippr3 from "../../assets/VehicalProducts/Rockbody/Rockbody4.jpg"
import boxtipper from "../../assets/VehicalProducts/BoxBodytipper/box4.jpg"
import boxtipper2 from "../../assets/VehicalProducts/BoxBodytipper/box5.png"
import boxtipper3 from "../../assets/VehicalProducts/BoxBodytipper/box6.png"
import Bulker from "../../assets/VehicalProducts/Bulker/Bulker3.jpg"
import Bulker2 from "../../assets/VehicalProducts/Bulker/Bulker4.jpg"
import Bulker3 from "../../assets/VehicalProducts/Bulker/Bulker5.jpg"
import garbage from "../../assets/VehicalProducts/GarbagProducts/GARBAGE-HOPPER3.png"

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
            <div className='slide '>
                <img  src={garbage} alt="" />
                <p>Garbage</p>
            </div>
            <div className='slide '>
                <img  src={Rocktippr2} alt="" />
                <p>Rock Body Tipper</p>
            </div>
            
            <div className='slide'>
                <img src={Bulker2} alt="" />
                <p>Bulker</p>
            </div>
            <div className='slide'>
                <img src={boxtipper2} alt="" />
                <p>Box Body Tipper</p>
            </div>
            <div className='slide'>
                <img src={Bulker} alt="" />
                <p>Bulker</p>
            </div>
            <div className='slide '>
                <img  src={garbage} alt="" />
                <p>Garbage</p>
            </div>
            <div className='slide'>
                <img src={boxtipper3} alt="" />

                <p>Box Body Tipper</p>
            </div>
            <div className='slide '>
                <img  src={Rocktippr3} alt="" />
                <p>Rock Body Tipper</p>
            </div>
            <div className='slide'>
                <img src={Bulker3} alt="" />
                <p>Bulker</p>
            </div>
        </div>
    </div>
  )
}

export default AutoSlider