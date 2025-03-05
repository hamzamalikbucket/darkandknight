import Navbar from "../Components/Navbar";
import AboutImage from "../Components/AboutImage";
import ContactImage from "../Components/ContactImage";
import SecurityContent from "../Components/SecurityContent";
import Footer from "../Components/Footer";
import Image from "../Components/Image";

import React from "react";
import CardHover from "../Components/CardHover";
import ContactForm from "../Components/ContactForm";




const Contact = () => {

  
  return (
    <>
      <Navbar />
      <ContactImage />
      <CardHover />
      <SecurityContent />
      <div className="container-fluid">
        <div className="row my-5">
          <div className="col-md-6 my-5">
            {/* <h1>This is my Google Maps web page</h1> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.     45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-md-6">
            <ContactForm />
          </div>
        </div>
      </div>
      <Image />
      <Footer />
    </>
  );
};

export default Contact;
