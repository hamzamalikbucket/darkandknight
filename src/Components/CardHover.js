import "./CardHoverStyles.css";
import { MdWifiCalling3 } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { LuAlarmClock } from "react-icons/lu";

import React from "react";

const CardHover = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row text-center py-4">
          <h2 className="heading-touch">Get In Touch With Us</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 border">
            <div className="contact-card">
              <MdWifiCalling3
                className="m-auto py-2 d-flex justify-content-center "
                size={80}
                style={{ color: "#1761A0" }}
              />
              <h4 className="text-center py-3 line">PHONE</h4>
              <p className="text-center line">
                <span className="fw-bold">PHONE Control Room 24/7/365</span>
              </p>
              <p className="p-hover text-center line">+44 7557 073771</p>
              <p className="text-center line">
                <span className="fw-bold ">Mobile No.</span>{" "}
                <span className="p-hover">+447312904654 </span>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 border">
            <div className="contact-card">
              <FaAddressBook
                className="m-auto py-2 d-flex justify-content-center "
                size={80}
                style={{ color: "#1761A0" }}
              />
              <h4 className="fw-bold text-center py-3">LOCATION</h4>
              <p className="text-center p-hover">
                116a Business First, <br /> Business Centre Davyfield <br />{" "}
                Road Blackburn <br />
                Lancashire BB1 2QY
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 border">
            <div className="contact-card">
              <TfiEmail
                className="m-auto py-2 d-flex justify-content-center "
                size={80}
                style={{ color: "#1761A0" }}
              />
              <h4 className="fw-bold text-center py-3">Email</h4>
              <p className="p-hover text-center line">
                operations@darkandnght.uk
              </p>
              <p className="p-hover text-center line">admin@darkandnight.uk</p>
              <p className="p-hover text-center line">
                asadbilal@darkandnight.uk
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 border">
            <div className="contact-card">
              <LuAlarmClock
                className="m-auto py-2 d-flex justify-content-center "
                size={80}
                style={{ color: "#1761A0" }}
              />
              <h4 className="text-center py-3">WORKING HOURS</h4>
              <p className="text-center ">Always Open (24 hours)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHover;
