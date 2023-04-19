import React, { useState, useEffect } from "react";

const Slider = ({ images, intervalTime }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [images.length, intervalTime]);

  return (

    <div className="flex justify-center w-full md:w-1/2 h-full">
      <div className="w-full h-auto max-w-full max-h-full object-cover object-center rounded-md sm:rounded-none">
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="w-full h-auto max-w-auto max-h-full object-cover object-center rounded-md sm:rounded-none"
        />
      </div>
    </div>
  );
};

export default Slider;