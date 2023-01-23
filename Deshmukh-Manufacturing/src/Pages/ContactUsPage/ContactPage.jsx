import React from 'react'
import Displaynumber from '../../Components/Contact Compo/Displaynumber'
import ContactForm from '../../Components/ContactForm'

const ContactPage = () => {
  return (
    <>  
    <div>
      <Displaynumber/>
    </div>
      <div id='ContactPage' style={{paddingTop:"120px"}}>
        <ContactForm/>
    </div>

    </>

  )
}

export default ContactPage