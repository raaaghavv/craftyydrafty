import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import Header from "../Header/Header";

function HeroSection() {
  useEffect(() => {
    const updateHeroOffset = () => {
      const header = document.getElementById("header");
      const heroSection = document.getElementById("home");

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
      <section id="home">
        <div className="left-text-container">
          <div className="typography">
            <h1>
              EVERY GIFT <br />
              TELLS A<br /> STORY—
              <br />
              <span className="typography-split-color">
                MAKE YOURS <br />
                <span className="signature-font"> unforgettable .</span>
              </span>
            </h1>
          </div>
          <p>Learn the art of packaging or let us handle it for you!</p>
          <div className="cta-buttons">
            <button>
              <Link to="/#workshops">Join a Workshop</Link>
            </button>
            <button>
            <Link to="/#services">
              Get a Custom Packing Quote
            </Link></button>
          </div>
        </div>
        <div className="image-container">
          <img
            src="craftyydrafty_owner_pic.png"
            alt="CraftyyDrafty's Founder photo"
          />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
