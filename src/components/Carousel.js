import React, { useState } from "react";
import "./styles/Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel-wrapper">
      <button className="carousel-btn left" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="carousel-btn right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
