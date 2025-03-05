import React from "react";
import "./community.css";
import image1 from "../Assetts/Images/CEO.jpg";
import image2 from "../Assetts/Images/security-director.jpeg";
import image3 from "../Assetts/Images/security-head.jpeg";
import image4 from "../Assetts/Images/captain.jpeg";

function CommunityContent() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 mb-5">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src={image1}
                  width={250}
                  height={220}
                  className="rounded-circle"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <h1>CEO</h1>
                <p>
                  They are responsible for making critical decisions,
                  communicating with stakeholders, and leading the organization
                  through the recovery process. CEOs who are well-versed in
                  cybersecurity are better equipped to handle these crises
                  effectively, minimizing damage and downtime.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mt-md-3">
                <img
                  src={image2}
                  width={250}
                  height={220}
                  className="rounded-circle"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <h1>Security Director</h1>
                <p>
                  Directors of security oversee an organization's security
                  department. They administer and maintain policies to assure
                  the safety of property, assets, and people in an organization.
                  They recruit, train, and schedule security personnel.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src={image3}
                  width={250}
                  height={220}
                  className="rounded-circle"
                  alt=""
                />
              </div>
              <div className="col-lg-6 ">
                <h1>Head of Security</h1>
                <p>
                  The Head of Security is a senior-level executive responsible
                  for overseeing an organization's overall Security strategy.
                  They work closely with other executives and stakeholders to
                  ensure that the organization's security policies and
                  procedures align with its business goals.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <img
                  src={image4}
                  width={250}
                  height={220}
                  className="rounded-circle"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <h1>Security Captain</h1>
                <p>
                  Directs the operations and the management of one of the major
                  functional areas within a security unit. Manages security
                  patrol units; Reviews, develops, implements, and recommends
                  security training programs. Assesses, plans, and evaluates
                  area operational plans and deployments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunityContent;
