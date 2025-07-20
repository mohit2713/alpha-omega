import React, { useState, useEffect, useRef } from "react";
import { exteriorClose } from "../utils/carImages360";
import { exteriorOpen } from "../utils/carImages360";

const Car360View = ({ isOpen, onClose }) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouseX, setLastMouseX] = useState(0);
  const [currentView, setCurrentView] = useState("exteriorClose");
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const viewerRef = useRef(null);

  const images = currentView === "exteriorClose" ? exteriorClose : exteriorOpen;
  const imageCount = images.length;
  const anglePerImage = 360 / imageCount;
  const currentImageIndex =
    Math.floor(rotationAngle / anglePerImage) % imageCount;
  const normalizedIndex =
    currentImageIndex < 0 ? currentImageIndex + imageCount : currentImageIndex;

  // Preload all images once per view
  useEffect(() => {
    let loaded = 0;
    setImagesLoaded(false);

    const preload = images.map((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded += 1;
        if (loaded === images.length) setImagesLoaded(true);
      };
      return img;
    });

    return () => preload.forEach((img) => (img.onload = null));
  }, [images]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setLastMouseX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMouseX;
    const sensitivity = 0.3;

    setRotationAngle((prev) => {
      let newAngle = prev + deltaX * sensitivity; // reversed direction!
      if (newAngle < 0) newAngle += 360;
      if (newAngle >= 360) newAngle -= 360;
      return newAngle;
    });

    setLastMouseX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const toggleView = () => {
    setCurrentView((prev) =>
      prev === "exteriorClose" ? "exteriorOpen" : "exteriorClose"
    );
    setRotationAngle(0);
  };

  const toggleHotspots = () => {
    setHotspotsVisible((prev) => !prev);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl p-6">
        <button
          onClick={onClose}
          className="absolute top-0 right-4 text-2xl text-gray-600 hover:text-black"
        >
          ×
        </button>

        <div
          ref={viewerRef}
          className={`relative w-full h-[500px] select-none overflow-hidden rounded-lg ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={imagesLoaded ? images[normalizedIndex] : ""}
            alt="360 Car"
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-3">
            <button
              onClick={toggleView}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              {currentView === "exteriorClose"
                ? "Switch to Close View"
                : "Switch to Open View"}
            </button>
          </div>
          <div className="text-gray-700 font-medium">
            Angle: {Math.round(rotationAngle)}°
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car360View;
