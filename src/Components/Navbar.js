import React, { useState } from "react";

import logo from "../Assetts/Images/Dark-logo.jpg";

import "./navbarStyles.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

function CollapsibleExample(props) {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <Container fluid>
      <Navbar
        className={
          props.bg == "black"
            ? color
              ? "scrolled-header scrolled-header"
              : "scrolled-header nav-header  "
            : color
            ? "scrolled-header nav-header"
            : "  nav-header header"
        }
        collapseOnSelect
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
      >
        <div className="logo">
          <Navbar.Brand className="link-item" href="/">
            <img src={logo} alt="logo" height={"70px"} />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle className="me-3" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-5 align-nav-items">
            <Link className="link-item" to="/">
              Home
            </Link>
            <NavDropdown
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              id="nav-dropdown"
              title={<span className="Service my-auto">Service</span>}
              data-bs-theme="dark"
            >
              <Link className="NavDropdown.Item" to="/ConstuctionSite">
                Construction and Building Site Security
              </Link>{" "}
              <br />
              <Link className="NavDropdown.Item" to="/ParkingSite">
                ANPR And Car Parking Security
              </Link>{" "}
              <br />
              <Link className="NavDropdown.Item" to="/MobilePatrolling">
                Mobile Patrolling Security
              </Link>{" "}
              <br />
              <Link className="NavDropdown.Item" to="/UniformSecurity">
                Uniform Security Guard
              </Link>{" "}
            </NavDropdown>
            <Link className="link-item" to="/about">
              About Us
            </Link>
            <Link className="link-item" to="/Contact">
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default CollapsibleExample;
