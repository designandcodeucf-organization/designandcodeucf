import React, { useState, useEffect } from 'react';
import { data } from '../officerData.js';
import 'react-multi-carousel/lib/styles.css';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import { SocialIcon } from 'react-social-icons';



function OfficerCarousel () {

  

  const [selectedMember, setSelectedMember] = useState(null);

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    const windowWidth = window.innerWidth;
  
    let scrollLength;
    if (windowWidth < 640) {
      scrollLength = 50; //smaller screens
    } else if (windowWidth < 768) {
      scrollLength = 450; //medium screens
    } else {
      scrollLength = 900; //larger screens
    }
  
    slider.scrollLeft = slider.scrollLeft - scrollLength;
  };
  
  const slideRight = () => {
    var slider = document.getElementById('slider');
    const windowWidth = window.innerWidth;
  
    let scrollLength;
    if (windowWidth < 640) {
      scrollLength = 50; //smaller screens
    } else if (windowWidth < 768) {
      scrollLength = 450; //medium screens
    } else if (windowWidth < 1200){
      scrollLength = 500; //larger screens
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
    
    <div className='mt-48 xs:ml-24 sm:ml-36 lg:ml-72 text-4xl font-bold text-primaryLight mb-4'>
    <h1>Meet Our Officers:</h1>
    </div>
      <div className='sm:relative flex items-center'>
        <MdChevronLeft className='opacity-80 cursor-pointer hover:opacity-100 bg-primaryLightBlue rounded-full px-1 py-1 sm:mb-96 sm:mr-8 sm:ml-8 md:py-1 md:mb-96 md:px-1 md:rounded-full md:ml-8 lg:mb-96 lg:ml-48 xs:invisible sm:visible' onClick={slideLeft} size={40} />
    
        <div
          id='slider'
          className='mb:100px w-[100%] h-[500px] xs:h-[800px] xs:w-[450px] sm:w-[600px] md:w-[1250px]  xs:flex xs:flex-row xs: xs:overflow-y-scroll sm:overflow-x-scroll md:overflow-x-scroll lg:overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
      <div
        key={item.id}
        className='w-[520px] h-[450px] xs:w-[350px] xs:h-[1500px] sm:w-[250px] sm:h-[450px] md:w-[300px] lg:w-[456px] inline-block p-8 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-full'
        
        onClick={() => openPopup(item)}
      >

        <div className='rounded-t-lg relative hover:drop-shadow-[0px_10px_15px_rgba(255,204,55,0.5)] hover:shadow-2xl '>
        <img className='rounded-t-lg object-cover transition duration-300 sm:w-[250px] md:w-[350px] lg:w-[400px] z-40  ' src={item.img} alt='Officer Images' />
        <div className='h-[100px] bg-primaryLight px-4 py-4 rounded-b-lg sm:w-[186px] md:w-[236px] lg:w-[300px]  z-0'>
        <h2 className='text-xl font-bold sm:text-sm md:text-md lg:text-lg'>{item.name}</h2>
        <p className='text-gray-600 font-semibold sm:text-sm md:text-md lg:text-lg'>{item.position}</p>
        <p className='text-gray-800 text-sm'>{item.readMore}</p>
      </div>
        </div>

      </div>



    ))}
        </div>
        <MdChevronRight className='opacity-80 cursor-pointer hover:opacity-100 bg-primaryLightBlue rounded-full px-1 py-1 sm:ml-8 sm:mr-8 sm:mb-96 md:py-1 md:mb-96 md:px-1 md:rounded-full md:ml-8 lg:mb-96 lg:ml-8 xs:invisible sm:visible' onClick={slideRight} size={40} />
      </div>

      {selectedMember && (
  <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50'>
    <div className='xs:w-[350px] xs:h-[550px] sm:w-[550px] sm:h-[650px] md:w-[650px] md:h-[700px] lg:w-[700px] lg:h-[700px] bg-primaryDarkBlue opacity-95 md:py-8 md:px-16 rounded-lg'>
      <img
        src={selectedMember.img} 
        alt={selectedMember.name}
        className='w-[200px] h-[200px] xs:w-[125px] xs:h-[125px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] object-cover rounded-full mx-auto mb-4'
      />
      <h2 className='text-white text-xl font-bold text-center'>{selectedMember.name}</h2>
      <p className='text-white font-semibold text-center'>
        {selectedMember.position}
      </p>
      <p className='text-white px-24 py-4 text-center sm:text-lg xs:text-sm xs:px-2'>{selectedMember.description}</p>
      <p className='text-white px-24 py-4 text-center sm:text-lg xs:text-sm xs:px-2'>{selectedMember.socials}</p>
      <div className='flex justify-center px-8'>
        {selectedMember.icons.map((icon, index) => (
          <a
          key={index}
          href={icon.link}
          target="_blank"  // This attribute opens the link in a new tab
          rel="noopener noreferrer"  // Recommended for security and accessibility
          className="mr-4 text-white"
        >
          {icon.socialName}
        </a>
        ))}
      </div>
      <button
        className='mt-8 mx-auto px-4 py-2 bg-primaryLight text-black rounded hover:bg-secondaryPink block'
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