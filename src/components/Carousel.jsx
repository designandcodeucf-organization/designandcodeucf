import React, { useState, useEffect } from 'react';
import { data } from '../officerData.js';
import 'react-multi-carousel/lib/styles.css';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';


function MemberCarousel () {

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 950;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 950;
  };

  

  return (
    <>
      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-[1150px] h-[500px] overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
      <div
        key={item.name}
        className='w-[520px] inline-block p-16 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-full'
      >
        <img className='rounded-lg' src={item.img} alt='Officer Images' />
        <h2 className='text-xl font-bold'>{item.name}</h2>
        <p className='text-gray-600 font-semibold'>{item.position}</p>
        <p className='text-gray-800'>{item.description}</p>
      </div>
    ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
    </>
  );
}

export default MemberCarousel;