
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-green">
      <a className="navbar-brand mx-lg-5 fs-1 ms-3">SoftSkin</a>

      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon "></span>
       
      </button>

      <div className={`collapse navbar-collapse ${open ? "show" : ""} align-items-center`} id="main">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-lg-3 text-white ms-3">
          <li className="nav-item">
            <a className="nav-link" href="#Learn_Section" onClick={() => setOpen(false)}>Learn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Explore_Section" onClick={() => setOpen(false)}>Explore</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Content_Section" onClick={() => setOpen(false)}>Content</a>
          </li>
        </ul>

        <ul className="navbar-nav d-flex flex-col align-items-start ms-3 mb-2 mb-lg-0 pt-lg-2 me-3">
          <li className="nav-item">
            <a className="nav-link text-white" href="#" onClick={() => setOpen(false)}>
              <i className="fa-solid fa-cart-shopping fs-5"></i> Cart
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link mx-lg-3 text-white" href="#" onClick={() => setOpen(false)}>
              <i className="fa-solid fa-earth-americas"></i> EN
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle mx-lg-5"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Logged in as Samer
            </a>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                  My Courses <i className="fa-solid fa-book"></i>
                </a>
              </li>
              <li>
                <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                  Theme <i className="fa-solid fa-moon"></i>
                </a>
              </li>
              <li>
                <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                  Settings <i className="fa-solid fa-gear"></i>
                </a>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <a className="dropdown-item d-flex justify-content-between align-items-center text-danger" href="#">
                  Logout <i className="fa fa-sign-out"></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}