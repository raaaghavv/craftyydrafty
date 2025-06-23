import React, { useRef, useEffect, useState, forwardRef, useMemo } from "react";

import "./WorkshopSection.css";

const workshopCardList = [
  {
    PosterSrc: "weddingpacking workshop.jpg",
    PosterAlt: "Wedding Packing Workshop Poster",
    Name: "Luxury Wedding Packing Workshop",
    Description:
      "Master the art of exquisite wedding gift presentation and create unforgettable packages for the most special day.",
    startDate: "2025-01-25T15:30:00",
  },
  {
    PosterSrc: "luxuryhamper workshop.jpg",
    PosterAlt: "Luxury Hamper Workshop Poster",
    Name: "Luxury Hamper Workshop",
    Description:
      "Design and assemble opulent, show-stopping gift hampers, learning to curate impressive presentations that truly delight.",
    startDate: "2025-01-25T15:30:00",
  },
  {
    PosterSrc: "fabricwrapping workshop.jpg",
    PosterAlt: "Fabric Wrapping Workshop Poster",
    Name: "Luxury Fabric Wrapping Workshop",
    Description:
      "Discover elegant and sustainable fabric wrapping techniques, transforming gifts into sophisticated, reusable works of art.",
    startDate: "2025-01-25T15:30:00",
  },
  {
    PosterSrc: "baloon hamper workshop.jpg",
    PosterAlt: "Baloon Hamper Workshop Poster",
    Name: "Balloon Hamper Workshop",
    Description:
      "Unleash your creativity with fun, festive balloon hampers and craft unique, joyful presentations for any celebration.",
    startDate: "2025-01-25T15:30:00",
  },
  {
    PosterSrc: "bowNbunch workshop.jpg",
    PosterAlt: "Bows & Bunches Workshop Poster",
    Name: "Bows & Bunches Making Workshop",
    Description:
      "Learn to handcraft stunning bows and decorative bunches to add the perfect, professional finishing touch to any gift.",
    startDate: "2025-01-25T15:30:00",
  },
  {
    PosterSrc: "paperwrapping workshop.jpg",
    PosterAlt: "Japanese Paper Wrapping Workshop Poster",
    Name: "Japanese Paper Wrapping Workshop",
    Description:
      "Explore the serene beauty of traditional Japanese paper wrapping, mastering intricate folds for elegant and meaningful gifts.",
    startDate: "2025-01-25T15:30:00",
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
        <div className="section-short-name">
          <span>Our Workshops</span>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--noto"
            preserveAspectRatio="xMidYMid meet"
            fill="#000000"
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
                d="M121.59 60.83l-13.93-4.49c-8.91-2.94-14.13-10.15-16.58-19.21L84.95 7.27c-.16-.59-.55-1.38-1.75-1.38c-1.01 0-1.59.79-1.75 1.38l-6.13 29.87c-2.46 9.06-7.67 16.27-16.58 19.21l-13.93 4.49c-1.97.64-2 3.42-.04 4.09l14.03 4.83c8.88 2.95 14.06 10.15 16.52 19.17l6.14 29.53c.16.59.49 1.65 1.75 1.65c1.33 0 1.59-1.06 1.75-1.65l6.14-29.53c2.46-9.03 7.64-16.23 16.52-19.17l14.03-4.83c1.94-.68 1.91-3.46-.06-4.1z"
                fill="#fdd835"
              >
                {" "}
              </path>{" "}
              <path
                d="M122.91 62.08c-.22-.55-.65-1.03-1.32-1.25l-13.93-4.49c-8.91-2.94-14.13-10.15-16.58-19.21L84.95 7.27c-.09-.34-.41-.96-.78-1.14l1.98 29.97c1.47 13.68 2.73 20.12 13.65 22c9.38 1.62 20.23 3.48 23.11 3.98z"
                fill="#ffee58"
              >
                {" "}
              </path>{" "}
              <path
                d="M122.94 63.64l-24.16 5.54c-8.51 2.16-13.2 7.09-13.2 19.99l-2.37 30.94c.81-.08 1.47-.52 1.75-1.65l6.14-29.53c2.46-9.03 7.64-16.23 16.52-19.17l14.03-4.83c.66-.24 1.08-.73 1.29-1.29z"
                fill="#f4b400"
              >
                {" "}
              </path>{" "}
              <g>
                {" "}
                <path
                  d="M41.81 86.81c-8.33-2.75-9.09-5.85-10.49-11.08l-3.49-12.24c-.21-.79-2.27-.79-2.49 0L22.97 74.8c-1.41 5.21-4.41 9.35-9.53 11.04l-8.16 3.54c-1.13.37-1.15 1.97-.02 2.35l8.22 2.91c5.1 1.69 8.08 5.83 9.5 11.02l2.37 10.82c.22.79 2.27.79 2.48 0l2.78-10.77c1.41-5.22 3.57-9.37 10.5-11.07l7.72-2.91c1.13-.39 1.12-1.99-.02-2.36l-7-2.56z"
                  fill="#fdd835"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M28.49 75.55c.85 7.86 1.28 10.04 7.65 11.67l13.27 2.59c-.14-.19-.34-.35-.61-.43l-7-2.57c-7.31-2.5-9.33-5.68-10.7-12.04c-1.37-6.36-2.83-10.51-2.83-10.51c-.51-1.37-1.24-1.3-1.24-1.3l1.46 12.59z"
                  fill="#ffee58"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M28.73 102.99c0-7.41 4.05-11.08 10.49-11.08l10.02-.41s-.58.77-1.59 1.01l-6.54 2.13c-5.55 2.23-8.08 3.35-9.8 10.94c0 0-2.22 8.83-2.64 9.76c-.58 1.3-1.27 1.57-1.27 1.57l1.33-13.92z"
                  fill="#f4b400"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
              <path
                d="M59.74 28.14c.56-.19.54-.99-.03-1.15l-7.72-2.08a4.77 4.77 0 0 1-3.34-3.3L45.61 9.06c-.15-.61-1.02-.61-1.17.01l-2.86 12.5a4.734 4.734 0 0 1-3.4 3.37l-7.67 1.99c-.57.15-.61.95-.05 1.15l8.09 2.8c1.45.5 2.57 1.68 3.01 3.15l2.89 11.59c.15.6 1.01.61 1.16 0l2.99-11.63a4.773 4.773 0 0 1 3.04-3.13l8.1-2.72z"
                fill="#f4b400"
                stroke="#f4b400"
                stroke-miterlimit="10"
              >
                {" "}
              </path>{" "}
            </g>
          </svg>
        </div>
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
                    <img src={card.PosterSrc} alt={card.PosterAlt} loading="lazy"/>
                    <div className="card-text-container">
                      <h3 className="workshop-title">{card.Name}</h3>
                      <p className="workshop-description">{card.Description}</p>
                      <p className="workshop-recording">Recording Available.</p>
                    </div>
                    <span className="learn-more">Learn More &#8594;</span>
                  </div>
                </a>
              </li>
            ))
          ) : (
            <p className="no-workshop-found">No Upcoming workshop found.</p>
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
