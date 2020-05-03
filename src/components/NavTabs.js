import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light barColor">
        <Link
          to="/"
          className="navbar-brand"
        >
          Evan LaFollette
        </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link"
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className="nav-link"
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
