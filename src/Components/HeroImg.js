import "./HeroImgStyles.css";

import React from "react";
import FirstSlide from "../Assetts/Images/Home-main.jpg";
import SecondSlide from "../Assetts/Images/PHOTO.jpg";
import ThirdSlide from "../Assetts/Images/securityservices-1.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active circle-indicator"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            className="circle-indicator"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            className="circle-indicator"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={FirstSlide}
              height={500}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="content-heading">
                Dark & night Security Services in Manchester UK
              </h5>
              <p className="fs-5">
                We are specialists in providing trained Security Gaurds and
                Handlers in the UK. Criminals Will Be Dissuaded From Targeting
                Your Property by Our Well-Trained Security team.
              </p>
              <Link to="/Contact">
                <button className="btn mb-3">Hire Us</button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={SecondSlide}
              height={500}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="content-heading">
                Dark & night Security Services in Manchester UK
              </h5>
              <p className="fs-5">
                We are specialists in providing trained Security Gaurds and
                Handlers in the UK. Criminals Will Be Dissuaded From Targeting
                Your Property by Our Well-Trained Security team.
              </p>
              <Link to="/Contact">
                <button className="btn mb-3">Hire Us</button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={ThirdSlide}
              height={500}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="content-heading">
                Dark & night Security Services in Manchester UK
              </h5>
              <p className="fs-5">
                We are specialists in providing trained Security Gaurds and
                Handlers in the UK. Criminals Will Be Dissuaded From Targeting
                Your Property by Our Well-Trained Security team.
              </p>
              <Link to="/Contact">
                <button className="btn mb-3">Hire Us</button>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default HeroImg;
