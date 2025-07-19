import React, { useState, useEffect } from "react";
import car1 from "../assets/file copy.avif";
import car2 from "../assets/file (3).webp";
import car3 from "../assets/file (1).webp";
import car4 from "../assets/file (1).avif";
import car5 from "../assets/file.avif";
import car6 from "../assets/file (4).webp";

import car7 from "../assets/file.webp";
import Car360View from "./Car360View";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show360View, setShow360View] = useState(false);

  const images = [car1, car2, car3, car4, car5, car6, car7];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handle360ViewClick = () => {
    setShow360View(true);
  };

  return (
    <>
      <div className="relative w-full h-96 overflow-hidden rounded-lg">
        {/* Main Image */}
        <div className="relative w-full h-full">
          <img
            src={images[currentIndex]}
            alt={`Car image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Spinny Badge */}
          {/* <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded shadow-md">
            <span className="text-red-600 font-semibold text-sm">S Spinny</span>
          </div> */}

          {/* 360° View Overlay */}
          <button
            onClick={handle360ViewClick}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-80 transition-all duration-200 cursor-pointer"
          >
            Click to view 360°
          </button>
        </div>

        {/* Navigation Arrows - Gray Square Style */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-80 hover:bg-opacity-100 text-white p-3 rounded shadow-lg transition-all duration-200"
          aria-label="Previous image"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-80 hover:bg-opacity-100 text-white p-3 rounded shadow-lg transition-all duration-200"
          aria-label="Next image"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* 360° View Component */}
      <Car360View isOpen={show360View} onClose={() => setShow360View(false)} />
    </>
  );
};

export default ImageCarousel;
