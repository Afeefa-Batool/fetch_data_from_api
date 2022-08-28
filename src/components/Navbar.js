import React from "react";
 import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fetch">
                Using Fetch
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/asyn">
                Async Await
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/btn">
               ButtonClick
                </Link>
              </li>
 
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
