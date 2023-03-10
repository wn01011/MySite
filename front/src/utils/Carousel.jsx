import React, { useState, useRef, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: "/img/cat.png", alt: "Image 1" },
    { src: "/img/GenTree1.png", alt: "Image 2" },
    { src: "/img/GenTree2.png", alt: "Image 3" },
    // Add more images here
  ];
  const carouselRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextSlide();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex]);

  const previousSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel" ref={carouselRef}>
      <style>
        {`
          .carousel__slide {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
          }
          .carousel__slide--current {
            opacity: 1;
          }
        `}
      </style>
      {images.map((image, index) => (
        <img
          key={index}
          className={`carousel__slide ${
            index === currentIndex ? "carousel__slide--current" : ""
          }`}
          src={image.src}
          alt={image.alt}
        />
      ))}
      <button className="previous" onClick={previousSlide}>
        Previous
      </button>
      <button className="next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
