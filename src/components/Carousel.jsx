import React, { useState, useEffect } from 'react';
import { data } from '../officerData.js';
import 'react-multi-carousel/lib/styles.css';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import { socialIcon } from 'react-social-icons';



function OfficerCarousel () {

  

  const [selectedMember, setSelectedMember] = useState(null);

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    const windowWidth = window.innerWidth;
  
    let scrollLength;
    if (windowWidth < 640) {
      scrollLength = 50; //smaller screens
    } else if (windowWidth < 768) {
      scrollLength = 250; //medium screens
    } else if (windowWidth < 1200){
      scrollLength = 350; //larger screens
    }else if (windowWidth < 1650){
      scrollLength = 550;
    } else {
      scrollLength = 1075
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
      scrollLength = 250; //medium screens
    } else if (windowWidth < 1200){
      scrollLength = 350; //larger screens
    }else if (windowWidth < 1650){
        scrollLength = 550;
    } else {
      scrollLength = 1075
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
    <div className='xs:ml-16 xs:mr-16 sm:ml-8 sm:mr-8 md:ml-8 md:mr-8 lg:ml-16 lg:mr-16 xl:ml-16 xl:mr-16'>
<div className='bg-[#252526] rounded-lg'>
    <div className='mt-48 xs:text-2xl sm:text-4xl  py-8 text-center font-bold text-primaryLight'>
    <h1>Meet Our Officers:</h1>
    </div>
      <div className='sm:relative flex items-center justify-center'>
        
        <MdChevronLeft className='opacity-80 cursor-pointer hover:opacity-100 bg-primaryLightBlue rounded-full px-1 py-1 sm:mr-8 sm:ml-8 md:py-1 md:px-1 md:rounded-full xs:invisible sm:visible' onClick={slideLeft} size={40} />
    
        <div
          id='slider'
          className=' h-[500px] xs:h-[500px] xs:w-[450px] sm:w-[1000px] md:w-[1200px] lg:w-[900px] xs:flex xs:flex-row sm:overflow-x-scroll md:overflow-x-scroll lg:overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
      <div
        key={item.id}
        className='w-[520px] h-[450px] xs:w-[260px] xs:h-[1500px] sm:w-[250px] sm:h-[150px] md:w-[300px] lg:w-[356px] xl:w-[330px] inline-block p-8 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-full'
        onClick={() => openPopup(item)}
      >

        <div className='rounded-t-lg relative hover:drop-shadow-[0px_10px_15px_rgba(255,204,55,0.5)] hover:shadow-2xl '>
        <img className='rounded-t-lg object-cover transition duration-300 sm:w-[150px] md:w-[185px] lg:w-[350px] xl:w-[400px] z-40  ' src={item.img} alt='Officer Images' />
        <div className='h-[100px] bg-primaryLight px-4 py-4 rounded-b-lg sm:w-[150px] md:w-[185px] lg:w-[236px] xl:w-[250px] z-0'>
        <h2 className='text-xl font-bold xs:text-sm sm:text-sm md:text-md lg:text-lg'>{item.name}</h2>
        <p className='text-gray-600 font-semibold sm:text-xs md:text-md lg:text-lg'>{item.position}</p>
        <p className='text-gray-800 text-sm'>{item.readMore}</p>
      </div>
        </div>

      </div>



    ))}
        </div>
        <MdChevronRight className='opacity-80 cursor-pointer hover:opacity-100 bg-primaryLightBlue rounded-full px-1 py-1 sm:ml-8 sm:mr-8 md:py-1 md:px-1 md:rounded-full xs:invisible sm:visible' onClick={slideRight} size={40} />
      </div>
</div>
</div>      
{selectedMember && (
  <div className='pop-up-background fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-75' onClick={closePopup}>
    

    <div className='pop-up-box xs:w-[400px] xs:h-[625px] sm:w-[500px] sm:h-[625px] md:w-[550px] md:h-[625px] lg:w-[700px] lg:h-[625px] bg-primaryDarkBlue xs:py-2 xs:px-4 sm:py-8 sm:px-16 rounded-lg'  >
      <img
        src={selectedMember.img} 
        alt={selectedMember.name}
        className='w-[200px] h-[200px] xs:w-[125px] xs:h-[125px] sm:w-[125px] sm:h-[125px] md:w-[150px] md:h-[150px] object-cover rounded-full mx-auto mb-4'
      />
      <h2 className='text-white sm:text-[22px] font-bold text-center'>{selectedMember.name}</h2>
      <p className='text-white font-semibold lg:text-xl text-center py-2'>
        {selectedMember.position}
      </p>
      <p className='text-white font-semibold text-center sm:text-[14px]'>
        {selectedMember.major}
      </p>
      <p className='text-white font-semibold text-center sm:text-[14px]'>
        {selectedMember.minor}
      </p>
      <p className='text-white px-24 py-4 text-center xs:text-sm xs:px-2 sm:text-[16px] lg:text-[18px] lg:px-16 '>{selectedMember.description}</p>
      <div>

      </div>
      <p className='text-white px-24 py-4 text-center font-semibold sm:text-lg xs:text-sm xs:px-2'></p>
      
      <div className='flex justify-center px-8'>
        {selectedMember.icons.map((icon, index) => (
          <a
          key={index}
          href={icon.link}
          target="_blank"  // This attribute opens the link in a new tab
          rel="noopener noreferrer"  // Recommended for security and accessibility
          className="mr-4 text-white px-4 font-extrabold text-lg hover:bg-primaryLightBlue rounded"
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