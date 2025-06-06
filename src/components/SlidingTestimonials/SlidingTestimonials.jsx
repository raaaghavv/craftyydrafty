import React from "react";
import "./SlidingTestimonials.css";
function SlidingTestimonials() {
  const testimonials = [
    {
      quote: `"Crafty Drafty transformed how we present our products. Their packaging designs elevated our brand perception."`,
      rating: "4",
      authorName: "raghav goel",
      authorState: "Amritsar",
      ariaHidden: false,
    },
    {
      quote:
        "Crafty Drafty transformed how we present our products. Their packaging designs elevated our brand perception.",
      rating: "5",
      authorName: "Sarah Johnson",
      authorState: "Amritsar",
      ariaHidden: false,
    },
    {
      quote:
        "Crafty Drafty transformed how we present our products. Their packaging designs elevated our brand perception.",
      rating: "5",
      authorName: "Sarah Johnson",
      authorState: "Amritsar",
      ariaHidden: false,
    },
    {
      quote:
        "Crafty Drafty transformed how we present our products. Their packaging designs elevated our brand perception.",
      rating: "4",
      authorName: "raghav goel",
      authorState: "Amritsar",
      ariaHidden: true,
    },
    {
      quote:
        "Crafty Drafty transformed how we present our products. Their packaging designs elevated our brand perception.",
      rating: "5",
      authorName: "Sarah Johnson",
      authorState: "Amritsar",
      ariaHidden: true,
    },
    {
      quote:
        "Crafty Drafty transformed how we present our products. Their packaging designs elevated our brand perception.",
      rating: "5",
      authorName: "Sarah Johnson",
      authorState: "Amritsar",
      ariaHidden: true,
    },
  ];
  
  const getAuthorInitial = (testimonial) =>
    testimonial.authorName.charAt(0).toUpperCase();

  return (
    <section className="sliding-testimonials">
      <div className="section-heading">
        <h2>Our Testimonials</h2>
        <p>
          Our testimonials echo the transformative impact of our creative
          workshops and bespoke packing services,
          <br /> where every detail is crafted with passion and care.
        </p>
      </div>
      <div className="marquee-container">
        <div className="marquee-slider">
          {testimonials.map((testimonial, index) => (
            <blockquote
              className="testimonial-card"
              key={index}
              aria-hidden={testimonial.ariaHidden}
            >
              <div className="top-decor">
                <svg
                  className="quote-icon"
                  fill="#cea1cb"
                  width="197px"
                  height="197px"
                  viewBox="-1.92 -1.92 35.84 35.84"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#cea1cb"
                  transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                  stroke-width="0.00032"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.128"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>quote</title>{" "}
                    <path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>{" "}
                  </g>
                </svg>
                <div
                  className="star-rating"
                  role="img"
                  aria-label={`Rated ${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }, (_, index) =>
                    index < testimonial.rating ? (
                      <span key={index}>
                        <svg
                          viewBox="0 0 128.00 128.00"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          class="iconify iconify--noto"
                          preserveAspectRatio="xMidYMid meet"
                          fill="#000000"
                          stroke="#000000"
                          stroke-width="0.00128"
                          transform="matrix(1, 0, 0, 1, 0, 0)"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke="#CCCCCC"
                            stroke-width="0.512"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                              fill="#fdd835"
                            ></path>
                            <path
                              d="M67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                              fill="#ffff8d"
                            ></path>
                            <path
                              d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                              fill="#f4b400"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    ) : (
                      <span key={index}>
                        <svg
                          fill="#FDD835"
                          height="200px"
                          width="200px"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 488.02 488.02"
                          xml:space="preserve"
                          stroke="#FDD835"
                          stroke-width="0.00488022"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke="#CCCCCC"
                            stroke-width="1.9520880000000003"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <path d="M471.563,173.778l-145.5-20.8l-64.4-132c-8-15.4-30-12.2-35.3,0l-64.4,132l-145.6,20.8c-16.4,1-21.6,20.9-10.4,33.2 l105,102.9l-25,144.5c-2.9,17.8,16.7,27.8,28.1,20.8l129.9-68.6l129.9,67.6c13.6,7,29.8-2.8,28.1-19.7l-25-144.6l105-102.9 C494.663,193.478,485.563,175.478,471.563,173.778z M342.663,288.078c-4.2,5.2-6.2,11.4-5.2,17.7l19.7,116.4l-103.9-55.1 c-6.7-2.8-13-2.8-18.7,0l-103.9,55.1l19.7-116.4c1-7.3-1-13.5-5.2-17.7l-84.1-82.1l116.4-16.6c6.2-1,11.4-4.2,14.6-10.4l52-105 l52,105c3.1,5.2,8.3,9.4,14.6,10.4l116.2,16.6L342.663,288.078z"></path>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </span>
                    )
                  )}
                </div>
              </div>
              <p className="quote-text">{testimonial.quote}</p>
              <cite className="author-info">
                <span className="author-profile">
                  {getAuthorInitial(testimonial)}
                </span>
                <div>
                  <span className="author-name">{testimonial.authorName}</span>
                  <span className="author-state">
                    {testimonial.authorState}
                  </span>
                </div>
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SlidingTestimonials;
