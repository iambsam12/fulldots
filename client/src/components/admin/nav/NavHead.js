import React from "react";
import { LOGOUT } from "../../store/types/UserTypes";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style.css";

function NavHead() {
  const dispatch = useDispatch();
  const logOut = () => {
    localStorage.removeItem("myToken");
    dispatch({ type: LOGOUT });
  };
  return (
    <div className="admin-head">
      <div className="dropdown">
        <p
          className="dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Admin
        </p>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li>
            <i className="fas fa-user"></i> Profile
          </li>
          <li>
            <i className="fas fa-cog"></i> Setting
          </li>
          <li>
            <Link to="/" id="alink" onClick={logOut}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavHead;
