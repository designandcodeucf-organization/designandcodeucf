import React, { useState, useEffect } from 'react';
import { data } from '../officerData.js';
import 'react-multi-carousel/lib/styles.css';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';


function OfficerCarousel () {

  

  const [selectedMember, setSelectedMember] = useState(null);

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    const windowWidth = window.innerWidth;
  
    let scrollLength;
    if (windowWidth < 640) {
      scrollLength = 50; // Adjust this value for smaller screens
    } else if (windowWidth < 768) {
      scrollLength = 450; // Adjust this value for medium screens
    } else {
      scrollLength = 900; // Default value for larger screens
    }
  
    slider.scrollLeft = slider.scrollLeft - scrollLength;
  };
  
  const slideRight = () => {
    var slider = document.getElementById('slider');
    const windowWidth = window.innerWidth;
  
    let scrollLength;
    if (windowWidth < 640) {
      scrollLength = 50; // Adjust this value for smaller screens
    } else if (windowWidth < 768) {
      scrollLength = 450; // Adjust this value for medium screens
    } else if (windowWidth < 1200){
      scrollLength = 500; // Default value for larger screens
    } else {
      scrollLength = 900
    }
  
    slider.scrollLeft = slider.scrollLeft + scrollLength;
  };

  const openPopup = (member) => {
    setSelectedMember(member);
  };

  const closePopup = () => {
    setSelectedMember(null);
  };

  return (
    <>
    <div className='text-2xl font-bold text-primaryLight mb-4'>
    <h1>Meet Our Officers:</h1>
    </div>
      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-80 cursor-pointer hover:opacity-100 bg-primaryLightBlue rounded-full px-1 py-1 sm:mb-72 md:py-1 md:mb-60 md:px-1 md:rounded-full md:ml-4 lg:mb-36 lg:ml-8 xs:invisible sm:visible' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-[100%] h-[550px] xs:w-[450px] sm:w-[600px] md:w-[1450px] xs:flex xs:flex-row xs: xs:overflow-y-scroll sm:overflow-x-scroll md:overflow-x-scroll lg:overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
      <div
        key={item.id}
        className='w-[520px] h-[450px] xs:w-[350px] xs:h-[1500px] sm:w-[250px] sm:h-[450px] md:w-[300px] lg:w-[456px] inline-block p-8 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-full'
        
        onClick={() => openPopup(item)}
      >

        <div className='rounded-t-lg relative'>
        <img className='rounded-t-lg  transition duration-300 sm:w-[250px] md:w-[400px] lg:w-[456px] z-20 ' src={item.img} alt='Officer Images' />
        <div className='h-[100px] bg-primaryLight px-4 py-4 rounded-b-lg sm:w-[186px] md:w-[236px] lg:w-[392px] hover:drop-shadow-[0_0_2px_rgba(255,204,55,1)] hover:shadow-2xl z-30'>
        <h2 className='text-xl font-bold sm:text-sm md:text-md lg:text-lg'>{item.name}</h2>
        <p className='text-gray-600 font-semibold sm:text-sm md:text-md lg:text-lg'>{item.position}</p>
        <p className='text-gray-800 text-sm'>{item.readMore}</p>
      </div>
        </div>

      </div>



    ))}
        </div>
        <MdChevronRight className='opacity-80 cursor-pointer hover:opacity-100 bg-primaryLightBlue rounded-full px-1 py-1 sm:mb-72 md:py-1 md:mb-60 md:px-1 md:rounded-full md:ml-4 lg:mb-36 lg:ml-8 xs:invisible sm:visible' onClick={slideRight} size={40} />
      </div>

      {selectedMember && (
        <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50'>
          
          <div className='sm:w-[650px] sm:h-[600px] xs:w-[350px] xs:h-[550px] bg-primaryDarkBlue opacity-95 p-8 rounded-lg'>
          <img
        src={selectedMember.img} 
        alt={selectedMember.name} //alt attribute for accessibility
        className='w-[200px] h-[200px] object-cover rounded-full mx-auto mb-4'
      />
            <h2 className='text-white text-xl font-bold text-center'>{selectedMember.name}</h2>
            <p className='text-white font-semibold text-center'>
              {selectedMember.position}
            </p>
            <p className='text-white px-24 py-4 text-center sm:text-lg xs:text-sm xs:px-2'>{selectedMember.description}</p>
            <button
              className='mt-4 mx-auto px-4 py-2 bg-primaryLight text-black rounded hover:bg-secondaryPink block'
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </>
  );
}

export default OfficerCarousel;