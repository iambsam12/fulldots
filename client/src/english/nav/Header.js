import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./eheader.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navs">
      <Navbar className="nav-bar">
        <Container>
          <Navbar.Brand href="#home" className="pe-5">
            <img src="./images/logo.png" alt="logo_images" height={40} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="nav_links">
              <Link to="/" className="text-decoration-none text-white">
                Home
              </Link>
            </Nav.Link>

            <Nav.Link href="#home" className="nav_links">
              ERPNext for Industries
              <div className="dropdown">
                <Link to="/erp-next-software" className="text-decoration-none">
                  <li>ERP Next softwarae</li>
                </Link>
                <li>ERPNext Health Care</li>
                <li>ERPNext Manufacturing</li>
              </div>
            </Nav.Link>
            <Nav.Link href="#home" className="nav_links">
              Resources
              <div className="dropdown">
                <li>Blog</li>
                <li>Case Study</li>
              </div>
            </Nav.Link>

            <Nav.Link href="#home" className="nav_links">
              About Us
            </Nav.Link>
            <Nav.Link href="#home" className="nav_links">
              Contatact Us
            </Nav.Link>
            <div className="button">
              <button>Get in Touchs</button>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <div className="banner">
        <h5>YOUR DIGITAL TRANSFORMATION PARRTNER</h5>
        <h1>
          Everything You Need <br /> To Keep Doing Your Business
        </h1>
        <h4>Drive Growth & Efficiency by modernizing your legacy processes </h4>
        <button className="mt-5">Book a free consultation</button>
      </div>
    </div>
  );
};

export default Header;
