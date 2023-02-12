import React from "react";
import whatsappicon from "../../assets/Icons/whatsappicon.png";
import emailicon from "../../assets/Icons/gmailicon.png";
const WhatsappEmailDisplay = () => {
  return (
    <div className="flex xs:flex-col justfiy-between w-3/5 gap-x-2.5 xs:w-11/12  m-auto   justify-between" data-aos="fade-up">
       <a className="flex w-2/5 xs:w-64 m-auto items-center rounded-xl border p-4" href="https://wa.me/918600405446?text=I'm%20inquiring%20about%20the%20apartment%20listing">
        <img className="w-10 xs:w-8 " src={whatsappicon} alt="" />
        <h2 className="ml-8 xs:ml-2 xs:text-sm  text-white">Connect On Whatsapp</h2>
</a>
      <div className="flex w-2/5 xs:w-64 m-auto items-center xs:mt-4 rounded-xl border p-4" data-aos="fade-up">
        <img className="w-10 xs:w-8 ml-1" src={emailicon} alt="" />
        <h2 className="ml-8 xs:ml-1 xs:text-sm text-white">dmpl1857@gmail.com</h2>
      </div>
    </div>
  );
};

export default WhatsappEmailDisplay;
