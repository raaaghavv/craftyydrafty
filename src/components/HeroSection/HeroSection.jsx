import React, { useEffect } from "react";
import "./HeroSection.css";
import Header from "../Header/Header";

function HeroSection() {
  useEffect(() => {
    const updateHeroOffset = () => {
      const header = document.getElementById("header");
      const heroSection = document.getElementById("hero-section");

      if (Header && HeroSection) {
        const style = window.getComputedStyle(header);
        const marginTop = parseFloat(style.marginTop) || 0;
        const marginBottom = parseFloat(style.marginBottom) || 0;
        const totalOffset = header.offsetHeight + marginTop + marginBottom;
        heroSection.style.setProperty("--marginTop", `${totalOffset}px`);
      }
    };

    updateHeroOffset();
    window.addEventListener("resize", updateHeroOffset);
    return () => window.removeEventListener("resize", updateHeroOffset);
  }, []);

  return (
    <>
      <section id="hero-section">
        <div className="left-text-container">
          <div className="typography">
            <h1>
              EVERY GIFT <br />
              TELLS A<br /> STORY—
              <br /> MAKE YOURS <br />
              <span className="signature-font"> unforgettable .</span>
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
