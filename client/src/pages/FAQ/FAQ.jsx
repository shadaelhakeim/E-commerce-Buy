import React, { useState } from "react";
import "./FAQ.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "How do I shop online from BNONI SWAY store?",
      answer: "A guide on how to shop from the store...",
    },
    {
      question: "What are the available payment options for BNONI SWAY?",
      answer: "Different payment methods...",
    },
    {
      question: "How will my order be delivered from BNONI SWAY?",
      answer: "Details about order delivery...",
    },
    {
      question: "How can I track my order from BNONI SWAY?",
      answer: "Information on tracking orders...",
    },
    {
      question: "What is the return or exchange policy for BNONI SWAY?",
      answer: "Return and exchange policy details...",
    },
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;
