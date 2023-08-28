import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header1 = () => {
  return (
    <div className="first-header">
      <div className="location">
        <li>
          <i className="fas fa-map-marker-alt" id="icon"></i>{" "}
          <span>गौरादह-5,झापा ,नेपाल</span>
        </li>
      </div>
      <div className="contact">
        <li>
          <i className="fas fa-envelope" id="icon"></i>{" "}
          <span>sfaclmaharanijhoda@gmail.com</span>
        </li>
        <li>
          <i className="fas fa-phone-alt" id="icon"></i> <span>023-419017</span>
        </li>
        {/* <li><Link to='/english' style={{
                    color: '#fc8803',
                    textDecoration: 'none',
                    fontWeight: '700',
                    marginLeft: '40px',
                    backgroundColor: '#fff',
                    padding: '0px 5px'
                }}><span>English</span></Link></li> */}
        <li className="fhead">
          {" "}
          &nbsp; &nbsp;
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            NP
          </NavLink>{" "}
          |
          <NavLink
            to="/english"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            &nbsp; EN
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default Header1;
