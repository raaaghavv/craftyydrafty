import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isSideNavOpen, set_isSideNavOpen] = useState(false);

  useEffect(() => {
    if (isSideNavOpen) {
      document.documentElement.classList.add("prevent-scroll");
    } else {
      document.documentElement.classList.remove("prevent-scroll");
    }
    return () => {
      document.documentElement.classList.remove("prevent-scroll");
    };
  }, [isSideNavOpen]);

  function toggleSidebar() {
    set_isSideNavOpen(!isSideNavOpen);
  }

  document.getElementById;

  const location = useLocation(); // Get the current location object

  // Helper function to determine if a hash link is active
  const isHashNavLinkActive = (hashLink) => {
    // hashLink will be like "#home", "#about_us", etc.
    return location.hash === hashLink;
  };

  return (
    <>
      <section id="header">
        <Link to="/#workshops" className="cta-banner">
          <header>
            <p>Master the Art of Gift Packing—Sign Up for Our Next Workshop!</p>
          </header>
        </Link>
        <header className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="craftyydrafty_logo.png" />
              <span>CraftyyDrafty</span>
            </Link>
          </div>
          <nav className="front-nav">
            <ul className="nav-links">
              <li>
                <NavLink
                  to="/#workshops"
                  className={() =>
                    isHashNavLinkActive("#workshops")
                      ? "link-active"
                      : "link-inactive"
                  }
                >
                  Workshops
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#services"
                  className={() =>
                    isHashNavLinkActive("#services")
                      ? "link-active"
                      : "link-inactive"
                  }
                >
                  Packing Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#video-testimonials"
                  className={() =>
                    isHashNavLinkActive("#video-testimonials")
                      ? "link-active"
                      : "link-inactive"
                  }
                >
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={(e) =>
                    e.isActive ? "link-active" : "link-inactive"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <Link to="/#contact-info">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="hamburger">
            <svg
              onClick={toggleSidebar}
              viewBox="0 -0.5 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM19.5 9.25C19.9142 9.25 20.25 8.91421 20.25 8.5C20.25 8.08579 19.9142 7.75 19.5 7.75V9.25ZM5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM17.5 13.25C17.9142 13.25 18.25 12.9142 18.25 12.5C18.25 12.0858 17.9142 11.75 17.5 11.75V13.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM12.5 17.25C12.9142 17.25 13.25 16.9142 13.25 16.5C13.25 16.0858 12.9142 15.75 12.5 15.75V17.25ZM5.5 9.25H19.5V7.75H5.5V9.25ZM5.5 13.25H17.5V11.75H5.5V13.25ZM5.5 17.25H12.5V15.75H5.5V17.25Z"
                  fill="#262626"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </header>
      </section>

      {isSideNavOpen ? (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      ) : (
        ""
      )}

      <nav id="side-nav" className={isSideNavOpen ? "side-nav-open" : ""}>
        <ul className="sidebar">
          <li>
            <svg
              className="close-slidebar-icon"
              onClick={toggleSidebar}
              viewBox="5 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                  fill="#262626"
                ></path>{" "}
              </g>
            </svg>
          </li>
          <li>
            <Link to="/#workshops" onClick={toggleSidebar}>
              Workshops
            </Link>
          </li>
          <li>
            <Link to="/#services" onClick={toggleSidebar}>
              Packing Services
            </Link>
          </li>
          <li>
            <Link to="/#video-testimonials" onClick={toggleSidebar}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={toggleSidebar}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/#contact-info" onClick={toggleSidebar}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
