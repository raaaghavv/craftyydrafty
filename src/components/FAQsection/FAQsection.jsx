import React, { forwardRef } from "react";
import "./FAQsection.css";

const FAQs = [
  {
    question: "What types of gift packing workshops does CraftyyDrafty offer?",
    answer:
      "We offer a variety of hands-on workshops covering different gift packing techniques, from basic elegant wrapping to advanced thematic designs. Check our 'Workshops' section for upcoming schedules!",
  },
  {
    question: "How do I register for a CraftyyDrafty workshop?",
    answer:
      "You can easily register for a workshop through our website. Simply visit the 'Workshops' page, select your desired session, and message us via WhatsApp to complete your booking and payment.",
  },
  {
    question:
      "Do I need any prior experience or materials to attend a workshop?",
    answer:
      "Not at all! Our workshops are designed for all skill levels, from beginners to more experienced crafters. All necessary high-quality materials and tools online buying links are provided, so you just need to bring your creativity!",
  },
  {
    question: "What is the typical turnaround time for packing services?",
    answer:
      "The turnaround time for packing services varies depending on the complexity, quantity of items, and current demand. For most standard orders, we aim for a completion time of 2-5 business days after receiving all items.",
  },
  {
    question:
      " What types of items can CraftyyDrafty pack, and what services do you offer?",
    answer:
      "We offer professional packing and presentation services for a wide range of items and occasions, specializing in Wedding, Balloon, Furoshiki, Theme, and Paper Wrapping, alongside Paper Bouquets, Bows n Bunches, and Custom Gifting, to transform your items into beautifully presented gifts.",
  },
  {
    question: "How can I request a custom quote for packing services?",
    answer:
      "To get a custom quote, please visit our 'Packing Services' section and click on 'custom gifting' to share details about your items, quantity, desired style, and any special requirements. We'll get back to you promptly with a tailored estimate.",
  },
  {
    question: "What is CraftyyDrafty's service range for packing and delivery?",
    answer:
      "Currently, CraftyyDrafty offers packing services with delivery available primarily within Ghaziabad and the National Capital Region (NCR). For bulk orders or special requests outside this area, please contact us directly to discuss feasibility.",
  },
  {
    question:
      "Do you offer corporate gifting or bulk packing solutions for businesses?",
    answer:
      "Yes, CraftyyDrafty provides tailored solutions for corporate gifting and bulk orders. We can work with your brand guidelines to create custom-themed packing for events, employee appreciation, or client gifts. Please contact us directly to discuss your specific requirements and special pricing.",
  },
];

const FAQsection = forwardRef((props, ref) => {
  return (
    <section ref={ref} id={props.id} className="faq-section">
      <div className="section-heading">
        <h2>Frequently Asked Questions</h2>
        <p>
          Find comprehensive answers in our FAQ section, designed to guide you
          through our creative process and
          <br />
          personalized packaging services, ensuring you have all the information
          to make the best decision.
        </p>
      </div>
      <div className="faq-column-container">
        <div className="faq-column">
          {FAQs.slice(0, Math.ceil(FAQs.length / 2)).map((faq, index) => (
            <details className="faq-item" key={index}>
              <summary className="faq-question">
                {faq.question}
                <div className="toggle-icon-container">
                  <span className="toggle-icon" aria-hidden="true">
                    +
                  </span>
                </div>
              </summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
        <div className="faq-column">
          {FAQs.slice(Math.ceil(FAQs.length / 2)).map((faq, index) => (
            <details className="faq-item" key={index}>
              <summary className="faq-question">
                {faq.question}
                <div className="toggle-icon-container">
                  <span className="toggle-icon" aria-hidden="true">
                    +
                  </span>
                </div>
              </summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
});

export default FAQsection;
