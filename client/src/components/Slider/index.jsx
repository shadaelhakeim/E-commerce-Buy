import React, { useState, useEffect } from "react";
import "./style.css";
import slide1 from "../../images/01.png";
import slide2 from "../../images/02.png";
import slide3 from "../../images/03.png";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  let navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: slide1,
      title: "Headphones ProMax",
      text: "Feel the real quality sound.",
      button: "Shop now ",
    },
    {
      image: slide2,
      title: "Powerful iPad Pro M2",
      text: "Deal of the week",
      button: "Discover",
    },
    {
      image: slide3,
      title: "Experience new Reality",
      text: "Virtual Reality glasses",
      button: "Get Started",
    },
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider-container">
      <div className="slide d-flex flex-column flex-md-row" key={currentIndex}>
        <div className="slide-text">
          <p>{slides[currentIndex].text}</p>
          <h2>{slides[currentIndex].title}</h2>
          <button onClick={()=>{navigate("/products")}}>{slides[currentIndex].button}</button>
        </div>
        <div className="slide-image">
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
      </div>
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
