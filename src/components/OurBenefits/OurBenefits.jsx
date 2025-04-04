import React from "react";
import "./OurBenefits.css";

const cardData = [
  {
    id: 1,
    icon: "🏫",
    heading: "Hands-on Learning Experience",
    text: "Interactive workshops with expert guidance in gift, balloon, furoshiki, and wedding packing.",
  },
  {
    id: 2,
    icon: "🏫",
    heading: "Eco-Friendly & Sustainable Options",
    text: "We offer biodegradable, reusable, and recyclable packaging materials for an eco- conscious choice.",
  },
  {
    id: 3,
    icon: "🏫",
    heading: "Personalized Packing Services",
    text: "Custom gift and wedding packing solutions to match your style and theme.",
  },
  {
    id: 4,
    icon: "🏫",
    heading: "Bulk Orders Available",
    text: "Special deals for event planners, corporate gifting, and large-scale wedding packaging needs.",
  },
  {
    id: 5,
    icon: "🏫",
    heading: "Perfect for Every Occasion",
    text: "Whether for personal gifts, corporate gifting, or wedding packaging, we've got you covered!",
  },
  {
    id: 6,
    icon: "🏫",
    heading: "High-Quality Materials",
    text: "Learn with premium wrapping papers, ribbons, and decor items for the best results.",
  },
];

function OurBenefits() {
  return (
    <section className="OurBenefits-section">
      <div className="section-heading">
        <h2>Our Benefits</h2>
        <p>
          At CraftyyDraffy, we believe in making every gift and event
          unforgettable.
        </p>
      </div>
      <div className="Benefits-cards-container">
        {cardData.map((card, index) => (
          <div id={card.id} className="Benefits-card" key={index}>
            <div className="icon-box">{card.icon}</div>
            <h3>{card.heading}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurBenefits;
