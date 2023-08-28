import React from "react";
import NavHead from "./nav/NavHead";
import NavLink from "./nav/NavLink";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <div className="dash">
      <div className="row dash-row">
        <div className="col-md-2 dash-nav">
          <NavLink />
        </div>
        <div className="col-md-10 dash-details">
          <NavHead />
          <hr />
          <div className="dash-screen">
            <div className="allthings">
              <div className="event-block">
                <p className="tenp">
                  1k<sup>+</sup>
                  <br />
                  <span>Project</span>
                </p>
                <div className="icon">
                  <p>
                    <i className="fas fa-book"></i>
                  </p>
                </div>
              </div>
              <div className="event-block">
                <p className="tenp">
                  7<sup>+</sup>
                  <br />
                  <span>News</span>
                </p>
                <div className="icon">
                  <p>
                    <i className="fas fa-book"></i>
                  </p>
                </div>
              </div>
              <div className="event-block">
                <p className="tenp">
                  5<sup>+</sup>
                  <br />
                  <span>Blogs</span>
                </p>
                <div className="icon">
                  <p>
                    <i className="fas fa-users"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
