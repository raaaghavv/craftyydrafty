import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import "./OurServices.css";

const services = [
  {
    serviceLink:
      "https://wa.me/+918920799458?text=Hi! I want to know more about your Wedding Packing.",
    heading: "Wedding Packing",
    imgSRC:
      "https://assets-global.website-files.com/6536201826a56456fff7c8ed/653621422f4db3fb4cbee1db_Product%201.webp",
    description: "Experience the Love in Gifting.",
  },
  {
    serviceLink:
      "https://wa.me/+918920799458?text=Hi! I want to know more about your Balloon Packing.",
    heading: "Balloon Packing",
    imgSRC:
      "https://assets-global.website-files.com/6536201826a56456fff7c8ed/65362141715959ce3ab73003_Product%205.webp",
    description: "Experience the Love in Gifting.",
  },
  {
    serviceLink:
      "https://wa.me/+918920799458?text=Hi! I want to know more about your Furoshiki Packing.",
    heading: "Furoshiki Wrapping",
    imgSRC:
      "https://assets-global.website-files.com/6536201826a56456fff7c8ed/65362141aa6fb79a927d6298_Product%206.webp",
    description: "Experience the Love in Gifting.",
  },
  {
    serviceLink:
      "https://wa.me/+918920799458?text=Hi! I want to know more about your Theme Packing.",
    heading: "Theme Packing",
    imgSRC:
      "https://assets-global.website-files.com/6536201826a56456fff7c8ed/65362141791863e60e38b316_Product%207.webp",
    description: "Experience the Love in Gifting.",
  },
  {
    serviceLink:
      "https://wa.me/+918920799458?text=Hi! I want to know more about your Paper Packing.",
    heading: "Paper Wrapping",
    imgSRC:
      "https://assets-global.website-files.com/6536201826a56456fff7c8ed/65362141791863e60e38b316_Product%207.webp",
    description: "Experience the Love in Gifting.",
  },
  {
    serviceLink:
      "https://wa.me/+918920799458?text=Hi! I want to know more about Paper Bouquet.",
    heading: "Paper Bouquet",
    imgSRC:
      "https://assets-global.website-files.com/6536201826a56456fff7c8ed/65362141aa6fb79a927d6298_Product%206.webp",
    description: "Experience the Love in Gifting.",
  },
  {
    serviceLink:
      "https://wa.me/+918920799458?text=Hi! I want to know more about Bows n Bunches.",
    heading: "Bows n Bunches",
    imgSRC:
      "https://assets-global.website-files.com/6536201826a56456fff7c8ed/65362141715959ce3ab73003_Product%205.webp",
    description: "Experience the Love in Gifting.",
  },
  {
    serviceLink:
      "https://wa.me/+918920799458?text=Hi! I want to know more about Custom Gifting.",
    heading: "Custom Gifting",
    imgSRC:
      "https://assets-global.website-files.com/6536201826a56456fff7c8ed/653621422f4db3fb4cbee1db_Product%201.webp",
    description: "Experience the Love in Gifting.",
  },
];
const OurServices = forwardRef((props, ref) => {
  return (
    <section ref={ref} id={props.id} className="OurServices-section">
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
            <Link
              to={service.serviceLink}
              target="_blank"
              className="service-link"
            >
              <div className="top-info">
                <h3>{service.heading}</h3>
                <img
                  className="arrow-icon"
                  src="https://cdn.prod.website-files.com/6536201826a56456fff7c8ed/653622175190e82a7e4a3100_arrow_outward.png"
                  alt="arrow"
                />
              </div>
              <p>{service.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
});

export default OurServices;
