import { useState } from "react";
import { data } from "../officerData.js";
import "react-multi-carousel/lib/styles.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function OfficerCarousel() {
  const [selectedMember, setSelectedMember] = useState(null);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    const windowWidth = window.innerWidth;

    let scrollLength;
    if (windowWidth < 640) {
      scrollLength = 250; // smaller screens
    } else if (windowWidth < 768) {
      scrollLength = 300; // medium screens
    } else if (windowWidth < 992) {
      scrollLength = 400; // larger screens
    } else if (windowWidth < 1200) {
      scrollLength = 525; // extra-large screens
    } else if (windowWidth < 1440) {
      scrollLength = 650; // 2K screens
    } else if (windowWidth < 1650) {
      scrollLength = 725; // 2.5K screens
    } else {
      scrollLength = 750; // larger screens
    }

    slider.scrollLeft = slider.scrollLeft - scrollLength;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    const windowWidth = window.innerWidth;

    let scrollLength;
    if (windowWidth < 640) {
      scrollLength = 250; // smaller screens
    } else if (windowWidth < 768) {
      scrollLength = 300; // medium screens
    } else if (windowWidth < 992) {
      scrollLength = 400; // larger screens
    } else if (windowWidth < 1200) {
      scrollLength = 525; // extra-large screens
    } else if (windowWidth < 1440) {
      scrollLength = 650; // 2K screens
    } else if (windowWidth < 1650) {
      scrollLength = 725; // 2.5K screens
    } else {
      scrollLength = 750; // larger screens
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
      <div className=" xs:ml-[4rem] xs:mr-[4rem] sm:ml-[4rem] sm:mr-[4rem] md:ml-[8rem] md:mr-[8rem] lg:ml-[16rem] lg:mr-[16rem] xl:ml-[32rem] xl:mr-[32rem] ">
        <div className="bg-[#1B1B1B] rounded-xl flex-col ">
          <div className="mt-48 xs:text-2xl sm:text-4xl text-center font-bold text-primaryLight">
            <h2 className="text-[4.2rem] p-[2rem]">Meet Our Officers:</h2>
          </div>
          <div className="sm:relative flex items-center justify-center">
            <MdChevronLeft
              className="opacity-80 cursor-pointer hover:opacity-100 bg-primaryLightBlue rounded-full px-1 py-1 sm:mr-8 sm:ml-8 md:py-1 md:px-1 md:rounded-full xs:invisible sm:visible"
              onClick={slideLeft}
              size={40}
            />

            <div
              id="slider"
              className=" sm:h-[50rem] xs:h-[100rem] xs:w-[45rem] sm:w-[100rem] md:w-[120rem] lg:w-[90rem] xs:flex xs:flex-row sm:overflow-x-scroll md:overflow-x-scroll lg:overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {data.map((item) => (
                <div
                  key={item.id}
                  className="w-[52rem] h-[45rem] xs:w-[26rem] xs:h-[150rem] sm:w-[25rem] sm:h-[15rem] md:w-[30rem] lg:w-[35.6rem] xl:w-[33rem] inline-block p-8 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-full"
                  onClick={() => openPopup(item)}
                >
                  <div className="rounded-t-lg relative hover:drop-shadow-[0.1rem_0.1rem_15px_rgba(255,204,55,0.5)] hover:shadow-2xl ">
                    <img
                      className="rounded-t-lg object-cover transition duration-300 sm:w-[18rem] md:w-[20.5rem] lg:w-[35rem] xl:w-[40rem] z-40  "
                      src={item.img}
                      alt="Officer Images"
                    />
                    <div className="h-[10rem] bg-primaryLight px-4 py-4 rounded-b-lg sm:w-[18rem] md:w-[20.5rem] lg:w-[23.6rem] xl:w-[25rem] z-0">
                      <h2 className="text-[1.6rem] font-bold xs:text-[1.6rem] sm:text-[1.6rem] md:text-[1.6rem] lg:text-[1.6rem]">
                        {item.name}
                      </h2>
                      <p className="text-gray-600 font-semibold text-[1.6rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.6rem]">
                        {item.position}
                      </p>
                      <p className="text-gray-800 xs:text-[1.2rem] md:text-[1.4rem]">
                        {item.readMore}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <MdChevronRight
              className="opacity-80 cursor-pointer hover:opacity-100 bg-primaryLightBlue rounded-full px-1 py-1 sm:ml-8 sm:mr-8 md:py-1 md:px-1 md:rounded-full xs:invisible sm:visible"
              onClick={slideRight}
              size={40}
            />
          </div>
        </div>
      </div>
      {selectedMember && (
        <div
          className="pop-up-background fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-75"
          onClick={closePopup}
        >
          <div className="pop-up-box xs:w-[40rem] xs:h-[62.5rem] sm:w-[50rem] sm:h-[62.5rem] md:w-[55rem] md:h-[62.5rem] lg:w-[70rem] lg:h-[62.5rem] bg-primaryDarkBlue xs:py-2 xs:px-4 sm:py-8 sm:px-16 rounded-lg">
            <img
              src={selectedMember.img}
              alt={selectedMember.name}
              className="w-[20rem] h-[20rem] xs:w-[12.5rem] xs:h-[12.5rem] sm:w-[12.5rem] sm:h-[12.5rem] md:w-[15rem] md:h-[15rem] object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-white xs:text-[1.6rem] sm:text-[2.2rem] font-bold text-center">
              {selectedMember.name}
            </h2>
            <p className="text-white font-semibold xs:text-[1.4rem] lg:text-xl text-center py-2 sm:text-[1.4rem]">
              {selectedMember.position}
            </p>
            <p className="text-white font-semibold text-center xs:text-[1.4rem] sm:text-[1.4rem]">
              {selectedMember.major}
            </p>
            <p className="text-white font-semibold text-center sm:text-[1.4rem]">
              {selectedMember.minor}
            </p>
            <p className="text-white px-24 py-4 text-center xs:text-[1.4rem] xs:px-2 sm:text-[1.6rem] lg:text-[1.8rem] lg:px-16 ">
              {selectedMember.description}
            </p>
            <div></div>
            <p className="text-white px-24 py-4 text-center font-semibold sm:text-lg xs:text-sm xs:px-2"></p>

            <div className="flex justify-center px-8">
              {selectedMember.icons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.link}
                  target="_blank" // This attribute opens the link in a new tab
                  rel="noopener noreferrer" // Recommended for security and accessibility
                  className="mr-4 text-white px-4 font-extrabold text-[1.6rem] hover:bg-primaryLightBlue rounded"
                >
                  {icon.socialName}
                </a>
              ))}
            </div>

            <button
              className="text-[1.4rem] mt-8 mx-auto px-4 py-2 bg-primaryLight text-black rounded hover:bg-secondaryPink block"
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
