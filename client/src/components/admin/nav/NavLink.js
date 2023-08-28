import React from "react";
import { Link } from "react-router-dom";

function NavLink() {
  return (
    <div className="admin-nav-link">
      <div className="admin-heads">
        <h4>
          <Link
            to="/dashboard"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Dots & Dashes
          </Link>
        </h4>
      </div>
      <div className="btn-group">
        <Link
          to="/dashboard"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "19px",
            fontWeight: "600",
            paddingLeft: "50px",
          }}
        >
          Notification
        </Link>
      </div>
      <br />
      <div className="btn-group">
        <Link
          to="/dashboard"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "19px",
            fontWeight: "600",
            paddingLeft: "50px",
          }}
        >
          Banner
        </Link>
      </div>
      <br />
      <div className="btn-group">
        <Link
          to="/all-News"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "19px",
            fontWeight: "600",
            paddingLeft: "50px",
          }}
        >
          News
        </Link>
        <br />
      </div>
      <br />
      <div className="btn-group">
        <Link
          to="/dashboard"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "19px",
            fontWeight: "600",
            paddingLeft: "50px",
          }}
        >
          Projects
        </Link>
      </div>
      <br />
    </div>
  );
}

export default NavLink;
