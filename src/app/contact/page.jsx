import React from "react"


import ContactDetails from "../../components/contact/ContactDetails"
import ContactForm from "../../components/contact/ContactForm"


const Contact = () => {
  return (
    <div name="contact">
        
      <div className="mx-auto  lg:px-32 w-full bg-gradient-to-b from-black to-gray-800  py-20  flex   flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Contact Details */}
       
        <div className="lg:w-[40%] ">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
     
    </div>
  )
}

export default Contact