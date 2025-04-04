import React from "react";
import "./OurServices.css";

const services = [
  {
    serviceLink: "#",
    heading: "Wedding Packing",
    imgSRC:
      "https://assets-global.website-files.com/6536201826a56456fff7c8ed/653621422f4db3fb4cbee1db_Product%201.webp",
    description: "Experience the Love in Gifting.",
  },
  {
    serviceLink: "#",
    heading: "Balloon Packing",
    imgSRC:
      "https://assets-global.website-files.com/6536201826a56456fff7c8ed/65362141715959ce3ab73003_Product%205.webp",
    description: "Experience the Love in Gifting.",
  },
  {
    serviceLink: "#",
    heading: "Feuroshiki Wrapping",
    imgSRC:
      "https://assets-global.website-files.com/6536201826a56456fff7c8ed/65362141aa6fb79a927d6298_Product%206.webp",
    description: "Experience the Love in Gifting.",
  },
  {
    serviceLink: "#",
    heading: "Theme Packing",
    imgSRC:
      "https://assets-global.website-files.com/6536201826a56456fff7c8ed/65362141791863e60e38b316_Product%207.webp",
    description: "Experience the Love in Gifting.",
  },
  {
    serviceLink: "#",
    heading: "Paper Wrapping",
    imgSRC:
      "https://assets-global.website-files.com/6536201826a56456fff7c8ed/65362141791863e60e38b316_Product%207.webp",
    description: "Experience the Love in Gifting.",
  },
  {
    serviceLink: "#",
    heading: "Paper Bouquet",
    imgSRC:
      "https://assets-global.website-files.com/6536201826a56456fff7c8ed/65362141aa6fb79a927d6298_Product%206.webp",
    description: "Experience the Love in Gifting.",
  },
  {
    serviceLink: "#",
    heading: "Bows n Bunches",
    imgSRC:
      "https://assets-global.website-files.com/6536201826a56456fff7c8ed/65362141715959ce3ab73003_Product%205.webp",
    description: "Experience the Love in Gifting.",
  },
  {
    serviceLink: "#",
    heading: "Custom Gifting",
    imgSRC:
      "https://assets-global.website-files.com/6536201826a56456fff7c8ed/653621422f4db3fb4cbee1db_Product%201.webp",
    description: "Experience the Love in Gifting.",
  },
];

function OurServices() {
  return (
    <section className="OurServices-section">
      <div className="section-heading">
        <h2>
          Beautifully Wrapped,
          <br />
          Thoughtfully Presented!
        </h2>
        <p>
          Discover the art of premium packaging, designed to add elegance and a
          personal touch to every gift. <br />
          Let us craft stunning presentations that leave a lasting impression!
        </p>
      </div>
      <div className="services-grid-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div
              className="service-overlay"
              style={{ backgroundImage: `url(${service.imgSRC})` }}
            ></div>
            <a href={service.serviceLink} className="service-link">
              <div className="top-info">
                <h3>{service.heading}</h3>
                <img
                  className="arrow-icon"
                  src="https://cdn.prod.website-files.com/6536201826a56456fff7c8ed/653622175190e82a7e4a3100_arrow_outward.png"
                  alt="arrow"
                />
              </div>
              <p>{service.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServices;
