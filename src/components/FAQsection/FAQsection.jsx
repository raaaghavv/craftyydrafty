import React from "react";
import "./FAQsection.css";
const FAQs = [
  {
    question: "How long does custom packaging take?",
    answer: "Our standard turnaround time is 5-7 business days...",
  },
  {
    question: "How long does custom packaging take?",
    answer: "Our standard turnaround time is 5-7 business days...",
  },
  {
    question: "How long does custom packaging take?",
    answer: "Our standard turnaround time is 5-7 business days...",
  },
  {
    question: "How long does custom packaging take?",
    answer: "Our standard turnaround time is 5-7 business days...",
  },
  {
    question: "How long does custom packaging take?",
    answer: "Our standard turnaround time is 5-7 business days...",
  },
  {
    question: "How long does custom packaging take?",
    answer: "Our standard turnaround time is 5-7 business days...",
  },
  {
    question: "How long does custom packaging take?",
    answer: "Our standard turnaround time is 5-7 business days...",
  },
  {
    question: "How long does custom packaging take?",
    answer: "Our standard turnaround time is 5-7 business days...",
  },
];
function FAQsection() {
  return (
    <section className="faq-section">
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
}

export default FAQsection;
