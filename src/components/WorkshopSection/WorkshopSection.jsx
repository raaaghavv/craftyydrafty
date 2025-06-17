// import React, { useRef } from "react";
import React, { useRef, useEffect, useState, forwardRef, useMemo } from "react";

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
    startDate: "2025-03-25T15:30:00",
  },
  {
    PosterSrc: "baloonHamperPoster-1.jpg",
    PosterAlt: "feuroshiki Poster",
    Name: "Luxury Fabric Wrapping Workshop",
    Description:
      "Learn the Art of Fabric Wrapping, originated from japanese culture.",
    originalPrice: "₹999",
    discountedPrice: "₹799",
    startDate: "2025-04-25T15:30:00",
  },
  {
    PosterSrc: "baloonHamperPoster-2.jpg",
    PosterAlt: "feuroshiki Poster",
    Name: "Luxury Fabric Wrapping Workshop",
    Description:
      "Learn the Art of Fabric Wrapping, originated from japanese culture.",
    originalPrice: "₹999",
    discountedPrice: "₹799",
    startDate: "2025-05-25T15:30:00",
  },
  {
    PosterSrc: "feuroshikiPoster.jpg",
    PosterAlt: "feuroshiki Poster",
    Name: "Luxury Fabric Wrapping Workshop",
    Description:
      "Learn the Art of Fabric Wrapping, originated from japanese culture.",
    originalPrice: "₹999",
    discountedPrice: "₹799",
    startDate: "2025-06-25T15:30:00",
  },
  {
    PosterSrc: "feuroshikiPoster.jpg",
    PosterAlt: "feuroshiki Poster",
    Name: "Luxury Fabric Wrapping Workshop",
    Description:
      "Learn the Art of Fabric Wrapping, originated from japanese culture.",
    originalPrice: "₹999",
    discountedPrice: "₹799",
    startDate: "2025-07-25T15:30:00",
  },
  {
    PosterSrc: "baloonHamperPoster-1.jpg",
    PosterAlt: "feuroshiki Poster",
    Name: "Luxury Fabric Wrapping Workshop",
    Description:
      "Learn the Art of Fabric Wrapping, originated from japanese culture.",
    originalPrice: "₹999",
    discountedPrice: "₹799",
    startDate: "2025-08-25T15:30:00",
  },
];

const WorkshopSection = forwardRef((props, ref) => {
  const [activeFilter, setactiveFilter] = useState("ALL");

  const filteredWorkshops = useMemo(() => {
    const now = new Date();
    if (activeFilter === "ALL") {
      return workshopCardList;
    } else if (activeFilter === "UPCOMING") {
      return workshopCardList.filter(
        (workshop) => new Date(workshop.startDate) > now
      );
    } else if (activeFilter === "PREVIOUS") {
      return workshopCardList.filter(
        (workshop) => new Date(workshop.startDate) < now
      );
    }
    return [];
  }, [activeFilter, workshopCardList]);

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
    <section ref={ref} id={props.id} className="Workshop-section">
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
            <button
              onClick={() => setactiveFilter("ALL")}
              className={activeFilter === "ALL" ? "active" : ""}
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => setactiveFilter("UPCOMING")}
              className={activeFilter === "UPCOMING" ? "active" : ""}
            >
              Upcoming LIVE Workshop
            </button>
          </li>
          <li>
            <button
              onClick={() => setactiveFilter("PREVIOUS")}
              className={activeFilter === "PREVIOUS" ? "active" : ""}
            >
              Previous LIVE Workshops
            </button>
          </li>
        </ul>
      </nav>
      <div className="slider-container">
        <ul className="slider-wrapper" ref={sliderRef}>
          {filteredWorkshops.length > 0 ? (
            filteredWorkshops.map((card, index) => (
              <li className="card-item" key={index}>
                <a
                  href={`https://wa.me/+918920799458?text=Hi! I want to know more about your ${card.Name}`}
                  target="_blank"
                  className="card-link"
                >
                  <div className="card">
                    <img src={card.PosterSrc} alt={card.PosterAlt} />
                    <div className="card-text-container">
                      <h3 className="workshop-title">{card.Name}</h3>
                      <p className="workshop-description">{card.Description}</p>
                      <p className="workshop-price">
                        {card.discountedPrice} <del> {card.originalPrice}</del>
                      </p>
                    </div>
                    <span className="learn-more">Learn More &#8594;</span>
                  </div>
                </a>
              </li>
            ))
          ) : (
            <p>No workshops found for this filter.</p>
          )}
        </ul>
      </div>

      <div className="slider-controls">
        <button className="prev-btn" onClick={scrollLeft}>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="#262626"
            stroke="#262626"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <defs>
                <style>fill:#262626;</style>
              </defs>
              <g data-name="arrow left" id="arrow_left">
                <path
                  class="cls-1"
                  d="M22,29.73a1,1,0,0,1-.71-.29L9.93,18.12a3,3,0,0,1,0-4.24L21.24,2.56A1,1,0,1,1,22.66,4L11.34,15.29a1,1,0,0,0,0,1.42L22.66,28a1,1,0,0,1,0,1.42A1,1,0,0,1,22,29.73Z"
                ></path>
              </g>
            </g>
          </svg>
        </button>
        <div className="slider-indicator">
          <div className="slider-pill" ref={pillRef} />
        </div>
        <button className="next-btn" onClick={scrollRight}>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="#262626"
            stroke="#262626"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <defs>
                <style>fill:#262626;</style>
              </defs>
              <g data-name="arrow left" id="arrow_left">
                <path
                  class="cls-1"
                  d="M22,29.73a1,1,0,0,1-.71-.29L9.93,18.12a3,3,0,0,1,0-4.24L21.24,2.56A1,1,0,1,1,22.66,4L11.34,15.29a1,1,0,0,0,0,1.42L22.66,28a1,1,0,0,1,0,1.42A1,1,0,0,1,22,29.73Z"
                ></path>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </section>
  );
});

export default WorkshopSection;
