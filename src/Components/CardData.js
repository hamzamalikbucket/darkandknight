import "./CardStyles.css";

import React from "react";
import { CiDollar } from "react-icons/ci";
import { PiSirenDuotone } from "react-icons/pi";
import { FaParking } from "react-icons/fa";
import { LuBuilding } from "react-icons/lu";
import { GrUserWorker } from "react-icons/gr";
import { GiSpookyHouse } from "react-icons/gi";

const CardData = () => {
  return (
    <>
    <div className="Data">

  
      <div className=" bg-image">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <h1>Industries We Serve</h1>
            <p>
              Dark & night Services Limited offers a variety of security services
              to businesses around the United Kingdom. So, whether you call for
              Business Security, Construction & Building Site Security,
              Residential, Commercial, or something else, we're committed to
              giving outstanding service every time.
            </p>
          </div>
        </div>
        <div>
            
        <div className="card-container mt-4 ">
          <div className="card-content">
            <CiDollar
              className="m-auto py-2"
              size={80}
              style={{ color: "#1761A0", marginRight: "1rem" }}
            />
            <h3>Security Guards</h3>
          </div>
          <div className="card-content">
            <PiSirenDuotone
              className="m-auto py-2"
              size={80}
              style={{ color: "#1761A0", marginRight: "1rem" }}
            />
            <h3>Contruction Site Security</h3>
          </div>
          <div className="card-content">
            <FaParking
              className="m-auto py-2"
              size={80}
              style={{ color: "#1761A0", marginRight: "1rem" }}
            />
            <h3>Comparking Security</h3>
          </div>

          <div className="card-content">
            <GiSpookyHouse
              className="m-auto py-2"
              size={80}
              style={{ color: "#1761A0", marginRight: "1rem" }}
            />
            <h3>Uniform Security Guard</h3>
          </div>
          <div className="card-content">
            <LuBuilding
              className="m-auto py-2"
              size={80}
              style={{ color: "#1761A0", marginRight: "1rem" }}
            />
            <h3>Mobile Patrolling</h3>
          </div>
          <div className="card-content">
            <GrUserWorker
              className="m-auto py-2"
              size={80}
              style={{ color: "#1761A0", marginRight: "1rem" }}
            />
            <h3>Firearm Detection</h3>
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CardData;
