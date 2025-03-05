import "./FooterStyles.css";

import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" footer bg-black text-white pt-5">
        <div className="container text-md-left ">
          <div className="row text-md-left">
            <div className="col-md-4 col-lg-4 col-sm-3 col-3 mt-2">
              <h5 className="orange text-uppercase font-weight-bold">Menu</h5>
              <ul className="order">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/Contact">Contact Us</a>
                </li>
                <li>
                  <a href="/policy">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 col-lg-4 col-sm-3 col-3 mt-2">
              <h5 className="orange text-uppercase font-weight-bold">
                Services
              </h5>
              <ul className="order">
                <li>
                  <a href="/UniformSecurity">Uniform Security Guard</a>
                </li>
                <li>
                  <a href="/MobilePatrolling">Mobile Petrolling Security</a>
                </li>
                <li>
                  <a href="/ConstuctionSite">Building Site Security</a>
                </li>
                <li>
                  <a href="/ParkingSite">ANPR and Car Parking Security</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-3 col-3 mt-2">
              <h5 className="orange text-uppercase font-weight-bold">
                Contacts
              </h5>
              <ul className="order">
                <li>operations@darkandnght.uk</li>
                <li>admin@darkandnight.uk</li>
                <li>asadbilal@darkandnight.uk</li>
                <li>+44 7557 073771</li>
                <li>+447312904654</li>
              </ul>
            </div>
          </div>
        </div>
        <span className="bar"></span>
        <section className="CopyRight">
          <p>Design and developed by Sentax Lab.</p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
