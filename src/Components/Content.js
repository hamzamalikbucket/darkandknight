import "./ContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const Content = (props) => {
  return (
    <section>
      <div className="container-fluid center">
        <div className="row text-white">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="header-content">
              <h3>{props.heading}</h3>
              <p className="content-paragraph text-center text-white font-weight-bolder">
                {props.text}
              </p>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="my-2">
            <Link to="/about">
              <button className="btn">{props.button}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
