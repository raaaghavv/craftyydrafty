import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <a className="cta-banner">
        <header>
          <p>Master the Art of Gift Packing—Sign Up for Our Next Workshop!</p>
        </header>
      </a>
      <header className="navbar">
        <div className="logo">
          <a>
            <img src="src\assets\craftyydrafty_logo.png" />
            <span>CraftyyDrafty</span>
          </a>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Workshops</a>
            </li>
            <li>
              <a href="#">Packing Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
