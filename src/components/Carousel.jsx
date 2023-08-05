import React, { useState, useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';


function MemberCarousel () {

 const slides = [
  {
    url: 'src/assets/KhariDuBardHeadShot2400x1600.jpg',
    name: 'Khari DuBard',
    description: 'Markerting Coordinator',
    subtext: 'Subtext'
  },
  {
    url: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    name: 'John Doe',
    description: ' Event Coordinator',
    subtext: 'Subtext'
  },
  {
    url: 'https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    name: 'Jane Doe',
    description: 'Community Building Coordinator',
    subtext: 'Subtext'
  }
  // Add more member objects as needed
];

console.log('slides:', slides);


const [currentIndex, setCurrentIndex] =useState(0)

const prevSlide = () => {
  const isFirstSlide = currentIndex ===0;
  const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
setCurrentIndex(newIndex);
}

const goToSlide = (slideIndex) => {
  setCurrentIndex(slideIndex);
}

const nextSlide = () => {
  const isLastSlide = currentIndex === slides.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex);
};

useEffect(() => {
  const handleKeyPress = (event) => {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  };

  // Attach event listener when the component mounts
  document.addEventListener('keydown', handleKeyPress);

  // Remove event listener when the component unmounts
  return () => {
    document.removeEventListener('keydown', handleKeyPress);
  };
}, []); // Empty dependency array to ensure the effect runs only once


  return (

    <>
    <div className='flex justify-center items-center h-screen'>
    <div className='max-w-[500px] h-[800px] relative'>
    <div className='max-w-[380px] h-[450px] w-full m-auto py-16 px-4 relative group'>
      <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-[350px] h-[350px] rounded-2xl bg-center bg-cover duration-500'></div>

      <div className='text-center mt-4'>
        <h2 className='text-xl font-bold'>{slides[currentIndex].name}</h2>
        <p className='text-black-500'>{slides[currentIndex].description}</p>
      </div>

      <div className='hidden group-hover:block absolute left-0 top-[50%] translate-y-[50%] transform -translate-x-full text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='hidden group-hover:block absolute right-0 top-[50%] translate-y-[50%] transform translate-x-full text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
    </div>
    </div></>
  );
};

export default MemberCarousel;