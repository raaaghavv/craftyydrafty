import React, { useEffect } from "react";
import "./HeroSection.css";
import Header from "../Header/Header";

function HeroSection() {
  useEffect(() => {
    if (Header) {
      const header = document.getElementById("header");
      const style = window.getComputedStyle(header);
      const marginTop = parseFloat(style.marginTop);
      const marginBottom = parseFloat(style.marginBottom);
      const heroSection = document.getElementById("hero-section");
      heroSection.style.setProperty(
        "margin-top",
        `${header.offsetHeight + marginTop + marginBottom}px`
      );
    }
  });

  return (
    <>
      <section id="hero-section">
        <div className="container">
          <div className="typography">
            <h1>
              EVERY GIFT <br />
              TELLS A<br /> STORY—
              <br /> MAKE YOURS <br />
              unforgettable.
            </h1>
          </div>
          <p>Learn the art of packaging or let us handle it for you!</p>
          <div className="cta-buttons">
            <button>Join a Workshop</button>
            <button>Get a Custom Packing Quote</button>
          </div>
        </div>
        <div className="image-container">
          <img
            // src="src\assets\craftyydrafty_owner_pic.png"
            src="src\assets\craftyydrafty_owner_pic-removebg-preview.png"
            alt="CraftyyDrafty's Founder"
          />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
