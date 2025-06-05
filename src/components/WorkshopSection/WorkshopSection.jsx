// import React, { useRef } from "react";
import React, { useRef, useEffect, useState } from "react";

import "./WorkshopSection.css";

const workshopCardList = [
  {
    PosterSrc: "feuroshikiPoster.jpg",
    PosterAlt: "feuroshiki Poster",
    Name: "Luxury Fabric Wrapping Workshop",
    Description:
      "Learn the Art of Fabric Wrapping, originated from japanese culture.",
    originalPrice: "₹999",
    discountedPrice: "₹799",
  },
  {
    PosterSrc: "baloonHamperPoster-1.jpg",
    PosterAlt: "feuroshiki Poster",
    Name: "Luxury Fabric Wrapping Workshop",
    Description:
      "Learn the Art of Fabric Wrapping, originated from japanese culture.",
    originalPrice: "₹999",
    discountedPrice: "₹799",
  },
  {
    PosterSrc: "baloonHamperPoster-2.jpg",
    PosterAlt: "feuroshiki Poster",
    Name: "Luxury Fabric Wrapping Workshop",
    Description:
      "Learn the Art of Fabric Wrapping, originated from japanese culture.",
    originalPrice: "₹999",
    discountedPrice: "₹799",
  },
  {
    PosterSrc: "feuroshikiPoster.jpg",
    PosterAlt: "feuroshiki Poster",
    Name: "Luxury Fabric Wrapping Workshop",
    Description:
      "Learn the Art of Fabric Wrapping, originated from japanese culture.",
    originalPrice: "₹999",
    discountedPrice: "₹799",
  },
  {
    PosterSrc: "feuroshikiPoster.jpg",
    PosterAlt: "feuroshiki Poster",
    Name: "Luxury Fabric Wrapping Workshop",
    Description:
      "Learn the Art of Fabric Wrapping, originated from japanese culture.",
    originalPrice: "₹999",
    discountedPrice: "₹799",
  },
  {
    PosterSrc: "baloonHamperPoster-1.jpg",
    PosterAlt: "feuroshiki Poster",
    Name: "Luxury Fabric Wrapping Workshop",
    Description:
      "Learn the Art of Fabric Wrapping, originated from japanese culture.",
    originalPrice: "₹999",
    discountedPrice: "₹799",
  },
  {
    PosterSrc: "baloonHamperPoster-2.jpg",
    PosterAlt: "feuroshiki Poster",
    Name: "Luxury Fabric Wrapping Workshop",
    Description:
      "Learn the Art of Fabric Wrapping, originated from japanese culture.",
    originalPrice: "₹999",
    discountedPrice: "₹799",
  },
  {
    PosterSrc: "feuroshikiPoster.jpg",
    PosterAlt: "feuroshiki Poster",
    Name: "Luxury Fabric Wrapping Workshop",
    Description:
      "Learn the Art of Fabric Wrapping, originated from japanese culture.",
    originalPrice: "₹999",
    discountedPrice: "₹799",
  },
  {
    PosterSrc: "feuroshikiPoster.jpg",
    PosterAlt: "feuroshiki Poster",
    Name: "Luxury Fabric Wrapping Workshop",
    Description:
      "Learn the Art of Fabric Wrapping, originated from japanese culture.",
    originalPrice: "₹999",
    discountedPrice: "₹799",
  },
  {
    PosterSrc: "feuroshikiPoster.jpg",
    PosterAlt: "feuroshiki Poster",
    Name: "Luxury Fabric Wrapping Workshop",
    Description:
      "Learn the Art of Fabric Wrapping, originated from japanese culture.",
    originalPrice: "₹999",
    discountedPrice: "₹799",
  },
];

function WorkshopSection() {
  const sliderRef = useRef(null);
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -=
        (sliderRef.current.children[0].offsetWidth + 24) * 2;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft +=
        (sliderRef.current.children[0].offsetWidth + 24) * 2;
    }
  };
  const pillRef = useRef(null);

  const updatePillPosition = () => {
    const slider = sliderRef.current;
    const pill = pillRef.current;
  
    if (slider && pill) {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      const scrollRatio = slider.scrollLeft / maxScrollLeft;
  
      // Use actual pill width to constrain movement
      const pillWidthPercent = 20; // same as CSS width: 20%
      const maxLeft = 100 - pillWidthPercent;
      const leftPercent = scrollRatio * maxLeft;
  
      pill.style.left = `${leftPercent}%`;
      pill.style.transform = "translateX(0)"; // no shift needed now
    }
  };
  

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("scroll", updatePillPosition);
    window.addEventListener("resize", updatePillPosition); // responsive

    // Set initial position
    updatePillPosition();

    return () => {
      slider.removeEventListener("scroll", updatePillPosition);
      window.removeEventListener("resize", updatePillPosition);
    };
  }, []);
  return (
    <section className="Workshop-section">
      <div className="section-heading">
        <h2>
          Your Path to Creativity & <br /> Skill Enhancement!
        </h2>
        <p>
          Navigate through our workshop offerings and uncover exciting hands-on
          experiences. <br />
          Explore, engage, and refine your skills with immersive sessions
          designed to spark creativity and innovation!
        </p>
      </div>
      <nav className="workshop-filter-nav">
        <ul>
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Upcoming LIVE Workshop</a>
          </li>
          <li>
            <a href="#">Previous LIVE Workshops</a>
          </li>
        </ul>
      </nav>
      <div className="slider-container">
        <button className="prev-btn" onClick={scrollLeft}>
          &lt;
        </button>
        <ul className="slider-wrapper" ref={sliderRef}>
          {workshopCardList.map((card, index) => (
            <li className="card-item" key={index}>
              <a href="#" className="card-link">
                <div className="card">
                  <img src={card.PosterSrc} alt={card.PosterAlt} />
                  <div className="card-text-container">
                    <h3>{card.Name}</h3>
                    <p>{card.Description}</p>
                    <p>
                      {card.discountedPrice} <del> {card.originalPrice}</del>
                    </p>
                  </div>
                  <span className="learn-more">Learn More &#8594;</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <button className="next-btn" onClick={scrollRight}>
          &gt;
        </button>
      </div>
      <div className="slider-indicator">
        <div className="slider-pill" ref={pillRef} />
      </div>
    </section>
  );
}

export default WorkshopSection;
