import React, { useState, useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Photo1 from '../assets/1.jpg';
import Photo2 from '../assets/2.jpg';
import Photo3 from '../assets/3.jpg';
import Photo4 from '../assets/4.jpg';
import Photo5 from '../assets/5.jpg';
import Photo6 from '../assets/6.jpg';
import Photo7 from '../assets/7.JPG';
import Photo8 from '../assets/8.JPG';
import Photo9 from '../assets/9.jpg';
import Photo10 from '../assets/10.jpg';
import Photo11 from '../assets/11.jpg';
import Photo12 from '../assets/12.jpg';
import Photo13 from '../assets/13.jpg';


function WorksSlider() {
  const slides = [
    {
      url: Photo1,
    },
    {
      url: Photo2,
    },
    {
      url: Photo3,
    },
    {
      url: Photo4,
    },
    {
      url: Photo5,
    },
    {
      url: Photo6,
    },
    {
      url: Photo7,
    },
    {
      url: Photo8,
    },
    {
      url: Photo9,
    },
    {
      url: Photo10,
    },
    {
      url: Photo11,
    },
    {
      url: Photo12,
    },
    {
      url: Photo13,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const sliderRef = useRef(null);
  const touchStartXRef = useRef(null);

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchDistance = touchEndX - touchStartXRef.current;

    if (touchDistance > 0) {
      prevSlide();
    } else if (touchDistance < 0) {
      nextSlide();
    }
  };

  return (
    <div name='works' className='bg-[#f5f4f0] text-[#534636]'>
    <div className='md:container md:mx-auto  flex flex-col py-0 pt-[32px]  border-b-[1px] border-[#534636] pb-[64px]'>

      <p className='text-center text-4xl text-bold py-[32px]'>WorkBook</p>
      <div
        ref={sliderRef}
        className='max-w-[400px] h-[400px] md:max-w-[700px] md:h-[700px] w-full m-auto px-4 relative group'
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
    
  );
}

export default WorksSlider;