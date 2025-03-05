import {  useEffect } from "react";
import Navbar from "../Components/Navbar";

import AboutImage from "../Components/AboutImage";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import Image from "../Components/Image";

// import React, { useEffect } from "react";
import SecurityContent from "../Components/SecurityContent";
import CommunityContent from "../Components/CommunityContent";

const About = () => {

  useEffect(() => {
    setTimeout(() => {

    }, 1000);
  });

  return (
    <>
      <div className="dropdown-list">
        <Navbar bg="white" />
      </div>
      <div className="container-container-fluid ">
        <AboutImage />
      </div>
      <div className="container">
        <div style={{ maxWidth: "1240px" }} className="row text-center my-5 ">
          <h1 className="">About Dark And Night Security Services</h1>
        </div>
        <div style={{ maxWidth: "1350px" }} className="row">
          <p>
            At Dark And Night Security Services, we understand the paramount
            importance of safeguarding what matters most to you. As a leading
            provider of security solutions in the United Kingdom, we are
            committed to delivering unparalleled protection and peace of mind to
            our clients.
          </p>
          <p>
            With years of experience in the industry, our team comprises highly
            skilled professionals who are dedicated to ensuring the safety and
            security of your assets, property, and personnel. We specialize in a
            comprehensive range of security services tailored to meet the unique
            needs of each client, including:
          </p>
          <p>
            <span className="point-name">1. Manned Guarding:</span> Our
            licensed security officers are rigorously trained to provide on-site
            presence, deterrence, and rapid response to any security threats,
            ensuring a safe environment for your premises.
          </p>
          <p>
            <span className="point-name">2. Mobile Patrols:</span> Our
            mobile patrol units offer a proactive approach to security,
            conducting regular patrols of your property to detect and deter any
            suspicious activity, minimizing risks and vulnerabilities.
          </p>
          <p>
            <span className="point-name">3. CCTV Surveillance:</span> We
            utilize cutting-edge technology to design and install bespoke CCTV
            systems tailored to your specific requirements, providing
            round-the-clock monitoring and recording to enhance the security of
            your premises.
          </p>
          <p>
            <span className="point-name">4. Alarm Response:</span> Our rapid
            alarm response teams are on standby 24/7 to promptly investigate and
            address any alarms or security breaches, ensuring swift resolution
            and minimizing potential losses.
          </p>
          <p>
            <span className="point-name">5. Event Security:</span> From
            corporate gatherings to public events, our expert event security
            personnel are trained to manage crowds, enforce regulations, and
            mitigate potential risks, ensuring the smooth and secure execution
            of your event.
          </p>
          <p>
            At Dark And Night Security Services, we prioritize professionalism,
            reliability, and integrity in everything we do. Our unwavering
            commitment to excellence, coupled with our proactive approach to
            security, sets us apart as a trusted partner in safeguarding your
            assets and interests.
          </p>
          <p>
            Contact us today to discover how we can tailor our security
            solutions to meet your specific needs and provide you with the peace
            of mind you deserve.
          </p>
        </div>
      </div>
      <SecurityContent />
      <CommunityContent />
      <div className="container">
        <div className="row text-center my-5 ">
          <h1 className="">Company Values</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h6 style={{ color: "orange" }} className="text-center fw-bolder ">
              Our Team
            </h6>
            <p className="text-center">
              We have Managers, Supervisors and Team Leaders, but the team
              member you are most likely to see daily is our Security Officers.
              These are the people that are the engine of our company, they keep
              us moving forward. So, it’s only fair that we keep them motivated
              and fully trained for the job.
            </p>
          </div>
          <div className="col-md-4">
            <h6 style={{ color: "orange" }} className="text-center fw-bolder ">
              Our Ethics
            </h6>
            <p className="text-center">
              We believe in work ethics equally as in achieving our targets.
              Therefore, by clearly depicting policy guidelines, ethics help us
              create an environment of trust and respect. Moreover, we strive to
              reduce our carbon footprints as much as possible. We also try to
              consume less paper as well as energy to make our company
              environmentally friendly too.
            </p>
          </div>
          <div className="col-md-4">
            <h6 style={{ color: "orange" }} className="text-center fw-bolder ">
              Our Goals
            </h6>
            <p className="text-center">
              We are determined to provide the best possible services by
              integrating new technology to satisfy the needs of our customers.
              Further, we look forward to being recognized as a fair and
              transparent company by our customers and workforce. We strive to
              provide accurate information to our customers to gain their trust
              and confidence in our services
            </p>
          </div>
        </div>
      </div>
      <Content
        heading="Enough About Us, Let’s Talk About You!"
        text="You will want us to be very accessible so that you can contact us whenever you want to discuss your concerns. There will be times when your requirements might change at short notice or you might just need some advice, this is no problem for us as we pride ourselves on being accessible. Our job is to provide you with peace of mind."
        button="Contact With Our Expert"
      />
      <Image />
      <Footer />
    </>
  );
};

export default About;
